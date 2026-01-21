import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Brain, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  highlightedText?: string;
  subheadline: string;
  tagline?: string;
  primaryCTA: string;
  secondaryCTA: string;
  trustText: string;
  rating: string;
}

export function HeroSection({
  headline,
  highlightedText,
  subheadline,
  tagline,
  primaryCTA,
  secondaryCTA,
  trustText,
  rating,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-glow">
      {/* Floating decorative icons */}
      <Target
        className="absolute top-20 left-[10%] w-12 h-12 floating-icon"
        style={{ animationDelay: "0s" }}
      />
      <TrendingUp
        className="absolute bottom-40 left-[8%] w-10 h-10 floating-icon"
        style={{ animationDelay: "2s" }}
      />
      <Brain
        className="absolute top-32 right-[12%] w-14 h-14 floating-icon"
        style={{ animationDelay: "1s" }}
      />

      {/* Glow effect behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {tagline && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-up opacity-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {tagline}
            </div>
          )}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            <span className="text-foreground">{headline}</span>
            {highlightedText && (
              <>
                <br />
                <span className="text-gradient-gold">{highlightedText}</span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up opacity-0 delay-200">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 delay-300">
            <Button size="xl" className="group">
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl">{secondaryCTA}</Button>
          </div>

          {/* Trust Bar */}
          <div className="animate-fade-up opacity-0 delay-400">
            <p className="text-muted-foreground text-sm mb-3">{trustText}</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">
                  ★
                </span>
              ))}
              <span className="ml-2 text-foreground font-medium">{rating}</span>
            </div>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-up opacity-0 delay-500">
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
  );
}
