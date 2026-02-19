import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Zap,
    Settings,
    History,
    ExternalLink,
    TrendingUp,
    Briefcase,
    ChevronRight
} from "lucide-react";

export default function DashboardPage() {
    // Mock data for demonstration
    const recentGigs = [
        {
            id: 1,
            title: "Senior React Developer & Optimization Lead",
            company: "SkyNet Systems",
            pay: "$115/hr",
            tier: "Strong Match",
            score: "98%",
            date: "2h ago",
            desc: "Lead the frontend performance audit and implement high-throughput dashboard features for an AI-driven logistics platform. Requires deep knowledge of Next.js 14 and edge functions."
        },
        { id: 2, title: "FullStack Next.js Engineer", company: "Nebula AI", pay: "$120k", tier: "Strong Match", score: "92%", date: "5h ago" },
        { id: 3, title: "Front-end Architect", company: "GrowthLoop", pay: "$95/hr", tier: "Good Match", score: "89%", date: "Yesterday" },
        { id: 4, title: "Product UI Engineer", company: "Stealth Startup", pay: "$140k", tier: "Good Match", score: "84%", date: "Yesterday" },
        { id: 5, title: "React Component Library Lead", company: "DesignForce", pay: "$80/hr", tier: "Worth Reviewing", score: "78%", date: "2 days ago" },
        { id: 6, title: "Marketplace UI Specialist", company: "CodeLabs", pay: "$110k", tier: "Worth Reviewing", score: "74%", date: "2 days ago" },
        { id: 7, title: "Junior React Dev", company: "FastTrack", pay: "$65/hr", tier: "Potential Signal", score: "71%", date: "3 days ago" },
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
                    <Button variant="secondary" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6" asChild>
                        <Link href="/dashboard"><TrendingUp className="h-4 w-4" /> Reports</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Settings</Link>
                    </Button>
                </nav>
            </aside>

            <main className="flex-1 md:max-w-4xl mx-auto px-6 py-12 md:py-20">
                <header className="mb-16 border-b pb-8 border-primary/10">
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-muted-foreground italic">
                            Thursday, Feb 19 · 14 matches found · 3 above your rate floor · Top match: Senior React Developer, $115/hr
                        </p>
                        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">Intelligence Briefing</h1>
                    </div>
                </header>

                <div className="space-y-6">
                    {recentGigs.map((gig, idx) => {
                        const isTop = idx === 0;
                        const isCondensed = idx >= 5;

                        return (
                            <Card
                                key={gig.id}
                                className={`group border-x-0 md:border-x border-y shadow-none hover:shadow-2xl hover:border-primary/30 transition-all duration-300 bg-card overflow-hidden ${isTop ? 'md:ring-2 md:ring-primary/20 md:scale-[1.02] mb-12' :
                                        isCondensed ? 'opacity-70 hover:opacity-100 scale-95 md:scale-100' : 'mb-4'
                                    }`}
                            >
                                <CardContent className="p-0">
                                    <div className={`flex flex-col md:flex-row ${isTop ? 'p-8 md:p-12' :
                                            isCondensed ? 'p-4 md:p-6' : 'p-6 md:p-8'
                                        } items-start gap-8`}>
                                        <div className="flex-1 space-y-4 w-full">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3">
                                                        <h2 className={`font-black tracking-tight uppercase ${isTop ? 'text-2xl md:text-3xl' :
                                                                isCondensed ? 'text-base' : 'text-lg md:text-xl text-foreground/90'
                                                            }`}>
                                                            {gig.title}
                                                        </h2>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                                        <span className="flex items-center gap-2"><Briefcase className="h-3 w-3" /> {gig.company}</span>
                                                        {!isCondensed && <span>•</span>}
                                                        {!isCondensed && <span className="text-foreground/80">{gig.pay}</span>}
                                                    </div>
                                                </div>

                                                <div className={`flex ${isCondensed ? 'flex-row' : 'flex-col'} items-start md:items-end gap-1 md:gap-2`}>
                                                    <span className={`font-mono font-bold bg-primary/10 text-primary px-3 py-1 rounded-sm border border-primary/20 ${isCondensed ? 'text-[9px]' : 'text-xs'}`}>
                                                        {gig.score} MATCH
                                                    </span>
                                                    {!isCondensed && (
                                                        <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                                                            {gig.tier}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {isTop && gig.desc && (
                                                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl font-medium pt-2">
                                                    {gig.desc}
                                                </p>
                                            )}

                                            <div className={`flex items-center justify-between ${isCondensed ? 'pt-2' : 'pt-4 border-t border-primary/5'}`}>
                                                <span className={`font-bold uppercase tracking-widest text-muted-foreground italic ${isCondensed ? 'text-[8px]' : 'text-[10px]'}`}>
                                                    Lever • {gig.date} {isCondensed && `• ${gig.pay}`}
                                                </span>
                                                <Button variant="link" className={`p-0 h-auto font-black uppercase tracking-widest gap-2 group-hover:translate-x-1 transition-transform ${isCondensed ? 'text-[9px]' : 'text-[10px]'}`}>
                                                    {isCondensed ? 'View' : 'Review Report'} <ChevronRight className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>

                                        {!isCondensed && (
                                            <div className="hidden md:flex flex-col justify-center border-l border-primary/5 pl-8 self-stretch">
                                                <Button size={isTop ? "lg" : "sm"} className="font-black uppercase tracking-widest px-8">
                                                    {isTop ? "Claim Position" : "View"}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}


                    <div className="pt-20 pb-40 text-center space-y-6">
                        <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-full mb-4">
                            <History className="h-8 w-8 text-primary opacity-30" />
                        </div>
                        <h3 className="font-black uppercase tracking-widest text-sm text-muted-foreground">End of Daily Report</h3>
                        <p className="text-xs font-medium text-muted-foreground max-w-xs mx-auto leading-relaxed">
                            We analyzed 4,281 listings to find these 5 matches for you.
                            Next report arrives in 14 hours.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

