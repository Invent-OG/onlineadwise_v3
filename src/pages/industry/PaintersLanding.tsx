import { CaseStudySection } from "@/components/industry/CaseStudySection";
import { FAQSection } from "@/components/industry/FAQSection";
import { FinalCTASection } from "@/components/industry/FinalCTASection";
import { HeroSection } from "@/components/industry/HeroSection";
import { NarenMethodSection } from "@/components/industry/NarenMethodSection";
import { PricingSection } from "@/components/industry/PricingSection";
import { ProblemSection } from "@/components/industry/ProblemSection";
import { ProcessSection } from "@/components/industry/ProcessSection";
import {
  Search,
  Rocket,
  Zap,
  ClipboardList,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";

const paintersData = {
  hero: {
    headline: "Stop Chasing Low-Ball Estimates.",
    highlightedText: "Start Booking Premium Paint Jobs—Predictably.",
    subheadline:
      "The NAREN Method turns your ad spend into 20-35 qualified estimates every month—without competing on price or wasting time on tire-kickers.",
    tagline: "Digital Marketing Consultation",
    primaryCTA: "Get Your Free NAREN Scorecard",
    secondaryCTA: "Book a 15-Min Strategy Call",
    trustText: "Trusted by 30+ Painting Contractors Across the Region",
    rating: "4.9/5 Average Rating",
  },
  problems: {
    headline: "Sound Familiar? You're Not Alone.",
    items: [
      "You're spending $2,000-$5,000/month on ads but getting mostly price-shoppers asking \"what's your cheapest rate?\"",
      'You waste hours driving to estimates for jobs you\'ll never win because they "want 5 more quotes"',
      "Your phone rings during spring/summer but goes silent in fall/winter—you have zero consistent lead flow",
      "You've tried Facebook Ads, Google, Nextdoor—but can't tell which platform actually brings in jobs that close",
      'Your website looks like every other painter—nothing makes you stand out from the "$199 room special" crowd',
      "You're stuck doing $30K-$60K months when you should be consistently hitting $80K-$150K",
    ],
    transition:
      "Here's the truth: Most painting businesses market themselves like commodities. The NAREN Method positions you as the premium choice—so homeowners choose you based on value, not price.",
  },
  narenMethod: {
    subheadline:
      "The 5-Pillar System That Fills Your Calendar with High-Value Paint Jobs",
    pillars: [
      {
        letter: "N",
        title: "NICHE & NARRATIVE",
        subtitle: "Strategic Positioning",
        description:
          "We don't run generic \"painting services\" ads. We create irresistible offers for your ideal customer—whether that's exterior repaints for HOA-compliant neighborhoods, interior transformations for move-in-ready homes, or commercial property managers needing reliable contractors.",
        benefits: [],
        outcome:
          "Clear positioning that attracts homeowners willing to pay for quality, not bargain hunters.",
      },
      {
        letter: "A",
        title: "ACQUISITION SYSTEMS",
        subtitle: "Multi-Platform Lead Generation",
        description:
          "We build platform-specific campaigns that work for painting contractors:",
        benefits: [
          'Google Ads: Capture high-intent searches like "exterior painter near me"',
          "Facebook/Instagram: Target homeowners in specific zip codes with before/after galleries",
          "YouTube: Video ads showcasing your craftsmanship and customer testimonials",
        ],
        outcome:
          "Scalable lead generation that fills your pipeline year-round, not just peak season.",
      },
      {
        letter: "R",
        title: "REVENUE TRACKING & RETENTION",
        subtitle: "Data-Driven Decisions",
        description:
          'Most agencies count "leads." We track what matters: estimates scheduled, show-up rates, close rates, and average job value. Using GA4 and Server-Side Tracking, you\'ll know exactly which ads drive profitable jobs.',
        benefits: [],
        outcome:
          "Crystal-clear ROI reporting—see which campaigns pay for themselves and which ones drain your budget.",
      },
      {
        letter: "E",
        title: "EXPERIMENTATION & SCALE",
        subtitle: "Systematic Testing",
        description:
          "We test systematically across audiences, offers, and creatives:",
        benefits: [
          "Audience: New construction neighborhoods vs. 20+ year-old homes",
          "Offers: Free color consultation vs. $500 off jobs over $5K",
          "Creatives: Before/after photos vs. video testimonials vs. process videos",
        ],
        outcome:
          "Data-driven growth that compounds—we find what works and scale it aggressively.",
      },
      {
        letter: "N",
        title: "NORMALIZED OPERATIONS",
        subtitle: "Systems That Scale",
        description: "We build systems that work without you:",
        benefits: [
          "Automated estimate request follow-ups via GoHighLevel",
          "SMS reminders to reduce no-shows",
          "CRM pipeline tracking from lead → estimate → job → payment",
          "SOPs your crew can follow even when you're not available",
        ],
        outcome:
          "A painting business that runs predictably, not one dependent on your constant hustle.",
      },
    ],
  },
  caseStudies: {
    headline: "Real Results from Real Painting Contractors",
    studies: [
      {
        companyName: "Elite Painting Co.",
        niche: "Residential Exterior & Interior",
        location: "Denver, CO",
        challenge:
          "We were spending $3,200/month on Google Ads and getting 40-50 leads, but only 12-15 were scheduling estimates. Our close rate was 22%, and we were constantly competing on price. Monthly revenue averaged $48K.",
        solutions: [
          'Repositioned messaging around "premium finishes that last 2x longer"',
          "Created neighborhood-specific landing pages with local before/afters",
          "Implemented call tracking to identify which keywords drove qualified leads",
          "Built automated follow-up sequence for estimates that didn't close immediately",
          "Added retargeting for website visitors who didn't book",
        ],
        results: [
          {
            label: "Qualified estimates/month",
            before: "15",
            after: "28",
            icon: TrendingUp,
          },
          {
            label: "Average job value",
            before: "$3,200",
            after: "$4,800",
            icon: DollarSign,
          },
          {
            label: "Close rate",
            before: "22%",
            after: "41%",
            icon: BarChart3,
          },
          {
            label: "Monthly revenue",
            before: "$48K",
            after: "$118K",
            icon: DollarSign,
          },
        ],
        testimonial:
          "The NAREN Method didn't just get us more leads—it got us better leads. We're now the premium choice in our market, and homeowners book us before getting other quotes.",
        author: "Mike Patterson",
        authorTitle: "Owner, Elite Painting Co.",
      },
      {
        companyName: "ProColor Painters",
        niche: "Commercial & Multi-Unit",
        location: "Phoenix, AZ",
        challenge:
          "Our business was 80% referrals, which was great but unpredictable. We wanted to add 15-20 estimates per month through paid ads but had no idea where to start. We tried Facebook Ads on our own and burned $4,000 with only 3 estimates.",
        solutions: [
          "Built separate campaigns for commercial (property managers) vs. residential (homeowners)",
          "Created case study ads targeting HOA boards and apartment complexes",
          "Set up Google Local Service Ads for immediate trust and visibility",
          "Implemented video testimonials from property managers",
          "Used GA4 to track which campaigns drove actual signed contracts",
        ],
        results: [
          {
            label: "Commercial estimates/month",
            before: "3",
            after: "18",
            icon: TrendingUp,
          },
          {
            label: "Residential estimates/month",
            before: "8",
            after: "22",
            icon: TrendingUp,
          },
          {
            label: "Signed contract rate",
            before: "31%",
            after: "48%",
            icon: BarChart3,
          },
          {
            label: "Monthly revenue",
            before: "$62K",
            after: "$156K",
            icon: DollarSign,
          },
        ],
        testimonial:
          "We finally have predictable new business coming in every week. The NAREN system gave us the confidence to hire two more crews.",
        author: "Carlos Mendez",
        authorTitle: "Owner, ProColor Painters",
      },
    ],
  },
  process: {
    headline: "Our Proven 4-Step Process for Painting Contractors",
    steps: [
      {
        week: "Week 1",
        title: "NAREN Audit",
        icon: Search,
        description: "We analyze your current marketing setup:",
        items: [
          "Review any existing ad campaigns (Facebook, Google, LSA)",
          "Website and landing page conversion analysis",
          "Competitive positioning in your market",
          "Phone tracking and lead management audit",
          "Pricing structure and ideal customer profile",
        ],
        deliverable:
          "Custom NAREN Scorecard (1-10 rating on each pillar) + 30-day action roadmap",
      },
      {
        week: "Week 2-3",
        title: "Strategy & Setup",
        icon: ClipboardList,
        description: "We build your growth infrastructure:",
        items: [
          "Create your premium positioning and irresistible offer",
          "Design neighborhood-specific landing pages",
          "Set up Google Ads (Search + Local Service Ads)",
          "Launch Facebook/Instagram campaigns with before/after galleries",
          "Implement GA4 + call tracking + Server-Side Tracking",
          "Build GoHighLevel CRM with automated follow-ups",
        ],
      },
      {
        week: "Week 4-8",
        title: "Launch & Optimize",
        icon: Rocket,
        description: "Your campaigns go live with structured testing:",
        items: [
          "Test 3-5 audience segments (neighborhoods, home values, home age)",
          "Run A/B tests on offers and creative formats",
          "Monitor cost per estimate and show-up rates daily",
          "Weekly optimization based on performance data",
          "Bi-weekly performance reports with clear metrics",
        ],
      },
      {
        week: "Month 3+",
        title: "Scale & Systematize",
        icon: TrendingUp,
        description: "We turn your lead generation into a predictable engine:",
        items: [
          "Document SOPs for estimate follow-ups and customer communication",
          "Scale winning campaigns to adjacent markets",
          "Implement retention campaigns for past customers (annual touch-ups)",
          "Create referral systems to complement paid ads",
          "Monthly strategy sessions to plan growth",
        ],
      },
    ],
    timeline: "Most contractors see 20-35 qualified estimates by Month 2-3.",
  },
  pricing: {
    headline: "Choose Your Growth Path",
    subheadline:
      "Whether you're new to paid ads or ready to dominate your market, we have a solution for you.",
    tiers: [
      {
        icon: Search,
        name: "NAREN AUDIT",
        price: "$997",
        period: undefined,
        commitment: "ONE-TIME",
        perfectFor:
          "Contractors spending $2K+/month on ads but unsure if it's working",
        features: [
          "90-min deep-dive call",
          "Ad account forensics",
          "Website/funnel audit",
          "Competitor analysis",
          "Custom NAREN scorecard",
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
        commitment: "6-month commitment",
        perfectFor:
          "Contractors doing $40K-$100K/month ready to scale to six figures",
        features: [
          "Everything in Audit",
          "Full ad management (Google + Facebook)",
          "Landing page creation",
          "GoHighLevel CRM setup",
          "GA4 + call tracking",
          "Bi-weekly testing",
          "Monthly NAREN reviews",
          "Slack support",
        ],
        expectedResults: "20-35 qualified estimates per month by Month 3",
        ctaText: "Apply Now",
      },
      {
        icon: Zap,
        name: "PARTNERSHIP",
        price: "$6,500",
        period: "month",
        commitment: "+ Performance Bonus",
        perfectFor: "Multi-crew operations or contractors doing $100K+/month",
        features: [
          "Everything in Implementation",
          "2 strategy calls/month",
          "Team training",
          "Priority WhatsApp support",
          "Quarterly planning",
          "Multi-location setup",
          "Custom dashboards",
          "Revenue share options",
        ],
        expectedResults: "35-50+ estimates/month across all locations",
        ctaText: "Book Call",
      },
    ],
    scorecardCTA: {
      text: "NOT SURE WHICH IS RIGHT?",
      subtext: "Take the Free NAREN Scorecard (2 minutes)",
    },
    availability: {
      text: "LIMITED AVAILABILITY: We only take 5 new Implementation clients per quarter to ensure results.",
      spots: 2,
    },
  },
  faq: {
    headline: "Common Questions from Painting Contractors",
    items: [
      {
        question: "How much should I budget for ads on top of your fee?",
        answer:
          "We recommend $3,000-$5,000/month minimum for Implementation clients. This gives us enough data to test and optimize effectively. Partnership clients typically invest $6,000-$10,000/month in ad spend. The NAREN Audit will help determine the right budget for your market and goals.",
      },
      {
        question:
          "What's the difference between this and hiring someone on Upwork?",
        answer:
          'Most freelancers run ads. We build systems. The NAREN Method includes tracking, CRM automation, documented SOPs, and ongoing optimization—not just "campaign setup and hope." Plus, we specialize in home services. We know the metrics that matter for painters specifically.',
      },
      {
        question:
          "I'm worried about seasonal slowdowns. Will this work year-round?",
        answer:
          'Absolutely. Part of the NAREN Strategy is planning for seasonality: Q1-Q2 focuses on interior jobs and "spring refresh" campaigns, Q3-Q4 emphasizes exterior work and "beat the winter weather" urgency offers. Off-season, we build your pipeline for spring with low-cost lead gen. We help you maintain cash flow 12 months a year.',
      },
      {
        question: "How do you handle leads—do they come to me or you first?",
        answer:
          "All leads come directly to you (your phone, your email, your CRM). We set up systems so YOU control the relationship from day one. We just track and optimize in the background.",
      },
      {
        question:
          "I've tried Facebook Ads before and got garbage leads. Why would this be different?",
        answer:
          'Most painters make these mistakes: Targeting is too broad ("everyone in my city"), offer is weak ("call for a free quote" isn\'t compelling), and no follow-up system (80% of leads convert after 3+ touchpoints). The NAREN Method fixes all three. We target specific neighborhoods, create irresistible offers, and automate follow-ups so no lead falls through the cracks.',
      },
      {
        question: "Can you guarantee I'll get 20-35 estimates per month?",
        answer:
          "We don't make guarantees—too many variables outside our control (your close rate, crew availability, reputation, etc.). What we DO guarantee: Full transparency, structured testing, documented systems, and a roadmap to hit those numbers. Most Implementation clients reach 20-30 estimates by Month 2-3.",
      },
      {
        question: "Do I need a fancy website for this to work?",
        answer:
          "No. We can build custom landing pages that convert better than most full websites. A simple 3-page site (Home, About, Contact) is fine as long as it doesn't actively hurt your credibility.",
      },
    ],
  },
  finalCTA: {
    headline:
      "Ready to Stop Competing on Price and Start Dominating Your Market?",
    subheadline:
      "Join 30+ painting contractors using the NAREN Method to predictably book 20-35 premium estimates every month.",
    testimonials: [
      {
        quote:
          "Before NAREN, we were the cheapest option. Now we're the premium choice—and we're busier than ever.",
        author: "Jake Morrison",
        company: "Morrison Painting",
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
      text: "We cap our roster at {max} active painting contractors to maintain quality results.",
      spotsRemaining: 2,
      maxClients: 25,
    },
    contact: {
      email: "hello@onlineadwise.com",
      location: "Serving Painting Contractors Nationwide",
      rating: "4.9/5",
    },
  },
};

export default function PaintersLanding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        <HeroSection {...paintersData.hero} />
        <ProblemSection
          headline={paintersData.problems.headline}
          problems={paintersData.problems.items}
          transition={paintersData.problems.transition}
        />
        <NarenMethodSection
          headline="Introducing the NAREN Method™"
          subheadline={paintersData.narenMethod.subheadline}
          pillars={paintersData.narenMethod.pillars}
        />
        <CaseStudySection
          headline={paintersData.caseStudies.headline}
          caseStudies={paintersData.caseStudies.studies}
        />
        <ProcessSection
          headline={paintersData.process.headline}
          steps={paintersData.process.steps}
          timeline={paintersData.process.timeline}
        />
        <PricingSection
          headline={paintersData.pricing.headline}
          subheadline={paintersData.pricing.subheadline}
          tiers={paintersData.pricing.tiers}
          scorecardCTA={paintersData.pricing.scorecardCTA}
          availability={paintersData.pricing.availability}
        />
        <FAQSection {...paintersData.faq} />
        <FinalCTASection {...paintersData.finalCTA} />
      </main>
    </div>
  );
}
