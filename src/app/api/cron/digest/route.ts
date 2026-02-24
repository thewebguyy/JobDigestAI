import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { ingestJobsIntoCache } from "@/lib/job-fetcher";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Check authorization (Vercel Cron provides a secret)
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        // 1. Ingest new jobs into the cache first
        await ingestJobsIntoCache(supabase);

        // 2. Fetch all active users
        const { data: users, error: userError } = await supabase
            .from("profiles")
            .select(`
        id,
        email,
        subscription_status,
        user_preferences (
          skills,
          min_pay,
          niches,
          remote_only
        )
      `)
            .neq("subscription_status", "canceled");

        if (userError) throw userError;

        // 3. Fetch new jobs from cache
        const { data: newJobs, error: jobError } = await supabase
            .from("job_cache")
            .select("*")
            .order("fetched_at", { ascending: false })
            .limit(100);

        if (jobError) throw jobError;

        // 3. Simple matching logic
        for (const user of users) {
            const prefs = user.user_preferences as any;
            if (!prefs) continue;

            const matches = newJobs
                .map((job) => {
                    let score = 0;

                    // Keyword match
                    const jobTitle = job.job_title.toLowerCase();
                    const jobDesc = job.description.toLowerCase();
                    const matchCount = prefs.skills.filter((skill: string) =>
                        jobTitle.includes(skill.toLowerCase()) || jobDesc.includes(skill.toLowerCase())
                    ).length;

                    score += (matchCount / prefs.skills.length) * 0.7;

                    // Pay factor (if available) - simplified
                    if (job.pay_range) {
                        score += 0.2; // Assume it meets threshold for now or parse pay_range
                    }

                    // Freshness
                    score += 0.1;

                    return { ...job, score };
                })
                .filter(job => job.score > 0.3)
                .sort((a, b) => b.score - a.score)
                .slice(0, 10);

            if (matches.length > 0) {
                // 4. Send Email Digest
                await resend.emails.send({
                    from: "JobDigest AI <digests@jobdigestai.com>",
                    to: user.email,
                    subject: `Your Daily Job Digest: ${matches.length} matches found!`,
                    html: `
            <h1>JobDigest AI</h1>
            <p>Hi there! Here are your top job matches for today:</p>
            <ul>
              ${matches.map(m => `
                <li>
                  <strong>${m.job_title}</strong> at ${m.company} <br/>
                  Score: ${Math.round(m.score * 10)}/10 | Pay: ${m.pay_range || 'Contact recruiter'} <br/>
                  <a href="${m.url}">View Job</a>
                </li>
              `).join('')}
            </ul>
            <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">View all matches in your dashboard</a></p>
          `,
                });

                // 5. Save matches to DB for history
                const matchData = matches.map(m => ({
                    user_id: user.id,
                    job_id: m.id,
                }));

                await supabase.from("user_job_matches").insert(matchData);
            }
        }

        return NextResponse.json({ success: true, processed: users.length });
    } catch (error: any) {
        console.error("Cron Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
