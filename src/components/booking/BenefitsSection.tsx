import { motion } from "framer-motion";
import { Zap, BarChart3, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Personalized Strategy",
    points: [
      "Custom roadmap tailored to your business goals",
      "Industry-specific insights and recommendations",
      "Actionable steps you can implement immediately",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analysis",
    points: [
      "Free audit of your current advertising efforts",
      "Identify opportunities and gaps",
      "Data-driven recommendations",
    ],
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    points: [
      "15+ years of combined experience",
      "Proven track record across industries",
      "No-pressure, value-first approach",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-foreground">
            What You'll Get in Your{" "}
            <span className="text-gradient-gold">Free Consultation</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card rounded-2xl p-8 hover:gold-glow transition-all duration-300 group"
            >
              <div className="icon-circle mb-6 group-hover:animate-pulse-glow transition-all">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
