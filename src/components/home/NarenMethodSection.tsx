import { Compass, Magnet, Settings, Expand, Repeat, Brain } from "lucide-react";

const NarenMethodSection = () => {
  const stages = [
    {
      letter: "N",
      title: "Navigate",
      subtitle: "Strategic Clarity",
      icon: Compass,
      color: "from-blue-500 to-blue-600",
      description:
        "Before touching ads, we study your industry, customer psychology, funnel gaps, and data accuracy.",
      points: [
        "Industry, niche & competition analysis",
        "Customer fears, desires, objections",
        "Funnel gap identification",
        "Offer weakness assessment",
        "Data + tracking accuracy",
      ],
      outcome:
        "You know exactly what to do, why you're doing it, and where growth is blocked.",
    },
    {
      letter: "A",
      title: "Attract",
      subtitle: "Creative + Ads System",
      icon: Magnet,
      color: "from-primary to-accent",
      description:
        "We craft attention-pulling assets using proven persuasion triggers and deploy across all major platforms.",
      points: [
        "Scroll-stopping creatives",
        "High-intent messaging",
        "Pain/desire hooks",
        "Niche-specific videos",
        "Meta, Google, YouTube Ads",
      ],
      outcome:
        "You start attracting not just leads — but buyer-ready prospects.",
    },
    {
      letter: "R",
      title: "Refine",
      subtitle: "Fix + Improve",
      icon: Settings,
      color: "from-green-500 to-green-600",
      description:
        "Behavior analysis + funnel forensics to optimize every touchpoint in your customer journey.",
      points: [
        "Heatmap study",
        "Drop-off detection",
        "Landing page refinement",
        "Creative improvement",
        "CAPI + Enhanced Conversion setup",
      ],
      outcome:
        "Lower CPL, stronger conversions, cleaner data, profitable performance.",
    },
    {
      letter: "E",
      title: "Expand",
      subtitle: "Scale Without Wasting Money",
      icon: Expand,
      color: "from-purple-500 to-purple-600",
      description:
        "We scale psychologically and structurally for sustainable growth with predictable ROI.",
      points: [
        "Multi-geo expansion",
        "Budget scaling",
        "Offer variations",
        "Creative clusters",
        "Funnel upgrades (VSL, upsells)",
      ],
      outcome: "Sustainable scaling with predictable ROI.",
    },
    {
      letter: "N",
      title: "Normalize",
      subtitle: "Predictable System",
      icon: Repeat,
      color: "from-primary to-accent",
      description:
        "Your business now runs on a system — not luck. Marketing becomes stable and reliable.",
      points: [
        "Weekly audits",
        "Creative rotation",
        "Predictable lead flow",
        "Evergreen nurturing",
        "AI forecasting + GHL automation",
      ],
      outcome: "Marketing becomes stable and reliable.",
    },
  ];

  return (
    <section id="method" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
            <Brain className="w-4 h-4" /> Our Signature Framework
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">THE </span>
            <span className="">NAREN METHOD™</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A 5-stage behavioral + performance system that ensures consistent,
            sustainable, high-quality leads — not just inconsistent spikes.
          </p>
        </div>

        {/* NAREN Letters Display */}
        <div className="flex justify-center gap-2 md:gap-4 mb-16">
          {["N", "A", "R", "E", "N"].map((letter, index) => (
            <div
              key={index}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl md:text-3xl font-display font-bold text-primary-foreground glow-gold-sm hover:glow-gold transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Stages */}
        <div className="space-y-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left - Letter & Icon */}
                    <div className="flex items-center gap-4 lg:w-48 shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-3xl font-display font-bold text-white glow-gold-sm`}
                      >
                        {stage.letter}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {stage.title}
                        </h3>
                        <p className="text-sm text-primary">{stage.subtitle}</p>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4">
                        {stage.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {stage.points.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {point}
                          </div>
                        ))}
                      </div>

                      {/* Outcome */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                        <span className="text-sm text-primary font-medium">
                          📌 Outcome:
                        </span>
                        <span className="text-sm text-foreground">
                          {stage.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NarenMethodSection;
