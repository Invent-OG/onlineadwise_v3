
import { CaseStudySection } from "@/components/industry/CaseStudySection";
import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";
import Navbar from "@/components/ui/Navbar";

const pestControlData = {
  hero: {
    headline: "Stop Competing with $29 First-Treatment Gimmicks.",
    highlightedText: "Start Building a Recurring Revenue Machine.",
    subheadline:
      "The NAREN Method delivers 30-50 qualified leads per month—and turns them into annual contracts, not one-time treatments.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 40+ Pest Control Companies Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      "You're spending $3K-$6K/month on ads but getting mostly price-shoppers asking \"what's your cheapest service?\"",
      "Your leads want one-time ant treatments, not annual pest prevention plans",
      'You can\'t compete with the big franchises offering "$29 first month" gimmicks',
      "Your revenue is a rollercoaster—busy in spring/summer, dead in winter",
      "You have no idea which marketing channels actually drive annual contracts vs. one-offs",
      "You're stuck doing $50K-$80K/month when you should be at $120K+ with recurring revenue",
    ],
    transition:
      "The NAREN Method repositions you as the premium pest prevention expert—so homeowners choose annual plans, not one-time fixes.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Builds Predictable Recurring Revenue",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Premium Positioning",
        description:
          "We create offers around pest prevention, not just elimination:",
        benefits: [
          '"Year-Round Pest-Free Guarantee" (annual plans)',
          '"Termite Protection Program" (quarterly treatments)',
          '"New Homeowner Peace of Mind Package"',
        ],
        outcome:
          "Positioning that attracts homeowners who value ongoing protection, not quick fixes.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Multi-Channel Lead Generation",
        description:
          "We build platform-specific campaigns optimized for pest control:",
        benefits: [
          'Google Ads: Capture "termite inspection near me" and "pest control service"',
          "Facebook: Target new homeowners and specific zip codes",
          "Retargeting: Convert one-time shoppers into annual clients",
        ],
        outcome: "Scalable lead generation focused on high-LTV customers.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Metrics That Matter",
        description: "We track what actually drives your business:",
        benefits: [
          "Cost per lead",
          "One-time treatment vs. annual contract conversion",
          "Customer lifetime value (LTV) by acquisition source",
          "Retention rates month-over-month",
        ],
        outcome:
          "Complete visibility into which campaigns drive long-term revenue.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Systematic Testing",
        description:
          "We test systematically to maximize annual contract rates:",
        benefits: [
          "Offer types (free inspection vs. $X off annual plan)",
          'Messaging ("eliminate pests" vs. "prevent infestations")',
          'Guarantees ("100% satisfaction" vs. "re-treat for free")',
        ],
        outcome:
          "Data-driven optimization that increases contract conversions.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Retention Automation",
        description: "We build systems that maximize customer lifetime value:",
        benefits: [
          "Automated service reminders via GoHighLevel",
          "Contract renewal sequences 30 days before expiration",
          "CRM tracking for upsells (termite → mosquito → rodent control)",
        ],
        outcome:
          "A pest control business built on predictable recurring revenue.",
      },
    ],
  },
  caseStudies: {
    headline: "Real Results from Real Pest Control Companies",
    studies: [
      {
        companyName: "Guardian Pest Control",
        niche: "Residential & Commercial",
        location: "Austin, TX",
        challenge:
          "We were getting 60+ leads per month from Thumbtack and Google, but 80% wanted one-time treatments. Our annual contract rate was only 18%. Revenue was unpredictable.",
        solutions: [
          "Repositioned all ads around annual pest prevention vs. one-time fixes",
          'Created "New Homeowner" campaign with 3-month guarantee',
          "Implemented follow-up automation for leads who didn't book immediately",
          "Added upsell sequences for existing one-time customers",
          "Tracked LTV by acquisition channel to optimize spend",
        ],
        results: [
          {
            label: "Leads per month",
            before: "62",
            after: "44 (higher quality)",
            icon: "trending" as const,
          },
          {
            label: "Annual contract rate",
            before: "18%",
            after: "52%",
            icon: "chart" as const,
          },
          {
            label: "Average customer LTV",
            before: "$380",
            after: "$1,240",
            icon: "dollar" as const,
          },
          {
            label: "Monthly recurring revenue",
            before: "$22K",
            after: "$68K",
            icon: "dollar" as const,
          },
        ],
        testimonial:
          "We finally have predictable revenue. Instead of chasing one-time treatments, we're building long-term relationships.",
        author: "David Chen",
        authorTitle: "Owner, Guardian Pest Control",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Pest Control Companies",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: "search" as const,
        description: "We analyze your current marketing and operations:",
        items: [
          "Lead quality analysis",
          "Annual contract rate audit",
          "Pricing optimization review",
          "Customer retention analysis",
          "Competitive positioning assessment",
        ],
        deliverable: "Custom NAREN Scorecard + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: "clipboard" as const,
        description: "We build your recurring revenue infrastructure:",
        items: [
          "Create annual contract-focused positioning",
          "Design conversion-optimized landing pages",
          "Set up Google Ads + Facebook campaigns",
          "Implement GoHighLevel CRM with retention automation",
          "Build upsell and renewal sequences",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: "rocket" as const,
        description: "Your campaigns go live with contract-focused testing:",
        items: [
          "Test annual plan offers vs. monthly options",
          "A/B test messaging and guarantees",
          "Monitor contract conversion rates daily",
          "Weekly optimization based on LTV data",
          "Bi-weekly performance reports",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: "trending" as const,
        description: "We turn leads into a recurring revenue engine:",
        items: [
          "Scale winning campaigns to new territories",
          "Implement retention campaigns for renewals",
          "Create referral systems for existing clients",
          "Monthly strategy sessions for growth planning",
          "Document SOPs for team consistency",
        ],
      },
    ],
    timeline:
      "Most companies see 30-50 qualified leads and 40-60% annual contract rate by Month 3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline:
      "Build predictable recurring revenue with the right level of support.",
    tiers: [
      {
        icon: "🔍",
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor: "Companies stuck in the one-time treatment cycle",
        features: [
          "Lead quality analysis",
          "Annual contract rate audit",
          "Pricing optimization",
          "Custom scorecard",
          "30-day action plan",
        ],
        ctaText: "Book Your Audit",
      },
      {
        icon: "🚀",
        name: "IMPLEMENTATION",
        popular: true,
        price: "$4,000",
        period: "month",
        commitment: "6-month minimum",
        perfectFor: "Companies ready to build recurring revenue",
        features: [
          "Everything in Audit",
          "Google + Facebook ads management",
          "Annual contract focus",
          "CRM + automation setup",
          "Retention sequences",
          "Monthly strategy calls",
        ],
        expectedResults: "30-50 leads/month | 40-60% annual contract rate",
        ctaText: "Apply Now",
      },
      {
        icon: "⚡",
        name: "PARTNERSHIP",
        price: "$7,000",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-location or high-growth companies",
        features: [
          "Everything in Implementation",
          "Retention campaigns",
          "Upsell automation",
          "Multi-location support",
          "Priority support",
          "Quarterly planning",
        ],
        expectedResults: "50+ leads/month | 60%+ contract rate",
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
    headline: "Common Questions from Pest Control Companies",
    items: [
      {
        question: "How do you compete with big franchises offering $29 deals?",
        answer:
          "We don't. We position you differently: Emphasize local ownership and personalized service, focus on prevention not just elimination, and highlight guarantees and long-term relationships. The goal is to attract homeowners who value quality over discount gimmicks.",
      },
      {
        question: "What if my market is saturated with pest control companies?",
        answer:
          "That's actually good—it means there's demand. The NAREN Method helps you stand out through better positioning, not lower prices. We've helped contractors thrive in highly competitive markets like Florida, Texas, and California.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most Implementation clients see 30-50 qualified leads within 60 days, with annual contract rates climbing to 40-60% by Month 3. Results compound as we optimize and your reputation builds.",
      },
      {
        question: "What's included in the CRM automation?",
        answer:
          "We set up GoHighLevel with automated service reminders, contract renewal sequences 30 days before expiration, upsell campaigns (termite → mosquito → rodent), and complete pipeline tracking from lead to loyal customer.",
      },
    ],
  },
  finalCTA: {
    headline: "Ready to Build Predictable Recurring Revenue?",
    subheadline:
      "Join 40+ pest control companies using the NAREN Method to convert leads into long-term contracts.",
    testimonials: [
      {
        quote:
          "We finally have predictable revenue. Instead of chasing one-time treatments, we're building long-term relationships.",
        author: "David Chen",
        company: "Guardian Pest Control",
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
      text: "We cap our roster at {max} active pest control companies to maintain quality results.",
      spotsRemaining: 3,
      maxClients: 30,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Pest Control Companies Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function PestControlLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection {...pestControlData.hero} />
        <ProblemSection
          headline={pestControlData.problems.headline}
          problems={pestControlData.problems.items}
          transition={pestControlData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={pestControlData.narenMethod.subheadline}
          pillars={pestControlData.narenMethod.pillars}
        />
        <CaseStudySection
          headline={pestControlData.caseStudies.headline}
          caseStudies={pestControlData.caseStudies.studies}
        />
        <ProcessSection
          headline={pestControlData.process.headline}
          steps={pestControlData.process.steps}
          timeline={pestControlData.process.timeline}
        />
        <PricingSection
          headline={pestControlData.pricing.headline}
          subheadline={pestControlData.pricing.subheadline}
          tiers={pestControlData.pricing.tiers}
          scorecardCTA={pestControlData.pricing.scorecardCTA}
          availability={pestControlData.pricing.availability}
        />
        <FAQSection {...pestControlData.faq} />
        <FinalCTASection {...pestControlData.finalCTA} />
      </main>
    </div>
  );
}
