import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-narrow relative hero-padding">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Trusted by 50+ dental practices</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h1 mb-6 text-foreground text-balance"
          >
            Stop Wasting Ad Dollars on Tire-Kickers.{" "}
            <span className="text-primary">Start Filling Your Schedule</span>{" "}
            with High-Value Patients.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subheading mx-auto mb-10 max-w-2xl"
          >
            The NAREN Method turns your ad spend into predictable new patient
            appointments—without the guesswork, wasted budget, or "hope
            marketing."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="xl" className="group w-full sm:w-auto">
              Get Your Free NAREN Scorecard
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" className="w-full sm:w-auto">
              Book a 15-Min Strategy Call
            </Button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-medium text-foreground">
                4.9/5 Average Rating
              </span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <span className="text-muted-foreground">
              Serving practices across USA, UK, Canada & India
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
