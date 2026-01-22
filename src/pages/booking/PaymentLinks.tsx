import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  Search,
  Youtube,
  Linkedin,
  FileText,
  Globe,
  BarChart3,
  Settings,
  Video,
  Megaphone,
  Target,
  TrendingUp,
  Rocket,
  ExternalLink,
  Check,
  Star,
  Users,
  Play,
  Sparkles,
  Shield,
  Clock,
  DollarSign,
  Lightbulb,
  ChevronRight,
  Award,
  Layers,
  Wrench,
  Heart,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NicheGrowthOffers from "@/components/booking/pricing/NicheGrowthOffers";

const PAYPAL_LINK =
  "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2PR53447K01030136NFIYRLQ";

// Meta Ads Management Services
const metaAdsServices = {
  title: "META ADS MANAGEMENT",
  subtitle: "Facebook & Instagram Growth Systems",
  icon: Megaphone,
  services: [
    {
      name: "Starter Meta",
      price: "$597",
      period: "/month",
      snippet: "Launch profitable Meta campaigns fast",
      description:
        "Complete campaign setup and launch on Facebook & Instagram with 1 strategically designed funnel entry point, 3-4 professionally crafted ad creatives tested for conversions, and full Meta Pixel verification and event tracking setup.",
      popular: false,
      features: [
        "Campaign setup & launch on Facebook & Instagram",
        "1 strategically designed funnel entry point",
        "3-4 professionally crafted ad creatives",
        "Full Meta Pixel verification & event tracking",
        "Campaign structure optimization for your goals",
      ],
      strategic: "We focus on validating your offer first before scaling spend",
      keyBenefit:
        "Get data-driven insights within first 2 weeks to inform scaling decisions",
      whyWorks:
        "Structured foundation prevents wasted ad spend from common beginner mistakes",
      realImpact:
        "Save $900+ monthly vs typical US agency pricing ($1,500-$2,000/month)",
      badge:
        "Perfect for businesses ready to start professional Meta advertising",
    },
    {
      name: "Growth Meta",
      price: "$997",
      period: "/month",
      snippet: "Scale with data-driven precision",
      description:
        "Multi-layer audience framework for precise targeting with 8-10 ad creatives for comprehensive A/B testing. Advanced retargeting system to re-engage warm prospects with automation and ongoing optimization.",
      popular: true,
      features: [
        "Multi-layer audience framework for precise targeting",
        "8-10 ad creatives for comprehensive A/B testing",
        "Advanced retargeting system for warm prospects",
        "Automation with ongoing optimization",
        "Data-driven campaign adjustments",
      ],
      strategic:
        "Systematic creative rotation prevents ad fatigue and maintains low CPAs",
      keyBenefit: "Predictable lead costs through diversified audience testing",
      whyWorks:
        "Multiple audience layers ensure you're not over-reliant on single traffic source",
      realImpact:
        "Clients typically see 40-60% cost reduction after 60 days of optimization",
      badge: "Popular with founders upgrading from freelancers",
    },
    {
      name: "Performance Scaling",
      price: "$1,497",
      period: "/month",
      snippet: "Enterprise results, half the cost",
      description:
        "Full implementation of the proprietary NAREN Method™ for maximum ROI. Includes advanced funnel and audience strategy development, Meta CAPI with advanced tracking, and weekly 1-on-1 performance calls.",
      popular: true,
      mostPopular: true,
      features: [
        "Proprietary NAREN Method™ implementation",
        "Advanced funnel & audience strategy development",
        "Meta Conversion API (CAPI) + advanced tracking",
        "Weekly 1-on-1 performance & scaling calls",
        "Budget optimization & CRO insights",
      ],
      strategic:
        "NAREN Method focuses on quality over volume - better leads, higher LTV",
      keyBenefit:
        "Server-side tracking (CAPI) recovers 20-30% of conversions lost to iOS14+ updates",
      whyWorks:
        "Weekly calls allow rapid pivots based on market changes and performance data",
      realImpact: "Average 2.5x ROAS improvement vs self-managed campaigns",
      badge: "Comparable to $3,500+/month agency services",
    },
  ],
};

// Google Ads Management Services
const googleAdsServices = {
  title: "GOOGLE ADS MANAGEMENT",
  subtitle: "Search, Display, Performance Max & YouTube",
  icon: Search,
  services: [
    {
      name: "Google Starter",
      price: "$547",
      period: "/month",
      snippet: "Capture ready-to-buy searchers",
      description:
        "Professional Google Search campaign setup and management with high-intent keyword targeting (bottom-of-funnel traffic). Includes 1 conversion-optimized landing page and complete conversion tracking.",
      popular: false,
      features: [
        "Professional Google Search campaign setup",
        "High-intent keyword targeting (bottom-of-funnel)",
        "1 conversion-optimized landing page",
        "Complete conversion tracking setup",
        "Campaign structure optimized for quality score",
      ],
      strategic:
        "Focus exclusively on high-intent keywords to maximize conversion rate",
      keyBenefit:
        "Target only people searching for exactly what you offer right now",
      whyWorks:
        "Search intent = warm leads already in buying mode, not cold traffic",
      realImpact:
        "Typically 3-5x higher conversion rate than social media cold traffic",
      badge: "Perfect entry point for Google Ads",
    },
    {
      name: "Google Growth",
      price: "$897",
      period: "/month",
      snippet: "Dominate search & display networks",
      description:
        "Search campaigns for high-intent traffic plus Display network campaigns for broader reach and retargeting. Includes 2-3 conversion-optimized landing pages and complete GA4 performance dashboard.",
      popular: false,
      features: [
        "Search + Display network campaigns",
        "2-3 conversion-optimized landing pages",
        "Complete GA4 performance dashboard",
        "Retargeting capabilities for website visitors",
        "Data visualization and insights",
      ],
      strategic:
        "Layered funnel - Search captures intent, Display nurtures and retargets",
      keyBenefit:
        "Display retargeting converts 2-3x better than cold traffic at 60% lower cost",
      whyWorks:
        "Multi-touch attribution shows most customers need 3-7 touchpoints",
      realImpact:
        "Combined approach typically reduces cost per acquisition by 35-50%",
      badge: "Most popular choice for expanding beyond search",
    },
    {
      name: "Google Performance Suite",
      price: "$1,397",
      period: "/month",
      snippet: "Full Google ecosystem domination",
      description:
        "Complete Google ecosystem coverage with Search, Performance Max, Display, and YouTube advertising. Full GA4 and GTM implementation with weekly strategy calls.",
      popular: true,
      mostPopular: true,
      features: [
        "Search + Performance Max + Display + YouTube",
        "Full GA4 & Google Tag Manager implementation",
        "Weekly strategy & optimization calls",
        "Enterprise-level tracking & attribution",
        "Comprehensive reporting across all channels",
      ],
      strategic:
        "Omnipresence across every Google touchpoint your customers use",
      keyBenefit:
        "Performance Max uses Google's AI to find converting audiences you'd never target manually",
      whyWorks:
        "Being everywhere on Google creates authority and trust in customers' minds",
      realImpact:
        "Clients see 60-80% more qualified leads vs single-channel approach",
      badge: "Maximum visibility across Google ecosystem",
    },
  ],
};

