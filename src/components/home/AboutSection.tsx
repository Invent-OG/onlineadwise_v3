import {
  Check,
  Brain,
  LineChart,
  Video,
  Cog,
  Monitor,
  Layers,
  Target,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Brain, text: "Buyer Psychology" },
    { icon: Layers, text: "Funnel Design" },
    { icon: Monitor, text: "High-Performance Ads" },
    { icon: LineChart, text: "Behavior Analytics" },
    { icon: Video, text: "Video Leverage" },
    { icon: Cog, text: "GHL Automations" },
  ];

  const platforms = ["Meta", "Google", "YouTube"];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container-narrow relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
              <Target className="w-4 h-4" /> Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">More Than An Agency.</span>
              <br />
              <span className="">A Growth Architecture.</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              <span className="text-primary font-semibold">Online Adwise™</span>{" "}
              is a performance-driven digital marketing consultation service
              designed for business owners who want{" "}
              <span className="text-foreground font-medium">
                results, not random campaigns.
              </span>
            </p>

            <div className="space-y-4 text-lg mb-8">
              <p className="text-muted-foreground">We don't sell "ads."</p>
              <p className="text-foreground font-medium">
                We build growth architectures using a proprietary psychological
                framework —
                <span className=" font-bold"> the NAREN Method™</span>, created
                by Narender Sharma.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Platforms */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-muted-foreground">
                Multi-platform scaling:
              </span>
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-2xl border-2 border-primary/30 bg-primary/5 glow-gold-sm">
              <p className="text-lg md:text-xl font-display font-semibold text-foreground">
                Our Mission:
              </p>
              <p className="text-xl md:text-2xl font-display font-bold  mt-2">
                "Turn Your Marketing Into a Predictable Revenue Machine."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
