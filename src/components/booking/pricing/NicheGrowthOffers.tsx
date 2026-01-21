import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Video,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PAYPAL_LINK =
  "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2PR53447K01030136NFIYRLQ";

interface NicheOffer {
  name: string;
  emoji: string;
  color1: string;
  color2: string;
  offers: {
    tier: string;
    title: string;
    price: string;
    type: string;
    description: string;
    features: string[];
    isVideo?: boolean;
  }[];
}

const nicheOffers: NicheOffer[] = [
  {
    name: "Pediatric Dentist",
    emoji: "🦷",
    color1: "from-cyan-400",
    color2: "to-blue-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description:
          "High-impact animated commercial for pediatric dental practices",
        features: [
          "Custom branded video",
          "Child-friendly animations",
          "Call-to-action optimized",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description:
          "Complete lead generation setup for new patient acquisition",
        features: [
          "Branded video",
          "Single platform ads setup",
          "Audience targeting",
          "Tracking setup",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Full visibility across YouTube, Meta & Google",
        features: [
          "Premium animated video",
          "YouTube SEO optimization",
          "Meta & Google Ads setup",
          "Cross-platform visibility",
        ],
      },
    ],
  },
  {
    name: "Chiropractor",
    emoji: "🦴",
    color1: "from-emerald-400",
    color2: "to-teal-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Engaging chiropractic explainer video",
        features: [
          "Pain relief messaging",
          "Treatment visualization",
          "Trust-building content",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Launch your chiropractic lead funnel",
        features: [
          "Branded video",
          "Single platform ads",
          "Patient targeting",
          "Conversion tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Dominate local search & social presence",
        features: [
          "Premium video content",
          "YouTube channel setup",
          "Multi-platform ads",
          "Local SEO foundation",
        ],
      },
    ],
  },
  {
    name: "Physical Therapist",
    emoji: "🏃",
    color1: "from-orange-400",
    color2: "to-red-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Motivational therapy explainer video",
        features: [
          "Recovery journey focus",
          "Exercise demonstrations",
          "Appointment CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Patient acquisition campaign setup",
        features: [
          "Custom video",
          "Targeted advertising",
          "Lead capture system",
          "Performance tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Full digital presence package",
        features: [
          "Premium animations",
          "All platform ads",
          "YouTube optimization",
          "Comprehensive tracking",
        ],
      },
    ],
  },
  {
    name: "Massage Therapist",
    emoji: "💆",
    color1: "from-purple-400",
    color2: "to-pink-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Relaxation-focused promotional video",
        features: [
          "Spa atmosphere visuals",
          "Service showcase",
          "Booking encouragement",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Booking-focused campaign launch",
        features: [
          "Branded content",
          "Platform-specific ads",
          "Audience targeting",
          "Booking integration",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Complete wellness marketing system",
        features: [
          "Premium video",
          "Multi-platform reach",
          "SEO optimization",
          "Full tracking setup",
        ],
      },
    ],
  },
  {
    name: "Dermatologist",
    emoji: "🧴",
    color1: "from-rose-400",
    color2: "to-orange-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Professional skincare practice video",
        features: [
          "Treatment showcases",
          "Before/after concepts",
          "Consultation CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Skin consultation lead generation",
        features: [
          "Custom video",
          "Targeted campaigns",
          "Lead qualification",
          "Conversion setup",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Authority-building visibility package",
        features: [
          "Premium content",
          "YouTube presence",
          "Social + Search ads",
          "Analytics dashboard",
        ],
      },
    ],
  },
  {
    name: "Pediatrician",
    emoji: "👶",
    color1: "from-sky-400",
    color2: "to-indigo-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Family-friendly practice video",
        features: [
          "Warm, caring tone",
          "Child-safe messaging",
          "Parent trust focus",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "New patient family acquisition",
        features: [
          "Branded video",
          "Parent-focused ads",
          "Local targeting",
          "Appointment tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Community trust building system",
        features: [
          "Premium animations",
          "Full platform coverage",
          "YouTube channel",
          "Comprehensive analytics",
        ],
      },
    ],
  },
  {
    name: "Senior Care",
    emoji: "👵",
    color1: "from-amber-400",
    color2: "to-yellow-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Compassionate care facility video",
        features: [
          "Trust-building content",
          "Family reassurance",
          "Care quality focus",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Family decision-maker targeting",
        features: [
          "Emotional storytelling",
          "Family-focused ads",
          "Inquiry tracking",
          "Lead nurturing",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Trust & visibility complete package",
        features: [
          "Premium video content",
          "Multi-platform presence",
          "Local SEO boost",
          "Full funnel tracking",
        ],
      },
    ],
  },
  {
    name: "Plumber",
    emoji: "🚰",
    color1: "from-blue-400",
    color2: "to-cyan-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Emergency plumbing service video",
        features: [
          "24/7 availability focus",
          "Quick response messaging",
          "Service area coverage",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Local emergency lead generation",
        features: [
          "Custom video",
          "Google Local ads",
          "Call tracking",
          "Emergency targeting",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Dominate local plumbing searches",
        features: [
          "Premium content",
          "All platform presence",
          "Local SEO foundation",
          "Lead tracking system",
        ],
      },
    ],
  },
  {
    name: "Electrician",
    emoji: "⚡",
    color1: "from-yellow-400",
    color2: "to-orange-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Professional electrical services video",
        features: [
          "Safety-first messaging",
          "Licensed & insured focus",
          "Service showcase",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Residential & commercial lead gen",
        features: [
          "Branded video",
          "Local targeting",
          "Call tracking",
          "Quick response ads",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Complete local domination package",
        features: [
          "Premium animations",
          "Full platform coverage",
          "YouTube optimization",
          "Comprehensive tracking",
        ],
      },
    ],
  },
  {
    name: "HVAC Contractor",
    emoji: "❄️",
    color1: "from-teal-400",
    color2: "to-blue-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Seasonal HVAC services video",
        features: [
          "Comfort-focused messaging",
          "Emergency service highlight",
          "Maintenance programs",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Season-ready lead campaigns",
        features: [
          "Custom video",
          "Weather-triggered ads",
          "Emergency targeting",
          "Booking system",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Year-round visibility system",
        features: [
          "Premium content",
          "Multi-platform ads",
          "Local SEO boost",
          "Full analytics",
        ],
      },
    ],
  },
  {
    name: "Roofer",
    emoji: "🏠",
    color1: "from-stone-400",
    color2: "to-slate-600",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Roofing quality & trust video",
        features: [
          "Project showcases",
          "Warranty highlights",
          "Free estimate CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Storm damage & new roof leads",
        features: [
          "Branded video",
          "Weather-based targeting",
          "Lead capture",
          "Estimate tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Local roofing authority package",
        features: [
          "Premium animations",
          "All platform presence",
          "YouTube channel",
          "Full tracking setup",
        ],
      },
    ],
  },
  {
    name: "Painter",
    emoji: "🎨",
    color1: "from-pink-400",
    color2: "to-purple-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Professional painting showcase video",
        features: [
          "Portfolio highlights",
          "Quality finish focus",
          "Free quote CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Residential & commercial lead gen",
        features: [
          "Custom video",
          "Homeowner targeting",
          "Lead capture system",
          "Quote tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Complete painting business visibility",
        features: [
          "Premium content",
          "Multi-platform reach",
          "Local SEO foundation",
          "Comprehensive analytics",
        ],
      },
    ],
  },
  {
    name: "Carpet Cleaner",
    emoji: "🧼",
    color1: "from-green-400",
    color2: "to-emerald-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Deep cleaning results video",
        features: [
          "Before/after concepts",
          "Eco-friendly messaging",
          "Quick booking CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Residential cleaning lead campaign",
        features: [
          "Branded video",
          "Homeowner targeting",
          "Seasonal campaigns",
          "Booking integration",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Full local cleaning visibility",
        features: [
          "Premium animations",
          "All platform ads",
          "YouTube presence",
          "Full tracking",
        ],
      },
    ],
  },
  {
    name: "Pest Control",
    emoji: "🐜",
    color1: "from-lime-400",
    color2: "to-green-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Fast pest elimination video",
        features: [
          "Problem-solution format",
          "Safety assurance",
          "Same-day service focus",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Emergency pest control leads",
        features: [
          "Custom video",
          "Urgency-based ads",
          "Local targeting",
          "Call tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Dominate local pest searches",
        features: [
          "Premium content",
          "Multi-platform coverage",
          "SEO optimization",
          "Complete analytics",
        ],
      },
    ],
  },
  {
    name: "Insurance Agency",
    emoji: "🛡️",
    color1: "from-indigo-400",
    color2: "to-blue-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Trust & protection focused video",
        features: [
          "Security messaging",
          "Family protection focus",
          "Quote request CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Quote request lead generation",
        features: [
          "Branded video",
          "Life event targeting",
          "Lead qualification",
          "Quote tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Insurance authority package",
        features: [
          "Premium animations",
          "All platform presence",
          "YouTube channel",
          "Full funnel tracking",
        ],
      },
    ],
  },
  {
    name: "Bookkeeper",
    emoji: "📊",
    color1: "from-violet-400",
    color2: "to-purple-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Professional bookkeeping explainer",
        features: [
          "Time savings focus",
          "Accuracy messaging",
          "Free consultation CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Small business client acquisition",
        features: [
          "Custom video",
          "Business owner targeting",
          "Lead capture",
          "Consultation tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "B2B visibility complete package",
        features: [
          "Premium content",
          "LinkedIn + Google presence",
          "YouTube optimization",
          "Full analytics",
        ],
      },
    ],
  },
  {
    name: "Bankruptcy Lawyer",
    emoji: "⚖️",
    color1: "from-slate-400",
    color2: "to-gray-600",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Compassionate debt relief video",
        features: [
          "Fresh start messaging",
          "Confidential focus",
          "Free consultation CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Debt relief lead generation",
        features: [
          "Branded video",
          "Financial distress targeting",
          "Lead qualification",
          "Consultation tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Legal authority visibility package",
        features: [
          "Premium animations",
          "Search + Social ads",
          "YouTube presence",
          "Comprehensive tracking",
        ],
      },
    ],
  },
  {
    name: "DUI Lawyer",
    emoji: "🚔",
    color1: "from-red-400",
    color2: "to-rose-600",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Urgent legal defense video",
        features: [
          "24/7 availability",
          "Rights protection focus",
          "Immediate consultation CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Emergency legal lead campaign",
        features: [
          "Custom video",
          "Urgency targeting",
          "Immediate response ads",
          "Call tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "Complete DUI defense visibility",
        features: [
          "Premium content",
          "All platform coverage",
          "YouTube authority",
          "Full funnel analytics",
        ],
      },
    ],
  },
  {
    name: "PI Lawyer",
    emoji: "⚖️",
    color1: "from-amber-400",
    color2: "to-orange-500",
    offers: [
      {
        tier: "1",
        title: "Video Booster",
        price: "$300",
        type: "One-Time",
        description: "Justice & compensation video",
        features: [
          "Victim advocacy focus",
          "No win no fee messaging",
          "Free case review CTA",
        ],
        isVideo: true,
      },
      {
        tier: "2",
        title: "Lead Launch",
        price: "Starting at $697",
        type: "One-Time",
        description: "Injury victim lead generation",
        features: [
          "Branded video",
          "Accident targeting",
          "Case qualification",
          "Lead tracking",
        ],
      },
      {
        tier: "3",
        title: "Omnipresence Growth System",
        price: "Starting at $1,297",
        type: "One-Time",
        description: "PI authority visibility package",
        features: [
          "Premium animations",
          "Multi-platform reach",
          "YouTube presence",
          "Comprehensive tracking",
        ],
      },
    ],
  },
];

