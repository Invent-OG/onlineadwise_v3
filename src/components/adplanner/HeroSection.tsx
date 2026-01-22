import { motion } from "framer-motion";
import { Calendar, ChevronRight, Rocket, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_LINK = "https://calendar.app.google/eD4t7GPF2hUhJ7GA9";
const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Animated Grid Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container-narrow relative z-10 hero-padding">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary">
              AI-Powered Performance Marketing
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h1 mb-6"
          >
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="text-gradient-gold animate-glow">
              Ad Spend Into
            </span>
            <br />
            <span className="text-foreground">Predictable Revenue</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subheading max-w-3xl mx-auto mb-10"
          >
            Remove the guesswork from paid advertising. Get data-driven audience
            targeting, campaign structures, and ROI forecasts that turn ad
            budgets into measurable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="xl" className="group">
                <Calendar className="h-5 w-5" />
                Book Strategy Call
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#calculator">
              <Button variant="outline" size="xl">
                <Target className="h-5 w-5" />
                Try Free Calculator
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Campaigns Optimized" },
              { value: "₹10Cr+", label: "Ad Spend Managed" },
              { value: "4.2x", label: "Average ROAS" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card-sci-fi p-4 md:p-6 hover-glow"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
