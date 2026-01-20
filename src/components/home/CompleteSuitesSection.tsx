import { Check, Zap, TrendingUp, Award } from "lucide-react";
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            ⭐ Complete Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">NAREN Method™ </span>
            <span className="">Complete Suites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need in one powerful package
          </p>
        </div>

        {/* Suites Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {suites.map((suite) => {
            const Icon = suite.icon;
            return (
              <div
                key={suite.name}
                className={`relative group rounded-2xl border transition-all duration-500 overflow-hidden ${
                  suite.popular
                    ? "bg-gradient-to-b from-primary/10 to-card border-primary glow-gold"
                    : "bg-card/50 border-border/50 hover:border-primary/50"
                }`}
              >
                {suite.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${suite.color} flex items-center justify-center mb-6 glow-gold-sm`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {suite.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {suite.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {suite.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 font-semibold transition-all duration-300 ${
                      suite.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-sm hover:glow-gold"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
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
          <h3 className="text-2xl font-display font-bold mb-8">
            <span className="text-foreground">⭐ Niches We </span>
            <span className="">Specialize In</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {niches.map((niche) => (
              <span
                key={niche}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/30 text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                {niche}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSuitesSection;
