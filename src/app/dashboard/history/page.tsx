"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Zap,
    Settings,
    History,
    TrendingUp,
    ExternalLink,
    Search,
    Calendar,
    Briefcase,
    ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
    const historicalGigs = [
        { id: 101, title: "Frontend Lead & Architect", company: "MetaFlow", pay: "$110/hr", tier: "Strong Match", score: "99%", date: "Feb 10, 2024" },
        { id: 102, title: "Product Engineering Lead", company: "Vercel", pay: "$180k", tier: "Strong Match", score: "95%", date: "Feb 9, 2024" },
        { id: 103, title: "Senior React Developer", company: "Stripe", pay: "$95/hr", tier: "Good Match", score: "92%", date: "Feb 8, 2024" },
        { id: 104, title: "Full Stack Expert", company: "Stealth Startup", pay: "$85/hr", tier: "Good Match", score: "88%", date: "Feb 7, 2024" },
        { id: 105, title: "Next.js Performance Lead", company: "GrowthLoop", pay: "$120/hr", tier: "Worth Reviewing", score: "85%", date: "Feb 6, 2024" },
    ];

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar - Desktop */}
            <aside className="w-64 border-r bg-card hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-8 pb-12 text-center border-b border-primary/5">
                    <Link href="/" className="flex items-center justify-center gap-2">
                        <Zap className="h-5 w-5 text-primary fill-primary" />
                        <span className="font-bold text-sm tracking-widest uppercase text-primary">JobDigest AI</span>
                    </Link>
                </div>
                <nav className="flex-1 px-4 py-8 space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100" asChild>
                        <Link href="/dashboard"><TrendingUp className="h-4 w-4" /> Reports</Link>
                    </Button>
                    <Button variant="secondary" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Settings</Link>
                    </Button>
                </nav>
            </aside>

            <main className="flex-1 md:max-w-4xl mx-auto px-6 py-12 md:py-20">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b pb-8 border-primary/10">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Historical Data</p>
                        <h1 className="text-4xl font-black tracking-tighter uppercase leading-tight">Match Intelligence Archive</h1>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-11 bg-card border-primary/10 h-12" placeholder="Search archive signal..." />
                    </div>
                </header>

                <div className="space-y-4">
                    <div className="flex items-center justify-between px-6 pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        <span>High-Signal Matches</span>
                        <span>Confidence & Deployment</span>
                    </div>

                    {historicalGigs.map((gig) => (
                        <Card key={gig.id} className="border-2 border-primary/5 hover:border-primary/20 transition-all shadow-none bg-card group">
                            <CardContent className="p-6 md:p-10">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                    <div className="flex items-start gap-6 flex-1">
                                        <div className="bg-primary/5 p-4 rounded-sm border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Briefcase className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg md:text-xl uppercase tracking-tight">{gig.title}</h3>
                                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                <span>{gig.company}</span>
                                                <span>•</span>
                                                <span className="text-foreground">{gig.pay}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-12 w-full md:w-auto border-t md:border-t-0 pt-6 md:pt-0 border-primary/5">
                                        <div className="flex flex-col items-start md:items-end gap-1">
                                            <span className="font-mono text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-sm border border-primary/20">
                                                {gig.score}
                                            </span>
                                            <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-70">
                                                {gig.tier}
                                            </span>
                                        </div>

                                        <div className="flex-1 md:flex-none flex flex-col items-end gap-2">
                                            <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-2 italic">
                                                <Calendar className="h-3 w-3" /> {gig.date}
                                            </span>
                                            <Button variant="ghost" size="sm" className="h-10 gap-2 font-black text-[10px] uppercase tracking-widest p-0 hover:translate-x-1 transition-transform">
                                                Review Report <ChevronRight className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 pb-40 flex justify-center">
                    <Button variant="outline" className="px-12 h-14 font-black uppercase tracking-widest border-primary/10 hover:bg-primary/5">
                        Load Archive Deployment
                    </Button>
                </div>
            </main>
        </div>
    );
}

