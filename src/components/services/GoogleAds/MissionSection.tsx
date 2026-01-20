import { motion } from "framer-motion";
import { Compass, Eye } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section-padding py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Mission & Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="mb-6 p-4 bg-primary/10 rounded-xl text-primary w-fit">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower small and medium businesses with enterprise-grade
              Google Ads systems that transform ad spend from unpredictable
              costs into predictable revenue engines. We believe every business
              deserves access to sophisticated digital marketing strategies—not
              just those with massive budgets.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="mb-6 p-4 bg-accent/10 rounded-xl text-accent w-fit">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the go-to Google Ads partner for growth-focused SMBs and
              agencies across the globe. We envision a world where businesses no
              longer fear Google Ads, but embrace them as their most reliable
              customer acquisition channel—backed by systems, data, and
              expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
