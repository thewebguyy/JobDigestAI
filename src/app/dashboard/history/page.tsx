"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Zap,
    Settings,
    History,
    TrendingUp,
    ExternalLink,
    Search,
    Calendar,
    Briefcase
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
    const historicalGigs = [
        { id: 101, title: "Frontend Lead", company: "MetaFlow", pay: "$110/hr", score: 9.9, date: "Feb 10, 2024" },
        { id: 102, title: "Product Designer", company: "Vercel", pay: "$150k", score: 9.5, date: "Feb 9, 2024" },
        { id: 103, title: "React Developer", company: "Stripe", pay: "$95/hr", score: 9.2, date: "Feb 8, 2024" },
        { id: 104, title: "T3 Stack Expert", company: "Local startups", pay: "$80/hr", score: 8.8, date: "Feb 7, 2024" },
        { id: 105, title: "Next.js Consultant", company: "Freelance", pay: "$120/hr", score: 8.5, date: "Feb 6, 2024" },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50/50">
            {/* Sidebar - Desktop */}
            <aside className="w-64 border-r bg-white hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary fill-primary" />
                    <span className="font-bold text-lg">JobDigest AI</span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard"><TrendingUp className="h-4 w-4" /> Overview</Link>
                    </Button>
                    <Button variant="secondary" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Preferences</Link>
                    </Button>
                </nav>
            </aside>

            <main className="flex-1 p-4 md:p-8">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Digest History</h1>
                        <p className="text-slate-500">Every job we&apos;ve ever matched for you.</p>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input className="pl-9" placeholder="Search history..." />
                    </div>
                </header>

                <div className="space-y-4">
                    <div className="flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <div className="flex gap-12">
                            <span>Job Details</span>
                        </div>
                        <div className="flex gap-12 items-center">
                            <span className="hidden md:inline">Score</span>
                            <span className="w-24 text-right">Date Found</span>
                        </div>
                    </div>

                    {historicalGigs.map((gig) => (
                        <Card key={gig.id} className="border-none shadow-sm hover:bg-slate-50 transition-colors">
                            <CardContent className="p-4 md:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-2 border rounded-md shadow-sm">
                                            <Briefcase className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{gig.title}</h3>
                                            <div className="flex gap-2 text-sm text-slate-500">
                                                <span>{gig.company}</span>
                                                <span>•</span>
                                                <span className="font-medium text-slate-900">{gig.pay}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8 md:gap-12 text-sm">
                                        <div className="hidden md:flex flex-col items-center">
                                            <span className="text-xl font-bold text-primary">{gig.score}</span>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="text-slate-500 flex items-center gap-1">
                                                <Calendar className="h-3 w-3" /> {gig.date}
                                            </span>
                                            <Button variant="ghost" size="sm" className="h-8 gap-2 text-primary hover:text-primary hover:bg-primary/5">
                                                Apply <ExternalLink className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <Button variant="outline">Load Earlier Matches</Button>
                </div>
            </main>
        </div>
    );
}