// YouTube Ads Services
const youtubeAdsServices = {
  title: "YOUTUBE ADS",
  subtitle: "High-Impact Video Ads That Convert",
  icon: Youtube,
  services: [
    {
      name: "YouTube Starter",
      price: "$647",
      period: "/month",
      snippet: "Convert viewers into customers",
      description:
        "Complete YouTube campaign setup with strategic hook development (capture attention in first 3 seconds), compelling video scripts, and custom thumbnail design for maximum click-through rates.",
      popular: false,
      features: [
        "Complete YouTube campaign setup & management",
        "Strategic hook development (first 3 seconds)",
        "Compelling video scripts that drive action",
        "Custom thumbnail design for maximum CTR",
        "Brand awareness & conversion strategies",
      ],
      strategic:
        "Hook-Story-Offer framework proven to hold attention and convert",
      keyBenefit:
        "YouTube viewers are 4x more likely to research your brand after watching",
      whyWorks:
        "Video builds trust faster than any other medium - people buy from who they trust",
      realImpact:
        "Average 25-35% lower cost per lead vs Facebook for B2B and high-ticket",
      badge: "Perfect for leveraging the world's second-largest search engine",
    },
    {
      name: "YouTube Growth",
      price: "$1,047",
      period: "/month",
      snippet: "Full-funnel video marketing system",
      description:
        "Sophisticated retargeting sequences to re-engage video viewers with full funnel synchronization across YouTube, Meta, and Google. High-intent audience scaling with multi-touchpoint nurturing.",
      popular: true,
      mostPopular: true,
      features: [
        "Sophisticated retargeting sequences",
        "Full funnel synchronization (YouTube, Meta, Google)",
        "High-intent audience scaling",
        "Advanced targeting for likely converters",
        "Multi-touchpoint nurturing to conversion",
      ],
      strategic:
        "Segment audiences by watch time - different messages for 25%, 50%, 75%, 100% viewers",
      keyBenefit:
        "People who watch 75%+ of your video convert at 8-12x higher rate",
      whyWorks:
        "Video retargeting keeps you top-of-mind during the research/decision phase",
      realImpact:
        "Retargeted video viewers have 3x higher lifetime value than cold leads",
      badge: "Complete video marketing ecosystem",
    },
  ],
};

// LinkedIn Ads Services
const linkedinAdsServices = {
  title: "LINKEDIN ADS",
  subtitle: "B2B & High-Ticket Lead Generation",
  icon: Linkedin,
  services: [
    {
      name: "LinkedIn Starter",
      price: "$697",
      period: "/month",
      snippet: "Target decision-makers directly",
      description:
        "Company page and personal profile optimization for credibility with complete LinkedIn campaign setup. Precise B2B audience segmentation by job title, company size, industry, and seniority.",
      popular: false,
      features: [
        "Profile & company page optimization",
        "Complete LinkedIn campaign setup",
        "B2B audience segmentation (title, size, industry)",
        "Professional decision-maker targeting",
        "High-quality lead generation foundation",
      ],
      strategic:
        "Target decision-makers when they're in 'professional mindset' not scrolling socially",
      keyBenefit:
        "LinkedIn's B2B targeting is 3x more accurate than Facebook for reaching executives",
      whyWorks: "80% of B2B leads come from LinkedIn vs other social platforms",
      realImpact:
        "Higher initial cost per lead but 2-3x better close rate and deal size",
      badge: "Perfect for service providers and B2B companies",
    },
    {
      name: "LinkedIn Growth",
      price: "$1,097",
      period: "/month",
      snippet: "Multi-touch B2B lead generation",
      description:
        "Sponsored content for feed visibility plus LinkedIn Message Ads (InMail) for direct prospect outreach. Sophisticated retargeting layer for profile visitors and content engagers.",
      popular: true,
      mostPopular: true,
      features: [
        "Sponsored content for feed visibility",
        "LinkedIn Message Ads (InMail) outreach",
        "Retargeting for visitors & engagers",
        "Comprehensive analytics & tracking",
        "Multi-format advertising strategy",
      ],
      strategic:
        "Combine awareness (sponsored posts) with direct outreach (InMail) for maximum impact",
      keyBenefit:
        "InMail has 52% open rate vs 20% for regular email - 2.6x better",
      whyWorks:
        "Multi-touch approach builds credibility before asking for demo/call",
      realImpact:
        "Companies using this approach see 40-60% better qualified lead rate",
      badge:
        "Delivers $2,000+/month agency results at nearly half the investment",
    },
  ],
};

