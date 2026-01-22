import { ArrowRight, Play, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NicheData } from "../data/nicheData";

interface HeroSectionProps {
  niche: NicheData;
}

const HeroSection = ({ niche }: HeroSectionProps) => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Light Grey Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-narrow relative z-10 hero-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-foreground">
            {/* Badge */}
            <div className="badge-gold mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Ready-Made Video Templates for {niche.nichePlural}</span>
            </div>

            {/* Main Headline */}
            <h1
              className="h1 mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Get More {niche.customerType} with{" "}
              <span className="text-primary italic">
                Professional Whiteboard Videos
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="subheading mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Ready-made whiteboard video templates personalized with your{" "}
              <span className="text-foreground font-medium">
                Logo, Brand Name, Email & CTA
              </span>
              .
            </p>
            <p
              className="text-lg text-muted-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              Stop {niche.mainProblem}. Start getting results in as little as 48
              hours.
            </p>

            {/* Tagline */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Zap className="w-5 h-5 text-primary" />
              <p className="text-lg text-primary font-medium italic">
                "Smarter Decisions. Stronger Funnels. Predictable Growth."
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild variant="gold" size="xl">
                <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  Start Your Growth Journey
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl">
                <Play className="w-5 h-5" />
                Explore Video Templates
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              className="flex items-center gap-6 mt-8 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                Trusted by 500+ {niche.nichePlural}
              </span>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div>
                <div className="text-3xl font-bold text-primary">78%</div>
                <div className="text-sm text-muted-foreground">
                  Higher Engagement
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3-5x</div>
                <div className="text-sm text-muted-foreground">ROI Average</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">48 Hrs</div>
                <div className="text-sm text-muted-foreground">
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Video Card */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
                <div className="video-placeholder">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-xl shadow-primary/30">
                      <Play
                        className="w-8 h-8 text-primary-foreground ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Sample: {niche.videoTopics.commercial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    See how our templates work for {niche.nichePlural}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                      + Your Logo
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                      + Brand Name
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                      + CTA
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-lg hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">
                      Videos Created
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl border border-border shadow-lg hidden lg:block animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">10k+</div>
                    <div className="text-xs text-muted-foreground">
                      Leads Generated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
