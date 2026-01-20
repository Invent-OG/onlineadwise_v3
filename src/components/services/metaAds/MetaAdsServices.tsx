import {
  Scan,
  MousePointerClick,
  MessageSquare,
  Layers,
  Repeat,
  BarChart4,
} from "lucide-react";

const MetaAdsServices = () => {
  const services = [
    {
      icon: Scan,
      title: "Comprehensive Audit",
      description:
        "We dive deep into your ad account, pixel setup, and creative history to find the hidden leaks draining your budget.",
    },
    {
      icon: MousePointerClick,
      title: "High-Converting Creatives",
      description:
        "Our creative team designs hooks, images, and videos that stop the scroll and compel users to click.",
    },
    {
      icon: Layers,
      title: "Funnel Optimization",
      description:
        "Ads are only half the battle. We optimize your landing pages and offers to maximize conversion rates.",
    },
    {
      icon: MessageSquare,
      title: "Audience Targeting",
      description:
        "We go beyond basic interests, using lookalikes and behavioral layering to find your perfect buyers.",
    },
    {
      icon: Repeat,
      title: "Retargeting Systems",
      description:
        "We implement multi-stage retargeting sequences to bring back lost visitors and turn them into customers.",
    },
    {
      icon: BarChart4,
      title: "Scaling & Analytics",
      description:
        "Data-driven decisions to scale your winning campaigns horizontally and vertically without breaking CPA.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            🛠️ Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Full-Stack </span>
            <span className="text-blue-500">Meta Ads Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to dominate Facebook & Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetaAdsServices;
