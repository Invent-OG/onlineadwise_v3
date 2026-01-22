import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";
import { Search, Rocket, Zap, ClipboardList, TrendingUp } from "lucide-react";

const electriciansData = {
  hero: {
    headline: "Stop Racing to $89 Service Calls.",
    highlightedText: "Start Landing $2K-$10K Electrical Projects.",
    subheadline:
      "The NAREN Method delivers 25-40 qualified calls per month—and positions you for high-ticket projects like panel upgrades, generators, and EV chargers.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 30+ Electrical Contractors Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      "You're competing with handymen on basic outlet and switch work for razor-thin margins",
      'Emergency calls turn into "I\'ll think about it" when you quote panel upgrades or rewiring',
      "You have no system for landing high-ticket work: generators, EV chargers, whole-house rewires",
      "Seasonal fluctuations crush your revenue—busy in summer, slow in winter",
      "Most leads are low-ticket service calls, not the $2K-$10K projects that actually grow your business",
      "You're stuck doing $30K-$50K months when you should be hitting $80K-$120K consistently",
    ],
    transition:
      "The NAREN Method positions you as the specialist for high-ticket electrical projects—so homeowners choose you for panel upgrades, generators, and EV chargers, not just outlet repairs.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Fills Your Calendar with High-Value Electrical Projects",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Specialist Positioning",
        description: "We target specific high-ticket services:",
        benefits: [
          '"EV Charger Installation Expert" - Ride the EV wave',
          '"Whole-House Generator Specialist" - Emergency preparedness',
          '"Panel Upgrade Authority" - Safety and capacity focus',
        ],
        outcome:
          "Positioning that attracts homeowners seeking major electrical work.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Dual-Channel Lead Generation",
        description: "We build campaigns for both emergency and planned work:",
        benefits: [
          "Google Ads: Capture emergency searches + high-intent project searches",
          "Facebook: Target homeowners planning renovations, EV purchases, generator needs",
          "Retargeting: Convert service call customers into project customers",
        ],
        outcome:
          "Balanced pipeline of emergency calls and high-value projects.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Profitability-Focused Metrics",
        description: "We track what drives your bottom line:",
        benefits: [
          "Revenue by job type (service call vs. project)",
          "Upsell conversion rate (service call → panel upgrade)",
          "Cost per closed project by service type",
          "Customer lifetime value tracking",
        ],
        outcome:
          "Clear visibility into your most profitable lead sources and job types.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Strategic Testing",
        description: "We test what drives high-ticket conversions:",
        benefits: [
          'Offers: "Free Electrical Safety Inspection" vs. "Panel Assessment"',
          "Audiences: New EV owners vs. 30+ year old homes vs. remodeling homeowners",
          "Messaging: Safety focus vs. capacity focus vs. cost savings",
        ],
        outcome: "Data-driven optimization for maximum project value.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Upsell Systems",
        description: "We build systems that turn service calls into projects:",
        benefits: [
          "Post-service safety assessment follow-ups",
          "Panel upgrade recommendation sequences",
          "Seasonal generator and EV charger campaigns",
          "Maintenance contract automation",
        ],
        outcome:
          "An electrical business built on high-value projects, not just emergency calls.",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Electricians",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: Search,
        description: "We analyze your current service mix and marketing:",
        items: [
          "Job type profitability analysis",
          "Lead source evaluation",
          "Upsell opportunity assessment",
          "Competitive positioning review",
          "Sales process optimization",
        ],
        deliverable: "Custom NAREN Scorecard + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: ClipboardList,
        description: "We build your high-ticket project pipeline:",
        items: [
          "Create specialist positioning (EV, generators, panels)",
          "Design project-focused landing pages",
          "Set up Google Ads + Facebook campaigns",
          "Implement CRM with upsell tracking",
          "Build follow-up automation",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: Rocket,
        description: "Your campaigns go live with project-focused testing:",
        items: [
          "Test project offers vs. service call offers",
          "Target homeowner segments by project type",
          "Monitor revenue by lead source",
          "Weekly optimization based on project value",
          "Bi-weekly performance reports",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: TrendingUp,
        description: "We turn leads into a project-focused business:",
        items: [
          "Scale winning campaigns to new areas",
          "Build builder and contractor referral networks",
          "Implement seasonal campaigns",
          "Monthly strategy sessions for growth",
          "Document SOPs for sales process",
        ],
      },
    ],
    timeline:
      "Most contractors see 25-40 qualified calls with 30%+ being high-ticket projects by Month 2-3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline:
      "Land more high-ticket projects and transform your electrical business.",
    tiers: [
      {
        icon: Search,
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "Electricians stuck with low-ticket service calls",
        features: [
          "Job profitability analysis",
          "Upsell opportunity audit",
          "Lead source evaluation",
          "Custom scorecard",
          "30-day action plan",
        ],
        ctaText: "Book Your Audit",
      },
      {
        icon: Rocket,
        name: "IMPLEMENTATION",
        popular: true,
        price: "$3,500",
        period: "month",
        commitment: "6-month minimum",
        perfectFor: "Contractors ready to focus on projects",
        features: [
          "Everything in Audit",
          "Google + Facebook ads",
          "Specialist positioning",
          "CRM + upsell automation",
          "Project pipeline tracking",
          "Monthly strategy calls",
        ],
        expectedResults: "25-40 calls/month | 30%+ high-ticket projects",
        ctaText: "Apply Now",
      },
      {
        icon: Zap,
        name: "PARTNERSHIP",
        price: "$6,500",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-truck operations or growing contractors",
        features: [
          "Everything in Implementation",
          "Builder/contractor referral systems",
          "Multi-specialty campaigns",
          "Team training",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "40+ calls/month | 40%+ high-ticket",
        ctaText: "Book Call",
      },
    ],
    scorecardCTA: {
      text: "NOT SURE WHICH IS RIGHT?",
      subtext: "Take the Free NAREN Scorecard (2 minutes)",
    },
    availability: {
      text: "LIMITED AVAILABILITY: We only take 5 new clients per quarter.",
      spots: 3,
    },
  },
  faq: {
    headline: "Common Questions from Electricians",
    items: [
      {
        question: "How do you shift from service calls to projects?",
        answer:
          "We create separate campaigns targeting project-minded homeowners (EV buyers, renovation planners, 30+ year old home owners) while maintaining emergency call campaigns. We also implement upsell systems that convert service call customers into project customers.",
      },
      {
        question:
          "What about emergency service calls—do you still help with those?",
        answer:
          "Absolutely. Emergency calls are part of a balanced business and often lead to project opportunities. We optimize for both, but our systems help you convert more emergency customers into high-ticket projects.",
      },
      {
        question: "How do you target EV charger installation customers?",
        answer:
          "We create campaigns targeting recent EV purchasers, Tesla owners, and homeowners researching EVs. We position you as the EV charger installation expert with messaging around convenience, safety, and proper installation.",
      },
      {
        question: "What if I'm already busy with service calls?",
        answer:
          "That's actually a great position. We help you be selective about which service calls you take while building a pipeline of high-value projects. The goal is to replace low-profit calls with high-profit projects, not just add more work.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Land High-Ticket Electrical Projects?",
    subheadline:
      "Join 30+ electricians using the NAREN Method to build project-focused businesses.",
    testimonials: [
      {
        quote:
          "We went from chasing $89 service calls to booking multiple $5K+ panel upgrades every month. Game changer.",
        author: "Robert Kim",
        company: "Kim Electric",
      },
    ],
    primaryCTA: {
      text: "Get Your Free NAREN Scorecard",
      subtext: "Takes 2 minutes. Get instant clarity.",
    },
    secondaryCTA: {
      text: "Book a 15-Min Strategy Call",
      subtext: "Discuss your specific market and goals.",
    },
    availability: {
      text: "We cap our roster at {max} active electrical contractors to maintain quality results.",
      spotsRemaining: 3,
      maxClients: 25,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Electricians Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function ElectriciansLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...electriciansData.hero} />
        <ProblemSection
          headline={electriciansData.problems.headline}
          problems={electriciansData.problems.items}
          transition={electriciansData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={electriciansData.narenMethod.subheadline}
          pillars={electriciansData.narenMethod.pillars}
        />
        <ProcessSection
          headline={electriciansData.process.headline}
          steps={electriciansData.process.steps}
          timeline={electriciansData.process.timeline}
        />
        <PricingSection
          headline={electriciansData.pricing.headline}
          subheadline={electriciansData.pricing.subheadline}
          tiers={electriciansData.pricing.tiers}
          scorecardCTA={electriciansData.pricing.scorecardCTA}
          availability={electriciansData.pricing.availability}
        />
        <FAQSection {...electriciansData.faq} />
        <FinalCTASection {...electriciansData.finalCTA} />
      </main>
    </div>
  );
}
