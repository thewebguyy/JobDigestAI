import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Mail, Rocket, Target, BarChart } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center justify-center gap-2" href="#">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <Zap className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl tracking-tight">JobDigest AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/onboarding">
            <Button size="sm" className="shadow-lg shadow-primary/20">Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="px-3 py-1 mb-4" variant="secondary">
                  Now in Beta — Join 500+ Freelancers
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                  Stop Hunting. <br /> Start Landing.
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-2xl/relaxed mt-4">
                  JobDigest AI scans thousands of job boards daily to deliver your top 10 matching gigs—straight to your inbox.
                  Zero noise, just opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/onboarding">
                  <Button size="lg" className="px-8 h-12 text-base shadow-xl shadow-primary/20">
                    Get Your First Digest Free
                  </Button>
                </Link>
                <Link href="/sample">
                  <Button size="lg" variant="outline" className="px-8 h-12 text-base">
                    View Sample Digest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engineered for Solo Gigs</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We built the tool we needed. No more sorting through irrelevant LinkedIn posts or Upwork spam.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-none bg-slate-50/50 shadow-none hover:bg-slate-100/50 transition-colors">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Hyper-Personalized</CardTitle>
                </CardHeader>
                <CardContent>
                  Defines your skills, pay threshold, and niche. Our AI ensures every job matches your DNA.
                </CardContent>
              </Card>
              <Card className="border-none bg-slate-50/50 shadow-none hover:bg-slate-100/50 transition-colors">
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Daily Email Digest</CardTitle>
                </CardHeader>
                <CardContent>
                  Get a curated list of the top 10-20 jobs every morning. Apply before the crowd.
                </CardContent>
              </Card>
              <Card className="border-none bg-slate-50/50 shadow-none hover:bg-slate-100/50 transition-colors">
                <CardHeader>
                  <BarChart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Market Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  See salary trends and demand for your specific skills across 50+ job sources.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed">
                  Choose the plan that fits your freelance hustle.
                </p>
              </div>
            </div>
            <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-12 lg:grid-cols-2">
              <Card className="relative overflow-hidden border-2">
                <CardHeader className="text-center p-8 pb-0">
                  <CardTitle className="text-2xl">Basic Hunter</CardTitle>
                  <CardDescription className="text-lg">Perfect for solo pros</CardDescription>
                  <div className="mt-4 text-5xl font-bold">$19<span className="text-xl font-normal text-slate-500">/mo</span></div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Daily Email Digest</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> 10 Top Job Matches</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> AI-Powered Ranking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Standard Email Support</li>
                  </ul>
                  <Button className="w-full h-12 text-base">Start 7-Day Free Trial</Button>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-2 border-primary">
                <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1">MOST POPULAR</div>
                <CardHeader className="text-center p-8 pb-0">
                  <CardTitle className="text-2xl">Agency Pro</CardTitle>
                  <CardDescription className="text-lg">For agencies & scouts</CardDescription>
                  <div className="mt-4 text-5xl font-bold">$49<span className="text-xl font-normal text-slate-500">/mo</span></div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> All Basic Features</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> 50 Top Job Matches</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Full API Access</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Priority Support</li>
                  </ul>
                  <Button className="w-full h-12 text-base shadow-xl shadow-primary/20">Go Premium</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4">
          <p className="text-sm text-slate-500">© 2024 JobDigest AI. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
