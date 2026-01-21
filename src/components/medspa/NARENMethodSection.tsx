import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Megaphone,
  BarChart3,
  FlaskConical,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    letter: "N",
    title: "Navigate",
    subtitle: "Strategic Clarity",
    description:
      "Before touching ads, we study your industry, customer psychology, funnel gaps, and data accuracy.",
    icon: Target,
  },
  {
    letter: "A",
    title: "Attract",
    subtitle: "Acquisition Systems",
    description:
      "Platform-specific paid growth strategies (Meta, Google, YouTube). 3-tier funnels. Retargeting. Multi-channel attribution.",
    icon: Megaphone,
  },
  {
    letter: "R",
    title: "Retain",
    subtitle: "Revenue Tracking",
    description:
      "GA4, Conversions API, LTV tracking, full attribution. Know exactly what's working. Optimize for profit, not vanity metrics.",
    icon: BarChart3,
  },
  {
    letter: "E",
    title: "Experiment",
    subtitle: "Scale Systematically",
    description:
      "Structured testing. One variable at a time. Data-driven decisions. Scale what works, kill what doesn't.",
    icon: FlaskConical,
  },
  {
    letter: "N",
    title: "Normalize",
    subtitle: "Operations",
    description:
      "SOPs for everything. Automation where possible. Systems that work without you. Built to scale, built to last.",
    icon: Settings,
  },
];

const NARENMethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="method"
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold text-sm font-medium">
              Our Signature Framework
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            THE <span className="text-gradient-gold">NAREN METHOD™</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A 5-stage behavioral + performance system that ensures consistent,
            sustainable, high-quality leads — not just inconsistent spikes.
          </p>
        </motion.div>

        {/* NAREN Letter Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 md:gap-6 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.letter + index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center"
            >
              <span className="text-gold font-heading font-bold text-xl md:text-2xl">
                {step.letter}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Method Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.letter + step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-gold/20" />
              )}

              <div className="flex gap-6 pb-8">
                {/* Letter Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30">
                    <span className="text-background font-heading font-bold text-2xl">
                      {step.letter}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-6 border border-border/50 hover:border-gold/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gold text-sm font-medium mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <Button size="xl" className="group shadow-gold" asChild>
            <a href="#audit">
              See How NAREN Works For Your Med Spa
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NARENMethodSection;
