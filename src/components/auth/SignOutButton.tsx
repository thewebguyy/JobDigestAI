"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <Button
            variant="ghost"
            onClick={handleSignOut}
            className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100 mt-auto border-t border-primary/5 rounded-none"
        >
            <LogOut className="h-4 w-4" /> Sign Out
        </Button>
    );
}
