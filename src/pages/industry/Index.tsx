import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Paintbrush,
  Bug,
  Sparkles,
  Home,
  Zap,
  Thermometer,
  Wrench,
  Target,
  Brain,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";

const niches = [
  {
    name: "Painters",
    path: "/painters",
    icon: Paintbrush,
    leads: "20-35 estimates/mo",
    avgJob: "$3,500-$5,000",
  },
  {
    name: "Pest Control",
    path: "/pest-control",
    icon: Bug,
    leads: "30-50 leads/mo",
    avgJob: "$400-$1,200/yr",
  },
  {
    name: "Carpet Cleaners",
    path: "/carpet-cleaners",
    icon: Sparkles,
    leads: "25-40 jobs/mo",
    avgJob: "$200-$350",
  },
  {
    name: "Roofers",
    path: "/roofers",
    icon: Home,
    leads: "15-30 leads/mo",
    avgJob: "$8,000-$25,000",
  },
  {
    name: "Electricians",
    path: "/electricians",
    icon: Zap,
    leads: "25-40 calls/mo",
    avgJob: "$500-$3,000",
  },
  {
    name: "HVAC",
    path: "/hvac",
    icon: Thermometer,
    leads: "40-60 leads/mo",
    avgJob: "$5,000-$15,000",
  },
  {
    name: "Plumbers",
    path: "/plumbers",
    icon: Wrench,
    leads: "30-50 calls/mo",
    avgJob: "$500-$2,000",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-glow">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="container relative z-10 px-4 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-up opacity-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Home Services Marketing Templates
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-100">
                <span className="text-foreground">
                  Complete Landing Pages for
                </span>
                <br />
                <span className="text-gradient-gold">
                  Home Service Businesses
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up opacity-0 delay-200">
                Using the NAREN Method™ Framework — Turn your ad spend into
                qualified leads predictably, without competing on price.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-up opacity-0 delay-300">
                <div className="trust-badge">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Performance-Driven</span>
                </div>
                <div className="trust-badge">
                  <Brain className="w-4 h-4 text-primary" />
                  <span>Psychology-Based</span>
                </div>
                <div className="trust-badge">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Predictable Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Niches Grid */}
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                  Choose Your{" "}
                  <span className="text-gradient-gold">Industry</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Each landing page is tailored to your specific niche with
                  proven messaging, case studies, and conversion strategies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {niches.map((niche) => {
                  const Icon = niche.icon;
                  return (
                    <Link
                      key={niche.path}
                      to={niche.path}
                      className="group card-glow rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {niche.name}
                      </h3>

                      <div className="space-y-1 mb-4">
                        <p className="text-sm text-muted-foreground">
                          <span className="text-primary font-medium">
                            {niche.leads}
                          </span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Avg Job:{" "}
                          <span className="text-foreground">
                            {niche.avgJob}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center text-primary text-sm font-medium">
                        View Template
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-muted-foreground mb-8">
                Powered by The NAREN Method™ — Created by Narender Sharma
              </p>
              <Button size="xl">
                Get Your Free NAREN Scorecard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
