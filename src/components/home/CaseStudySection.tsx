import {
  TrendingUp,
  TrendingDown,
  Phone,
  Award,
  Compass,
  Magnet,
  Settings,
  Expand,
  Repeat,
} from "lucide-react";

const CaseStudySection = () => {
  const challenges = [
    "No clear offer",
    "No tracking",
    "No funnel",
    "No consistent leads",
    "Previous agency wasted budget",
  ];

  const process = [
    {
      letter: "N",
      title: "Navigate",
      description:
        "Market research, competitor breakdown, HVAC psychology mapping.",
      icon: Compass,
    },
    {
      letter: "A",
      title: "Attract",
      description:
        "Launched HVAC Commercial Video + Local Service Hooks. Facebook + Google Search campaigns.",
      icon: Magnet,
    },
    {
      letter: "R",
      title: "Refine",
      description: "Mapped CAPI, GA4 events, built GHL funnel & pipeline.",
      icon: Settings,
    },
    {
      letter: "E",
      title: "Expand",
      description: "Activated YouTube Retargeting & Lookalike expansions.",
      icon: Expand,
    },
    {
      letter: "N",
      title: "Normalize",
      description:
        "Weekly optimization + automation in GHL + missed-call text-back.",
      icon: Repeat,
    },
  ];

  const results = [
    {
      icon: TrendingUp,
      value: "74",
      label: "Booked Appointments",
      emoji: "📈",
    },
    { icon: TrendingDown, value: "47%", label: "CPA Reduced", emoji: "📉" },
    {
      icon: Phone,
      value: "3X",
      label: "Increase in Inbound Calls",
      emoji: "📞",
    },
    { icon: Award, value: "Full-Time", label: "Growth Partner", emoji: "🏆" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            📚 Case Study
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">HVAC Company </span>
            <span className="">(USA)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🔥 "From Zero Booking System → to 74 Booked Appointments/Month in 42
            Days"
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Challenges */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 mb-8">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Challenges
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20"
                >
                  <span className="text-destructive">❌</span>
                  <span className="text-sm text-foreground">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NAREN Process */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 mb-8">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Our Process (NAREN Method™ Implementation)
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.letter + step.title}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/50 rounded-xl p-4 border border-primary/20 h-full hover:border-primary/50 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-white mb-3">
                        {step.letter}
                      </div>
                      <h4 className="font-bold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-primary/10 to-card rounded-2xl border border-primary/30 p-8 glow-gold-sm">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">
              Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((result, i) => {
                const Icon = result.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">{result.emoji}</span>
                    </div>
                    <div className="text-3xl font-display font-bold  mb-1">
                      {result.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {result.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
