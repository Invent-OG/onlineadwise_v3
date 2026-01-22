import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center py-12 px-4"
    >
      <div className="glass-card gold-glow rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="icon-circle animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Transform Your Digital Presence <br />
          <span className="text-gradient-gold">in Just 30 Minutes</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Connect with our expert strategists to unlock your brand's full potential. 
          Whether you're looking to scale your advertising campaigns, optimize your ROI, 
          or build a comprehensive digital strategy — we're here to guide you.
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
