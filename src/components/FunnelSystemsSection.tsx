import { Workflow, Camera, Megaphone, BarChart3, Wrench, Check } from "lucide-react";

const FunnelSystemsSection = () => {
  const systems = [
    {
      icon: Workflow,
      color: "from-purple-500 to-purple-600",
      emoji: "🚀",
      title: "Funnel Strategy & Scaling Systems (GHL)",
      subtitle: "Conversion Infrastructure Build",
      description: "We build complete funnels using GoHighLevel (GHL) that convert cold users into booked appointments.",
      funnelTypes: [
        "Lead gen funnels",
        "Appointment booking funnels",
        "Webinar funnels",
        "Local business funnels",
        "High-ticket VSL funnels",
      ],
      whatWeBuild: [
        "Landing pages",
        "Opt-in systems",
        "Multi-step onboarding",
        "SMS + Email automation",
        "Lead nurturing workflows",
        "Pipeline integration",
        "AI appointment reminders",
        "Sales scripts & follow-up sequences",
      ],
    },
    {
      icon: Camera,
      color: "from-primary to-accent",
      emoji: "🧲",
      title: "Creative & Video Suite",
      subtitle: "Pre-Built Video Store with US/UK Voiceovers",
      description: "For 20+ niches: Commercial Videos, Explainer Videos, Storytelling Videos",
      features: [
        "Animation",
        "Voiceovers (US/UK)",
        "Conversion-optimized scripts",
        "CTA-ready video edits",
      ],
      usedFor: [
        "Meta Ads",
        "YouTube Ads",
        "Google Video",
        "Website Landing Pages",
        "Social Media Content",
        "YouTube SEO",
      ],
    },
    {
      icon: Megaphone,
      color: "from-green-500 to-green-600",
      emoji: "🎤",
      title: "Content Strategy & Distribution",
      subtitle: "Full Content Foundation",
      description: "Complete content ecosystem to fuel your growth.",
      features: [
        "Short-form ads creative",
        "YouTube SEO videos",
        "Social post calendars",
        "Reels, Shorts, TikTok ads edits",
        "Content hooks + angles",
        "Branding + positioning",
      ],
    },
    {
      icon: BarChart3,
      color: "from-blue-500 to-blue-600",
      emoji: "📈",
      title: "Tracking, Analytics & Automation",
      subtitle: "Multi-layered Scaling Infrastructure",
      description: "Complete tracking and automation stack for maximum performance.",
      tools: [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager (GTM)",
        "Meta Pixel + CAPI",
        "Google Ads Conversion Tracking",
        "GHL events + conversions",
        "Zapier / Make / N8n automation",
        "Lead scoring",
        "Multi-touch attribution setup",
      ],
    },
  ];

  const toolsWeUse = [
    "Meta Business Suite",
    "Ads Manager",
    "Google Ads",
    "Google Ads Editor",
    "GA4 + GTM",
    "Looker Studio Dashboards",
    "GoHighLevel (GHL)",
    "Zapier",
    "Make.com",
    "N8n",
    "Calendly / GHL Calendar",
    "Loom, Figma, Notion, Motion",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            💜 Complete Systems
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Growth </span>
            <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond ads — complete systems that scale your business predictably
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <div
                key={system.title}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 p-8 transition-all duration-500 hover:glow-gold-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl">{system.emoji}</span>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${system.color} flex items-center justify-center glow-gold-sm`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-2">{system.title}</h3>
                <p className="text-primary text-sm mb-4">{system.subtitle}</p>
                <p className="text-muted-foreground mb-6">{system.description}</p>

                {system.funnelTypes && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Funnel Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {system.funnelTypes.map((type, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary border border-primary/20">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {system.whatWeBuild && (
                  <div className="grid grid-cols-2 gap-2">
                    {system.whatWeBuild.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {system.features && (
                  <div className="space-y-2">
                    {system.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {system.usedFor && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs font-semibold text-primary mb-2">Used For:</p>
                    <div className="flex flex-wrap gap-1">
                      {system.usedFor.map((use, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-secondary/50 text-xs text-muted-foreground">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {system.tools && (
                  <div className="grid grid-cols-2 gap-2">
                    {system.tools.map((tool, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tools We Use */}
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-8">
            <span className="text-foreground">🧰 Tools We </span>
            <span className="text-gradient-gold">Use</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {toolsWeUse.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground flex items-center gap-2"
              >
                <span className="text-primary">⚡</span>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelSystemsSection;
