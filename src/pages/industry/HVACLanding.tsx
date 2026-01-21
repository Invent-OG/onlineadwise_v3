import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";

const hvacData = {
  hero: {
    headline: "Stop Losing System Replacements to Competitors.",
    highlightedText: "Start Closing $8K-$15K Jobs—Consistently.",
    subheadline:
      "The NAREN Method delivers 40-60 qualified leads per month—and positions you to close high-value system replacements, not just $99 tune-ups.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 35+ HVAC Contractors Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      'You\'re commoditized on "cheapest installation"—homeowners shop you against 5 other quotes',
      "Heavy seasonality crushes you—summer AC rush, then winter heating, then dead periods",
      "Most leads want $99 tune-ups, not the $8K-$15K replacements that actually build your business",
      "You can't track which ads drive high-value replacement jobs vs. just service calls",
      "Maintenance contracts would solve seasonality, but you have no system to sell them",
      "You're stuck doing $60K-$100K months when you should be hitting $150K-$250K consistently",
    ],
    transition:
      "The NAREN Method positions you as the trusted HVAC expert for major system investments—so homeowners choose you for replacements based on value, not just the lowest bid.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Fills Your Calendar with System Replacements Year-Round",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Replacement-Focused Positioning",
        description: "We create separate messaging for different job types:",
        benefits: [
          '"Emergency Repair" - Immediate response, 24/7 availability',
          '"System Replacement" - Energy efficiency, financing, quality brands',
          '"New Construction" - Builder partnerships, spec work',
        ],
        outcome:
          "Clear positioning that attracts high-value replacement opportunities.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Multi-Intent Lead Generation",
        description: "We build campaigns optimized for HVAC contractors:",
        benefits: [
          "Google LSA: Capture emergency searches with immediate credibility",
          "Google Ads: Target replacement and efficiency searches",
          "Facebook: Reach homeowners planning upgrades with financing offers",
        ],
        outcome:
          "Balanced pipeline of emergency calls and planned replacements.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Job-Type Revenue Tracking",
        description: "We track revenue by job type to optimize spend:",
        benefits: [
          "Revenue by job type (service call vs. replacement vs. maintenance contract)",
          "Cost per replacement lead vs. service call lead",
          "Maintenance contract conversion and renewal rates",
          "Seasonal performance comparison",
        ],
        outcome:
          "Complete visibility into what drives your most profitable revenue.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Conversion Testing",
        description: "We test what drives replacement closings:",
        benefits: [
          'Financing offers: "$0 down" vs. "low monthly payments"',
          "Seasonal promotions: Pre-season discounts vs. urgency messaging",
          "Rebates: Utility rebates, energy efficiency tax credits",
        ],
        outcome:
          "Data-driven optimization for maximum replacement conversions.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Year-Round Revenue Systems",
        description: "We build systems that smooth out seasonality:",
        benefits: [
          "Maintenance contract sales and renewal automation",
          "Pre-season replacement marketing campaigns",
          "Off-season promotional sequences",
          "Builder and realtor referral systems",
        ],
        outcome: "An HVAC business with predictable revenue 12 months a year.",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for HVAC Contractors",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: "search" as const,
        description: "We analyze your current marketing and service mix:",
        items: [
          "Revenue by job type analysis",
          "Lead source evaluation",
          "Seasonality pattern assessment",
          "Competitive positioning review",
          "Maintenance contract opportunity",
        ],
        deliverable: "Custom NAREN Scorecard + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: "clipboard" as const,
        description: "We build your replacement-focused pipeline:",
        items: [
          "Create job-type specific campaigns",
          "Design financing-focused landing pages",
          "Set up Google LSA + Google Ads + Facebook",
          "Implement CRM with job-type tracking",
          "Build maintenance contract automation",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: "rocket" as const,
        description: "Your campaigns go live with replacement-focused testing:",
        items: [
          "Test financing offers and seasonal promotions",
          "Target homeowners with aging systems",
          "Monitor replacement vs. service call ratio",
          "Weekly optimization based on job value",
          "Bi-weekly performance reports",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: "trending" as const,
        description: "We build year-round revenue predictability:",
        items: [
          "Scale winning campaigns across seasons",
          "Build builder and realtor partnerships",
          "Implement maintenance contract sales systems",
          "Monthly strategy sessions for growth",
          "Document SOPs for sales team",
        ],
      },
    ],
    timeline:
      "Most contractors see 40-60 qualified leads with 25%+ being replacement opportunities by Month 2-3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline: "Close more replacements and build year-round revenue.",
    tiers: [
      {
        icon: "🔍",
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "HVAC contractors stuck with seasonal swings",
        features: [
          "Revenue by job type analysis",
          "Seasonality assessment",
          "Maintenance contract opportunity",
          "Custom scorecard",
          "30-day action plan",
        ],
        ctaText: "Book Your Audit",
      },
      {
        icon: "🚀",
        name: "IMPLEMENTATION",
        popular: true,
        price: "$4,500",
        period: "month",
        commitment: "6-month minimum",
        perfectFor: "Contractors ready to focus on replacements",
        features: [
          "Everything in Audit",
          "Google LSA + Ads + Facebook",
          "Replacement-focused positioning",
          "CRM + job tracking",
          "Maintenance contract automation",
          "Monthly strategy calls",
        ],
        expectedResults: "40-60 leads/month | 25%+ replacements",
        ctaText: "Apply Now",
      },
      {
        icon: "⚡",
        name: "PARTNERSHIP",
        price: "$8,500",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-truck operations or regional contractors",
        features: [
          "Everything in Implementation",
          "Builder/realtor partnerships",
          "New construction campaigns",
          "Team training",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "60+ leads/month | Year-round stability",
        ctaText: "Book Call",
      },
    ],
    scorecardCTA: {
      text: "NOT SURE WHICH IS RIGHT?",
      subtext: "Take the Free NAREN Scorecard (2 minutes)",
    },
    availability: {
      text: "LIMITED AVAILABILITY: We only take 5 new clients per quarter.",
      spots: 2,
    },
  },
  faq: {
    headline: "Common Questions from HVAC Contractors",
    items: [
      {
        question: "How do you help with seasonality?",
        answer:
          "We attack seasonality from multiple angles: maintenance contract automation that provides recurring revenue, pre-season replacement campaigns, off-season promotional offers, and builder partnerships for new construction work. The goal is predictable revenue 12 months a year.",
      },
      {
        question:
          "How do you target replacement opportunities vs. service calls?",
        answer:
          "We create separate campaigns with different messaging and targeting. Replacement campaigns target homeowners with older systems, emphasize financing and efficiency savings, and use landing pages focused on new system benefits. Service call campaigns focus on emergency response and immediate availability.",
      },
      {
        question: "What about maintenance contracts?",
        answer:
          "Maintenance contracts are key to year-round revenue. We implement automated sales sequences for new customers, renewal reminders for existing contracts, and upsell campaigns for service call customers. Most clients see significant growth in contract revenue within 90 days.",
      },
      {
        question: "How do you handle financing promotion?",
        answer:
          "We test different financing offers (0% APR, low monthly payments, no-money-down) to find what resonates in your market. Financing is often the key to closing replacement jobs, so we make it a central part of your positioning and landing pages.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Close More Replacements Year-Round?",
    subheadline:
      "Join 35+ HVAC contractors using the NAREN Method to build predictable, high-value revenue.",
    testimonials: [
      {
        quote:
          "We used to dread the slow seasons. Now we have maintenance contracts and year-round marketing that keeps revenue steady. Best investment we've made.",
        author: "James Wilson",
        company: "Wilson HVAC",
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
      text: "We cap our roster at {max} active HVAC contractors to maintain quality results.",
      spotsRemaining: 2,
      maxClients: 25,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving HVAC Contractors Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function HVACLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...hvacData.hero} />
        <ProblemSection
          headline={hvacData.problems.headline}
          problems={hvacData.problems.items}
          transition={hvacData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={hvacData.narenMethod.subheadline}
          pillars={hvacData.narenMethod.pillars}
        />
        <ProcessSection
          headline={hvacData.process.headline}
          steps={hvacData.process.steps}
          timeline={hvacData.process.timeline}
        />
        <PricingSection
          headline={hvacData.pricing.headline}
          subheadline={hvacData.pricing.subheadline}
          tiers={hvacData.pricing.tiers}
          scorecardCTA={hvacData.pricing.scorecardCTA}
          availability={hvacData.pricing.availability}
        />
        <FAQSection {...hvacData.faq} />
        <FinalCTASection {...hvacData.finalCTA} />
      </main>
    </div>
  );
}