// Creative & Development Services
const websiteServices = {
  title: "WEBSITE DESIGN & DEVELOPMENT",
  subtitle: "Professional Web Presence",
  icon: Globe,
  services: [
    {
      name: "Starter Website",
      price: "$1,297",
      period: "",
      oneTime: true,
      snippet: "Professional presence that converts",
      description:
        "Clean, modern aesthetics reflecting your brand identity. Fully mobile-responsive design with basic on-page SEO setup and fast loading speeds for better user experience.",
      popular: false,
      features: [
        "Clean, modern brand-aligned aesthetics",
        "Fully mobile-responsive design",
        "Basic on-page SEO setup (meta tags, structure)",
        "Fast loading speeds optimized",
        "Essential pages (Home, About, Services, Contact)",
      ],
      strategic: "Focus on clarity and trust-building over flashy features",
      keyBenefit:
        "60% of traffic is mobile - responsive design ensures you don't lose half your visitors",
      whyWorks:
        "Clean, fast sites convert 2-3x better than cluttered, slow ones",
      realImpact: "Every 1-second delay in load time = 7% conversion loss",
      badge: "Perfect for establishing credible online presence",
    },
    {
      name: "Funnel Website",
      price: "$1,997",
      period: "",
      oneTime: true,
      snippet: "Turn traffic into leads on autopilot",
      description:
        "Conversion psychology and strategic CTA placement with CRM or email marketing platform integration. Advanced speed optimization with strategic opt-in forms and conversion elements.",
      popular: true,
      features: [
        "Conversion psychology & strategic CTAs",
        "CRM/email marketing integration",
        "Advanced speed optimization",
        "Strategic opt-in forms placement",
        "Lead generation-focused design",
      ],
      strategic:
        "Every element designed to guide visitors toward one clear action",
      keyBenefit:
        "Integrated CRM means leads go directly into your follow-up system automatically",
      whyWorks:
        "Single-purpose pages convert 3-5x better than general websites",
      realImpact:
        "Clients typically capture 40-60% more leads from same traffic volume",
      badge: "Most popular for lead generation businesses",
    },
    {
      name: "Premium Website",
      price: "$3,997",
      period: "",
      oneTime: true,
      snippet: "Enterprise site, complete authority",
      description:
        "Completely unique custom design tailored to your brand and goals. Advanced third-party integrations, marketing automation, comprehensive SEO package with ongoing support.",
      popular: true,
      mostPopular: true,
      features: [
        "Completely unique custom design",
        "Advanced integrations (CRM, payments, booking)",
        "Comprehensive SEO package with schema markup",
        "Marketing automation integration",
        "Ongoing technical support & maintenance",
      ],
      strategic:
        "Build authority through superior user experience and technical excellence",
      keyBenefit:
        "Schema markup can increase organic click-through rates by 30%+",
      whyWorks:
        "Advanced integrations eliminate manual work and create seamless customer journey",
      realImpact:
        "Proper technical SEO + UX typically doubles organic traffic within 6-12 months",
      badge: "Enterprise-level functionality and features",
    },
  ],
};

// Funnel Services
const funnelServices = {
  title: "FUNNEL DESIGN & OPTIMIZATION",
  subtitle: "High-Converting Sales Funnels",
  icon: Target,
  services: [
    {
      name: "Basic Funnel",
      price: "$897",
      period: "",
      oneTime: true,
      snippet: "Simple funnel, powerful results",
      description:
        "1 high-converting landing page focused on single offer/lead magnet with dedicated thank you page. Basic email automation sequence for immediate follow-up.",
      popular: false,
      features: [
        "1 high-converting landing page",
        "Dedicated thank you page",
        "Next steps & expectation setting",
        "Basic email automation sequence",
        "Streamlined conversion funnel design",
      ],
      strategic:
        "Single focus eliminates decision paralysis - one clear offer, one action",
      keyBenefit:
        "Immediate automated follow-up captures leads while interest is hottest",
      whyWorks:
        "Dedicated landing pages convert 5-10x better than homepage traffic",
      realImpact:
        "Businesses typically see 25-40% conversion rate on targeted traffic",
      badge: "Perfect for testing new offers",
    },
    {
      name: "Growth Funnel",
      price: "$1,497",
      period: "",
      oneTime: true,
      snippet: "Test, optimize, scale systematically",
      description:
        "Multi-step funnel (opt-in, bridge page, segmentation) with comprehensive automated email sequences. A/B split testing setup for continuous improvement.",
      popular: true,
      features: [
        "Multi-step funnel (opt-in, bridge, segmentation)",
        "Comprehensive automated email sequences",
        "A/B split testing setup",
        "Conversion tracking at each stage",
        "Systematic testing framework",
      ],
      strategic:
        "Test everything - small improvements compound to massive revenue gains",
      keyBenefit:
        "A/B testing typically reveals 20-40% conversion improvements within 30 days",
      whyWorks:
        "Multi-step funnels qualify leads before sales conversation, saving time",
      realImpact:
        "Segmentation allows personalized follow-up increasing close rates by 50%+",
      badge: "Designed for predictable, measurable growth",
    },
    {
      name: "Premium Funnel",
      price: "$2,997",
      period: "",
      oneTime: true,
      snippet: "High-ticket selling on autopilot",
      description:
        "Professional VSL or automated webinar integration with high-ticket selling optimization. Advanced analytics, behavioral triggers, and order bump/upsell functionality.",
      popular: true,
      mostPopular: true,
      features: [
        "VSL/automated webinar integration",
        "High-ticket selling optimization",
        "Advanced analytics at every micro-step",
        "Behavioral trigger nurture sequences",
        "Order bump & upsell functionality",
      ],
      strategic:
        "VSL pre-sells before sales call, making closers 3x more effective",
      keyBenefit:
        "Automated webinars can run 24/7 generating qualified leads while you sleep",
      whyWorks:
        "Order bumps and upsells increase average transaction value by 30-50%",
      realImpact:
        "Clients typically see $500-1,500 increase in average customer value",
      badge: "Built for serious revenue generation",
    },
  ],
};

