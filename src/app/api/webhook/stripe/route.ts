import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeSecretKey || !webhookSecret) {
        console.error("Missing Stripe environment variables");
        return new NextResponse("Configuration Error", { status: 500 });
    }

    const stripe = new Stripe(stripeSecretKey, {
        apiVersion: "2023-10-16" as any,
    });

    const body = await req.text();
    const signature = headers().get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        );

        const userId = session.metadata?.userId;
        const planId = session.metadata?.planId;

        if (userId) {
            await supabase
                .from("users")
                .update({ subscription_status: planId || "basic" })
                .eq("id", userId);
        }
    }

    if (event.type === "customer.subscription.deleted") {
        const subscription = event.data.object as Stripe.Subscription;
        const { data: userData } = await supabase
            .from("users")
            .select("id")
            .eq("stripe_customer_id", subscription.customer as string)
            .single();

        if (userData) {
            await supabase
                .from("users")
                .update({ subscription_status: "canceled" })
                .eq("id", userData.id);
        }
    }

    return new NextResponse(null, { status: 200 });
}
