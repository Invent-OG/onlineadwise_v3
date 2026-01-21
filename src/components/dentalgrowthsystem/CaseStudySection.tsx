import {
  CheckCircle,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const metrics = [
  { label: "New patients/month", before: "12", after: "34", icon: Users },
  {
    label: "Cost per patient",
    before: "$380",
    after: "$147",
    icon: DollarSign,
  },
  { label: "Show-up rate", before: "62%", after: "89%", icon: Calendar },
  {
    label: "Monthly revenue",
    before: "$58K",
    after: "$127K",
    icon: TrendingUp,
  },
];

const solutions = [
  'Rebuilt targeting around "families with kids under 10" within 5-mile radius',
  'Created "New Patient Special" offer with video testimonials',
  "Implemented GA4 tracking to measure show-up rate, not just form fills",
  "Set up automated SMS reminders via GoHighLevel",
];

const CaseStudySection = () => {
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
            Case Study
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real Results from{" "}
            <span className="text-primary">Real Dental Practices</span>
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-primary/5"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 lg:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                  Dr. Sarah Mitchell
                </h3>
                <p className="text-primary-foreground/80">
                  Family Dentistry • Austin, TX
                </p>
              </div>
              <div className="rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                90-Day Results
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Challenge */}
            <div className="mb-8">
              <h4 className="mb-3 text-lg font-semibold text-foreground">
                THE CHALLENGE
              </h4>
              <p className="text-muted-foreground">
                "We were spending $4,500/month on Facebook Ads but getting
                mostly tire-kickers and no-shows. Our cost per new patient was
                $380, and we couldn't scale without losing money."
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                THE NAREN SOLUTION
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">
                      {solution}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results Metrics */}
            <div className="mb-8">
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                THE RESULTS
              </h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <metric.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">
                        {metric.before}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {metric.after}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="rounded-xl border border-primary/20 bg-primary/10 p-6">
              <p className="mb-4 text-lg italic text-foreground">
                "The NAREN Method didn't just get us more leads—it got us the
                RIGHT leads. Our schedule is full, and we're finally profitable
                on our ad spend."
              </p>
              <footer className="font-semibold text-primary">
                — Dr. Sarah Mitchell
              </footer>
            </blockquote>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button  size="lg" className="group">
            Get Results Like These
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
