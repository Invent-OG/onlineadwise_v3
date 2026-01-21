import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Full audit of your current ads (if running)",
  "Competitive analysis (what local competitors are doing)",
  "Custom strategy outline (targeting, creative, budget)",
  "ROI projection (expected bookings, revenue, ROAS)",
];

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="audit"
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">
              Free 45-Minute Strategy Call
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Fill Your Calendar{" "}
            <span className="text-gradient-gold">Predictably?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a free 45-minute Med Spa Ad Audit. We'll review your current
            marketing, identify gaps, and show you exactly how the Booked-Solid
            System™ would work for your business.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border/50 mb-10 max-w-xl mx-auto"
          >
            <h3 className="text-lg font-heading font-bold text-foreground mb-6">
              What You'll Get:
            </h3>
            <ul className="space-y-4 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-background" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-muted-foreground mb-6">
            No pitch. No pressure. Just strategy.
          </p>

          <Button size="xl" className="group shadow-gold" asChild>
            <a href="#">
              Claim Your Free Audit
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
