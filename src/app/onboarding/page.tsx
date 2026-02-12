"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Target, Briefcase, DollarSign, Globe } from "lucide-react";

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState("");
    const [minPay, setMinPay] = useState("");
    const [niche, setNiche] = useState("");

    const addSkill = () => {
        if (skillInput && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput("");
        }
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, save to Supabase here
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <div className="mb-8 flex justify-between items-center px-2">
                    <div className="flex gap-2">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`h-2 w-12 rounded-full transition-colors ${step >= s ? "bg-primary" : "bg-slate-200"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-slate-500">Step {step} of 3</span>
                </div>

                <Card className="shadow-xl border-none">
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <>
                                <CardHeader>
                                    <div className="bg-blue-100 p-2 rounded-lg w-fit mb-2 text-blue-600">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">What are your core skills?</CardTitle>
                                    <CardDescription>
                                        We'll use these keywords to scour the web for matching job opportunities.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="skill">Add Skill (e.g., Next.js, UI Design, Python)</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="skill"
                                                value={skillInput}
                                                onChange={(e) => setSkillInput(e.target.value)}
                                                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                                                placeholder="Type a skill..."
                                            />
                                            <Button type="button" onClick={addSkill}>Add</Button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="px-3 py-1 flex gap-2 items-center text-sm">
                                                {skill}
                                                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                                            </Badge>
                                        ))}
                                        {skills.length === 0 && (
                                            <p className="text-sm text-slate-400 italic">No skills added yet.</p>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button disabled={skills.length === 0} className="w-full" type="button" onClick={nextStep}>
                                        Continue
                                    </Button>
                                </CardFooter>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <CardHeader>
                                    <div className="bg-green-100 p-2 rounded-lg w-fit mb-2 text-green-600">
                                        <Briefcase className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">Preferences & Niche</CardTitle>
                                    <CardDescription>
                                        Refine your search to only see the jobs that matter to you.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="min-pay">Minimum Pay (USD/hr)</Label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                            <Input
                                                id="min-pay"
                                                type="number"
                                                className="pl-9"
                                                placeholder="e.g., 50"
                                                value={minPay}
                                                onChange={(e) => setMinPay(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="niche">Specific Niche (Optional)</Label>
                                        <Input
                                            id="niche"
                                            placeholder="e.g., Fintech, Healthcare, Web3"
                                            value={niche}
                                            onChange={(e) => setNiche(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border">
                                        <Globe className="h-5 w-5 text-slate-500" />
                                        <span className="text-sm">Remote-only jobs strictly enforced</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="gap-3">
                                    <Button variant="outline" className="flex-1" type="button" onClick={prevStep}>
                                        Back
                                    </Button>
                                    <Button className="flex-[2]" type="button" onClick={nextStep}>
                                        Continue
                                    </Button>
                                </CardFooter>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <CardHeader>
                                    <div className="bg-purple-100 p-2 rounded-lg w-fit mb-2 text-purple-600">
                                        <Rocket className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">Ready to Launch</CardTitle>
                                    <CardDescription>
                                        Create your account to start receiving your daily JobDigest.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="you@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" required />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex-col gap-4">
                                    <div className="flex gap-3 w-full">
                                        <Button variant="outline" className="flex-1" type="button" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button className="flex-[2]" type="submit">
                                            Start My 7-Day Free Trial
                                        </Button>
                                    </div>
                                    <p className="text-xs text-center text-slate-500">
                                        By joining, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </CardFooter>
                            </>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    );
}
