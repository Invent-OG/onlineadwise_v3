import { Facebook, Search, Youtube, Linkedin, Instagram, Check, Star, Zap, Crown, Film } from "lucide-react";
import { Button } from "./ui/button";

const PlatformServicesSection = () => {
  const platforms = [
    {
      id: "meta",
      icon: Facebook,
      emoji: "1️⃣",
      title: "Meta Ads",
      subtitle: "Facebook + Instagram Ads",
      narenLayer: "Navigate + Analyze + Execute + Retarget + Nurture",
      execution: [
        "Complete Meta Business Suite Setup",
        "Pixel + CAPI (Server-Side Tracking) Integration",
        "Campaign Structure (TOF/MOF/BOF based on NAREN Split)",
        "Advanced Audience Targeting",
        "Lookalike Creation (Data-Driven)",
        "Creative Strategy: Hooks, Scripts, Thumbnails",
        "A/B Testing (Creatives, Audiences, Landing Page)",
        "Retargeting and Re-engagement Systems",
        "Scaling Systems (Horizontal + Vertical)",
        "Weekly Optimization & Analytics Dashboard",
      ],
      packages: [
        {
          icon: Star,
          name: "Starter Meta Package",
          features: ["Basic Campaign Launch", "1 Funnel Entry Point", "2 Ad Creatives", "Basic Reporting"],
        },
        {
          icon: Zap,
          name: "Growth Meta Package",
          features: ["Multi-layer NAREN Audience Framework", "6–8 Creatives", "Retargeting + Automation", "Weekly Optimization Reporting"],
        },
        {
          icon: Crown,
          name: "Performance Scaling Package",
          features: ["Full NAREN Implementation", "CAPI + Advanced Tracking", "Funnel Optimization", "Weekly Strategy Calls"],
        },
      ],
      includes: "🎬 Includes: Whiteboard Video Explainer (1 Video for Ads/Funnel)",
    },
    {
      id: "google",
      icon: Search,
      emoji: "2️⃣",
      title: "Google Ads",
      subtitle: "Search, Performance Max, Display, YouTube",
      narenLayer: "Navigate Intent + Analyze Search Journeys",
      execution: [
        "Google Ads Account Setup",
        "Conversion Tracking (GTAG, GA4, GMC for e-commerce)",
        "Keyword Research + Competitor Analysis",
        "Search Campaign Buildout",
        "Performance Max Shopping/Lead Campaign",
        "Display Audience Segmentation",
        "YouTube Ad Setup (Skippable, Non-Skippable, In-feed)",
        "Landing Page Sync",
        "Bid Optimization (Max Conversions / Target CPA)",
        "Weekly Reporting Dashboard",
      ],
      packages: [
        {
          icon: Star,
          name: "Google Starter",
          features: ["Search Only", "1 Landing Page", "Basic Tracking"],
        },
        {
          icon: Zap,
          name: "Google Growth",
          features: ["Search + Display", "2–3 Landing Pages", "GA4 Dashboard"],
        },
        {
          icon: Crown,
          name: "Google Performance Suite",
          features: ["Search + Pmax + Display + YouTube", "Full Tracking Stack", "NAREN Analytics Layer", "Weekly Strategy Call"],
        },
      ],
      includes: "🎬 Includes: 1 Whiteboard Explainer for YouTube Ads",
    },
    {
      id: "youtube",
      icon: Youtube,
      emoji: "3️⃣",
      title: "YouTube Ads",
      subtitle: "Direct Response + Storytelling Ads",
      narenLayer: "Narrative Psychology + Retargeting Loops",
      execution: [
        "YouTube Campaign Setup",
        "Hook Strategy + Scriptwriting",
        "Custom Thumbnails for Ads",
        "Retargeting Sequence",
        "Full Funnel Sync (Lead, VSL, Appointment, Webinar)",
        "Scaling via High-Intent Audiences",
      ],
      packages: [],
      includes: "",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      emoji: "4️⃣",
      title: "LinkedIn Ads",
      subtitle: "High-Ticket B2B",
      narenLayer: "Narrow Targeting + Authority-Based Messaging",
      execution: [
        "Profile Optimization",
        "Campaign Setup (Lead Form + Website)",
        "B2B Audience Segmentation",
        "Message Ads + Sponsored Content",
        "Retargeting Layer",
        "Analytics + CRO",
      ],
      packages: [],
      includes: "",
    },
    {
      id: "social",
      icon: Instagram,
      emoji: "5️⃣",
      title: "Social Media Setup",
      subtitle: "Organic Foundations",
      narenLayer: "Navigate Brand Identity",
      execution: [
        "Profile Optimization (Instagram, Facebook, LinkedIn, YouTube, X)",
        "Bio Writing & Brand Guide Creation",
        "Highlight Cover Setup",
        "Content Calendar (NAREN-Based: Education + Proof + Intent + Nurture)",
      ],
      packages: [],
      includes: "",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            ⚡🌐 Platform-Wise Execution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Multi-Platform </span>
            <span className="text-gradient-gold">Ad Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Digital Marketing Consultant • Paid Media Expert • Funnel Scaling Strategist
          </p>
        </div>

        {/* Platform Cards */}
        <div className="space-y-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{platform.emoji}</span>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-foreground">{platform.title}</h3>
                        <p className="text-muted-foreground">{platform.subtitle}</p>
                      </div>
                    </div>
                    <div className="lg:ml-auto">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                        📌 NAREN Layer: {platform.narenLayer}
                      </span>
                    </div>
                  </div>

                  {/* Execution Points */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">What We Execute</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {platform.execution.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  {platform.packages.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {platform.packages.map((pkg) => {
                        const PkgIcon = pkg.icon;
                        return (
                          <div key={pkg.name} className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                            <div className="flex items-center gap-2 mb-3">
                              <PkgIcon className="w-5 h-5 text-primary" />
                              <span className="font-semibold text-foreground">{pkg.name}</span>
                            </div>
                            <ul className="space-y-1">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Video Include */}
                  {platform.includes && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 inline-flex">
                      <Film className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{platform.includes}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformServicesSection;
