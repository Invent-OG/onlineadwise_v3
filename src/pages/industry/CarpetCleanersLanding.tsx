import { CaseStudySection } from "@/components/industry/CaseStudySection";
import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";

const carpetCleanersData = {
  hero: {
    headline: 'Stop Being the "Cheapest Per Room" Option.',
    highlightedText: "Start Booking 25-40 Premium Jobs Every Month.",
    subheadline:
      "The NAREN Method positions you as the quality choice for homeowners who care about results—not just the lowest price.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 35+ Carpet Cleaning Companies Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      'You\'re competing on "$99 for 3 rooms" offers and attracting bargain hunters',
      "Groupon and discount sites are destroying your margins",
      "You book jobs but customers ghost or reschedule constantly",
      "You have no repeat business system—every job is a new lead you have to pay for",
      "Seasonal slowdowns (winter) crush your revenue",
      "You're stuck at $20K-$40K/month with no path to $60K-$100K",
    ],
    transition:
      "Most carpet cleaners market themselves as commodities. The NAREN Method repositions you as the premium choice for homeowners with nice homes who care about results.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Attracts Premium Clients Who Pay What You're Worth",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Premium Positioning",
        description: "We target specific customer avatars who value quality:",
        benefits: [
          "Move-in/Move-out Cleanings: Homeowners wanting fresh starts",
          'Pet Owners: Targeting "pet stain removal" and "odor elimination"',
          'Luxury Homes: "Deep cleaning for high-end carpets and rugs"',
          "Repeat Maintenance: Annual or bi-annual cleaning contracts",
        ],
        outcome:
          "Positioning that attracts homeowners who value quality over the cheapest price.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Targeted Lead Generation",
        description: "We build campaigns that attract premium clients:",
        benefits: [
          'Google Ads: High-intent searches like "carpet cleaning near me"',
          "Facebook: Target homeowners in specific zip codes (high property values)",
          "Retargeting: Seasonal offers for past customers",
        ],
        outcome: "Scalable lead generation focused on high-value customers.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Metrics That Matter",
        description: "We track what drives profitability:",
        benefits: [
          "Cost per booked job (not just lead)",
          "Show-up rate and cancellation rate",
          "Average job value",
          "Repeat customer percentage",
        ],
        outcome:
          "Complete visibility into your most profitable customer sources.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Systematic Testing",
        description: "We test systematically to maximize job value:",
        benefits: [
          'Offers: "$50 off" vs. "Free room" vs. "Pet odor guarantee"',
          "Audiences: New homeowners vs. 5+ year homeowners vs. pet owners",
          "Creatives: Before/after photos vs. video demos vs. testimonials",
        ],
        outcome: "Data-driven optimization that increases average ticket size.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Repeat Business Systems",
        description: "We build systems that keep customers coming back:",
        benefits: [
          "Automated booking reminders (reduce no-shows by 40%)",
          "Follow-up sequences for 6-month and 12-month reminders",
          "Google review requests post-service",
          "Upsell campaigns (carpet → upholstery → tile cleaning)",
        ],
        outcome:
          "A carpet cleaning business built on repeat customers, not constant new leads.",
      },
    ],
  },
  caseStudies: {
    headline: "Real Results from Real Carpet Cleaning Companies",
    studies: [
      {
        companyName: "FreshStart Carpet Care",
        niche: "Residential",
        location: "Orlando, FL",
        challenge:
          "We were on Groupon and getting 40-50 jobs per month, but our average ticket was $110 and we were exhausted. Most customers never came back. Profit margins were razor-thin.",
        solutions: [
          'Exited Groupon and repositioned as "premium eco-friendly cleaning"',
          'Created "Pet Owner Package" with odor-elimination guarantee',
          "Targeted higher-income neighborhoods via Facebook",
          "Implemented 6-month reminder automation",
          "Added upsell for upholstery and tile cleaning at checkout",
        ],
        results: [
          {
            label: "Jobs per month",
            before: "48",
            after: "32 (higher value)",
            icon: "trending" as const,
          },
          {
            label: "Average job value",
            before: "$110",
            after: "$285",
            icon: "dollar" as const,
          },
          {
            label: "Repeat customer rate",
            before: "8%",
            after: "34%",
            icon: "chart" as const,
          },
          {
            label: "Monthly revenue",
            before: "$27K",
            after: "$78K",
            icon: "dollar" as const,
          },
        ],
        testimonial:
          "We're working smarter, not harder. The NAREN Method helped us break free from the discount trap.",
        author: "Jennifer Hayes",
        authorTitle: "Owner, FreshStart Carpet Care",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Carpet Cleaners",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: "search" as const,
        description: "We analyze your current positioning and operations:",
        items: [
          "Pricing analysis",
          "Positioning audit",
          "Marketing channel mix review",
          "Customer LTV analysis",
          "Competitive landscape assessment",
        ],
        deliverable: "Custom NAREN Scorecard + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: "clipboard" as const,
        description: "We build your premium positioning infrastructure:",
        items: [
          "Create premium service packages",
          "Design high-converting landing pages",
          "Set up Google Ads + Facebook campaigns",
          "Implement GoHighLevel CRM",
          "Build repeat customer automation",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: "rocket" as const,
        description: "Your campaigns go live with value-focused testing:",
        items: [
          "Test premium offers vs. discount offers",
          "A/B test audience segments",
          "Monitor show-up rates and job values",
          "Weekly optimization based on profitability",
          "Bi-weekly performance reports",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: "trending" as const,
        description: "We turn leads into a repeat business engine:",
        items: [
          "Scale winning campaigns to new areas",
          "Implement referral systems",
          "Create seasonal reactivation campaigns",
          "Monthly strategy sessions for growth",
          "Document SOPs for consistency",
        ],
      },
    ],
    timeline:
      "Most companies see 25-40 premium jobs and $250+ average ticket by Month 3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline:
      "Escape the discount trap and build a premium carpet cleaning business.",
    tiers: [
      {
        icon: "🔍",
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "Cleaners stuck in the discount/Groupon cycle",
        features: [
          "Pricing analysis",
          "Positioning audit",
          "Marketing channel mix",
          "Customer LTV analysis",
          "30-day action plan",
        ],
        ctaText: "Book Your Audit",
      },
      {
        icon: "🚀",
        name: "IMPLEMENTATION",
        popular: true,
        price: "$3,000",
        period: "month",
        commitment: "6-month minimum",
        perfectFor: "Cleaners ready to charge premium prices",
        features: [
          "Everything in Audit",
          "Google + Facebook ads",
          "Premium positioning",
          "Repeat business system",
          "CRM + automation",
          "Monthly strategy calls",
        ],
        expectedResults:
          "25-40 jobs/month | $250+ avg ticket | 30%+ repeat rate",
        ctaText: "Apply Now",
      },
      {
        icon: "⚡",
        name: "PARTNERSHIP",
        price: "$5,500",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-van operations ready to scale",
        features: [
          "Everything in Implementation",
          "Multi-service upsells",
          "Referral program setup",
          "Multi-van operations support",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "40+ jobs/month | $300+ avg ticket",
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
    headline: "Common Questions from Carpet Cleaners",
    items: [
      {
        question: "How do I stop competing on price?",
        answer:
          "The NAREN Method repositions you around value, not price. We create premium packages (pet odor elimination, eco-friendly deep cleaning), target higher-income neighborhoods, and build your reputation as the quality choice. Customers who value results will pay 2-3x more than bargain hunters.",
      },
      {
        question: "Should I leave Groupon and discount sites?",
        answer:
          "Usually yes, but strategically. We help you transition by building a direct lead pipeline first, then gradually reducing discount dependence. Most clients exit Groupon completely within 90 days and see higher revenue despite fewer total jobs.",
      },
      {
        question: "How do you reduce no-shows and cancellations?",
        answer:
          "We implement automated confirmation sequences via GoHighLevel: booking confirmation + 24-hour reminder + day-of reminder. Most clients see 40%+ reduction in no-shows within the first month.",
      },
      {
        question: "What's the repeat customer automation?",
        answer:
          "We set up automated reminders at 6 and 12 months post-service, seasonal reactivation campaigns, and post-service upsell sequences for upholstery and tile cleaning. This turns one-time customers into loyal repeat clients.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Escape the Discount Trap?",
    subheadline:
      "Join 35+ carpet cleaners using the NAREN Method to book premium jobs every month.",
    testimonials: [
      {
        quote:
          "We're working smarter, not harder. The NAREN Method helped us break free from the discount trap.",
        author: "Jennifer Hayes",
        company: "FreshStart Carpet Care",
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
      text: "We cap our roster at {max} active carpet cleaning companies to maintain quality results.",
      spotsRemaining: 3,
      maxClients: 25,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Carpet Cleaners Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function CarpetCleanersLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...carpetCleanersData.hero} />
        <ProblemSection
          headline={carpetCleanersData.problems.headline}
          problems={carpetCleanersData.problems.items}
          transition={carpetCleanersData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={carpetCleanersData.narenMethod.subheadline}
          pillars={carpetCleanersData.narenMethod.pillars}
        />
        <CaseStudySection
          headline={carpetCleanersData.caseStudies.headline}
          caseStudies={carpetCleanersData.caseStudies.studies}
        />
        <ProcessSection
          headline={carpetCleanersData.process.headline}
          steps={carpetCleanersData.process.steps}
          timeline={carpetCleanersData.process.timeline}
        />
        <PricingSection
          headline={carpetCleanersData.pricing.headline}
          subheadline={carpetCleanersData.pricing.subheadline}
          tiers={carpetCleanersData.pricing.tiers}
          scorecardCTA={carpetCleanersData.pricing.scorecardCTA}
          availability={carpetCleanersData.pricing.availability}
        />
        <FAQSection {...carpetCleanersData.faq} />
        <FinalCTASection {...carpetCleanersData.finalCTA} />
      </main>
    </div>
  );
}
