import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";

const pillars = [
  {
    letter: "N",
    emoji: "🎯",
    title: "Niche & Narrative",
    subtitle: "Clear Positioning & Irresistible Offers",
    description:
      "We architect your positioning to make you the obvious choice.",
    includes: [
      "Ideal Customer Avatar (ICA) Development",
      "Competitive Differentiation Analysis",
      "Irresistible Offer Creation",
      "Messaging Hierarchy (PAS Framework)",
      "USP Refinement",
    ],
    color: "primary",
  },
  {
    letter: "A",
    emoji: "📈",
    title: "Acquisition Systems",
    subtitle: "Platform-Specific Growth That Compounds",
    description: "We build campaigns that scale systematically—not randomly.",
    includes: [
      "Full-Funnel Campaign Architecture",
      "Advanced Audience Segmentation",
      "Retargeting & Remarketing",
      "Dynamic Product Ads (DPA)",
      "Lead Gen with Instant Forms",
      "Conversion API (CAPI)",
    ],
    color: "success",
  },
  {
    letter: "R",
    emoji: "📊",
    title: "Revenue Tracking",
    subtitle: "GA4, CAPI, LTV & Real Attribution",
    description: "We track revenue, LTV, and true ROI—not just clicks.",
    includes: [
      "GA4 Setup & Configuration",
      "Facebook CAPI Implementation",
      "Server-Side Tracking (GTM)",
      "Custom Conversion Events",
      "Multi-Touch Attribution",
      "ROI Dashboards",
    ],
    color: "secondary",
  },
  {
    letter: "E",
    emoji: "🔬",
    title: "Experimentation",
    subtitle: "Structured Testing, Not Random Optimization",
    description: "We test systematically using the Scientific Method.",
    includes: [
      "Creative Testing Framework",
      "Audience Split Testing",
      "Ad Copy A/B Testing",
      "Landing Page CRO",
      "Statistical Significance Analysis",
      "Scaling Protocols",
    ],
    color: "primary",
  },
  {
    letter: "N",
    emoji: "⚙️",
    title: "Normalized Operations",
    subtitle: "SOPs, Automation & Team-Ready Systems",
    description: "We build systems that run without you—documented & scalable.",
    includes: [
      "Campaign SOPs",
      "Automated Reporting",
      "CRM Integration",
      "Lead Nurturing Automation",
      "Team Training",
      "White-Label Reporting",
    ],
    color: "success",
  },
];

const NarenMethodSection = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  return (
    <section
      ref={ref}
      id="naren-method"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        style={{ y }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6"
          >
            🧠 The Framework
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">NAREN Method</span>™
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            5 Pillars That Turn Ad Spend Into Predictable Growth
          </p>

          {/* NAREN Letters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-3 md:gap-4 mb-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-heading font-bold text-xl md:text-2xl shadow-glow cursor-pointer"
                onClick={() =>
                  setExpandedPillar(expandedPillar === index ? null : index)
                }
              >
                {pillar.letter}
              </motion.div>
            ))}
          </motion.div>

          <p className="text-muted-foreground italic">
            "Ads create revenue.{" "}
            <span className="text-primary font-semibold">
              Systems create scale, retention, and freedom.
            </span>
            "
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-4">
          {pillars.map((pillar, index) => {
            const isExpanded = expandedPillar === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`emoji-card ${isExpanded ? "ring-2 ring-primary" : ""}`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedPillar(isExpanded ? null : index)}
                  className="w-full flex items-center gap-4 text-left"
                >
                  <motion.span
                    className="text-4xl md:text-5xl"
                    animate={
                      isExpanded
                        ? { rotate: [0, 20, 0], scale: [1, 1.2, 1] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {pillar.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">
                        Pillar {index + 1}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm font-bold text-foreground">
                        {pillar.letter} = {pillar.title}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                      {pillar.subtitle}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-border/30 mt-4">
                        <p className="text-muted-foreground mb-6">
                          {pillar.description}
                        </p>

                        <div className="bg-muted/30 rounded-2xl p-4 border border-border/30">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-success" />
                            What's Included
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {pillar.includes.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-success">✓</span>
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NarenMethodSection;
