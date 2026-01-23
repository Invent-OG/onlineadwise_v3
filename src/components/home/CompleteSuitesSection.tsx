import { Check, Zap, TrendingUp, Award, Star } from "lucide-react";
import { Button } from "../ui/button";

const CompleteSuitesSection = () => {
  const suites = [
    {
      icon: Zap,
      name: "NAREN Paid Ads Performance Suite",
      description: "Complete paid advertising solution across all platforms",
      features: [
        "Meta Ads",
        "Google Ads",
        "YouTube Ads",
        "Tracking Setup",
        "Funnel Optimization",
        "Creative Strategy",
        "Weekly Reports",
        "Whiteboard Video (1)",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      name: "NAREN Business Growth System",
      description: "Full-stack growth with ads, funnels, and automation",
      features: [
        "Paid Ads",
        "Website + Funnels",
        "Copywriting",
        "Automation",
        "CRM Setup",
        "YouTube Content Strategy",
        "Lead Nurture",
      ],
      color: "from-primary to-accent",
      popular: true,
    },
    {
      icon: Award,
      name: "NAREN Brand Authority Suite",
      description: "Complete brand building with organic + paid strategy",
      features: [
        "Website",
        "Content Writing",
        "Social Media Setup",
        "Organic + Paid Strategy",
        "Long-form Narrative Copy",
        "Explainer Video",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const niches = [
    "Coaches & Consultants",
    "Real Estate",
    "Fitness & Gyms",
    "E-commerce",
    "Beauty & Skincare",
    "SaaS",
    "Local Businesses",
    "Education & EdTech",
    "Interior Designers",
    "Doctors & Clinics",
    "Financial Consultants",
    "Course Creators",
    "Influencers",
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4 " /> Complete Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">
            <span className="text-foreground">NAREN Method™ </span>
            <span className="">Complete Suites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need in one powerful package
          </p>
        </div>

        {/* Suites Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {suites.map((suite) => {
            const Icon = suite.icon;
            return (
              <div
                key={suite.name}
                className={`relative group rounded-3xl border transition-all duration-300 flex flex-col ${
                  suite.popular
                    ? "bg-card border-gold shadow-gold-sm z-20 overflow-visible"
                    : "bg-card border-border/30 hover:border-gold/30 z-10"
                }`}
              >
                {suite.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max z-50">
                    <span className="px-4 py-1.5 rounded-full bg-gold text-black text-xs font-bold tracking-wide uppercase shadow-lg shadow-gold/20 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 fill-black" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      suite.popular
                        ? "bg-gold text-black"
                        : suite.name.includes("Paid Ads")
                          ? "bg-blue-500 text-white"
                          : "bg-purple-500 text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl  font-bold text-foreground mb-4">
                    {suite.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {suite.description}
                  </p>

                  <ul className="space-y-4 mb-8 flex-1">
                    {suite.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            suite.popular
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
                  </ul>

                  <Button
                    className={`w-full py-6 font-bold tracking-wide transition-all duration-300 ${
                      suite.popular
                        ? "bg-gold text-black hover:bg-gold-light shadow-lg shadow-gold/20"
                        : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] border border-white/5"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Niches We Specialize In */}
        <div className="text-center">
          <h3 className="text-2xl  font-bold mb-8 flex items-center justify-center gap-2">
            <span className="text-foreground flex items-center gap-2">
              <Star className="w-6 h-6 text-primary " /> Niches We
            </span>
            <span className="">Specialize In</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {niches.map((niche) => (
              <div
                key={niche}
                className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer flex items-center justify-center text-center"
              >
                {niche}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSuitesSection;
