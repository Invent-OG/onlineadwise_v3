import { motion } from "framer-motion";
import { Rocket, Building2, TrendingUp, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description:
      "Looking to establish their first digital advertising campaigns",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description: "Seeking to scale their existing marketing efforts",
  },
  {
    icon: TrendingUp,
    title: "Marketing Managers",
    description: "Wanting expert advice on campaign optimization",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Ready to take their brand to the next level",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const AudienceSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-foreground">
            <span className="text-gradient-gold">Perfect</span> For
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card rounded-2xl p-6 text-center hover:gold-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
