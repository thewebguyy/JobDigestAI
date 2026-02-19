import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowRight, ExternalLink, Briefcase } from "lucide-react";

const previewGigs = [
  {
    id: 1,
    title: "Principal Frontend Engineer",
    company: "Anonymized Series B",
    pay: "$110/hr",
    tier: "Strong Match",
    score: "96%",
    desc: "Leading core UI architecture for a high-growth data visualization platform."
  },
  { id: 2, title: "Senior React Developer", company: "Fintech Startup", pay: "$165k", tier: "Strong Match", score: "92%" },
  { id: 3, title: "Product UI Architect", company: "Healthcare AI", pay: "$90/hr", tier: "Good Match", score: "88%" },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-6 h-20 flex items-center border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center gap-2" href="/">
          <Zap className="h-5 w-5 text-primary fill-primary" />
          <span className="font-bold text-lg tracking-tight uppercase">JobDigest AI</span>
        </Link>
        <nav className="ml-auto flex gap-8 items-center">
          <Link className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="/login">
            Log in
          </Link>
          <Link href="/onboarding">
            <Button size="sm" className="font-bold uppercase tracking-widest px-6">
              Start Trial
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full pt-16 pb-24 md:pt-24 md:pb-40 px-6">
          <div className="container max-w-4xl mx-auto flex flex-col items-center">

            {/* Live Preview - The Output Sells the Product */}
            <div className="relative w-full max-w-2xl mb-16">
              <div className="absolute -inset-4 bg-primary/5 rounded-sm -rotate-1 hidden lg:block" />
              <Card className="relative border-2 border-primary/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden bg-white rounded-sm">
                <div className="bg-primary text-primary-foreground p-8 flex justify-between items-center border-b border-white/10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 italic">Intelligence Briefing</p>
                    <h2 className="font-black text-2xl uppercase tracking-tighter">Thursday, Feb 19</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 italic">Analysis Result</p>
                    <p className="font-mono text-sm font-black">3 HIGH CONFIDENCE SIGNALS</p>
                  </div>
                </div>
                <div className="p-0">
                  {previewGigs.map((gig, idx) => (
                    <div
                      key={gig.id}
                      className={`p-8 md:p-10 border-b last:border-0 hover:bg-primary/[0.02] transition-colors ${idx === 0 ? 'bg-primary/[0.01]' : ''}`}
                    >
                      <div className="flex justify-between items-start gap-8">
                        <div className="space-y-4 flex-1">
                          <div className="space-y-1">
                            <h3 className={`font-black uppercase tracking-tight ${idx === 0 ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                              {gig.title}
                            </h3>
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                              <span className="flex items-center gap-1.5"><Briefcase className="h-3 w-3" /> {gig.company}</span>
                              <span>•</span>
                              <span className="text-foreground">{gig.pay}</span>
                            </div>
                          </div>

                          {idx === 0 && gig.desc && (
                            <p className="text-muted-foreground text-sm font-medium italic leading-relaxed border-l-2 border-primary/10 pl-4">
                              "{gig.desc}"
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="font-mono text-xs font-black bg-primary text-primary-foreground px-3 py-1 rounded-sm">
                            {gig.score}
                          </span>
                          <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest opacity-70">
                            {gig.tier}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-6 bg-muted/20 text-center">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">
                      Deployment complete • 14 total matches
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Headline - Secondary */}
            <div className="text-center space-y-10 max-w-2xl">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Mission Critical</p>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-muted-foreground/40">
                  High-Signal Leverage for <br />
                  Modern Solo Engineers.
                </h1>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto italic">
                Zero noise. No manual hunting. Every morning, your top-ranked matches from 50+ sources arrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/onboarding">
                  <Button size="lg" className="px-12 h-16 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20">
                    Get Your First Digest
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Stop playing the matching game.</h2>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed font-medium">
              We replace hours of tab-switching with a single ranked list.
              Our engine weighs your specific skills, target rate, and niche
              against thousands of data points to ensure you only see what matters.
            </p>
            <div className="pt-8 flex justify-center items-center gap-12 grayscale opacity-50 overflow-hidden whitespace-nowrap">
              <span className="font-black text-2xl tracking-tighter">GREENHOUSE</span>
              <span className="font-black text-2xl tracking-tighter">LEVER</span>
              <span className="font-black text-2xl tracking-tighter">UPWORK</span>
              <span className="font-black text-2xl tracking-tighter">ASHBY</span>
              <span className="font-black text-2xl tracking-tighter">LINKEDIN</span>
            </div>
          </div>
        </section>

        {/* Pricing Section (Condensed) */}
        <section className="w-full py-24 px-6 border-t border-primary/10">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight uppercase">Professional Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join 500+ freelancers receiving high-signal leads every morning.
                  7-day free trial, then $19/mo.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/onboarding">
                  <Button className="w-full h-14 font-bold uppercase tracking-widest text-base shadow-xl shadow-primary/20">
                    Claim Your First Digest <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-[10px] text-center font-bold text-muted-foreground uppercase tracking-widest">
                  Cancel anytime • Secure via Stripe
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 px-6 border-t bg-muted/20">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary fill-primary" />
            <span className="font-bold text-sm tracking-tight uppercase">JobDigest AI</span>
          </div>
          <p className="text-xs font-medium text-muted-foreground">© 2024 JobDigest AI. High Signal Intelligence for Freelancers.</p>
          <nav className="flex gap-8">
            <Link className="text-[10px] font-bold uppercase tracking-widest hover:underline" href="#">Terms</Link>
            <Link className="text-[10px] font-bold uppercase tracking-widest hover:underline" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

