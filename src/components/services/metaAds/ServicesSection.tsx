import { motion } from "framer-motion";
import {
  Rocket,
  Palette,
  Users,
  TrendingUp,
  RefreshCw,
  ShoppingCart,
  FileText,
  BarChart3,
  Handshake,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Campaign Strategy & Setup",
    description:
      "Business objectives analysis, Pixel/CAPI setup, audience creation, full-funnel architecture design",
    bestFor: "Businesses starting Facebook Ads or rebuilding broken accounts",
  },
  {
    icon: Palette,
    title: "Creative Production & Testing",
    description:
      "Static image ads, video ads, carousel ads, Stories & Reels ads, dynamic creative testing",
    bestFor: "Brands needing high-performing, scroll-stopping creative",
  },
  {
    icon: Users,
    title: "Audience Research & Targeting",
    description:
      "Interest targeting, behavioral analysis, demographic segmentation, lookalike audience modeling",
    bestFor: "Businesses struggling with ad relevance and cost-per-click",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Landing page audit, CRO, checkout flow optimization, A/B testing, heatmap analysis",
    bestFor: "Businesses getting clicks but low conversions",
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Remarketing",
    description:
      "Website visitor retargeting, cart abandonment campaigns, post-purchase upsells, video viewer retargeting",
    bestFor: "Recovering lost leads and maximizing customer lifetime value",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Facebook Shops",
    description:
      "Facebook/Instagram Shop setup, product catalog optimization, Dynamic Product Ads, Advantage+ Shopping",
    bestFor: "E-commerce brands selling physical products",
  },
  {
    icon: FileText,
    title: "Lead Generation Campaigns",
    description:
      "Facebook Lead Ads, lead magnet creation, CRM integration, Messenger chatbot integration",
    bestFor: "Service businesses, B2B companies, coaches/consultants",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Weekly snapshots, monthly reports, custom dashboards, ROI tracking, attribution modeling",
    bestFor: "Data-driven businesses and white-label agency partners",
  },
  {
    icon: Handshake,
    title: "White-Label Partnership",
    description:
      "Fully white-labeled reporting, agency dashboard access, client communication templates, QBRs",
    bestFor: "Digital marketing agencies scaling Facebook Ads",
  },
  {
    icon: Search,
    title: "Account Audit & Rescue",
    description:
      "50-point account audit, wasted spend identification, pixel health check, 30-day turnaround plan",
    bestFor: "Underperforming ad accounts or recent agency failures",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
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
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="h2 mb-4 text-foreground">
            Complete Facebook Ads Services
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Everything You Need to Dominate Facebook & Instagram Advertising
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl p-6 shadow-md border border-border card-hover"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    Best For
                  </p>
                  <p className="text-sm text-foreground">{service.bestFor}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
