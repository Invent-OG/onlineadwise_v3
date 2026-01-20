import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "StyleHub",
    industry: "E-Commerce Fashion Brand",
    challenge:
      "Spending $8,000/month on Facebook Ads with ROAS: 1.8x (Losing money), 72% cart abandonment rate, broken pixel tracking post-iOS 14",
    implementation: [
      "Repositioned from 'affordable fashion' to 'Sustainable Workwear for Millennial Professionals'",
      "Created 'Capsule Wardrobe Builder' quiz funnel",
      "Rebuilt campaign structure (TOF: Quiz → MOF → BOF)",
      "Implemented CAPI + GA4 Enhanced E-commerce",
      "Automated cart abandonment email + SMS sequence",
    ],
    results: [
      {
        icon: TrendingUp,
        label: "ROAS",
        before: "1.8x",
        after: "4.2x",
        change: "+133%",
      },
      {
        icon: DollarSign,
        label: "Revenue",
        before: "$14,400/mo",
        after: "$33,600/mo",
        change: "+133%",
      },
      {
        icon: Users,
        label: "CPA",
        before: "$48",
        after: "$22",
        change: "-54%",
      },
      {
        icon: Clock,
        label: "Payback",
        before: "30 days",
        after: "8 days",
        change: "-73%",
      },
    ],
    testimonial:
      "Narender didn't just improve our ads—he rebuilt our entire acquisition system. We went from barely profitable to scaling confidently.",
    author: "Priya M., Founder, StyleHub",
  },
  {
    client: "CloudSync Pro",
    industry: "B2B SaaS Lead Generation",
    challenge:
      "$12,000/month ad spend, 40 leads/month, Cost per lead: $300 (Too high for $49/month SaaS), 8% lead-to-trial conversion rate",
    implementation: [
      "Refined ICA to 'Construction Project Managers at 10-50 person firms'",
      "Created '7-Day Blueprint to Eliminate Project Delays' lead magnet",
      "Added Lead Qualification Questions in Instant Form",
      "Tested Webinar Funnel vs. Free Trial Funnel (Webinar won)",
      "Created lead scoring model for qualified leads",
    ],
    results: [
      {
        icon: Users,
        label: "Leads/Month",
        before: "40",
        after: "85",
        change: "+112%",
      },
      {
        icon: DollarSign,
        label: "Cost Per Lead",
        before: "$300",
        after: "$94",
        change: "-69%",
      },
      {
        icon: TrendingUp,
        label: "Lead-to-Trial",
        before: "8%",
        after: "24%",
        change: "+200%",
      },
      {
        icon: DollarSign,
        label: "CAC",
        before: "$3,750",
        after: "$1,128",
        change: "-70%",
      },
    ],
    testimonial:
      "For the first time, we can predict our pipeline. Narender's system gave us consistency we never had.",
    author: "Rohit K., Head of Growth, CloudSync Pro",
  },
  {
    client: "Bright Smile Dental",
    industry: "Local Service Business",
    challenge:
      "$4,500/month ad spend across 3 locations, 60-80 leads/month with only 15-20 booked appointments, 35% no-show rate",
    implementation: [
      "Created location-specific offers ('New Patient Special: Cleaning + X-Ray $99')",
      "Geo-targeted campaigns (5-mile radius per location)",
      "Lead Ads with instant Calendly booking integration",
      "Tested video testimonials from real patients (won)",
      "Automated SMS reminders (48hr, 24hr, 2hr before appointment)",
    ],
    results: [
      {
        icon: Users,
        label: "Booked Appts",
        before: "18/mo",
        after: "47/mo",
        change: "+161%",
      },
      {
        icon: DollarSign,
        label: "Cost/Appt",
        before: "$250",
        after: "$96",
        change: "-62%",
      },
      {
        icon: TrendingUp,
        label: "No-Show Rate",
        before: "35%",
        after: "12%",
        change: "-66%",
      },
      {
        icon: Clock,
        label: "Response Time",
        before: "4 hours",
        after: "8 minutes",
        change: "-97%",
      },
    ],
    testimonial:
      "We finally have a predictable new patient system. Our front desk isn't overwhelmed, and our chairs stay full.",
    author: "Dr. Anjali S., Owner, Bright Smile Dental",
  },
];

const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = caseStudies[currentIndex];

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <section id="case-studies" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            📈 Proven Results
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how the NAREN Method has transformed Facebook Ads performance
            across industries
          </p>
        </motion.div>

        {/* Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-card text-foreground rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                    {currentCase.client}
                  </h3>
                  <p className="text-primary-foreground/80">
                    {currentCase.industry}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="hero-secondary"
                    size="icon"
                    onClick={prevCase}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="hero-secondary"
                    size="icon"
                    onClick={nextCase}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Challenge */}
              <div className="mb-8">
                <h4 className="font-semibold text-accent uppercase tracking-wider text-sm mb-2">
                  The Challenge
                </h4>
                <p className="text-muted-foreground">{currentCase.challenge}</p>
              </div>

              {/* Implementation */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary uppercase tracking-wider text-sm mb-3">
                  NAREN Method Implementation
                </h4>
                <ul className="space-y-2">
                  {currentCase.implementation.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-success mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="font-semibold text-success uppercase tracking-wider text-sm mb-4">
                  Results (90 Days)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentCase.results.map((result, i) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={i}
                        className="bg-muted rounded-xl p-4 text-center"
                      >
                        <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground uppercase mb-1">
                          {result.label}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <span className="text-muted-foreground line-through">
                            {result.before}
                          </span>
                          <span className="text-foreground font-bold">
                            {result.after}
                          </span>
                        </div>
                        <p className="text-xs text-success font-semibold mt-1">
                          {result.change}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-foreground italic mb-4 text-lg">
                  "{currentCase.testimonial}"
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — {currentCase.author}
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 pb-6">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
