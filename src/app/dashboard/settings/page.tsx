"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
    User
} from "lucide-react";

export default function SettingsPage() {
    const [skills, setSkills] = useState<string[]>(["React", "Next.js", "TypeScript", "Tailwind CSS"]);
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
        <div className="flex min-h-screen bg-slate-50/50">
            {/* Sidebar - Desktop (Reused from dashboard) */}
            <aside className="w-64 border-r bg-white hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary fill-primary" />
                    <span className="font-bold text-lg">JobDigest AI</span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard"><TrendingUp className="h-4 w-4" /> Overview</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/history"><History className="h-4 w-4" /> History</Link>
                    </Button>
                    <Button variant="secondary" className="w-full justify-start gap-3" asChild>
                        <Link href="/dashboard/settings"><Settings className="h-4 w-4" /> Preferences</Link>
                    </Button>
                </nav>
            </aside>

            <main className="flex-1 p-4 md:p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">Preferences</h1>
                    <p className="text-slate-500">Fine-tune your JobDigest AI experience.</p>
                </header>

                <div className="max-w-4xl space-y-8">
                    {/* Skills & Niche */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                <CardTitle>Skills & Targeting</CardTitle>
                            </div>
                            <CardDescription>
                                The more specific your skills, the better our AI can match you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="skill">Your Skills</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="skill"
                                        value={skillInput}
                                        onChange={(e) => setSkillInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                                        placeholder="Add a skill..."
                                    />
                                    <Button type="button" onClick={addSkill}>Add</Button>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="px-3 py-1 flex gap-2 items-center text-sm">
                                            {skill}
                                            <X className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors" onClick={() => removeSkill(skill)} />
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="pay">Min. Pay (USD/hr)</Label>
                                    <Input id="pay" type="number" defaultValue="80" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="niche">Target Niche</Label>
                                    <Input id="niche" placeholder="e.g. Fintech, Healthcare" defaultValue="SaaS, AI" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Email Settings */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Bell className="h-5 w-5 text-primary" />
                                <CardTitle>Notifications</CardTitle>
                            </div>
                            <CardDescription>
                                Control how and when you receive your digests.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Daily Email Digest</Label>
                                    <p className="text-sm text-slate-500">Receive your top jobs every morning.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t">
                                <div className="space-y-0.5">
                                    <Label>Instant Alerts (Beta)</Label>
                                    <p className="text-sm text-slate-500">Get notified immediately for high-match jobs (9.5+ score).</p>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Billing */}
                    <Card className="border-none shadow-sm bg-primary/5 border border-primary/10">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-primary" />
                                <CardTitle>Subscription</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold">Basic Hunter Plan</p>
                                    <p className="text-sm text-slate-500">$19/month • Next billing on March 15, 2024</p>
                                </div>
                                <Button variant="outline">Manage Billing</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end pt-4">
                        <Button onClick={handleSave} disabled={isSaving} className="gap-2 px-8">
                            {isSaving ? "Saving..." : <><Save className="h-4 w-4" /> Save Changes</>}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
