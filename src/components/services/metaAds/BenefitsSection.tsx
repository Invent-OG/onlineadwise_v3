import { motion } from "framer-motion";
import {
  Award,
  DollarSign,
  BarChart3,
  Wrench,
  Handshake,
  Clock,
  FileText,
  Brain,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Meta Blueprint Certified Expert",
    description:
      "7+ years specializing ONLY in Facebook/Instagram Ads—not a generalist dabbling across 10 platforms.",
  },
  {
    icon: DollarSign,
    title: "$5M+ in Managed Ad Spend",
    description:
      "Battle-tested across 100+ campaigns, 15+ industries, small budgets to $50K/month accounts.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven, Not Gut-Driven",
    description:
      "Every decision backed by analytics, A/B tests, and statistical significance—zero guesswork.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise (CAPI, GA4, GTM)",
    description:
      "Most 'Facebook Ads experts' can't code. I implement server-side tracking, custom events, and attribution models.",
  },
  {
    icon: Handshake,
    title: "White-Label Partnership Available",
    description:
      "Agency owners: Scale Facebook Ads without hiring. I stay in the background, you keep the client relationship.",
  },
  {
    icon: Clock,
    title: "24-Hour Response Time",
    description:
      "Questions, emergencies, approvals—you'll never wait days for a response.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "No 'proprietary dashboards' hiding poor performance. Full access to Ads Manager + clear weekly reports.",
  },
  {
    icon: Brain,
    title: "Strategic, Not Tactical",
    description:
      "I don't just 'run ads'—I architect acquisition systems that integrate with your full customer journey.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    description:
      "Campaigns aren't 'set and forget.' Weekly testing, creative refreshes, and scaling protocols ensure ongoing improvement.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
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
            className="inline-block bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Me
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Narender Sharma for Facebook Ads?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The expertise, systems, and commitment that make the difference
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl p-6 shadow-md border border-border card-hover"
              >
                <div className="mb-4 p-3 bg-success/10 rounded-xl text-success w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
