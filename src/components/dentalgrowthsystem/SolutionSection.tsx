import {
  Target,
  TrendingUp,
  BarChart3,
  FlaskConical,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Target,
    number: "1",
    title: "NICHE & NARRATIVE",
    description:
      "We don't run generic \"dentist ads.\" We create irresistible offers tailored to your ideal patient avatar—whether that's cosmetic dentistry for professionals, family dentistry for young parents, or emergency dental for immediate needs.",
    benefit:
      "Clear positioning, compelling offers, and messaging that makes your practice the obvious choice.",
  },
  {
    icon: TrendingUp,
    number: "2",
    title: "ACQUISITION SYSTEMS",
    description:
      "We build platform-specific campaigns (Facebook, Google, YouTube) that compound over time. No more random ad tests—we follow proven frameworks that work for dental practices.",
    benefit:
      "Scalable ad campaigns, retargeting funnels, and lead magnets that attract high-intent patients ready to book.",
  },
  {
    icon: BarChart3,
    number: "3",
    title: "REVENUE TRACKING & RETENTION",
    description:
      "Most agencies track clicks and leads. We track what matters: which ads drive appointments that show up, patient lifetime value (LTV), and true ROI using GA4 and Server-Side Tracking (CAPI).",
    benefit:
      "Crystal-clear attribution so you know exactly where every dollar goes and what returns it generates.",
  },
  {
    icon: FlaskConical,
    number: "4",
    title: "EXPERIMENTATION & SCALE",
    description:
      "Growth isn't luck—it's structured testing. We run controlled experiments on audiences, offers, creatives, and landing pages, then double down on what works.",
    benefit:
      "A documented testing framework that consistently finds new growth opportunities without risking your budget.",
  },
  {
    icon: Settings,
    number: "5",
    title: "NORMALIZED OPERATIONS",
    description:
      "We build systems, not dependencies. Everything is documented in SOPs, automated via GoHighLevel, and designed to work whether you're on vacation or in the office.",
    benefit:
      'Predictable, scalable operations that don\'t rely on a single "marketing genius" to keep running.',
  },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            The Solution
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Introducing the <span className="text-primary">NAREN Method</span>™
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            The 5-Pillar System That Turns Ad Spend Into Predictable Growth.
            This isn't just "ad management." It's a complete growth operating
            system designed specifically for service-based businesses like
            dental practices.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 lg:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                {/* Icon and Number */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary/30">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/30 lg:text-5xl">
                    0{pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {pillar.description}
                  </p>
                  <div className="inline-flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3">
                    <span className="text-sm font-semibold text-primary">
                      You get:
                    </span>
                    <span className="text-sm text-foreground/80">
                      {pillar.benefit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
