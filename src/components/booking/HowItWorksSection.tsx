import { motion } from "framer-motion";
import { Calendar, FileText, Video } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Choose Your Time",
    description:
      "Select a convenient slot from our calendar below that fits your schedule",
  },
  {
    number: 2,
    icon: FileText,
    title: "Share Your Goals",
    description:
      "Fill in a brief form telling us about your business and objectives",
  },
  {
    number: 3,
    icon: Video,
    title: "Connect & Strategize",
    description:
      "Join us for a productive 30-minute video call packed with insights",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-foreground">
            Simple <span className="text-gradient-gold">3-Step</span> Booking
            Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="flex flex-col items-center">
                  <div className="step-circle mb-4 relative z-10">
                    {step.number}
                  </div>
                  <div className="glass-card rounded-2xl p-6 w-full hover:gold-glow transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
