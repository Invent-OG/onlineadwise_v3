import { ArrowRight, Zap, Target, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />

      {/* Floating Icons */}
      <div className="absolute top-32 left-10 lg:left-32 float-animation opacity-20">
        <Target className="w-12 h-12 text-primary" />
      </div>
      <div
        className="absolute top-48 right-10 lg:right-40 float-animation opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <BarChart3 className="w-10 h-10 text-primary" />
      </div>
      <div
        className="absolute bottom-32 left-20 float-animation opacity-20"
        style={{ animationDelay: "2s" }}
      >
        <TrendingUp className="w-14 h-14 text-primary" />
      </div>

      <div className="container-narrow relative z-10 text-center ">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 slide-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Digital Marketing Consultation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="h1 mb-6 slide-up stagger-1">
            <span className="text-foreground">Where Strategy Meets</span>
            <br />
            <span className="">Psychology</span>
          </h1>

          {/* Subheading */}
          <p className="subheading mb-4 slide-up stagger-2 font-light">
            Where Ads Become Systems. Where Businesses Grow Predictably.
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary font-medium mb-10 slide-up stagger-3 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            "Smarter Decisions. Stronger Funnels. Predictable Growth."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up stagger-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold glow-gold hover:glow-gold transition-all duration-500 group shine-effect"
            >
              Start Your Growth Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg"
            >
              Explore NAREN Method™
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 slide-up stagger-5">
            <p className="text-sm text-muted-foreground mb-4">
              Powered by The NAREN Method™ — Created by Narender Sharma
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-sm">Performance-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-sm">Psychology-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-sm">Predictable Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
