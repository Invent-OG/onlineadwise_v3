import { Check, Search, Rocket, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    icon: Search,
    name: "NAREN AUDIT",
    tagline: "ONE-TIME",
    price: "$997",
    perfectFor: "Practices unsure if their current agency or ads are working",
    features: [
      "90-minute deep-dive session",
      "Full ad account forensics",
      "GA4 tracking audit",
      "Custom NAREN Scorecard",
      "30-day action roadmap",
    ],
    deliverables: [
      "Video recording",
      "Written scorecard",
      "Implementation checklist",
    ],
    cta: "Book Your Audit",
    featured: false,
  },
  {
    icon: Rocket,
    name: "IMPLEMENTATION",
    tagline: "MOST POPULAR",
    price: "$3,500",
    period: "/month",
    commitment: "(6-month minimum)",
    perfectFor: "Practices doing $30K-$100K/month ready to scale",
    features: [
      "Everything in Audit, plus:",
      "Full ad management (FB + Google)",
      "GoHighLevel funnel setup",
      "GA4 + CAPI setup",
      "Landing page optimization",
      "Bi-weekly testing sprints",
      "Monthly NAREN reviews",
      "Slack support",
    ],
    deliverables: ["Live campaigns", "Monthly reports", "SOPs documented"],
    cta: "Apply Now",
    featured: true,
  },
  {
    icon: Zap,
    name: "PARTNERSHIP",
    tagline: "WHITE GLOVE",
    price: "$7,500",
    period: "/month",
    commitment: "+ Performance Bonus",
    perfectFor: "Multi-location or $100K+/month practices",
    features: [
      "Everything in Implementation, plus:",
      "2 strategy calls/month",
      "Team training on your SOPs",
      "Priority support (WhatsApp/Slack)",
      "Quarterly planning sessions",
      "Custom dashboards",
      "Revenue share opportunities",
    ],
    deliverables: [
      "Full-service partnership",
      "Executive reports",
      "Growth roadmap",
    ],
    cta: "Book Consultation",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
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
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're just starting with paid ads or ready to scale
            aggressively, we have a solution designed for your stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 transition-all duration-300 ${
                plan.featured
                  ? "border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20 scale-105 lg:scale-110"
                  : "border-border bg-background hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    {plan.tagline}
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                      plan.featured ? "bg-primary/30" : "bg-primary/20"
                    }`}
                  >
                    <plan.icon className="h-7 w-7 text-primary" />
                  </div>
                  {!plan.featured && (
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {plan.tagline}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-1 text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.commitment && (
                    <span className="text-sm text-muted-foreground">
                      {plan.commitment}
                    </span>
                  )}
                </div>

                {/* Perfect For */}
                <div className="mb-6 rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Perfect for:
                  </span>
                  <p className="mt-1 text-sm text-foreground">
                    {plan.perfectFor}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Deliverables */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Deliverables:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {plan.deliverables.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button size="lg" className="group w-full">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            💡 NOT SURE WHICH IS RIGHT FOR YOU?
          </p>
          <Button variant="outline" size="lg" className="group">
            Take the Free NAREN Scorecard (2 minutes)
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            ⚠️ <strong className="text-foreground">IMPORTANT:</strong> We only
            take 5 new Implementation clients per quarter to ensure quality.
            <span className="text-primary font-semibold">
              {" "}
              Current availability: 2 spots remaining.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
