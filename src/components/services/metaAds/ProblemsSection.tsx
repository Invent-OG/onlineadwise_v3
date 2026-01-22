import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronDown,
  CheckCircle,
  Banknote,
  TrendingDown,
  HelpCircle,
  Ban,
  AlertTriangle,
  Target,
  TrendingUp,
  Palette,
  UserX,
  BarChart3,
  ClipboardList,
  Lightbulb,
  Building2,
  Landmark,
} from "lucide-react";

const smbProblems = [
  {
    icon: Banknote,
    title: "We're Spending Money But Not Getting Leads or Sales",
    symptoms: [
      "Ads get clicks, but no real inquiries",
      "Traffic doesn't convert",
      "No clarity on what's working",
    ],
    cause: "Wrong targeting + No clear offer + Broken funnel",
    fixes: [
      "Rebuild offer to be irresistible",
      "Precision targeting based on buyer intent",
      "Track conversions, not just clicks",
    ],
  },
  {
    icon: TrendingDown,
    title: "Performance Suddenly Drops Without Explanation",
    symptoms: [
      "Cost per lead increases 2-3x",
      "Reach drops overnight",
      "Campaigns stop after weeks",
    ],
    cause: "Ad fatigue + Audience saturation + No creative refresh",
    fixes: [
      "Creative refresh calendar prevents fatigue",
      "Audience expansion strategy",
      "Automated performance alerts",
    ],
  },
  {
    icon: HelpCircle,
    title: "We Don't Know If Ads or Website Is the Problem",
    symptoms: [
      "Good CTR but poor conversions",
      "Landing page issues",
      "Tracking is inaccurate",
    ],
    cause: "No conversion tracking + Weak landing pages",
    fixes: [
      "GA4 + CAPI implementation",
      "Landing page CRO testing",
      "Weekly technical audits",
    ],
  },
  {
    icon: Ban,
    title: "Facebook Keeps Rejecting or Limiting Our Ads",
    symptoms: [
      "Ads disapproved repeatedly",
      "Account restricted",
      "No clear reason from Meta",
    ],
    cause: "Policy violations + No compliance review",
    fixes: [
      "Pre-launch compliance checklist",
      "Policy-compliant templates",
      "Account health monitoring",
    ],
  },
  {
    icon: AlertTriangle,
    title: "We're Overwhelmed by the Complexity",
    symptoms: [
      "Too many settings",
      "No internal expertise",
      "No time to learn",
    ],
    cause: "Steep learning curve + No systematic process",
    fixes: [
      "SOP-driven campaign templates",
      "Done-For-You service",
      "Training & knowledge transfer",
    ],
  },
  {
    icon: Target,
    title: "We Get Leads, But They're Low Quality",
    symptoms: ["People don't respond", "Wrong audience", "No buying intent"],
    cause: "Broad targeting + No lead qualification",
    fixes: [
      "ICA refinement for buyer intent",
      "Lead form qualification",
      "Track quality, not quantity",
    ],
  },
];

