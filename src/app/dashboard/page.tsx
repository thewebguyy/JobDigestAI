import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Zap,
    Settings,
    History,
    ExternalLink,
    TrendingUp,
    Users,
    ArrowUpRight,
    Clock
} from "lucide-react";

export default function DashboardPage() {
    // Mock data for demonstration
    const recentGigs = [
        { id: 1, title: "Senior React Developer", company: "SkyNet Systems", pay: "$85/hr", score: 9.8, date: "2h ago" },
        { id: 2, title: "FullStack Next.js Engineer", company: "Nebula AI", pay: "$120k - $160k", score: 9.2, date: "5h ago" },
        { id: 3, title: "Front-end Architect", company: "GrowthLoop", pay: "$95/hr", score: 8.9, date: "Yesterday" },
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
                    <Button variant="secondary" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard"><TrendingUp className="h-4 w-4" /> Overview</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Preferences</Link>
                    </Button>
                </nav>
                <div className="p-4 border-t">
                    <Card className="bg-primary text-primary-foreground border-none">
                        <CardHeader className="p-4 pb-0">
                            <CardTitle className="text-sm">Trial Ends in 5 days</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <Button size="sm" variant="secondary" className="w-full text-xs">Upgrade Now</Button>
                        </CardContent>
                    </Card>
                </div>
            </aside>

            <main className="flex-1 p-4 md:p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Good morning, Alex</h1>
                        <p className="text-slate-500">Here's what our AI found for you today.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="md:hidden" asChild>
                            <Link href="/dashboard/settings"><Settings className="h-4 w-4" /></Link>
                        </Button>
                        <Button className="hidden md:flex gap-2" asChild>
                            <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Edit Preferences</Link>
                        </Button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Total Matches</CardTitle>
                            <Users className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">124</div>
                            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-3 w-3" /> +12% from last week
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Top Gig Score</CardTitle>
                            <Zap className="h-4 w-4 text-yellow-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">9.8/10</div>
                            <p className="text-xs text-slate-500 mt-1">
                                Perfect match for "React" & "Next.js"
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Savings</CardTitle>
                            <Clock className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4.5 hrs</div>
                            <p className="text-xs text-slate-500 mt-1">
                                Estimated time saved this week
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="todays-matches" className="space-y-4">
                    <TabsList className="bg-transparent border-b rounded-none h-auto p-0 gap-6">
                        <TabsTrigger value="todays-matches" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-2 px-0">
                            Today's Matches
                        </TabsTrigger>
                        <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-2 px-0">
                            Saved Gigs
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="todays-matches" className="space-y-4">
                        {recentGigs.map((gig) => (
                            <Card key={gig.id} className="group hover:border-primary/50 transition-all border-none bg-white shadow-sm overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row p-6 items-start md:items-center gap-4">
                                        <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-primary/5 transition-colors">
                                            <Briefcase className="h-6 w-6 text-slate-600 group-hover:text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-lg">{gig.title}</h3>
                                                <Badge variant="outline" className="text-[10px] font-bold border-green-200 bg-green-50 text-green-700">NEW</Badge>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                                <span>{gig.company}</span>
                                                <span>•</span>
                                                <span className="font-medium text-slate-700">{gig.pay}</span>
                                                <span>•</span>
                                                <span>{gig.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                                            <div className="flex items-center gap-2 mr-auto md:mr-0">
                                                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">Match Score</span>
                                                <span className="text-xl font-bold text-primary">{gig.score}</span>
                                            </div>
                                            <Button size="sm" className="gap-2">
                                                View Details <ExternalLink className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Button variant="ghost" className="w-full border-2 border-dashed h-24 hover:bg-slate-50 hover:border-slate-300">
                            No more matches for today. Next digest arriving in 14 hours.
                        </Button>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
