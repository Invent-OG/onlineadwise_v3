import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, Stethoscope, LineChart, FlaskConical } from "lucide-react";

const differences = [
  {
    icon: Stethoscope,
    problem: "Generic Agencies Don't Understand Med Spas",
    problemDetail:
      "Most agencies treat med spas like e-commerce or local services. They don't understand the consideration cycle (people don't impulse-buy Botox), the trust factor (you're injecting needles in faces), or the lifetime value model (one client = 5-10 treatments over 2 years).",
    solution: "Med Spa Specialists",
    solutionDetail:
      "We only work with med spas and medical aesthetics practices. We understand your market, your margins, your client psychology, and your compliance requirements (yes, we know what you can and can't say in ads).",
  },
  {
    icon: LineChart,
    problem: "No Real Tracking",
    problemDetail:
      'Most agencies report on "clicks" and "impressions" — vanity metrics that don\'t pay the bills. You need to know: How many bookings? How many showed up? What was the revenue? What\'s the LTV?',
    solution: "Full Tracking & Attribution",
    solutionDetail:
      "We install full tracking infrastructure (GA4, Conversions API, call tracking, CRM integration) so you can see exactly what's working. Every dollar is traced from click to completed treatment.",
  },
  {
    icon: FlaskConical,
    problem: "Random Optimization",
    problemDetail:
      "Most agencies randomly tweak things hoping something works. They have no testing framework, no structure, no compounding improvement.",
    solution: "Structured Testing Framework",
    solutionDetail:
      "We use the NAREN Method™ — a structured testing and scaling framework. One variable at a time. Statistical significance required. Winners documented. Losers archived. Results compound month over month.",
  },
];

const WhyDifferentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-gradient" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Most Med Spa Marketing{" "}
            <span className="text-destructive">Fails</span>
            <br />
            <span className="text-gradient-gold">
              (And How We're Different)
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {differences.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Problem */}
                <div className="p-6 lg:p-8 bg-destructive/5 border-b md:border-b-0 md:border-r border-destructive/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.problemDetail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="p-6 lg:p-8 bg-gold/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        Our Difference: {item.solution}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.solutionDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
