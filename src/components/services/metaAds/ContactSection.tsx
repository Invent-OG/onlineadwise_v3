import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917065578055", "_blank");
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-6">
            <Send className="w-4 h-4" />
            Let's Talk
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Ads?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Book a free strategy call and discover how the NAREN Method can work
            for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 shadow-glow">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    +91 7065578055
                  </span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    connectwithmeforads@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    India (Serving Globally)
                  </span>
                </div>
              </div>

              <Button
                variant="gold"
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full shadow-lg shadow-gold/20"
              >
                Start Your Growth Journey
              </Button>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 shadow-glow">
                <Send className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Get a Free Audit
              </h3>

              <form className="space-y-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-card">
                        Select Business Type
                      </option>
                      <option value="ecommerce" className="bg-card">
                        E-Commerce
                      </option>
                      <option value="saas" className="bg-card">
                        SaaS
                      </option>
                      <option value="agency" className="bg-card">
                        Agency
                      </option>
                      <option value="local" className="bg-card">
                        Local Business
                      </option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Your biggest challenge..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full mt-2 shadow-lg shadow-gold/20"
                >
                  Get Free Audit
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
