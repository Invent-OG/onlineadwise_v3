import { Play, Film, MessageSquare, Heart, Check } from "lucide-react";

const VideoPacksSection = () => {
  const videoTypes = [
    {
      icon: Film,
      // emoji: "1️⃣",
      title: "Commercial Video",
      description:
        "High-impact animations designed to trigger immediate action.",
      useCase:
        "Perfect for Meta Ads, YouTube Ads, and landing page hero sections.",
    },
    {
      icon: MessageSquare,
      // emoji: "2️⃣",
      title: "Explainer Video",
      description: "Question-based, educational videos ideal for awareness.",
      useCase: "YouTube SEO, Website trust-building, Top-of-funnel ads.",
    },
    {
      icon: Heart,
      // emoji: "3️⃣",
      title: "Storytelling Video",
      description: "Emotion-driven brand story videos for deep connection.",
      useCase: "Perfect for retargeting & credibility building.",
    },
  ];

  const niches = [
    { emoji: "🦷", name: "Dentist" },
    { emoji: "💆", name: "Chiropractor" },
    { emoji: "🎨", name: "Painter" },
    { emoji: "🐜", name: "Pest Control" },
    { emoji: "🧼", name: "Carpet Cleaner" },
    { emoji: "🧒", name: "Pediatric Dentist" },
    { emoji: "💪", name: "Physical Therapist" },
    { emoji: "🏠", name: "Roofer" },
    { emoji: "⚖", name: "Bankruptcy Lawyer" },
    { emoji: "👵", name: "Senior Care" },
    { emoji: "🧑‍⚕", name: "Pediatrician" },
    { emoji: "💆", name: "Massage Therapist" },
    { emoji: "🔧", name: "Plumber" },
    { emoji: "🚔", name: "DUI Lawyer" },
    { emoji: "🏢", name: "Insurance Agency" },
    { emoji: "🧴", name: "Dermatologist" },
    { emoji: "⚡", name: "Electrician" },
    { emoji: "❄", name: "HVAC Contractor" },
    { emoji: "⚖", name: "Personal Injury Lawyer" },
    { emoji: "🧾", name: "Bookkeeper" },
  ];

  const features = [
    "US & UK voiceovers",
    "Logo + business detail insertion",
    "Ready for ads, website, social & YouTube",
    "No customization required (simple, fast setup)",
  ];

  const nicheIncludes = [
    "3 signature videos",
    "A landing page structure",
    "Meta / Google / YouTube ad angles",
    "A GHL automation plan",
    "A retargeting script",
  ];

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            🎥 Video Package Store
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Explainer Video </span>
            <span className="">Packs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful add-on included in our consulting ecosystem. 3
            ready-to-use video formats for 20+ local business niches.
          </p>
        </div>

        {/* Video Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {videoTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 p-6 transition-all duration-500 hover:glow-gold-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <span className="text-2xl">{type.emoji}</span> */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <p className="text-sm text-primary">{type.useCase}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Videos Include */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8 mb-16">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">
            All Videos Include:
          </h3>
          <div className="grid grid-cols-1 gap-4 md:flex md:flex-wrap md:justify-center">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Niche Packs */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            {/* <span className="text-foreground">🎯 </span> */}
            <span className="">20+ Local Business Niches</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {niches.map((niche) => (
              <div
                key={niche.name}
                className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl">{niche.emoji}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {niche.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What Each Niche Gets */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-6">
            Each Niche Pack Includes:
          </h3>
          <div className="grid grid-cols-1 gap-3 text-left md:flex md:flex-wrap md:justify-center">
            {nicheIncludes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-primary/30"
              >
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPacksSection;