// Copywriting Services
const copywritingServices = {
  title: "CONTENT & COPYWRITING",
  subtitle: "Words That Sell",
  icon: FileText,
  services: [
    {
      name: "Basic Copy Package",
      price: "$697",
      period: "",
      oneTime: true,
      snippet: "Words that sell, not just inform",
      description:
        "Professional copywriting for 3-5 core pages with clear value proposition and differentiation messaging. SEO keyword optimization woven naturally into compelling copy.",
      popular: false,
      features: [
        "Professional copy for 3-5 core pages",
        "Clear value proposition messaging",
        "SEO keyword optimization",
        "Brand voice consistency",
        "Two rounds of revisions included",
      ],
      strategic: "Focus on benefits over features - speak to customer outcomes",
      keyBenefit:
        "SEO-optimized copy ranks organically while converting paid traffic better",
      whyWorks:
        "Professional copy clarifies your unique value in 3 seconds or less",
      realImpact: "Good vs mediocre copy can double website conversion rates",
      badge: "Perfect for new websites or refreshing outdated content",
    },
    {
      name: "Growth Copy Package",
      price: "$1,297",
      period: "",
      oneTime: true,
      snippet: "Complete messaging across all channels",
      description:
        "Complete website page copywriting plus dedicated landing pages. Email nurture sequences and ad copy for Facebook, Google, and other platforms.",
      popular: true,
      features: [
        "Complete website page copywriting",
        "Dedicated landing page copy",
        "Email nurture sequences",
        "Ad copy (Facebook, Google)",
        "Unified brand voice across touchpoints",
      ],
      strategic:
        "Unified messaging creates familiarity and trust across entire journey",
      keyBenefit:
        "Consistent voice across channels increases brand recall by 3.5x",
      whyWorks:
        "Email sequences convert 20-30% of leads who weren't ready to buy immediately",
      realImpact:
        "Full-funnel copywriting typically increases overall conversion by 40-70%",
      badge: "Most popular for complete marketing campaigns",
    },
    {
      name: "Authority Copy Suite",
      price: "$2,497",
      period: "",
      oneTime: true,
      snippet: "Position as the obvious authority",
      description:
        "Complete content strategy development with custom brand voice guide for team alignment. Unlimited revisions, thought leadership content, and case studies.",
      popular: true,
      mostPopular: true,
      features: [
        "Complete content strategy development",
        "Custom brand voice guide",
        "Unlimited revision rounds",
        "Thought leadership content & case studies",
        "Strategic positioning statements",
      ],
      strategic:
        "Authority positioning commands premium pricing and attracts ideal clients",
      keyBenefit:
        "Documented brand voice ensures every team member communicates consistently",
      whyWorks:
        "Thought leadership builds trust before prospects ever contact you",
      realImpact:
        "Authority brands can charge 2-4x more than commodity competitors",
      badge: "Perfect for building market dominance",
    },
  ],
};

// Tracking & Analytics Services
const trackingServices = {
  title: "TRACKING & ANALYTICS",
  subtitle: "Data-Driven Decision Making",
  icon: BarChart3,
  services: [
    {
      name: "Basic Tracking",
      price: "$497",
      period: "",
      oneTime: true,
      snippet: "Know what's working, what's not",
      description:
        "Google Analytics 4 professional setup and configuration with basic event tracking (form submissions, button clicks, page views). Single-platform integration.",
      popular: false,
      features: [
        "Google Analytics 4 professional setup",
        "Basic event tracking (forms, clicks, views)",
        "Single-platform integration",
        "Traffic source understanding",
        "Page performance insights",
      ],
      strategic:
        "Track the metrics that matter - lead sources and conversion paths",
      keyBenefit:
        "Stop guessing, start knowing which marketing actually generates revenue",
      whyWorks:
        "Can't improve what you don't measure - data reveals opportunities",
      realImpact:
        "Most businesses discover 20-30% of ad spend goes to non-converting sources",
      badge: "Perfect for businesses starting with analytics",
    },
    {
      name: "Advanced Tracking",
      price: "$997",
      period: "",
      oneTime: true,
      snippet: "Accurate attribution, better decisions",
      description:
        "Google Tag Manager for flexible tag deployment, GA4 for user journey insights, and Meta Conversion API (CAPI) for accurate Facebook/Instagram attribution.",
      popular: true,
      features: [
        "Google Tag Manager (GTM) setup",
        "GA4 comprehensive user journey insights",
        "Meta Conversion API (CAPI)",
        "Advanced conversion tracking",
        "Custom dashboards visualizing ROI",
      ],
      strategic:
        "Server-side tracking bypasses browser blockers and privacy restrictions",
      keyBenefit:
        "CAPI recovers 20-30% of conversions iOS14+ updates made 'invisible'",
      whyWorks:
        "Accurate data = confident scaling decisions instead of guesswork",
      realImpact:
        "Better attribution typically reveals 25-40% more profitable ad spend opportunities",
      badge: "Essential for businesses running paid advertising",
    },
    {
      name: "Enterprise Tracking",
      price: "$1,997",
      period: "",
      oneTime: true,
      snippet: "Complete customer journey visibility",
      description:
        "Multi-touch attribution modeling for complete customer journey understanding. Cross-platform tracking across Meta, Google, LinkedIn, YouTube with automated weekly reporting.",
      popular: true,
      mostPopular: true,
      features: [
        "Multi-touch attribution modeling",
        "Cross-platform tracking (all channels)",
        "Custom conversion path analysis",
        "Automated weekly reporting dashboards",
        "Dedicated analytics consultation",
      ],
      strategic: "Understand the full path to purchase, not just last click",
      keyBenefit:
        "Multi-touch attribution reveals which 'assist' channels drive eventual sales",
      whyWorks:
        "Most customers need 7-13 touchpoints before buying - see the full picture",
      realImpact:
        "Prevents cutting 'non-converting' channels that actually assist 40%+ of sales",
      badge: "For sophisticated multi-channel campaigns",
    },
  ],
};

