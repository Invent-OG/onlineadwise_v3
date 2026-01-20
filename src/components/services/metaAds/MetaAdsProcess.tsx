import { motion } from "framer-motion";
import {
  Search,
  Settings,
  Rocket,
  TrendingUp,
  FileText,
  CheckCircle,
} from "lucide-react";

const phases = [
  {
    icon: Search,
    week: "Week 1",
    title: "Discovery & Audit",
    description:
      "Kickoff call to understand your business, 50-point account audit, Pixel/CAPI health check, competitor analysis",
    deliverables: [
      "Audit report with findings",
      "Opportunity analysis",
      "Recommended strategy",
    ],
    involvement: "1 hour kickoff call + provide access",
  },
  {
    icon: Settings,
    week: "Week 2-3",
    title: "Strategy & Setup",
    description:
      "Campaign architecture design, audience research, creative strategy, CAPI implementation, GA4 tracking setup",
    deliverables: [
      "Campaign strategy document",
      "Audience targeting plan",
      "Creative concepts (5-10 variants)",
    ],
    involvement: "Approve strategy, provide brand assets",
  },
  {
    icon: Rocket,
    week: "Week 4-6",
    title: "Launch & Test",
    description:
      "Campaigns go live with controlled budget, daily monitoring, initial A/B testing, identify winners & losers",
    deliverables: [
      "Live campaigns",
      "Weekly performance reports",
      "Testing insights",
    ],
    involvement: "Weekly 30-min sync, approve budget increases",
  },
  {
    icon: TrendingUp,
    week: "Week 7-10",
    title: "Optimize & Scale",
    description:
      "Kill underperformers, scale winners (+20-30%/week), expand audiences, launch retargeting, creative refresh",
    deliverables: [
      "Optimized campaigns",
      "Scaling roadmap",
      "CRO recommendations",
    ],
    involvement: "Bi-weekly 30-min sync calls",
  },
  {
    icon: FileText,
    week: "Week 11-12",
    title: "Systemize & Document",
    description:
      "SOPs documented, reporting dashboards finalized, team training (if applicable), long-term scaling plan",
    deliverables: ["SOP documentation", "Custom dashboards", "6-month roadmap"],
    involvement: "Final review & planning session",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            The Process
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The 90-Day Transformation from Ad Chaos to Predictable Growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-12 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                >
                  <div
                    className={`bg-card rounded-2xl p-6 shadow-md border border-border inline-block ${isEven ? "lg:mr-8" : "lg:ml-8"}`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}
                    >
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {phase.week}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                        Deliverables
                      </p>
                      <ul
                        className={`space-y-1 ${isEven ? "lg:text-right" : ""}`}
                      >
                        {phase.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className={`text-sm text-muted-foreground flex items-center gap-2 ${isEven ? "lg:flex-row-reverse" : ""}`}
                          >
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Your Involvement */}
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                        Your Involvement
                      </p>
                      <p className="text-sm text-foreground">
                        {phase.involvement}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icon (Center) */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          <p className="font-heading text-2xl font-bold text-foreground mb-2">
            Total: <span className="text-accent">90 Days</span> to a Predictable
            Facebook Ads System
          </p>
          <p className="text-muted-foreground">
            From scattered tactics to a documented, scalable, revenue-generating
            machine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
