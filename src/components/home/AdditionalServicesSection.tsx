import {
  FileText,
  Globe,
  Layers,
  BarChart3,
  Cog,
  Film,
  Check,
  Star,
  Zap,
  Crown,
  Briefcase,
  MapPin,
} from "lucide-react";

const AdditionalServicesSection = () => {
  const services = [
    {
      id: "content",
      icon: FileText,
      title: "Content Writing Services",
      subtitle: "Complete Copy Suite",
      narenLayer: "Narrative Psychology + Emotional Hooks",
      items: [
        "Website Content",
        "Landing Page Copy",
        "Ad Copy (Meta, Google, YouTube)",
        "Email Nurture Sequences",
        "Lead Magnet Copy",
        "Long-Form Blog Content",
        "Social Media Captions",
        "YouTube Scripts",
      ],
      packages: [
        { name: "Basic Copy Package", desc: "3 Pages" },
        { name: "Growth Copy Package", desc: "Full Website + Landing Pages" },
        {
          name: "Authority Copy Suite",
          desc: "Website + Funnels + Email + Ads",
        },
        { name: "Ad Creative Copy Bundle", desc: "10 Variations, Hook + CTA" },
      ],
    },
    {
      id: "website",
      icon: Globe,
      title: "Website Design & Development",
      subtitle: "Execute Funnels + Navigation Psychology",
      narenLayer: "Execute Funnels + Navigation Psychology",
      items: [
        "Custom Website Design",
        "Landing Pages (Lead Gen, Sales, Webinar, VSL)",
        "WordPress / Webflow / GHL Website Build",
        "Speed Optimization",
        "On-Page SEO",
        "Branded UI/UX",
        "Mobile Optimization",
      ],
      packages: [
        { name: "Starter Website", desc: "3 Pages" },
        { name: "Funnel Website", desc: "1–3 Landing Pages" },
        { name: "Premium Website", desc: "7–10 Pages" },
        { name: "Authority Brand Site", desc: "Complete + SEO" },
      ],
    },
    {
      id: "funnel",
      icon: Layers,
      title: "Funnel Design & Optimization",
      subtitle: "Execute + Retarget + Nurture",
      narenLayer: "Execute + Retarget + Nurture",
      items: [
        "Full Funnel Architecture",
        "Offer Positioning",
        "Funnel Wireframing",
        "Designing (Long-form VSL, Lead Magnet, Webinar)",
        "A/B Testing",
        "Conversion Tracking",
        "Automation + Email Nurture",
      ],
      packages: [
        { name: "Lead Gen Funnel", desc: "Capture & Nurture" },
        { name: "VSL Funnel", desc: "Video Sales Letter" },
        { name: "Webinar Funnel", desc: "Registration & Follow-up" },
        { name: "High Ticket Appointment Funnel", desc: "Premium Booking" },
      ],
    },
    {
      id: "tracking",
      icon: BarChart3,
      title: "Tracking & Analytics Setup",
      subtitle: "Full Stack Implementation",
      narenLayer: "Analyze & Evolve",
      items: [
        "Meta Pixel + Meta CAPI",
        "Google Tag Manager + GA4",
        "Google Ads Conversion Tracking",
        "GHL Tracking",
        "Zapier / Make / n8n Automations",
        "UTM Tracking Architecture",
        "Tracking Audit",
      ],
      deliverables: [
        "Server-Side Tracking",
        "Multi-Platform Attribution",
        "Funnel Analytics Dashboard",
        "Lead Quality Monitoring",
      ],
    },
    {
      id: "automation",
      icon: Cog,
      title: "Automation & CRM Setup",
      subtitle: "GHL, Zapier, Make, n8n",
      narenLayer: "Nurture + Retarget + Scale",
      items: [
        "GHL CRM Setup",
        "Workflows + Automations",
        "Lead Distribution",
        "Retargeting Signals",
        "Email/SMS Nurture Flows",
        "Chatbot Setup",
        "Appointment Booking + Calendar",
      ],
    },
    {
      id: "video",
      icon: Film,
      title: "Whiteboard Video Explainer",
      subtitle: "Store Item",
      narenLayer: "NAREN Psychology Scripting",
      items: [
        "Scriptwriting (NAREN Psychology)",
        "Voiceover",
        "Animated Whiteboard",
        "Business Explainer",
        "Funnel Pitch Video",
        "Ad Creative Version",
      ],
      packages: [
        { name: "Starter Explainer", desc: "45 sec" },
        { name: "Growth Explainer", desc: "90 sec" },
        { name: "Premium Brand Explainer", desc: "2 Min" },
      ],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4" /> Complete Service Suite
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Beyond </span>
            <span className="">Ads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack digital marketing solutions to power your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 p-6 transition-all duration-500 hover:glow-gold-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.subtitle}
                </p>

                <div className="mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 inline-flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary">
                    {service.narenLayer}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.items.slice(0, 5).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-3 h-3 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                  {service.items.length > 5 && (
                    <li className="text-xs text-muted-foreground">
                      +{service.items.length - 5} more...
                    </li>
                  )}
                </ul>

                {service.packages && (
                  <div className="space-y-2 pt-4 border-t border-border/30">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Packages:
                    </p>
                    {service.packages.slice(0, 3).map((pkg, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-foreground">{pkg.name}</span>
                        <span className="text-muted-foreground">
                          {pkg.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {service.deliverables && (
                  <div className="space-y-2 pt-4 border-t border-border/30">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      What We Deliver:
                    </p>
                    {service.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-foreground/80"
                      >
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
