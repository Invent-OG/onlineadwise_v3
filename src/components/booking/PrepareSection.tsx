import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Brief overview of your business and target audience",
  "Current advertising channels you're using (if any)",
  "Your primary goals and challenges",
  "Approximate marketing budget range",
  "Any specific questions you'd like to address",
];

const PrepareSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title text-foreground">
            Make the Most of{" "}
            <span className="text-gradient-gold">Your Session</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Preparation Checklist:
          </h3>
          <ul className="space-y-4">
            {checklist.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground italic">
              💡 Don't worry if you don't have all the answers — we'll guide you
              through the conversation!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrepareSection;