// CRM & Automation Services
const crmServices = {
  title: "CRM & AUTOMATION (GoHighLevel)",
  subtitle: "Systematize Your Sales Process",
  icon: Settings,
  services: [
    {
      name: "CRM Setup",
      price: "$697",
      period: "",
      oneTime: true,
      snippet: "Organize leads, never lose follow-up",
      description:
        "Professional GoHighLevel account setup with custom sales pipeline design organized by your sales stages. Basic automation workflows for lead notifications and welcome sequences.",
      popular: false,
      features: [
        "Professional GoHighLevel setup",
        "Custom sales pipeline design",
        "Contact management with tagging",
        "Basic automation (notifications, welcome)",
        "Task assignment workflows",
      ],
      strategic: "Systematize follow-up so no lead falls through the cracks",
      keyBenefit:
        "Automated reminders ensure every lead gets touched 5-7 times minimum",
      whyWorks: "80% of sales require 5+ follow-ups, but most stop after 2",
      realImpact:
        "Proper CRM follow-up typically increases close rate by 30-50%",
      badge: "Perfect transition from spreadsheets",
    },
    {
      name: "CRM Growth",
      price: "$1,497",
      period: "",
      oneTime: true,
      snippet: "Automate follow-up, close more deals",
      description:
        "Complete GoHighLevel setup with Zapier integrations connecting other business tools. Sophisticated lead nurturing with multi-channel follow-up (email, SMS, voicemail).",
      popular: true,
      features: [
        "Complete GoHighLevel with full features",
        "Zapier integrations (email, calendars, payments)",
        "Sophisticated lead nurturing sequences",
        "Multi-channel follow-up (email, SMS, VM)",
        "Automated appointment booking & reminders",
      ],
      strategic:
        "Multi-channel touch (email + SMS + call) gets 3x response vs email alone",
      keyBenefit:
        "Behavioral triggers send perfect message at perfect time based on actions",
      whyWorks:
        "Automation handles repetitive tasks while you focus on closing deals",
      realImpact:
        "Businesses report saving 15-20 hours/week on manual follow-up tasks",
      badge: "Most popular for systematizing sales",
    },
    {
      name: "CRM Enterprise",
      price: "$2,997",
      period: "",
      oneTime: true,
      snippet: "Complete revenue engine automation",
      description:
        "Completely custom automation workflows tailored to your business processes. Advanced integrations, comprehensive team training, ongoing support, and monthly strategy calls.",
      popular: true,
      mostPopular: true,
      features: [
        "Custom automation workflows",
        "Advanced industry-specific integrations",
        "Comprehensive team training",
        "Ongoing technical support",
        "Monthly strategy calls & refinements",
      ],
      strategic:
        "Custom workflows mirror your exact sales process, not generic templates",
      keyBenefit:
        "Team training ensures adoption - unused CRM = wasted investment",
      whyWorks: "Ongoing optimization adapts system as your business evolves",
      realImpact:
        "Full automation can 3-5x your capacity without hiring more salespeople",
      badge: "Built for complete revenue automation",
    },
  ],
};

// Done-With-You Services
const dwyServices = {
  title: "DONE-WITH-YOU (DWY)",
  subtitle: "Guided Implementation",
  icon: Users,
  services: [
    {
      name: "DWY Starter",
      price: "$597",
      period: "",
      oneTime: true,
      snippet: "Professional assets, DIY implementation",
      description:
        "Ready-made professional video assets for your niche with detailed step-by-step video guidance for campaign setup. Platform-specific implementation instructions and proven ad templates.",
      popular: false,
      features: [
        "Ready-made professional video assets",
        "Step-by-step video guidance",
        "Platform-specific instructions",
        "Proven ad templates (headlines, targeting)",
        "Implementation checklists",
      ],
      strategic:
        "Learn by doing - build valuable marketing skills while saving money",
      keyBenefit:
        "Templates eliminate guesswork - just customize proven frameworks",
      whyWorks: "Step-by-step guidance prevents expensive beginner mistakes",
      realImpact:
        "DIY with expert templates gets 80% of agency results at 20% of cost",
      badge: "Perfect for hands-on, tech-comfortable owners",
    },
    {
      name: "DWY Growth",
      price: "$897",
      period: "",
      oneTime: true,
      snippet: "Complete training, total control",
      description:
        "Premium video training modules covering strategy, setup, and optimization. Complete advertising frameworks for Meta, Google, and YouTube with ready-to-import funnel templates.",
      popular: true,
      features: [
        "Premium video training modules",
        "Complete advertising frameworks",
        "Ready-to-import funnel templates",
        "SEO optimization guides & checklists",
        "Email support for questions",
      ],
      strategic:
        "Master the fundamentals once, use them forever across all campaigns",
      keyBenefit:
        "Framework thinking > one-off tactics - understand WHY things work",
      whyWorks: "Funnel imports save 20-30 hours of setup per campaign",
      realImpact:
        "Trained business owners make better marketing decisions long-term",
      badge: "Comprehensive DIY implementation system",
    },
  ],
};

