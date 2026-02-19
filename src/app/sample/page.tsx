"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowLeft, Mail, ExternalLink, Briefcase } from "lucide-react";

export default function SampleDigestPage() {
    const sampleJobs = [
        {
            id: 1,
            title: "Senior React Engineer & Team Lead",
            company: "FutureScale Intelligence",
            pay: "$115/hr",
            tier: "Strong Match",
            score: "98%",
            tags: ["React", "Architecture", "TypeScript"],
            description: "Leading the core engineering team through a platform-wide migration to a unified event-driven architecture."
        },
        {
            id: 2,
            title: "Frontend Architect",
            company: "Nebula AI",
            pay: "$180k",
            tier: "Strong Match",
            score: "94%",
            tags: ["Engineering", "Design Systems", "WebPerf"],
            description: "Directing the design system strategy for a suite of generative AI tools. Focus on high-throughput data visualization."
        },
        {
            id: 3,
            title: "Principal UI Engineer",
            company: "StartupLab",
            pay: "$95/hr",
            tier: "Good Match",
            score: "88%",
            tags: ["FullStack", "Next.js", "Lead"],
            description: "Critical 4-month role to stabilize the MVP and prepare for Series A fundraising rounds."
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col items-center p-6 md:p-12">
            <header className="w-full max-w-4xl flex justify-between items-center mb-16">
                <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="h-3 w-3" /> Back to Base
                </Link>
                <div className="flex items-center gap-2 font-black text-sm tracking-widest uppercase">
                    <Zap className="h-4 w-4 text-primary fill-primary" />
                    <span>JobDigest AI</span>
                </div>
                <div className="w-24 md:block hidden" />
            </header>

            <main className="w-full max-w-2xl mx-auto space-y-12">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Intelligence Output</span>
                    <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
                        Proof of Signal.
                    </h1>
                </div>

                {/* Email Preview Chrome Mockup */}
                <div className="w-full bg-white border border-primary/10 rounded-sm shadow-2xl overflow-hidden">
                    {/* Browser/Email Header */}
                    <div className="bg-muted/30 border-b border-primary/10 px-6 py-3 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                        </div>
                        <div className="flex-1 max-w-sm mx-auto bg-white/50 border border-primary/5 rounded-sm px-3 py-1 flex items-center justify-center">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground truncate">
                                Subject: Daily Intelligence Briefing · Feb 19
                            </p>
                        </div>
                        <div className="w-10" />
                    </div>

                    {/* Email Content */}
                    <div className="bg-white">
                        {/* Email Navigation/Branding */}
                        <div className="p-8 border-b border-primary/5 flex justify-between items-end">
                            <div className="space-y-1">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary italic">Secure Deployment</p>
                                <p className="font-mono text-sm font-black">JobDigest AI Engine</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Report Date</p>
                                <p className="font-mono text-xs font-black">2024-02-19_08:00_PST</p>
                            </div>
                        </div>

                        {/* Email Body */}
                        <div className="p-0">
                            <div className="p-8 md:p-10 bg-primary/5 border-b border-primary/5">
                                <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">High Confidence Intel</h2>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest italic">3 matches found above your 90% threshold</p>
                            </div>

                            {sampleJobs.map((job, idx) => (
                                <div key={job.id} className="p-8 md:p-10 border-b border-primary/5 last:border-0">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <h3 className="font-black uppercase tracking-tight text-xl">
                                                    {job.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                    <span className="flex items-center gap-1.5"><Briefcase className="h-3 w-3" /> {job.company}</span>
                                                    <span>•</span>
                                                    <span className="text-foreground">{job.pay}</span>
                                                </div>
                                            </div>
                                            <div className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-black rounded-sm">
                                                {job.score}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm font-medium italic leading-relaxed border-l-2 border-primary/10 pl-4">
                                            "{job.description}"
                                        </p>

                                        <div className="flex justify-between items-center pt-2">
                                            <div className="flex gap-2">
                                                {job.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[8px] font-black uppercase tracking-[0.2em] text-primary/60 border border-primary/10 px-2 py-0.5 rounded-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Button variant="link" className="p-0 h-auto font-black text-[9px] uppercase tracking-widest underline underline-offset-4 decoration-primary/20">
                                                Initialize Review <ExternalLink className="ml-2 h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Email Footer */}
                        <div className="p-12 bg-muted/20 text-center border-t border-primary/10">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-8">
                                End of Transmission
                            </p>
                            <Link href="/onboarding">
                                <Button className="h-14 px-12 font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20">
                                    Claim Access Key
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30">
                        Zero Spam • Multi-Network Scrape • AI Filtered
                    </p>
                </div>
            </main>
        </div>
    );
}

