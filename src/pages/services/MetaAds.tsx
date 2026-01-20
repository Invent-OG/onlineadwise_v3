import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, BarChart, Target, Zap, Users } from "lucide-react";

const MetaAds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">Meta </span>
            <span className="text-gradient-gold">Ads Scale Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stop boosting posts. Start building a predictable revenue engine on
            Facebook & Instagram with our proprietary creative-first approach.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Strategy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Creative-First Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The algorithm has changed. Targeting is now broad, and your
                creative IS your targeting. We deploy rapid creative testing to
                find winning angles that resonate with your ideal buyers.
              </p>
              <ul className="space-y-3">
                {[
                  "Rapid Creative Testing (RCT)",
                  "Audience Segmentation",
                  "Direct Response Copywriting",
                  "Video & Static Image Design",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card/30 rounded-2xl border border-border/50 p-8 glow-gold-sm">
              <BarChart className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Data-Driven Decisions
              </h3>
              <p className="text-sm text-muted-foreground">
                We don't guess. Every dollar spent provides data to optimize
                your campaigns for lower CPA and higher ROAS.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
              Our 3-Step Scaling Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Architect",
                  desc: "We analyze your offer, funnel, and competitors to build a bulletproof strategy.",
                },
                {
                  icon: Zap,
                  title: "2. Launch",
                  desc: "We deploy high-converting creatives and setup robust tracking (CAPI) for accurate data.",
                },
                {
                  icon: Users,
                  title: "3. Scale",
                  desc: "We double down on winners, kill losers, and vertically scale your budget profitably.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-card/50 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
                >
                  <step.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MetaAds;
