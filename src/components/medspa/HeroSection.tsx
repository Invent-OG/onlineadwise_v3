import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  Brain,
  BarChart3,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCalendar from "./AnimatedCalendar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20 md:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gold glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        {/* Side accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] text-gold/20 hidden lg:block"
      >
        <Target className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-48 right-[8%] text-gold/20 hidden lg:block"
      >
        <BarChart3 className="w-14 h-14" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 left-[5%] text-gold/15 hidden lg:block"
      >
        <TrendingUp className="w-10 h-10" />
      </motion.div>

      <div className="container-wide relative z-10 hero-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Digital Marketing Consultation
              </span>
            </motion.div>

            <h1 className="h1 mb-4 text-foreground">
              Fill Your Med Spa Calendar with{" "}
              <span className="text-gradient-gold">Qualified Appointments</span>
            </h1>

            <p className="subheading max-w-2xl mx-auto lg:mx-0 mb-4">
              — Predictably, Profitably, Every Month
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-gold mb-8"
            >
              <Zap className="w-4 h-4" />
              <span className="font-medium italic">
                "Smarter Decisions. Stronger Funnels. Predictable Growth."
              </span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="xl" className="group shadow-gold" asChild>
                <a href="#audit">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-border hover:bg-muted hover:border-gold/30"
                asChild
              >
                <a href="#method">Explore NAREN Method™</a>
              </Button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Powered by The NAREN Method™ — Created by Narender Sharma
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-gold" />
                <span>Performance-Driven</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Brain className="w-4 h-4 text-gold" />
                <span>Psychology-Based</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 text-gold" />
                <span>Predictable Growth</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent blur-3xl -z-10" />
            <AnimatedCalendar />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
