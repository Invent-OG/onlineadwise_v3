import { motion } from "framer-motion";
import {
  Users,
  Layers,
  BarChart2,
  Crosshair,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Audience Intelligence",
    description:
      "Get 3-5 audience layers with interest stacking, LAL recommendations, and demographic filters optimized for your budget.",
    gradient: "from-blue-500/20 to-primary/20",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Campaign Structure",
    description:
      "Receive optimal campaign architecture including ad set planning, budget distribution, and creative format recommendations.",
    gradient: "from-purple-500/20 to-primary/20",
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Performance Forecasting",
    description:
      "Get realistic ranges for impressions, CTR, CPC, CPA, ROAS, and profitability indicators before spending a rupee.",
    gradient: "from-green-500/20 to-primary/20",
  },
  {
    icon: <Crosshair className="h-8 w-8" />,
    title: "Tracking Setup",
    description:
      "No-code friendly pixel setup with event verification. Simply paste your Pixel ID and we handle the rest.",
    gradient: "from-orange-500/20 to-primary/20",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Naming Conventions",
    description:
      "Scalable naming frameworks for campaigns, ad sets, and ads. Instantly identify winners and optimize faster.",
    gradient: "from-pink-500/20 to-primary/20",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Client Reports",
    description:
      "Generate shareable forecast reports with budget justification, success milestones, and scaling logic.",
    gradient: "from-cyan-500/20 to-primary/20",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-narrow px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient-gold">Dominate Paid Ads</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A complete decision-support engine that transforms ad spend into
            predictable, scalable revenue growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-sci-fi p-6 h-full hover-glow transition-all duration-300 group-hover:scale-[1.02]">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <div className="text-primary">{feature.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