const agencyProblems = [
  {
    icon: TrendingUp,
    title: "We Struggle to Scale Profitable Campaigns",
    symptoms: [
      "Works at ₹50K, breaks at ₹2 lakh+",
      "Cost per lead rises with budget",
      "Can't maintain at scale",
    ],
    cause: "No scaling framework + Audience exhaustion",
    fixes: [
      "Scaling protocols (20-30% weekly)",
      "Audience expansion strategy",
      "SOPs for scaling",
    ],
  },
  {
    icon: Palette,
    title: "Creative Fatigue Kills Performance",
    symptoms: [
      "Ads stop working after 2-3 weeks",
      "No system for testing",
      "No insight into resonance",
    ],
    cause: "No creative refresh calendar + Reactive approach",
    fixes: [
      "Creative testing framework",
      "14-day refresh calendar",
      "Frequency monitoring alerts",
    ],
  },
  {
    icon: UserX,
    title: "Clients Blame Us for Issues We Don't Control",
    symptoms: [
      "Website conversion issues",
      "Poor sales follow-up",
      "Bad offer or pricing",
    ],
    cause: "Unclear scope + No systems thinking",
    fixes: [
      "Data proves what YOU control",
      "Clear scope documentation",
      "Client education",
    ],
  },
  {
    icon: BarChart3,
    title: "Attribution and Tracking Are Unreliable",
    symptoms: [
      "iOS 14+ broke tracking",
      "Pixel not firing",
      "CRM doesn't match Ads Manager",
    ],
    cause: "No CAPI + Poor GA4 + No server-side tracking",
    fixes: [
      "CAPI + GA4 + Server-side tracking",
      "Multi-touch attribution",
      "Custom dashboards",
    ],
  },
  {
    icon: ClipboardList,
    title: "We Lack a Standardized Process",
    symptoms: [
      "Every client handled differently",
      "No SOPs",
      "Hero-dependent performance",
    ],
    cause: "No documented systems + Hero culture",
    fixes: [
      "Complete SOP library",
      "Team training on NAREN Method",
      "White-label partnership",
    ],
  },
  {
    icon: TrendingDown,
    title: "Our Reporting Doesn't Build Client Trust",
    symptoms: [
      "Data overload but no insights",
      "Clients confused",
      "Hard to justify decisions",
    ],
    cause: "Reporting focuses on data, not story",
    fixes: [
      "Executive-friendly dashboards",
      "White-label templates",
      "Monthly QBR frameworks",
    ],
  },
];

const ProblemsSection = () => {
  const [activeTab, setActiveTab] = useState<"smb" | "agency">("smb");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const problems = activeTab === "smb" ? smbProblems : agencyProblems;

  return (
    <section
      ref={ref}
      id="problems"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6"
          >
            🔍 Common Challenges
          </motion.span>
          <h2 className="h2 mb-4 text-foreground">
            Is This <span className="text-primary">You</span>?
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Different businesses, same frustrations. See if this sounds
            familiar...
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-muted/50 backdrop-blur-sm p-1.5 rounded-2xl inline-flex border border-border/50">
            <button
              onClick={() => {
                setActiveTab("smb");
                setExpandedCard(null);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "smb"
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-5 h-5" /> For Small Businesses
            </button>
            <button
              onClick={() => {
                setActiveTab("agency");
                setExpandedCard(null);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "agency"
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Landmark className="w-5 h-5" /> For Agencies
            </button>
          </div>
        </motion.div>

        {/* Problem Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {problems.map((problem, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className={`emoji-card cursor-pointer ${isExpanded ? "ring-2 ring-primary" : ""}`}
                >
                  {/* Icon Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/10 text-primary"
                      animate={
                        isExpanded
                          ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      <problem.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-heading font-semibold text-foreground leading-tight">
                      {problem.title}
                    </h3>
                  </div>

                  {/* Symptoms */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Symptoms
                    </p>
                    <ul className="space-y-1.5">
                      {problem.symptoms.map((symptom, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cause */}
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-3 mb-4">
                    <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">
                      Root Cause
                    </p>
                    <p className="text-sm text-foreground">{problem.cause}</p>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-success/10 border border-success/20 rounded-xl p-3">
                          <p className="text-xs font-bold text-success uppercase tracking-wider mb-2 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> NAREN Method Fix
                          </p>
                          <ul className="space-y-2">
                            {problem.fixes.map((fix, i) => (
                              <li
                                key={i}
                                className="text-sm text-foreground flex items-start gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                {fix}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand Hint */}
                  <div className="flex items-center justify-center mt-4 pt-3 border-t border-border/30">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      {isExpanded ? "Click to collapse" : "Click for solution"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Transition CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="emoji-card max-w-3xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h3>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              Whether you're a business owner or an agency—these problems share{" "}
              <span className="text-primary font-bold">ONE root cause</span>:
            </p>
            <p className="text-xl font-bold text-foreground">
              You're treating Facebook Ads as a{" "}
              <span className="text-destructive">TACTIC</span> instead of a{" "}
              <span className="text-primary">SYSTEM</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