// Done-For-You Services
const dfyServices = {
  title: "DONE-FOR-YOU GROWTH SYSTEM",
  subtitle: "Complete Hands-Off Execution",
  icon: Rocket,
  services: [
    {
      name: "DFY Standard",
      price: "$1,200",
      period: "/month",
      snippet: "Hands-off advertising, expert execution",
      description:
        "Full-service advertising management across Meta, Google, and YouTube with complete hands-off execution. Professional ad creative development, conversion tracking, and weekly optimization.",
      popular: false,
      features: [
        "Full-service ad management (Meta, Google, YouTube)",
        "Complete hands-off execution",
        "Professional ad creative development",
        "Comprehensive conversion tracking",
        "Weekly optimization & monthly reporting",
      ],
      strategic:
        "Data-driven optimization - double down on winners, cut losers fast",
      keyBenefit:
        "Expert management means faster results than trial-and-error learning",
      whyWorks:
        "Your time is worth more than campaign management - focus on delivery",
      realImpact:
        "Most clients achieve positive ROI within 30-45 days vs 90+ days DIY",
      badge: "Perfect for busy business owners",
    },
    {
      name: "DFY Premium",
      price: "$1,700",
      period: "/month",
      snippet: "Full automation, zero manual work",
      description:
        "Everything in DFY Standard plus full GoHighLevel CRM automation with lead nurturing sequences. Automated appointment booking, SMS/email follow-up systems, and priority support.",
      popular: true,
      features: [
        "Everything in DFY Standard",
        "Full GoHighLevel CRM automation",
        "Lead nurturing sequences",
        "Automated appointment booking & SMS/email",
        "Priority support & senior strategist access",
      ],
      strategic:
        "Capture leads while you sleep, nurture while you work, close when ready",
      keyBenefit:
        "Automation ensures 100% of leads get perfect follow-up, 0% fall through cracks",
      whyWorks:
        "Speed to lead matters - automated instant response converts 5x better",
      realImpact:
        "Clients report 40-60% more appointments booked from same lead volume",
      badge: "Most popular for hands-free lead generation",
    },
    {
      name: "DFY Elite",
      price: "$2,200",
      period: "/month",
      snippet: "White-glove service, daily optimization",
      description:
        "Everything in DFY Premium plus dedicated account manager and personal advertising strategist. Daily campaign monitoring, complete system ownership, and monthly strategic planning calls.",
      popular: true,
      mostPopular: true,
      features: [
        "Everything in DFY Premium",
        "Dedicated account manager",
        "Daily campaign monitoring & optimization",
        "Complete system ownership",
        "Monthly strategic growth planning calls",
      ],
      strategic:
        "Proactive optimization - we spot opportunities before you ask",
      keyBenefit:
        "Dedicated manager means intimate business knowledge and faster decisions",
      whyWorks: "Daily monitoring catches trends/issues in hours, not weeks",
      realImpact:
        "Elite clients see 25-40% better ROAS through rapid optimization",
      badge: "Delivers $4,000-6,000/month agency results at half the cost",
    },
  ],
};

// Video Core Offers
const videoOffers = [
  {
    name: "Ready-Made Video Only",
    subtitle: "Offer 1",
    price: "$300",
    period: "",
    oneTime: true,
    snippet: "Professional video, minimal investment",
    description:
      "Professional animated video in 3 formats: Commercial, Explainer, or Storytelling. Fully customized with your logo, brand colors, and contact information. Optimized for all platforms.",
    popular: false,
    features: [
      "Professional animated video (Commercial/Explainer/Storytelling)",
      "Customized with logo, brand colors, contact info",
      "Optimized for Facebook, Instagram, Google, YouTube",
      "Proper dimensions & technical specifications",
      "Delivered ready to upload within days",
    ],
    strategic:
      "Test video advertising cheaply before committing to ongoing campaigns",
    keyBenefit:
      "Video ads typically get 3-5x more engagement than static images",
    whyWorks: "Professional animation stands out in crowded feeds",
    realImpact: "Save up to $1,700 vs typical US video costs ($800-2,000)",
    badge: "Perfect for testing video advertising",
  },
  {
    name: "Video + Ads Setup",
    subtitle: "Offer 2",
    price: "Starting at $697",
    period: "",
    oneTime: true,
    snippet: "Video + setup, ready to generate leads",
    description:
      "1 ready-made professionally branded video plus full advertising setup on ONE platform (Facebook OR Google). Includes strategic audience targeting and basic conversion tracking.",
    popular: false,
    features: [
      "1 ready-made professionally branded video",
      "Full ads setup on ONE platform (Facebook OR Google)",
      "Platform recommendation for your business",
      "Strategic audience targeting",
      "Basic conversion tracking & ad optimization",
    ],
    strategic:
      "Platform choice based on buying behavior - Google for seekers, Facebook for discovery",
    keyBenefit:
      "Professional setup avoids expensive beginner mistakes that waste budget",
    whyWorks: "Proper targeting from day 1 means faster path to profitability",
    realImpact:
      "Expert setup typically achieves positive ROI 2-3x faster than DIY",
    badge: "Complete quick-launch lead generation package",
  },
  {
    name: "Video + YouTube + Meta + Google",
    subtitle: "Offer 3",
    price: "Starting at $1,297",
    period: "",
    oneTime: true,
    snippet: "Omnipresence across all major platforms",
    description:
      "Premium animated video with complete YouTube channel setup and SEO optimization. Meta Ads and Google Ads campaign setup for cross-platform visibility foundation.",
    popular: true,
    mostPopular: true,
    features: [
      "Premium ready-made animated video",
      "YouTube channel setup & SEO optimization",
      "Custom thumbnail & metadata optimization",
      "Meta Ads campaign setup (Facebook/Instagram)",
      "Google Ads campaign setup (Search/Display)",
    ],
    strategic:
      "Omnipresence creates trust - prospects see you everywhere they look",
    keyBenefit:
      "Being on all platforms captures customers regardless of where they search/browse",
    whyWorks:
      "7-13 touchpoints needed to convert - multi-platform ensures repeated exposure",
    realImpact:
      "Omnipresent brands seen as market leaders even if they're not biggest",
    badge: "Comparable to $3,000-5,000+ at typical US agencies",
  },
];

