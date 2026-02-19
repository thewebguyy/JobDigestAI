"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Zap,
    Settings,
    History,
    TrendingUp,
    X,
    Save,
    Bell,
    CreditCard,
    User,
    Shield,
    LogOut
} from "lucide-react";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default function SettingsPage() {
    const [skills, setSkills] = useState<string[]>(["React", "Next.js", "TypeScript", "Node.js"]);
    const [skillInput, setSkillInput] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const addSkill = () => {
        if (skillInput && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput("");
        }
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1000);
    };

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar - Desktop (Reused from dashboard) */}
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
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6 opacity-50 hover:opacity-100" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="secondary" className="w-full justify-start gap-4 font-bold text-[10px] uppercase tracking-widest px-4 py-6" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Settings</Link>
                    </Button>
                    <SignOutButton />
                </nav>
            </aside>

            <main className="flex-1 md:max-w-4xl mx-auto px-6 py-12 md:py-20">
                <header className="mb-16 border-b pb-8 border-primary/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Configuration</p>
                    <h1 className="text-4xl font-black tracking-tighter uppercase">Intelligence Tuning</h1>
                </header>

                <div className="space-y-12">
                    {/* Skills & Targeting */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <User className="h-5 w-5 text-primary" />
                            <h2 className="text-xl font-black uppercase tracking-tight">Signal DNA</h2>
                        </div>

                        <Card className="border-2 border-primary/10 shadow-none bg-card">
                            <CardContent className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <Label htmlFor="skill" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Core Competencies</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="skill"
                                            value={skillInput}
                                            onChange={(e) => setSkillInput(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                                            placeholder="e.g. Distributed Systems, Rust..."
                                            className="bg-background border-primary/10 h-12"
                                        />
                                        <Button type="button" onClick={addSkill} className="px-6 font-bold uppercase tracking-widest">Add</Button>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {skills.map((skill) => (
                                            <div key={skill} className="flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-sm">
                                                {skill}
                                                <X className="h-3 w-3 cursor-pointer hover:text-white/70 transition-colors" onClick={() => removeSkill(skill)} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-4">
                                        <Label htmlFor="pay" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Floor Rate (USD/hr)</Label>
                                        <Input id="pay" type="number" defaultValue="80" className="bg-background border-primary/10 h-12 font-mono" />
                                    </div>
                                    <div className="space-y-4">
                                        <Label htmlFor="niche" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Target Niche</Label>
                                        <Input id="niche" placeholder="e.g. Fintech, Healthcare" defaultValue="AI Infrastructure" className="bg-background border-primary/10 h-12" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Notification Settings */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-primary" />
                            <h2 className="text-xl font-black uppercase tracking-tight">Deployment</h2>
                        </div>

                        <Card className="border-2 border-primary/10 shadow-none bg-card">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <Label className="text-sm font-black uppercase tracking-tight">Daily Morning Digest</Label>
                                        <p className="text-xs text-muted-foreground font-medium">Reports delivered at 8:00 AM daily.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                                    <div className="space-y-1">
                                        <Label className="text-sm font-black uppercase tracking-tight">High-Match Alerts</Label>
                                        <p className="text-xs text-muted-foreground font-medium">Instant alerts for scores {'>'} 95%.</p>
                                    </div>
                                    <Switch />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Subscription & Privacy */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <CreditCard className="h-5 w-5 text-primary" />
                                <h2 className="text-xl font-black uppercase tracking-tight">Protocol</h2>
                            </div>
                            <Card className="border-2 border-primary/10 shadow-none bg-primary text-primary-foreground">
                                <CardContent className="p-8 space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 italic">Current Plan</p>
                                    <p className="text-lg font-black uppercase tracking-tighter">Basic Hunter</p>
                                    <p className="text-xs opacity-80 font-medium">$19/mo • Next bill: Mar 15</p>
                                    <Button variant="secondary" className="w-full font-black uppercase tracking-widest h-11">Manage</Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Shield className="h-5 w-5 text-primary" />
                                <h2 className="text-xl font-black uppercase tracking-tight">Security</h2>
                            </div>
                            <Card className="border-2 border-primary/10 shadow-none bg-card">
                                <CardContent className="p-8 space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 italic">Intel Isolation</p>
                                    <p className="text-sm font-bold leading-relaxed">Your skill DNA is encrypted and never shared with third-party job boards.</p>
                                    <Button variant="outline" className="w-full font-black uppercase tracking-widest h-11 border-primary/20">Data Audit</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex justify-end pt-8 pb-20">
                        <Button onClick={handleSave} disabled={isSaving} className="gap-3 px-10 h-14 font-black uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all active:scale-95">
                            {isSaving ? "Syncing..." : <><Save className="h-4 w-4" /> Save Configuration</>}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

