import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface PricingTier {
  icon: LucideIcon;
  name: string;
  popular?: boolean;
  price: string;
  period?: string;
  commitment?: string;
  perfectFor: string;
  features: string[];
  expectedResults?: string;
  ctaText: string;
}

interface PricingSectionProps {
  headline: string;
  subheadline: string;
  tiers: PricingTier[];
  scorecardCTA: {
    text: string;
    subtext: string;
  };
  availability: {
    text: string;
    spots: number;
  };
}

export function PricingSection({
  headline,
  subheadline,
  tiers,
  scorecardCTA,
  availability,
}: PricingSectionProps) {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container-narrow px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {subheadline}
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  tier.popular
                    ? "border-primary bg-card glow-gold md:scale-105 z-10"
                    : "border-border/50 bg-card card-glow"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-6 md:p-8 ${tier.popular ? "pt-14" : ""}`}>
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <tier.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-primary">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-muted-foreground">
                          /{tier.period}
                        </span>
                      )}
                    </div>
                    {tier.commitment && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {tier.commitment}
                      </p>
                    )}
                  </div>

                  {/* Perfect for */}
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      Perfect For:
                    </p>
                    <p className="text-foreground/90">{tier.perfectFor}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expected results */}
                  {tier.expectedResults && (
                    <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                        Expected Results:
                      </p>
                      <p className="text-foreground font-medium">
                        {tier.expectedResults}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <Button size="lg" className="w-full">
                    {tier.ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Scorecard CTA */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {scorecardCTA.text}
            </p>
            <Button size="lg">
              {scorecardCTA.subtext}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Availability warning */}
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 max-w-xl mx-auto">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <p className="text-foreground">
              <span className="font-medium">{availability.text}</span>{" "}
              <span className="text-primary font-bold">
                {availability.spots} spots remaining
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
