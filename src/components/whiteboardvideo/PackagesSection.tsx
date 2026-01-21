import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NicheData } from "@/components/data/nicheData.ts";


interface PackagesSectionProps {
  niche: NicheData;
}

const PackagesSection = ({ niche }: PackagesSectionProps) => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  const packages = [
    {
      name: "Video Only",
      price: "$497",
      description: "Perfect for businesses with existing marketing teams",
      icon: Star,
      features: [
        "3 Premium Whiteboard Videos",
        "Commercial + Explainer + Story",
        `${niche.niche}-specific customization`,
        "Full HD 1080p animation",
        "Professional voiceover",
        "All format delivery",
        "Full ownership rights",
        "7-day delivery",
        "2 revision rounds",
      ],
      popular: false,
    },
    {
      name: "Video + Ads Launch",
      price: "$1,497",
      description: "Ready to grow your customer base with proven campaigns",
      icon: Zap,
      features: [
        "Everything in Video Only",
        "30-day managed campaign",
        "Facebook/Instagram OR Google Ads",
        "Up to $1,500 ad spend included",
        "Audience research & targeting",
        "Weekly performance reports",
        "Strategy calls included",
        "Landing page review",
        "Conversion tracking setup",
      ],
      popular: true,
    },
    {
      name: "Complete Growth",
      price: "$2,997",
      description: "Dominate your market with full-scale marketing",
      icon: Crown,
      features: [
        "12 Total Whiteboard Videos",
        "90-day full management",
        "BOTH Facebook AND Google Ads",
        "Up to $3,000 ad spend",
        "YouTube channel setup",
        "Email marketing integration",
        "Bi-weekly strategy calls",
        "Monthly deep dive reports",
        "Cross-platform optimization",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 dark-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-primary-foreground font-medium text-sm mb-4">
            Pricing Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Growth Package
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Flexible options designed for {niche.nichePlural} at every stage of
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-card text-foreground shadow-2xl scale-105 border-2 border-accent"
                  : "bg-white/5 backdrop-blur-sm border border-white/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full accent-gradient text-accent-foreground text-sm font-bold shadow-accent">
                  Most Popular
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  pkg.popular ? "hero-gradient" : "bg-white/10"
                }`}
              >
                <pkg.icon
                  className={`w-7 h-7 ${pkg.popular ? "text-primary-foreground" : "text-accent"}`}
                />
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-foreground" : "text-primary-foreground"}`}
              >
                {pkg.name}
              </h3>

              <div
                className={`text-4xl font-bold mb-2 ${pkg.popular ? "text-primary" : "text-accent"}`}
              >
                {pkg.price}
              </div>

              <p
                className={`text-sm mb-6 ${pkg.popular ? "text-muted-foreground" : "text-primary-foreground/70"}`}
              >
                {pkg.description}
              </p>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.popular ? "bg-success/20" : "bg-success/30"
                      }`}
                    >
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span
                      className={`text-sm ${pkg.popular ? "text-foreground" : "text-primary-foreground/90"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
               
                size="lg"
                className={`w-full ${!pkg.popular ? "border-white/30 text-white hover:bg-white/10" : ""}`}
              >
                <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Agency Note */}
        <div className="mt-12 text-center">
          <p className="text-primary-foreground/70">
            <span className="font-semibold text-accent">
              For Marketing Agencies:
            </span>{" "}
            Wholesale pricing available. Contact us for white-label partnership
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
