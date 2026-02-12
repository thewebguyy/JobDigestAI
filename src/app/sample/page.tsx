"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowLeft, Mail, ExternalLink, Briefcase, Calendar } from "lucide-react";

export default function SampleDigestPage() {
    const sampleJobs = [
        {
            id: 1,
            title: "Senior React Engineer (Remote)",
            company: "FutureScale",
            pay: "$90/hr - $120/hr",
            score: 9.8,
            tags: ["React", "Next.js", "TypeScript"],
            description: "Building a high-performance analytics dashboard for global logistics..."
        },
        {
            id: 2,
            title: "Frontend Architect",
            company: "Nebula AI",
            pay: "$160k - $200k",
            score: 9.5,
            tags: ["Architecture", "Design Systems", "Tailwind"],
            description: "Lead our 5-person frontend team in migrating to a unified design system..."
        },
        {
            id: 3,
            title: "Full-stack Developer (T3 Stack)",
            company: "StartupLab",
            pay: "$85/hr",
            score: 9.2,
            tags: ["tRPC", "Prisma", "Next.js"],
            description: "Quick 3-month contract to ship the MVP of a new fintech protocol..."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8">
            <header className="w-full max-w-4xl flex justify-between items-center mb-12">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Zap className="h-6 w-6 text-primary fill-primary" />
                    <span>JobDigest AI</span>
                </div>
                <div className="w-24 md:block hidden" /> {/* spacer */}
            </header>

            <main className="w-full max-w-2xl space-y-8">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-1">
                        SAMPLE DIGEST
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight">This is what your inbox will look like.</h1>
                    <p className="text-slate-500 text-lg">
                        Every day at 8:00 AM, we deliver the top 10 jobs that match your skills.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/20 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl">Your Daily JobDigest</h2>
                                <p className="text-slate-400 text-sm">Thursday, Feb 12, 2024 • 3 Top Matches</p>
                            </div>
                        </div>
                        <Badge className="bg-green-500">3 NEW GIGS</Badge>
                    </div>

                    <div className="p-6 space-y-6">
                        {sampleJobs.map((job) => (
                            <div key={job.id} className="group border-b last:border-0 pb-6 last:pb-0">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                                            <Badge variant="outline" className="text-primary font-bold">{job.score}/10</Badge>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.company}</span>
                                            <span className="font-medium text-slate-900">{job.pay}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 line-clamp-2 max-w-lg italic">
                                            "{job.description}"
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Button size="sm" className="gap-2 whitespace-nowrap">
                                        View & Apply <ExternalLink className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 p-6 text-center">
                        <p className="text-sm text-slate-500 mb-4">
                            You're seeing a static sample. Start your trial to get real-time matches.
                        </p>
                        <Link href="/onboarding">
                            <Button size="lg" className="px-8 shadow-xl shadow-primary/20">
                                Get Your First Digest Free
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center gap-8 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Daily Updates</span>
                    <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> AI Matching</span>
                    <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> Inbox First</span>
                </div>
            </main>

            <footer className="mt-24 py-8 border-t w-full max-w-4xl text-center text-sm text-slate-400">
                © 2024 JobDigest AI. Built for the modern freelancer.
            </footer>
        </div>
    );
}
