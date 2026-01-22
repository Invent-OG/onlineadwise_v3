import { motion } from "framer-motion";
import { ArrowRight, Target, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center relative z-10 max-w-md mx-auto"
      >
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            NAREN Method™
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
          Marketing <span className="text-gradient-gold">Scorecard</span>
        </h1>

        <p className="text-muted-foreground text-base mb-8 leading-relaxed">
          Assess your marketing in 5 minutes and discover exactly where to focus
          for predictable growth.
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border"
          >
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-xs text-muted-foreground text-center">
              6 Pillars
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border"
          >
            <Target className="w-5 h-5 text-primary" />
            <span className="text-xs text-muted-foreground text-center">
              26 Questions
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border"
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-xs text-muted-foreground text-center">
              Instant Results
            </span>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-gold-gradient hover:opacity-90 text-primary-foreground glow-gold transition-all duration-300"
          >
            Start Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-muted-foreground mt-6"
        >
          Powered by Online Adwise™
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
