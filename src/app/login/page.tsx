"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, ArrowLeft, Github, Lock } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
                <ArrowLeft className="h-3 w-3" /> Back to Base
            </Link>

            <div className="w-full max-w-[420px] space-y-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-primary text-primary-foreground p-4 rounded-sm shadow-2xl shadow-primary/20 mb-2">
                        <Zap className="h-8 w-8 fill-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Identity Verification</p>
                        <h1 className="text-4xl font-black tracking-tighter uppercase">Resume Signal</h1>
                    </div>
                </div>

                <Card className="border-2 border-primary/10 shadow-none bg-card">
                    <form onSubmit={handleSubmit}>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-4">
                                <Button variant="outline" type="button" className="w-full h-12 gap-3 font-bold uppercase tracking-widest border-primary/10 hover:bg-primary/5">
                                    <Github className="h-4 w-4" />
                                    Access with Github
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-primary/5" />
                                </div>
                                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                                    <span className="bg-card px-4 text-muted-foreground italic">
                                        or use secure key
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Deployment Email</Label>
                                    <Input id="email" type="email" placeholder="engineer@intelligence.io" required className="bg-background border-primary/10 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" dangerouslySetInnerHTML={{ __html: 'Access Code' }} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground" />
                                        <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">
                                            Reset
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required className="bg-background border-primary/10 h-12" />
                                </div>
                            </div>

                            <Button className="w-full h-14 font-black uppercase tracking-widest shadow-2xl shadow-primary/20" type="submit" disabled={isLoading}>
                                {isLoading ? "Synchronizing..." : <><Lock className="mr-2 h-4 w-4" /> Initialize Session</>}
                            </Button>

                            <p className="text-[10px] font-bold text-center text-muted-foreground uppercase tracking-widest pt-2">
                                New operative?{" "}
                                <Link href="/onboarding" className="text-primary hover:opacity-70 transition-opacity underline decoration-primary/30 underline-offset-4">
                                    Grant Access
                                </Link>
                            </p>
                        </CardContent>
                    </form>
                </Card>

                <div className="flex justify-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="italic flex items-center gap-2"><Lock className="h-3 w-3" /> Encrypted Link</span>
                    <span className="italic">Direct Intel Only</span>
                </div>
            </div>
        </div>
    );
}