// Combo Offer
const comboOffer = {
  name: "Facebook Ads + Google Ads Combo",
  subtitle: "Powered by the NAREN Method™",
  price: "$997",
  period: "/month",
  snippet: "Dual-platform, maximum market coverage",
  description:
    "Professional Facebook/Instagram Ads management plus Google Ads management powered by the proprietary NAREN Method™. Includes branded videos, conversion tracking, and weekly optimization.",
  features: [
    "Professional Facebook/Instagram Ads management",
    "Google Ads management for comprehensive coverage",
    "Powered by proprietary NAREN Method™",
    "Ready-made or custom branded videos",
    "Complete conversion tracking & weekly optimization",
  ],
  strategic:
    "Google captures active searchers, Facebook creates demand and retargets",
  keyBenefit:
    "Dual-platform approach ensures you're reaching customers at every buying stage",
  whyWorks: "Different platforms serve different roles in customer journey",
  realImpact:
    "Combined approach typically generates 60-80% more leads than single platform",
  savings: "Most agencies charge $2,500-4,000/month for this service level",
};

// Video Types
const videoTypes = [
  {
    name: "Commercial Videos",
    icon: Play,
    snippet: "Immediate action, direct response",
    description:
      "Attention-grabbing 30-60 second animated commercials designed with direct response marketing principles. Strong hooks in first 3 seconds with compelling CTAs.",
    features: [
      "30-60 second animated commercials",
      "Strong hooks in first 3 seconds",
      "Clear value propositions & emotional triggers",
      "Compelling calls-to-action",
    ],
    strategic: "Hook-Problem-Solution-CTA structure proven to drive action",
    keyBenefit:
      "Direct response focus = measurable results, not just 'brand awareness'",
    whyWorks:
      "Clear, urgent messaging cuts through noise and demands attention",
    realImpact:
      "Commercial-style videos generate 2-4x more immediate responses than soft-sell",
  },
  {
    name: "Explainer Videos",
    icon: Video,
    snippet: "Educate first, convert better",
    description:
      "Question-based educational videos (60-90 seconds) that address common questions and objections. Establishes you as trusted authority who understands their problems.",
    features: [
      "60-90 second educational format",
      "Addresses common questions & objections",
      "Establishes trusted authority",
      "Pre-qualifies leads for warmer contacts",
    ],
    strategic: "Value-first approach builds trust before asking for sale",
    keyBenefit: "Educated leads convert 3-5x better and have fewer objections",
    whyWorks:
      "People buy from experts they trust - education establishes expertise",
    realImpact: "Explainer videos reduce 'tire-kicker' inquiries by 40-60%",
  },
  {
    name: "Storytelling Videos",
    icon: Heart,
    snippet: "Emotion drives decisions, logic justifies",
    description:
      "Narrative-based animated content (60-120 seconds) that connects emotionally through relatable stories. Increases engagement, brand affinity, and ad recall.",
    features: [
      "60-120 second narrative content",
      "Emotional connection through stories",
      "Higher engagement & watch-through rates",
      "Improved brand affinity & memorability",
    ],
    strategic:
      "Story sells by creating emotional connection before logical pitch",
    keyBenefit:
      "Emotional decisions get made first, then justified with logic later",
    whyWorks: "Stories are remembered 22x better than facts alone",
    realImpact:
      "Higher engagement = lower ad costs and better algorithm performance",
  },
];

// Guarantees
const guarantees = [
  {
    icon: Check,
    text: "Clear deliverables before we start",
    description: "Know exactly what you're getting",
  },
  {
    icon: DollarSign,
    text: "Transparent pricing",
    description: "No hidden fees or surprises",
  },
  {
    icon: Shield,
    text: "Proven systems & video formats",
    description: "Battle-tested for your industry",
  },
  {
    icon: Clock,
    text: "Cancel anytime on monthly plans",
    description: "No long-term contracts required",
  },
];

