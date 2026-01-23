import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Megaphone,
  BarChart3,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Target,
    title: "Niche & Narrative",
    description:
      'We position your med spa with crystal-clear messaging that speaks directly to your ideal client. No generic "beauty" marketing — we tell the story that converts browsers into bookers.',
  },
  {
    icon: Megaphone,
    title: "Acquisition System",
    description:
      'We build a 3-tier Facebook & Instagram ad funnel: Awareness → Consideration → Conversion. Every campaign is structured to move people from "Who is this?" to "I\'m booking today."',
  },
  {
    icon: BarChart3,
    title: "Revenue Tracking",
    description:
      "Full attribution from first click to completed treatment. GA4, Conversions API, call tracking, CRM integration. You'll know exactly what's working and what's not — no more guessing.",
  },
  {
    icon: FlaskConical,
    title: "Structured Testing & Scale",
    description:
      "We don't spray and pray. We test one variable at a time (creative, copy, audience, offer), identify winners, and scale systematically. This is how you go from 30 bookings/month to 100+ without waste.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-padding   bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-gradient" />

      <div className="container-wide max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold text-sm font-medium">The Solution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            The Booked-Solid Med Spa System™
          </h2>

          <p className="text-lg text-muted-foreground">
            A proven framework designed specifically for med spas generating
            $50K-$300K/month who want predictable growth without guessing.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:border-gold/30 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <pillar.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button size="xl" className="group shadow-gold w-full sm:w-auto h-auto py-4 md:py-6 whitespace-normal text-left sm:text-center" asChild>
            <a href="#audit" className="flex items-center justify-center gap-2">
              <span className="flex-1 sm:flex-none">See How It Works For Your Med Spa</span>
              <ArrowRight className="ml-2 hidden md:block w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
