import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";

const roofersData = {
  hero: {
    headline: "Stop Chasing $5K Patch Jobs.",
    highlightedText: "Start Closing $15K-$50K Full Replacements.",
    subheadline:
      "The NAREN Method delivers 15-30 qualified leads per month—and positions you as the trusted expert homeowners choose for major roofing projects.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 25+ Roofing Contractors Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      "Storm chasers are flooding your market with low-ball quotes that undercut your quality work",
      "Insurance jobs have 60-90 day payment cycles that strain your cash flow",
      "Lead generation services sell the same leads to 5+ roofers—you're competing before you even call",
      'You can\'t differentiate from competition when everyone claims "quality work" and "free estimates"',
      "Most leads want cheap repairs, not the $15K-$50K replacements that actually grow your business",
      "You're stuck doing $40K-$80K months when you should be consistently hitting $150K+",
    ],
    transition:
      "The NAREN Method positions you as the insurance claim specialist and premium roofing expert—so homeowners trust you with their biggest home investment.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Fills Your Calendar with High-Value Roofing Projects",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Expert Positioning",
        description: "We position you as a specialist, not a generalist:",
        benefits: [
          '"Insurance Claim Specialist" - Navigate homeowner claims with expertise',
          '"Premium Architectural Shingle Expert" - High-end material focus',
          '"Storm Damage Assessment Pro" - First call after severe weather',
        ],
        outcome: "Positioning that commands trust and higher project values.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Strategic Lead Generation",
        description: "We build campaigns optimized for roofing contractors:",
        benefits: [
          'Google LSA: Capture "roof replacement near me" and insurance-related searches',
          "Facebook: Target storm-damaged neighborhoods and aging home areas",
          "Retargeting: Follow up with homeowners who requested inspections",
        ],
        outcome: "Qualified leads actively seeking major roofing work.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Insurance-Focused Metrics",
        description: "We track what matters for roofing profitability:",
        benefits: [
          "Insurance approval rate, not just estimates given",
          "Cost per signed contract by project type",
          "Average job value and supplement success rate",
          "Time from lead to payment (cash flow tracking)",
        ],
        outcome:
          "Complete visibility into your most profitable lead sources and project types.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Strategic Testing",
        description: "We test what drives high-value closings:",
        benefits: [
          'Offers: "Free drone inspection" vs. "$500 insurance deductible coverage"',
          "Messaging: Storm damage urgency vs. preventive replacement",
          "Audiences: Recent storm areas vs. 20+ year old roofs",
        ],
        outcome: "Data-driven optimization for maximum project value.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Insurance Process Automation",
        description: "We streamline your insurance job workflow:",
        benefits: [
          "Automated insurance follow-ups and supplement requests",
          "CRM tracking from inspection to final payment",
          "Homeowner communication sequences throughout the process",
          "Review requests after project completion",
        ],
        outcome:
          "A roofing business that closes insurance jobs efficiently and predictably.",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Roofing Contractors",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: "search" as const,
        description: "We analyze your current marketing and sales process:",
        items: [
          "Lead source analysis",
          "Insurance vs. retail mix assessment",
          "Close rate by project type",
          "Competitive positioning review",
          "Sales process evaluation",
        ],
        deliverable: "Custom NAREN Scorecard + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: "clipboard" as const,
        description: "We build your high-ticket lead infrastructure:",
        items: [
          "Create insurance specialist positioning",
          "Design storm-response landing pages",
          "Set up Google LSA + Facebook campaigns",
          "Implement CRM with insurance tracking",
          "Build follow-up automation",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: "rocket" as const,
        description: "Your campaigns go live with replacement-focused testing:",
        items: [
          "Test insurance messaging vs. retail offers",
          "Target storm-affected areas dynamically",
          "Monitor close rates by lead source",
          "Weekly optimization based on contract value",
          "Bi-weekly performance reports",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: "trending" as const,
        description: "We turn leads into a full replacement pipeline:",
        items: [
          "Scale to adjacent territories",
          "Build referral systems with adjusters",
          "Implement seasonal campaigns",
          "Monthly strategy sessions for growth",
          "Document SOPs for sales team",
        ],
      },
    ],
    timeline:
      "Most contractors see 15-30 qualified replacement leads by Month 2-3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline: "Land more full replacements and dominate your market.",
    tiers: [
      {
        icon: "🔍",
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "Roofers stuck with low-value repair leads",
        features: [
          "Lead source analysis",
          "Insurance process audit",
          "Close rate optimization",
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
          "Google LSA + Facebook ads",
          "Insurance specialist positioning",
          "CRM + automation setup",
          "Sales process optimization",
          "Monthly strategy calls",
        ],
        expectedResults:
          "15-30 qualified leads/month | Focus on $15K+ projects",
        ctaText: "Apply Now",
      },
      {
        icon: "⚡",
        name: "PARTNERSHIP",
        price: "$8,000",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-crew operations or regional contractors",
        features: [
          "Everything in Implementation",
          "Storm response campaigns",
          "Multi-territory support",
          "Sales team training",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "30+ leads/month | Market dominance",
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
    headline: "Common Questions from Roofing Contractors",
    items: [
      {
        question:
          "How do you compete with storm chasers offering low-ball quotes?",
        answer:
          "We don't compete on price—we compete on trust. The NAREN Method positions you as the local expert with insurance claim expertise, proper licensing, and quality guarantees. Homeowners making $15K-$50K decisions want reliability, not the cheapest bid.",
      },
      {
        question: "Do you help with insurance job marketing specifically?",
        answer:
          "Yes. We build campaigns targeting storm-damaged areas, create insurance claim specialist messaging, and implement follow-up systems designed for the longer insurance sales cycle. We track insurance approval rates, not just leads.",
      },
      {
        question: "What about lead exclusivity?",
        answer:
          "All leads come directly to you—they're not shared with other roofers. Unlike lead gen services that sell the same lead to 5+ contractors, your NAREN campaigns generate exclusive opportunities.",
      },
      {
        question: "How long is the typical sales cycle for replacements?",
        answer:
          "Insurance jobs typically take 30-90 days from lead to payment. We build automation to nurture leads throughout this process, keeping you top-of-mind while insurance claims are processed.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Focus on Full Replacements?",
    subheadline:
      "Join 25+ roofing contractors using the NAREN Method to close high-value projects consistently.",
    testimonials: [
      {
        quote:
          "The NAREN Method helped us stop chasing repairs and focus on the $20K+ replacements that actually grow our business.",
        author: "Mark Thompson",
        company: "Thompson Roofing",
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
      text: "We cap our roster at {max} active roofing contractors to maintain quality results.",
      spotsRemaining: 2,
      maxClients: 20,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Roofing Contractors Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function RoofersLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...roofersData.hero} />
        <ProblemSection
          headline={roofersData.problems.headline}
          problems={roofersData.problems.items}
          transition={roofersData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={roofersData.narenMethod.subheadline}
          pillars={roofersData.narenMethod.pillars}
        />
        <ProcessSection
          headline={roofersData.process.headline}
          steps={roofersData.process.steps}
          timeline={roofersData.process.timeline}
        />
        <PricingSection
          headline={roofersData.pricing.headline}
          subheadline={roofersData.pricing.subheadline}
          tiers={roofersData.pricing.tiers}
          scorecardCTA={roofersData.pricing.scorecardCTA}
          availability={roofersData.pricing.availability}
        />
        <FAQSection {...roofersData.faq} />
        <FinalCTASection {...roofersData.finalCTA} />
      </main>
    </div>
  );
}
