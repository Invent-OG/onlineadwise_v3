import { Check, Star, Zap, Crown, Package } from "lucide-react";
import { Button } from "../ui/button";

const PackagesSection = () => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  const packages = [
    {
      name: "Explainer Video Pack Only",
      price: "$97–$197",
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
      price: "$297–$497",
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
      price: "$750–$1500",
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
    <section id="packages" className="py-24 relative">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container-narrow relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase">
            <Package className="w-3.5 h-3.5" /> Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">
            <span className="text-foreground">Consultation + Video + </span>
            <span className="">Ads Setup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business needs and growth stage.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl border transition-all duration-300 flex flex-col ${
                pkg.popular
                  ? "bg-card border-gold shadow-gold-sm z-20 overflow-visible"
                  : "bg-card border-border/30 hover:border-gold/30 z-10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max z-50">
                  <span className="px-4 py-1.5 rounded-full bg-gold text-black text-xs font-bold tracking-wide uppercase shadow-lg shadow-gold/20 flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.popular
                      ? "bg-gold text-black"
                      : "bg-primary/10 text-gold"
                  }`}
                >
                  <pkg.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl  font-bold text-foreground mb-4">
                  {pkg.name}
                </h3>

                <div className="text-3xl  font-bold text-foreground mb-4">
                  {pkg.price}
                </div>

                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular
                            ? "bg-gold text-black"
                            : "bg-primary/20 text-gold"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-foreground/90 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full py-6 font-bold tracking-wide transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gold text-black hover:bg-gold-light shadow-lg shadow-gold/20"
                      : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] border border-white/5"
                  }`}
                >
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pkg.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