const videoProcessSteps = [
  {
    icon: Video,
    title: "Video Creation",
    description: "Custom animated video tailored to your niche",
  },
  {
    icon: Sparkles,
    title: "Brand Customization",
    description: "Logo, colors & contact info added",
  },
  {
    icon: CheckCircle,
    title: "Quality Review",
    description: "Final review & optimization",
  },
  {
    icon: Rocket,
    title: "Ready to Launch",
    description: "Delivered ready for all platforms",
  },
];

const purchaseProcessSteps = [
  {
    icon: CheckCircle,
    title: "Select Package",
    description: "Choose your growth tier",
  },
  {
    icon: ExternalLink,
    title: "Secure Payment",
    description: "PayPal protected checkout",
  },
  {
    icon: Video,
    title: "Onboarding Call",
    description: "Strategy & requirements gathering",
  },
  {
    icon: Sparkles,
    title: "Setup & Launch",
    description: "Campaign setup & optimization",
  },
  {
    icon: Rocket,
    title: "Growth Activated",
    description: "Leads start flowing in",
  },
];

interface PopupContent {
  niche: NicheOffer;
  offer: NicheOffer["offers"][0];
}

const NicheGrowthOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState<PopupContent | null>(null);
  const [hoveredNiche, setHoveredNiche] = useState<string | null>(null);

  const handleOfferClick = (
    niche: NicheOffer,
    offer: NicheOffer["offers"][0],
  ) => {
    setSelectedOffer({ niche, offer });
  };

  return (
    <section className="py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          <span className="text-gradient-gold">Niche-Specific</span> Growth
          Offers
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tailored video & lead generation packages for your industry. Click any
          offer to see details.
        </p>
      </motion.div>

      {/* Video Service Process Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            <Play className="inline-block w-6 h-6 mr-2 text-primary" />
            Video Service Process
          </h3>
          <p className="text-muted-foreground">
            How your custom video gets created
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {videoProcessSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center transform-gpu perspective-1000"
                  style={{
                    boxShadow:
                      "0 10px 40px rgba(59, 130, 246, 0.4), inset 0 -4px 0 rgba(0,0,0,0.2)",
                    transform: "perspective(500px) rotateX(10deg)",
                  }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-black/20 rounded-full blur-sm" />
              </motion.div>
              <div className="ml-3 text-left">
                <p className="font-semibold text-foreground text-sm">
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < videoProcessSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className="hidden md:block ml-4"
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Purchase Process Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            <Rocket className="inline-block w-6 h-6 mr-2 text-primary" />
            Full Service Purchase Process
          </h3>
          <p className="text-muted-foreground">
            Your journey from purchase to results
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {purchaseProcessSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0 10px 40px hsla(45, 100%, 50%, 0.3), inset 0 -4px 0 rgba(0,0,0,0.2)",
                    transform: "perspective(500px) rotateX(10deg)",
                  }}
                >
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-2 bg-black/20 rounded-full blur-sm" />
              </motion.div>
              <div className="ml-3 text-left max-w-[120px]">
                <p className="font-semibold text-foreground text-sm">
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < purchaseProcessSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.1 }}
                  className="hidden md:block ml-4"
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Niche Offers Grid */}
      <div className="space-y-16">
        {nicheOffers.map((niche, nicheIndex) => (
          <motion.div
            key={niche.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: nicheIndex * 0.05 }}
            onMouseEnter={() => setHoveredNiche(niche.name)}
            onMouseLeave={() => setHoveredNiche(null)}
          >
            {/* Niche Header */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{
                  scale: hoveredNiche === niche.name ? 1.15 : 1,
                  rotateY: hoveredNiche === niche.name ? 360 : 0,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${niche.color1} ${niche.color2} flex items-center justify-center text-3xl`}
                style={{
                  boxShadow:
                    hoveredNiche === niche.name
                      ? "0 15px 50px rgba(255, 215, 0, 0.4), inset 0 -4px 0 rgba(0,0,0,0.2)"
                      : "0 10px 30px rgba(0,0,0,0.3), inset 0 -4px 0 rgba(0,0,0,0.2)",
                  transform: "perspective(500px) rotateX(5deg)",
                }}
              >
                {niche.emoji}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/30 rounded-full blur-sm" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {niche.name} —{" "}
                  <span className="text-gradient-gold">Growth Offers</span>
                </h3>
              </div>
            </div>

            {/* Offers Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {niche.offers.map((offer, offerIndex) => (
                <motion.div
                  key={offer.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: offerIndex * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOfferClick(niche, offer)}
                  className={`relative cursor-pointer glass-card rounded-2xl p-6 border-2 transition-all duration-300 ${
                    offer.tier === "3"
                      ? "border-primary/50 gold-glow"
                      : "border-transparent hover:border-primary/30"
                  }`}
                  style={{
                    boxShadow:
                      offer.tier === "3"
                        ? "0 15px 50px hsla(45, 100%, 50%, 0.2)"
                        : "0 10px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Tier Badge */}
                  <div className="absolute -top-3 -left-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: offerIndex * 0.5,
                      }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${niche.color1} ${niche.color2} flex items-center justify-center text-lg font-bold text-white`}
                      style={{
                        boxShadow:
                          "0 6px 20px rgba(0,0,0,0.3), inset 0 -2px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      {offer.tier}️⃣
                    </motion.div>
                  </div>

                  {offer.isVideo && (
                    <div className="absolute -top-3 right-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                        🎬 Video
                      </span>
                    </div>
                  )}

                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {niche.name} {offer.title}
                    </h4>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-gradient-gold">
                        {offer.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        — {offer.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {offer.description}
                    </p>

                    {/* 3D Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full relative overflow-hidden group"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(45, 100%, 50%), hsl(30, 100%, 50%))",
                          boxShadow:
                            "0 6px 20px hsla(45, 100%, 50%, 0.4), inset 0 -4px 0 rgba(0,0,0,0.2)",
                          transform: "perspective(500px) rotateX(5deg)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOfferClick(niche, offer);
                        }}
                      >
                        <span className="relative z-10 text-primary-foreground font-semibold">
                          View Details
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOffer(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-card rounded-3xl p-8 border border-primary/30"
              style={{
                boxShadow: "0 25px 80px hsla(45, 100%, 50%, 0.3)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedOffer.niche.color1} ${selectedOffer.niche.color2} flex items-center justify-center text-3xl`}
                  style={{
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.3), inset 0 -4px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  {selectedOffer.niche.emoji}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedOffer.niche.name}
                  </h3>
                  <p className="text-gradient-gold font-semibold">
                    {selectedOffer.offer.title}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 p-4 rounded-xl bg-muted/30 border border-border">
                <span className="text-3xl font-bold text-gradient-gold">
                  {selectedOffer.offer.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  — {selectedOffer.offer.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {selectedOffer.offer.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {selectedOffer.offer.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.a
                href={PAYPAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full"
              >
                <Button
                  className="w-full h-14 text-lg relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(45, 100%, 50%), hsl(30, 100%, 50%))",
                    boxShadow:
                      "0 8px 30px hsla(45, 100%, 50%, 0.4), inset 0 -4px 0 rgba(0,0,0,0.2)",
                    transform: "perspective(500px) rotateX(5deg)",
                  }}
                >
                  <span className="relative z-10 text-primary-foreground font-bold flex items-center gap-2">
                    Subscribe Now <ExternalLink className="w-5 h-5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NicheGrowthOffers;
