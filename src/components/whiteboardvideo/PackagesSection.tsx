import { Check, Star, Zap, Crown, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NicheData } from "@/components/data/nicheData.ts";

interface PackagesSectionProps {
  niche: NicheData;
}

const PackagesSection = ({ niche }: PackagesSectionProps) => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  const packages = [
    {
      name: "Explainer Video Pack Only",
      price: "$97-$197",
      description: "Ideal for businesses who just need video content.",
      icon: Star,
      features: [
        "3 niche videos",
        "US & UK voices",
        "Upload instructions",
        "Licensing",
        "Funnel copy template",
      ],
      popular: false,
      cta: "Get Video Pack",
    },
    {
      name: "Consultation + DWY Setup",
      price: "$297-$497",
      description: "We guide your team step-by-step.",
      icon: Zap,
      features: [
        "All videos",
        "YouTube SEO setup",
        "Meta Ads blueprint",
        "Google Ads blueprint",
        "GHL funnel import",
        "One strategy session",
        "Offer guidance",
      ],
      popular: true,
      cta: "Start Consultation",
    },
    {
      name: "Full DFY Growth System",
      price: "$750-$1500",
      description: "Complete done-for-you solution.",
      icon: Crown,
      features: [
        "All videos",
        "Meta Ads setup",
        "Google Ads setup",
        "YouTube Ads setup",
        "Conversion tracking",
        "Retargeting strategy",
        "GHL CRM + automations",
        "Weekly optimization",
        "Performance dashboard",
        "Monthly consulting",
      ],
      popular: false,
      cta: "Get Full System",
    },
  ];

  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container-narrow relative z-10 px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase">
              <Package className="w-4 h-4" /> Our Packages
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl  font-bold mb-6 text-foreground">
            Consultation + Video + Ads Setup
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business needs and growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start pt-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "bg-card border-2 border-gold shadow-2xl shadow-gold/10 z-30 scale-105 overflow-visible"
                  : "bg-card/50 border border-border/50 hover:border-gold/30 z-10 hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 translate-x-1/2 w-max z-50">
                  <span className="px-5 py-2 rounded-full bg-gold text-black text-xs font-extrabold tracking-wide uppercase shadow-lg shadow-gold/20 flex items-center gap-2 ring-4 ring-background">
                    <Crown className="w-4 h-4 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    pkg.popular
                      ? "bg-gold text-black shadow-lg shadow-gold/20"
                      : "bg-black/40 text-gold border border-gold/20"
                  }`}
                >
                  <pkg.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl  font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>

                <div className="text-4xl md:text-5xl  font-bold text-foreground mb-4 tracking-tight">
                  {pkg.price}
                </div>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-[260px]">
                  {pkg.description}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

                <div className="w-full space-y-4 mb-8 text-left">
                  {pkg.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-3 group/item"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          pkg.popular
                            ? "bg-gold text-black"
                            : "bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-black"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-foreground/80 font-medium group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className={`w-full py-7 text-base font-bold tracking-wide transition-all duration-300 rounded-xl ${
                  pkg.popular
                    ? "bg-gold text-black hover:bg-gold-light shadow-lg shadow-gold/20 hover:scale-[1.02]"
                    : "bg-secondary text-foreground hover:bg-gold hover:text-black border border-white/5 hover:border-transparent"
                }`}
              >
                <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  {pkg.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
