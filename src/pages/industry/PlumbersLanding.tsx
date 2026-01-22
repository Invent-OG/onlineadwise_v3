import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";
import { Search, Rocket, Zap, ClipboardList, TrendingUp } from "lucide-react";

const plumbersData = {
  hero: {
    headline: "Stop Racing to $150 Drain Clogs.",
    highlightedText: "Start Booking $3K-$8K Repiping and Slab Leak Jobs.",
    subheadline:
      "The NAREN Method delivers 30-50 qualified calls per month—and positions you for high-value projects like repiping, slab leaks, and water heater replacements.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 30+ Plumbing Contractors Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      "You're competing on emergency service call fees with thin margins on drain clogs and leak repairs",
      "Most leads are low-ticket repairs, not the profitable repiping and replacement projects",
      "After-hours calls drain your resources but you can't afford to miss the big opportunities",
      "You have no repeat business system for water heaters, repiping, or other scheduled work",
      "You can't tell which marketing brings in the $5K jobs vs. the $150 service calls",
      "You're stuck doing $40K-$70K months when you should be hitting $100K-$150K consistently",
    ],
    transition:
      "The NAREN Method positions you as the specialist for high-value plumbing projects—so homeowners choose you for repiping, slab leaks, and major replacements, not just emergency drain clogs.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Fills Your Calendar with High-Value Plumbing Projects",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Project Specialist Positioning",
        description: "We position you around high-ticket services:",
        benefits: [
          '"Slab Leak Detection Specialist" - Advanced technology focus',
          '"Whole-House Repiping Expert" - Quality and longevity',
          '"Water Heater Replacement Authority" - Tankless and efficiency',
        ],
        outcome:
          "Positioning that attracts homeowners with major plumbing needs.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Dual-Intent Lead Generation",
        description: "We build campaigns for emergency and planned work:",
        benefits: [
          "Google Ads: Capture emergency searches + project-intent searches",
          "Facebook: Target remodeling homeowners, older homes, water heater age",
          "Retargeting: Convert service customers into project customers",
        ],
        outcome:
          "Balanced pipeline of emergency calls and high-value projects.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Job-Type Profitability",
        description: "We track what matters for plumbing profitability:",
        benefits: [
          "Job type profitability (emergency vs. scheduled vs. projects)",
          "Cost per closed project by service type",
          "Upsell conversion rate (service call → water heater)",
          "Customer lifetime value by acquisition source",
        ],
        outcome:
          "Clear visibility into your most profitable work and lead sources.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Conversion Testing",
        description: "We test what drives high-ticket closings:",
        benefits: [
          'Offers: "Free Camera Inspection" vs. "Financing Available"',
          "Messaging: Problem detection vs. prevention vs. cost savings",
          "Audiences: Older homes vs. remodeling vs. water heater age",
        ],
        outcome: "Data-driven optimization for maximum project value.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Project Pipeline Systems",
        description: "We build systems that generate ongoing project work:",
        benefits: [
          "Annual water heater maintenance contracts",
          "Repiping assessment follow-up sequences",
          "Post-service upsell automation",
          "Builder and remodeler referral systems",
        ],
        outcome:
          "A plumbing business built on profitable projects, not just emergency calls.",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Plumbers",
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
          "Create specialist positioning",
          "Design project-focused landing pages",
          "Set up Google Ads + Facebook campaigns",
          "Implement CRM with job-type tracking",
          "Build upsell automation",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: Rocket,
        description: "Your campaigns go live with project-focused testing:",
        items: [
          "Test project offers vs. emergency offers",
          "Target homeowners by home age and project intent",
          "Monitor revenue by lead source",
          "Weekly optimization based on job value",
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
          "Build remodeler and builder partnerships",
          "Implement water heater maintenance contracts",
          "Monthly strategy sessions for growth",
          "Document SOPs for sales process",
        ],
      },
    ],
    timeline:
      "Most plumbers see 30-50 qualified calls with 25%+ being high-value projects by Month 2-3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline:
      "Land more high-ticket projects and transform your plumbing business.",
    tiers: [
      {
        icon: Search,
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "Plumbers stuck with low-ticket service calls",
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
        perfectFor: "Plumbers ready to focus on projects",
        features: [
          "Everything in Audit",
          "Google + Facebook ads",
          "Specialist positioning",
          "CRM + upsell automation",
          "Project pipeline tracking",
          "Monthly strategy calls",
        ],
        expectedResults: "30-50 calls/month | 25%+ high-value projects",
        ctaText: "Apply Now",
      },
      {
        icon: Zap,
        name: "PARTNERSHIP",
        price: "$6,500",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-truck operations or growing plumbers",
        features: [
          "Everything in Implementation",
          "Builder/remodeler referrals",
          "Multi-service campaigns",
          "Team training",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "50+ calls/month | 35%+ high-value",
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
    headline: "Common Questions from Plumbers",
    items: [
      {
        question: "How do you shift from service calls to projects?",
        answer:
          "We create separate campaigns targeting project-minded homeowners (remodelers, older home owners, water heater replacement candidates) while maintaining emergency call campaigns. We also implement upsell systems that convert service call customers into project customers through camera inspections and assessments.",
      },
      {
        question: "What about emergency calls—they're still profitable, right?",
        answer:
          "Emergency calls are part of a balanced business. We optimize for both, but the key is converting emergency customers into project opportunities. A drain clog customer might need repiping. A water heater failure is an upgrade opportunity. We build systems to capture these upsells.",
      },
      {
        question: "How do you target slab leak or repiping opportunities?",
        answer:
          "We create campaigns targeting older homes (25+ years), areas with known pipe issues, and homeowners searching for symptoms like low water pressure or discolored water. We position you as the detection and solution expert, not just another plumber.",
      },
      {
        question: "What if I'm already busy with service calls?",
        answer:
          "That's actually a great position. We help you be selective about which calls you take while building a pipeline of high-value projects. The goal is to replace low-profit calls with high-profit projects, not just add more work.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Land High-Ticket Plumbing Projects?",
    subheadline:
      "Join 30+ plumbers using the NAREN Method to build project-focused businesses.",
    testimonials: [
      {
        quote:
          "We went from chasing drain clogs to booking multiple repiping and water heater jobs every week. Our revenue doubled.",
        author: "Mike Johnson",
        company: "Johnson Plumbing",
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
      text: "We cap our roster at {max} active plumbing contractors to maintain quality results.",
      spotsRemaining: 3,
      maxClients: 25,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Plumbers Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function PlumbersLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...plumbersData.hero} />
        <ProblemSection
          headline={plumbersData.problems.headline}
          problems={plumbersData.problems.items}
          transition={plumbersData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={plumbersData.narenMethod.subheadline}
          pillars={plumbersData.narenMethod.pillars}
        />
        <ProcessSection
          headline={plumbersData.process.headline}
          steps={plumbersData.process.steps}
          timeline={plumbersData.process.timeline}
        />
        <PricingSection
          headline={plumbersData.pricing.headline}
          subheadline={plumbersData.pricing.subheadline}
          tiers={plumbersData.pricing.tiers}
          scorecardCTA={plumbersData.pricing.scorecardCTA}
          availability={plumbersData.pricing.availability}
        />
        <FAQSection {...plumbersData.faq} />
        <FinalCTASection {...plumbersData.finalCTA} />
      </main>
    </div>
  );
}
