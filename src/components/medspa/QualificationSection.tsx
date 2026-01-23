import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const perfectFor = [
  "Generating $50K-$300K/month in revenue",
  "Established (2+ years in business)",
  "Offering proven treatments (Botox, fillers, laser, body contouring, etc.)",
  "Have capacity for more clients (not fully booked)",
  "Ready to invest $5K-$15K/month in ads + management",
  "Want predictable growth, not random viral moments",
];

const notFor = [
  "You're pre-revenue or brand new",
  "You're already fully booked (congrats! You don't need us yet)",
  "You want instant results (this is a 60-90 day ramp)",
  "You're not willing to invest in ads (organic alone won't scale predictably)",
  'You\'re looking for a "set it and forget it" solution (growth requires ongoing optimization)',
];

const QualificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding  bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-gradient" />

      <div className="container-wide max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Is This Right For Your Med Spa?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gold/5 rounded-2xl p-8 border border-gold/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Check className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                This is perfect if you're...
              </h3>
            </div>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                This is NOT for you if...
              </h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
