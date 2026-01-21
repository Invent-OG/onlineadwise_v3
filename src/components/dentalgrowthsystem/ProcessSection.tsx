import { Search, FileText, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    week: "Week 1",
    title: "NAREN AUDIT",
    description: "We dive deep into your current marketing setup:",
    items: [
      "Facebook & Google Ads account audit",
      "Website and funnel conversion analysis",
      "GA4 and tracking health check",
      "Competitive positioning review",
    ],
    deliverable:
      "A custom NAREN Scorecard showing exactly where you rank on each pillar (1-10 scale) and a 30-day action plan.",
  },
  {
    icon: FileText,
    week: "Week 2-3",
    title: "STRATEGY & SETUP",
    description: "We build your custom growth infrastructure:",
    items: [
      "Create your irresistible offer and messaging",
      "Set up Facebook & Google campaigns with tested frameworks",
      "Implement GA4 + Server-Side Tracking (CAPI)",
      "Build your GoHighLevel funnel with automated follow-ups",
    ],
    deliverable: "Complete campaign infrastructure ready to launch.",
  },
  {
    icon: Rocket,
    week: "Week 4-8",
    title: "LAUNCH & OPTIMIZE",
    description: "Your campaigns go live with structured testing:",
    items: [
      "Run controlled experiments on audiences and creatives",
      "Monitor real-time data to optimize for show-ups",
      "Scale what works, kill what doesn't",
      "Weekly performance reports with clear action items",
    ],
    deliverable: "Optimized campaigns driving qualified leads.",
  },
  {
    icon: TrendingUp,
    week: "Month 3+",
    title: "SCALE & SYSTEMATIZE",
    description: "We turn your growth engine into a predictable system:",
    items: [
      "Document everything in SOPs your team can follow",
      "Implement retention campaigns to maximize patient LTV",
      "Expand to new platforms or locations (if applicable)",
      "Monthly strategy sessions to plan your next growth phase",
    ],
    deliverable: "A fully systematized patient acquisition engine.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How We Partner With You
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Simple 4-Step Process to Predictable Growth
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 md:left-1/2 md:-ml-px md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 last:mb-0 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />

              {/* Card */}
              <div
                className={`group rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary/30">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">
                      {step.week}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground">{step.description}</p>

                <ul className="mb-4 space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Deliverable:
                  </span>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
