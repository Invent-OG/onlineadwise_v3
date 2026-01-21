import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: DollarSign, value: "$4M+", label: "Ad Spend Managed" },
  { icon: Users, value: "50+", label: "Med Spas Served" },
  { icon: Award, value: "7+", label: "Years Experience" },
];

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-gradient" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden relative border border-border/50">
              {/* Placeholder for founder image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center border border-gold/30">
                    <span className="text-gold font-heading font-bold text-5xl">
                      N
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">Founder Photo</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-card rounded-xl shadow-xl border border-border/50 p-4">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="font-heading font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold text-sm font-medium">About</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Meet Narender Sharma
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I've spent the last 7 years building ad systems for med spas,
                clinics, and health/wellness brands.
              </p>
              <p>
                I've managed over{" "}
                <strong className="text-foreground">$4M in ad spend</strong>{" "}
                across 50+ med spas in 12 states. I've seen what works and what
                doesn't.
              </p>
              <p>
                Most agencies are generalists. They jump from industry to
                industry, learning on your dime. I don't do that. I only work
                with med spas and medical aesthetics practices because I've
                obsessed over this niche long enough to know exactly what
                converts.
              </p>
              <p>
                I created the{" "}
                <strong className="text-gold">NAREN Method™</strong> because I
                was tired of seeing med spa owners waste money on agencies that
                couldn't track results, couldn't scale systematically, and
                couldn't build anything that lasted.
              </p>
              <p className="text-lg text-foreground font-medium">
                This isn't a side hustle. This is what I do. And I'm really good
                at it.
              </p>
            </div>

            <Button size="xl" className="group shadow-gold" asChild>
              <a href="#audit">
                Book Your Free Med Spa Ad Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
