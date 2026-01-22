import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Consultations Conducted" },
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "$10M+", label: "Ad Spend Managed" },
  { value: "40+", label: "Industries Served" },
];

const testimonials = [
  {
    quote:
      "OnlineAdwise transformed our digital strategy. Within 3 months, our ROI doubled!",
    author: "Sarah M.",
    company: "TechStart Inc.",
  },
  {
    quote:
      "The consultation was incredibly valuable. They identified opportunities we never knew existed.",
    author: "Michael R.",
    company: "Growth Solutions",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-foreground">
            Trusted by{" "}
            <span className="text-gradient-gold">Ambitious Brands</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:gold-glow transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="text-foreground mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