// Service Card Component
interface ServiceCardProps {
  name: string;
  price: string;
  period?: string;
  oneTime?: boolean;
  snippet: string;
  description: string;
  popular?: boolean;
  mostPopular?: boolean;
  features: string[];
  strategic: string;
  keyBenefit: string;
  whyWorks: string;
  realImpact: string;
  badge?: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceCardProps;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative glass-card rounded-2xl p-6 flex flex-col h-full ${service.mostPopular ? "gold-glow border-primary/50" : ""}`}
  >
    {service.mostPopular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground whitespace-nowrap flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" /> MOST POPULAR
        </span>
      </div>
    )}

    <div className="mt-2">
      <h3 className="text-xl font-bold text-foreground mb-1">{service.name}</h3>
      <p className="text-sm text-primary font-semibold mb-3">
        {service.snippet}
      </p>
    </div>

    <div className="mb-4">
      <span className="text-3xl font-bold text-gradient-gold">
        {service.price}
      </span>
      {service.period && (
        <span className="text-muted-foreground">{service.period}</span>
      )}
      {service.oneTime && (
        <span className="text-muted-foreground text-sm ml-2">One-Time</span>
      )}
    </div>

    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
      {service.description}
    </p>

    {/* Features */}
    <div className="space-y-2 mb-4 flex-grow">
      {service.features.map((feature: string, idx: number) => (
        <div key={idx} className="flex items-start gap-2">
          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-sm text-foreground/80">{feature}</span>
        </div>
      ))}
    </div>

    {/* Strategic Insights */}
    <div className="space-y-3 mb-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs text-primary font-semibold">
            Strategic Approach:
          </span>
          <p className="text-xs text-muted-foreground">{service.strategic}</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs text-primary font-semibold">
            Key Benefit:
          </span>
          <p className="text-xs text-muted-foreground">{service.keyBenefit}</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs text-primary font-semibold">
            Real Impact:
          </span>
          <p className="text-xs text-muted-foreground">{service.realImpact}</p>
        </div>
      </div>
    </div>

    {service.badge && (
      <p className="text-xs text-primary/80 font-medium mb-4 text-center">
        {service.badge}
      </p>
    )}

    <Button
      asChild
      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
    >
      <a
        href={PAYPAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        Subscribe Now <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  </motion.div>
);

// Category Section Component
interface CategoryProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  services: ServiceCardProps[];
}

const CategorySection = ({
  category,
  index,
}: {
  category: CategoryProps;
  index: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="mb-20"
  >
    <div className="flex items-start gap-4 mb-8">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
        <category.icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          <span className="text-gradient-gold">{category.title}</span>
        </h2>
        <p className="text-lg text-primary font-semibold">
          {category.subtitle}
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {category.services.map(
        (service: ServiceCardProps, serviceIndex: number) => (
          <ServiceCard
            key={serviceIndex}
            service={service}
            index={serviceIndex}
          />
        ),
      )}
    </div>
  </motion.section>
);

const PaymentLinks = () => {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-gold">Growth Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select from our comprehensive suite of digital marketing services
            powered by the
            <span className="text-gradient-gold font-semibold">
              {" "}
              NAREN Method™
            </span>
            . Each package includes strategic approach, key benefits, and real
            impact metrics.
          </p>
        </motion.div>

        {/* Main Advertising Services */}
        <CategorySection category={metaAdsServices} index={0} />
        <CategorySection category={googleAdsServices} index={1} />
        <CategorySection category={youtubeAdsServices} index={2} />
        <CategorySection category={linkedinAdsServices} index={3} />

        {/* Creative & Development */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              <Layers className="w-5 h-5" />
              Creative & Conversion Assets (One-Time Investments)
            </div>
          </motion.div>
        </div>

        <CategorySection category={websiteServices} index={4} />
        <CategorySection category={funnelServices} index={5} />
        <CategorySection category={copywritingServices} index={6} />

        {/* Infrastructure & Automation */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              <Wrench className="w-5 h-5" />
              Infrastructure & Automation
            </div>
          </motion.div>
        </div>

        <CategorySection category={trackingServices} index={7} />
        <CategorySection category={crmServices} index={8} />

        {/* Complete Growth Systems */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              <Rocket className="w-5 h-5" />
              Complete Growth Systems
            </div>
          </motion.div>
        </div>

        <CategorySection category={dwyServices} index={9} />
        <CategorySection category={dfyServices} index={10} />

        {/* Niche Growth Offers */}
        <NicheGrowthOffers />

        {/* Core Video Offers */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-bold mb-4">
              <Rocket className="w-4 h-4" /> OUR 3 CORE OFFERS (HIGH-CONVERSION)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-gradient-gold">Quick-Start</span> Video
              Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoOffers.map((offer, index) => (
              <ServiceCard key={index} service={offer} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Most Popular Combo Offer */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative glass-card rounded-3xl p-8 gold-glow border-2 border-primary/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <span className="px-6 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center gap-2">
                  <Flame className="w-4 h-4" /> MOST POPULAR COMBO OFFER
                </span>
              </div>

              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
                  {comboOffer.name}
                </h3>
                <p className="text-lg text-primary font-semibold text-center mb-2">
                  {comboOffer.subtitle}
                </p>
                <p className="text-center text-primary/80 italic mb-4">
                  {comboOffer.snippet}
                </p>

                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gradient-gold">
                    {comboOffer.price}
                  </span>
                  <span className="text-xl text-muted-foreground">
                    {comboOffer.period}
                  </span>
                </div>

                <p className="text-center text-muted-foreground mb-6">
                  {comboOffer.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    {comboOffer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-primary font-semibold">
                          Strategic Approach:
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {comboOffer.strategic}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-primary font-semibold">
                          Key Benefit:
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {comboOffer.keyBenefit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-primary font-semibold">
                          Real Impact:
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {comboOffer.realImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center text-primary font-semibold mb-6 flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" /> {comboOffer.savings}
                </p>

                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold px-12 py-6 text-lg"
                  >
                    <a
                      href={PAYPAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Subscribe Now <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Video Types Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-4">
              <Video className="w-4 h-4" /> VIDEO TYPES INCLUDED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">
                Multi-Layered Animation
              </span>{" "}
              Technique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All videos are created using our proprietary multi-layered drawing
              & animation technique, proven to perform in paid ads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {type.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {type.snippet}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {type.description}
                </p>

                <div className="space-y-2 mb-4">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-xs text-primary font-semibold">
                    Real Impact:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {type.realImpact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why It Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Why These{" "}
                <span className="text-gradient-gold">Packages Work</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: Check, text: "Proven, pre-tested video formats" },
                { icon: Rocket, text: "Faster launch than custom filming" },
                { icon: TrendingUp, text: "Lower cost, higher ROI" },
                { icon: Target, text: "Built for local intent traffic" },
                { icon: Star, text: "Designed to generate calls & bookings" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Execution Guarantee */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-card rounded-3xl p-8 border border-primary/30">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Our{" "}
                <span className="text-gradient-gold">Execution Guarantee</span>
              </h2>
              <p className="text-xl text-primary font-semibold">
                No contracts. No fluff. No confusion.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold mb-1">
                    {item.text}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                ⚠️ We don't promise results we can't control
              </p>
              <p className="text-primary font-semibold">
                ✅ We guarantee execution quality, clarity, and accountability
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to{" "}
            <span className="text-gradient-gold">Scale Your Business</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose any package above to get started, or book a free strategy
            call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-bold px-8"
            >
              <Link to="/" className="flex items-center gap-2">
                Book Strategy Call <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PaymentLinks;
