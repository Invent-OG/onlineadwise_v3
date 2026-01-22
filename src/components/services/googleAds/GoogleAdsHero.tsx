import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Rocket,
  Zap,
  Target,
  Flame,
} from "lucide-react";
import { useRef, useState } from "react";
import narender from "@/assets/narender-sharma.png";

const trustBadges = [
  { icon: CheckCircle2, text: "Google Partner" },
  { icon: DollarSign, text: "$5M+ Ad Spend Managed" },
  { icon: Rocket, text: "100+ Campaigns" },
  { icon: Zap, text: "24hr Response" },
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917065578055?text=Hi%20Narender,%20I'm%20interested%20in%20Google%20Ads%20services",
      "_blank",
    );
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] text-primary/20 hidden lg:block"
      >
        <TrendingUp className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-48 right-[10%] text-secondary/20 hidden lg:block"
      >
        <Target className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-[10%] text-primary/20 hidden lg:block"
      >
        <DollarSign className="w-12 h-12" />
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="bg-card border border-primary/30 text-foreground px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
          <Flame className="w-4 h-4 text-primary fill-primary" />
          Limited Slots Available for Q1 2026
          <Flame className="w-4 h-4 text-primary fill-primary" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-narrow relative z-10 flex items-center min-h-screen"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center hero-padding">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <span className="w-8 h-px bg-primary" />
                The NAREN Method™
                <span className="w-8 h-px bg-primary" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h1 mb-5 text-foreground"
            >
              <span className="text-primary">Google Ads</span> for SMBs &
              Service Agencies
            </motion.h1>

            {/* ROI Promise - Main Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-5 mb-6"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <TrendingUp className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    25–40% ROI Improvement
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Guaranteed results in 90 days or we work for free
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="subheading mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Turn your Google Search & YouTube ad spend into{" "}
              <span className="text-foreground font-medium">
                predictable revenue
              </span>{" "}
              with our proven system. No guesswork—just results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                variant="gold"
                size="xl"
                onClick={handleWhatsAppClick}
                className="group"
              >
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-secondary" size="xl">
                See Case Studies
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Narender's Image + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex flex-col items-center"
          >
            {/* Narender's Image with Hover Effect */}
            <motion.div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl blur-2xl"
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <motion.img
                  src={narender}
                  alt="Narender Sharma - Performance Marketing Expert"
                  className="w-80 h-auto object-cover"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Popup Card on Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Narender Sharma
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    Performance Marketing Expert
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>🎓 Google Ads Certified</span>
                    <span>•</span>
                    <span>7+ Years Experience</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-8 bg-card border border-border rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-lg font-bold text-foreground">100+</p>
                    <p className="text-xs text-muted-foreground">Campaigns</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-8 bg-card border border-border rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-lg font-bold text-foreground">$5M+</p>
                    <p className="text-xs text-muted-foreground">Ad Spend</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/3 -right-12 bg-success text-success-foreground p-3 rounded-xl shadow-lg"
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute top-1/4 -left-10 bg-primary text-primary-foreground p-3 rounded-xl shadow-glow"
              >
                <TrendingUp className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
