import { Brain, Calculator, Monitor, Cog, X, Check } from "lucide-react";

const WhySection = () => {
  const pillars = [
    {
      icon: Brain,
      emoji: "🎯",
      title: "Psychology",
      subtitle: "Mindset of the buyer",
    },
    {
      icon: Calculator,
      emoji: "🎯",
      title: "Math",
      subtitle: "Data + tracking",
    },
    {
      icon: Monitor,
      emoji: "🎯",
      title: "Media",
      subtitle: "Ads + videos + funnels",
    },
    {
      icon: Cog,
      emoji: "🎯",
      title: "Mechanism",
      subtitle: "Systems + automation",
    },
  ];

  const donts = ["Random posting", "Guesswork ads", "Patchy funnels"];

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            🧩 The Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Why </span>
            <span className="">Online Adwise</span>
            <span className="text-foreground"> Works</span>
          </h2>
        </div>

        {/* Four Pillars */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-center text-lg text-muted-foreground mb-8">
            We treat digital marketing as:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-gold-sm"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* No More */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-2xl bg-card/50 border border-border/50">
            {/* What We Don't Do */}
            <div className="flex-1">
              <p className="text-center md:text-left text-muted-foreground mb-4">
                No more:
              </p>
              <div className="space-y-3">
                {donts.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-32 bg-border hidden md:block" />

            {/* What We Do */}
            <div className="flex-1">
              <p className="text-center md:text-left text-primary font-medium mb-4">
                Just:
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  A structured, proven, behavioral system that grows your
                  business step by step.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
