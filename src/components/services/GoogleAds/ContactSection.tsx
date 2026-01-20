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
      className="section-padding py-16 bg-background container relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6">
            🚀 Let's Talk
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary">Transform</span> Your Ads?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Book a free strategy call and discover how the NAREN Method can work
            for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="emoji-card h-full">
              <span className="text-5xl mb-6 block">📞</span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-muted rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>+91 7065578055</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-muted rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>connectwithmeforads@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 bg-muted rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>India (Serving Globally)</span>
                </div>
              </div>
              <Button
                variant="gold"
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <span className="mr-2 text-lg">💬</span> Start Your Growth
                Journey
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="emoji-card">
              <span className="text-4xl mb-4 block">📋</span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Get a Free Audit
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select Business Type</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="agency">Agency</option>
                  <option value="local">Local Business</option>
                </select>
                <textarea
                  placeholder="Your biggest challenge..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                >
                  <Send className="mr-2 w-5 h-5" /> Get Free Audit
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
