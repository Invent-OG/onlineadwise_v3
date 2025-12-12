import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";

const PackagesSection = () => {
  const packages = [
    {
      icon: Star,
      name: "Explainer Video Pack Only",
      price: "$97–$197",
      description: "Ideal for businesses who just need video content.",
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
      icon: Zap,
      name: "Consultation + DWY Setup",
      price: "$297–$497",
      description: "We guide your team step-by-step.",
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
      icon: Crown,
      name: "Full DFY Growth System",
      price: "$750–$1500",
      description: "Complete done-for-you solution.",
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
    <section id="packages" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            📦 Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Consultation + Video + </span>
            <span className="text-gradient-gold">Ads Setup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business needs and growth stage.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative group rounded-2xl border transition-all duration-500 overflow-hidden ${
                  pkg.popular
                    ? "bg-gradient-to-b from-primary/10 to-card border-primary glow-gold"
                    : "bg-card/50 border-border/50 hover:border-primary/50"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      pkg.popular ? "bg-primary" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-6 h-6 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground">{pkg.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-display font-bold text-gradient-gold">{pkg.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-sm hover:glow-gold"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
