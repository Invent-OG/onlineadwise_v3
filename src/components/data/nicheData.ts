export interface NicheData {
  id: string;
  niche: string;
  nichePlural: string;
  serviceType: string;
  customerType: string;
  painPoints: string[];
  benefits: string[];
  idealCustomer: string;
  averageTransaction: string;
  customerLifetimeValue: string;
  typicalLeadCost: string;
  challenges: { title: string; explanation: string }[];
  solutions: string[];
  advantages: string[];
  videoTopics: {
    commercial: { title: string; description: string };
    explainer: { title: string; description: string };
    storytelling: { title: string; description: string };
  };
  faqItems: { question: string; answer: string }[];
  primaryBenefit: string;
  mainProblem: string;
  icon: string;
}

export const nicheData: NicheData[] = [
  {
    id: "dentist",
    niche: "Dentist",
    nichePlural: "Dentists",
    serviceType: "dental care",
    customerType: "Patients",
    painPoints: [
      "Fear of dental procedures",
      "High treatment costs",
      "Finding a trustworthy dentist",
    ],
    benefits: ["Healthy smile", "Pain-free treatments", "Affordable care"],
    idealCustomer: "Families seeking quality dental care",
    averageTransaction: "$500-$2,000",
    customerLifetimeValue: "$10,000+",
    typicalLeadCost: "$25-$75",
    challenges: [
      {
        title: "Patient Fear & Anxiety",
        explanation: "Many patients avoid dental visits due to fear",
      },
      {
        title: "Insurance Complexity",
        explanation: "Navigating dental insurance confuses patients",
      },
      {
        title: "Competition",
        explanation: "Standing out among many dental practices",
      },
      {
        title: "Trust Building",
        explanation: "Establishing credibility with new patients",
      },
      {
        title: "Patient Education",
        explanation: "Explaining procedures and importance of care",
      },
      {
        title: "Retention",
        explanation: "Keeping patients coming back for regular checkups",
      },
    ],
    solutions: [
      "Show a welcoming, comfortable office environment",
      "Explain procedures simply with visuals",
      "Demonstrate patient transformations",
      "Build trust through storytelling",
      "Showcase your team's expertise",
      "Highlight modern, painless technology",
    ],
    advantages: [
      "Reduces patient anxiety before visits",
      "Increases appointment bookings by 78%",
      "Builds trust faster than text content",
      "Perfect for social media engagement",
    ],
    videoTopics: {
      commercial: {
        title: "Transform Your Smile Today",
        description: "Showcase before/after results and easy booking process",
      },
      explainer: {
        title: "What to Expect at Your First Visit",
        description: "Walk through the patient experience step-by-step",
      },
      storytelling: {
        title: "Sarah's Smile Journey",
        description: "Real patient transformation story",
      },
    },
    faqItems: [
      {
        question: "How do whiteboard videos reduce patient anxiety?",
        answer:
          "The friendly, hand-drawn style feels approachable and helps explain procedures in a non-threatening way.",
      },
      {
        question: "What results can dental practices expect?",
        answer:
          "Typically 40-60 new patient inquiries per month with our video + ads packages.",
      },
    ],
    primaryBenefit: "attract more patients",
    mainProblem: "struggling to differentiate your practice",
    icon: "🦷",
  },
  {
    id: "chiropractor",
    niche: "Chiropractor",
    nichePlural: "Chiropractors",
    serviceType: "chiropractic treatment",
    customerType: "Patients",
    painPoints: [
      "Chronic pain",
      "Skepticism about chiropractic care",
      "Finding relief",
    ],
    benefits: ["Pain relief", "Improved mobility", "Natural healing"],
    idealCustomer: "Adults with back pain or seeking wellness",
    averageTransaction: "$75-$200 per visit",
    customerLifetimeValue: "$5,000+",
    typicalLeadCost: "$20-$50",
    challenges: [
      {
        title: "Skepticism",
        explanation: "Many people don't understand chiropractic benefits",
      },
      {
        title: "One-Time Visitors",
        explanation: "Converting single visits to ongoing care",
      },
      {
        title: "Insurance Issues",
        explanation: "Coverage confusion prevents bookings",
      },
      {
        title: "Competition",
        explanation: "Differentiating from other wellness providers",
      },
      {
        title: "Education Gap",
        explanation: "Patients don't understand how adjustments work",
      },
      {
        title: "Trust Building",
        explanation: "Establishing credibility for new treatment",
      },
    ],
    solutions: [
      "Demonstrate how adjustments provide relief",
      "Show patient success stories visually",
      "Explain the science behind chiropractic care",
      "Build trust through transparency",
      "Showcase your expertise and credentials",
      "Illustrate the path to wellness",
    ],
    advantages: [
      "Makes chiropractic care less intimidating",
      "Explains complex techniques simply",
      "Increases new patient consultations",
      "Perfect for pain-point targeting ads",
    ],
    videoTopics: {
      commercial: {
        title: "End Your Back Pain Today",
        description: "Showcase quick relief and easy booking",
      },
      explainer: {
        title: "How Chiropractic Adjustments Work",
        description: "Visual explanation of the treatment process",
      },
      storytelling: {
        title: "Mike's Journey to Pain-Free Living",
        description:
          "Real patient transformation from chronic pain to active life",
      },
    },
    faqItems: [
      {
        question: "Will videos help skeptical patients?",
        answer:
          "Yes! Visual explanations help overcome skepticism by showing exactly how treatments work.",
      },
      {
        question: "What results can chiropractors expect?",
        answer:
          "Typically 30-50 new patient consultations per month with video marketing.",
      },
    ],
    primaryBenefit: "attract more patients",
    mainProblem: "struggling to educate potential patients",
    icon: "🦴",
  },
  {
    id: "painter",
    niche: "Painter",
    nichePlural: "Painters",
    serviceType: "painting services",
    customerType: "Homeowners",
    painPoints: [
      "Finding reliable painters",
      "Price concerns",
      "Quality worries",
    ],
    benefits: [
      "Beautiful results",
      "Professional finish",
      "Increased home value",
    ],
    idealCustomer: "Homeowners renovating or refreshing",
    averageTransaction: "$2,000-$8,000",
    customerLifetimeValue: "$15,000+",
    typicalLeadCost: "$30-$80",
    challenges: [
      {
        title: "Trust Issues",
        explanation: "Homeowners fear hiring unreliable contractors",
      },
      {
        title: "Price Competition",
        explanation: "Competing against cheap, low-quality options",
      },
      {
        title: "Showing Quality",
        explanation: "Demonstrating skill before getting hired",
      },
      { title: "Seasonal Demand", explanation: "Managing slow seasons" },
      {
        title: "Referral Dependence",
        explanation: "Growing beyond word-of-mouth",
      },
      {
        title: "Standing Out",
        explanation: "Differentiating from other painters",
      },
    ],
    solutions: [
      "Show stunning before/after transformations",
      "Demonstrate professional techniques",
      "Build trust through customer stories",
      "Highlight quality materials used",
      "Showcase your team and process",
      "Illustrate your warranty and guarantee",
    ],
    advantages: [
      "Visual medium perfect for showing transformations",
      "Builds trust before the estimate",
      "Differentiates from cheap competitors",
      "Works year-round for lead generation",
    ],
    videoTopics: {
      commercial: {
        title: "Transform Your Home with Color",
        description: "Showcase dramatic room transformations",
      },
      explainer: {
        title: "Our 5-Step Painting Process",
        description: "Show professional approach from prep to finish",
      },
      storytelling: {
        title: "The Johnson Family Home Makeover",
        description: "Complete home transformation story",
      },
    },
    faqItems: [
      {
        question: "How do videos help win more jobs?",
        answer:
          "Videos build trust and showcase quality, helping you win jobs over cheaper competitors.",
      },
      {
        question: "What ROI can painters expect?",
        answer:
          "Typically 3-5x ROI with just a few jobs generated from video marketing.",
      },
    ],
    primaryBenefit: "book more painting jobs",
    mainProblem: "competing on price alone",
    icon: "🎨",
  },
  {
    id: "pest-control",
    niche: "Pest Control",
    nichePlural: "Pest Control Companies",
    serviceType: "pest control services",
    customerType: "Homeowners",
    painPoints: ["Pest infestations", "Safety concerns", "Recurring problems"],
    benefits: ["Pest-free home", "Safe treatments", "Peace of mind"],
    idealCustomer: "Homeowners with pest problems",
    averageTransaction: "$150-$500",
    customerLifetimeValue: "$2,000+",
    typicalLeadCost: "$15-$40",
    challenges: [
      {
        title: "Emergency Timing",
        explanation: "Customers need help immediately",
      },
      {
        title: "Safety Concerns",
        explanation: "Worries about chemicals around family",
      },
      {
        title: "Price Sensitivity",
        explanation: "Competing with DIY solutions",
      },
      {
        title: "Seasonal Peaks",
        explanation: "Managing demand during peak seasons",
      },
      {
        title: "Recurring Sales",
        explanation: "Converting one-time to maintenance plans",
      },
      { title: "Trust Building", explanation: "Letting strangers into homes" },
    ],
    solutions: [
      "Show safe, family-friendly treatment process",
      "Demonstrate quick response capabilities",
      "Explain prevention vs. reaction",
      "Build trust through professionalism",
      "Illustrate maintenance plan benefits",
      "Showcase pest identification expertise",
    ],
    advantages: [
      "Addresses safety concerns visually",
      "Creates urgency for booking",
      "Explains services better than competitors",
      "Perfect for local targeting",
    ],
    videoTopics: {
      commercial: {
        title: "Pest-Free Home Guaranteed",
        description: "Showcase fast, safe pest elimination",
      },
      explainer: {
        title: "Safe Pest Control for Families",
        description: "Explain pet and child-safe treatments",
      },
      storytelling: {
        title: "How We Saved the Martinez Home",
        description: "Severe infestation to pest-free transformation",
      },
    },
    faqItems: [
      {
        question: "Can videos show treatments are safe?",
        answer:
          "Yes! Whiteboard videos excel at explaining safe processes in a friendly, reassuring way.",
      },
      {
        question: "What results can pest control companies expect?",
        answer: "Typically 50-100 leads per month during peak season.",
      },
    ],
    primaryBenefit: "get more service calls",
    mainProblem: "losing customers to DIY solutions",
    icon: "🐜",
  },
  {
    id: "carpet-cleaner",
    niche: "Carpet Cleaner",
    nichePlural: "Carpet Cleaners",
    serviceType: "carpet cleaning services",
    customerType: "Homeowners",
    painPoints: ["Dirty carpets", "Allergy concerns", "Stain removal"],
    benefits: [
      "Fresh, clean carpets",
      "Healthier home",
      "Extended carpet life",
    ],
    idealCustomer: "Homeowners with carpeted floors",
    averageTransaction: "$150-$400",
    customerLifetimeValue: "$1,500+",
    typicalLeadCost: "$10-$30",
    challenges: [
      {
        title: "DIY Competition",
        explanation: "Competing with rental machines",
      },
      {
        title: "Price Sensitivity",
        explanation: "Customers see it as optional",
      },
      {
        title: "Showing Value",
        explanation: "Demonstrating professional difference",
      },
      { title: "Seasonal Business", explanation: "Managing slow periods" },
      {
        title: "Recurring Revenue",
        explanation: "Building maintenance contracts",
      },
      { title: "Trust Building", explanation: "Letting workers into homes" },
    ],
    solutions: [
      "Show dramatic before/after results",
      "Demonstrate professional equipment difference",
      "Explain health benefits of clean carpets",
      "Build trust through process transparency",
      "Illustrate value vs. DIY methods",
      "Showcase satisfaction guarantees",
    ],
    advantages: [
      "Visual transformations are compelling",
      "Educates on professional vs. DIY difference",
      "Increases booking conversions",
      "Perfect for seasonal campaigns",
    ],
    videoTopics: {
      commercial: {
        title: "Carpets Like New in 24 Hours",
        description: "Dramatic cleaning transformation showcase",
      },
      explainer: {
        title: "Pro Cleaning vs. DIY: The Truth",
        description: "Compare professional results to rental machines",
      },
      storytelling: {
        title: "The Allergy-Free Home Story",
        description:
          "Family's journey to healthier living through clean carpets",
      },
    },
    faqItems: [
      {
        question: "How do videos beat DIY competition?",
        answer:
          "Videos clearly show the difference in results between professional and DIY cleaning.",
      },
      {
        question: "What can carpet cleaners expect?",
        answer: "Typically 40-80 bookings per month with video marketing.",
      },
    ],
    primaryBenefit: "book more cleaning jobs",
    mainProblem: "losing to DIY alternatives",
    icon: "🧹",
  },
  {
    id: "pediatric-dentist",
    niche: "Pediatric Dentist",
    nichePlural: "Pediatric Dentists",
    serviceType: "pediatric dental care",
    customerType: "Parents",
    painPoints: [
      "Child's fear of dentist",
      "Finding kid-friendly practice",
      "Early dental health",
    ],
    benefits: [
      "Happy dental visits",
      "Healthy teeth for life",
      "Stress-free appointments",
    ],
    idealCustomer: "Parents with young children",
    averageTransaction: "$200-$600",
    customerLifetimeValue: "$8,000+",
    typicalLeadCost: "$30-$70",
    challenges: [
      {
        title: "Child Anxiety",
        explanation: "Making dental visits fun, not scary",
      },
      {
        title: "Parent Trust",
        explanation: "Parents are protective of their children",
      },
      {
        title: "Competition",
        explanation: "Standing out among family practices",
      },
      {
        title: "Education",
        explanation: "Teaching parents about early dental care",
      },
      {
        title: "First Visit Fear",
        explanation: "Getting families in the door initially",
      },
      { title: "Retention", explanation: "Keeping families as children grow" },
    ],
    solutions: [
      "Show fun, kid-friendly office environment",
      "Demonstrate gentle approach with children",
      "Educate parents on dental milestones",
      "Build trust through child-focused care",
      "Showcase happy patient testimonials",
      "Illustrate your team's pediatric expertise",
    ],
    advantages: [
      "Fun animation style appeals to families",
      "Reduces child and parent anxiety",
      "Shows your kid-friendly approach",
      "Perfect for parent-targeted marketing",
    ],
    videoTopics: {
      commercial: {
        title: "Where Kids Love Going to the Dentist",
        description: "Show fun, friendly environment and happy kids",
      },
      explainer: {
        title: "Your Child's First Dental Visit",
        description: "What parents need to know",
      },
      storytelling: {
        title: "Tommy's Superhero Smile",
        description:
          "A child's journey from fear to excitement about dental visits",
      },
    },
    faqItems: [
      {
        question: "How do videos help with child anxiety?",
        answer:
          "Friendly whiteboard animations show kids what to expect, making visits less scary.",
      },
      {
        question: "What results can pediatric dentists expect?",
        answer: "Typically 30-50 new family patient inquiries per month.",
      },
    ],
    primaryBenefit: "attract more families",
    mainProblem: "struggling to connect with anxious parents",
    icon: "👶",
  },
  {
    id: "physical-therapist",
    niche: "Physical Therapist",
    nichePlural: "Physical Therapists",
    serviceType: "physical therapy",
    customerType: "Patients",
    painPoints: ["Chronic pain", "Recovery concerns", "Insurance navigation"],
    benefits: ["Pain relief", "Restored mobility", "Faster recovery"],
    idealCustomer: "Adults recovering from injury or managing pain",
    averageTransaction: "$100-$200 per session",
    customerLifetimeValue: "$3,000+",
    typicalLeadCost: "$25-$60",
    challenges: [
      {
        title: "Referral Dependence",
        explanation: "Relying on physician referrals",
      },
      {
        title: "Direct Access Education",
        explanation: "Patients don't know they can come directly",
      },
      {
        title: "Commitment",
        explanation: "Getting patients to complete treatment plans",
      },
      {
        title: "Competition",
        explanation: "Differentiating from other PT practices",
      },
      {
        title: "Value Demonstration",
        explanation: "Showing why PT beats other options",
      },
      {
        title: "Insurance Confusion",
        explanation: "Navigating coverage questions",
      },
    ],
    solutions: [
      "Demonstrate treatment techniques visually",
      "Show patient recovery journeys",
      "Educate on direct access options",
      "Build trust through expertise",
      "Illustrate your treatment approach",
      "Showcase success stories",
    ],
    advantages: [
      "Explains complex treatments simply",
      "Builds trust before first visit",
      "Educates on direct access",
      "Shows expertise visually",
    ],
    videoTopics: {
      commercial: {
        title: "Move Without Pain Again",
        description: "Showcase recovery transformations",
      },
      explainer: {
        title: "No Referral Needed: Direct Access PT",
        description: "Educate on coming directly to PT",
      },
      storytelling: {
        title: "From Injury to Marathon",
        description: "Patient's complete recovery journey",
      },
    },
    faqItems: [
      {
        question: "Can videos help explain our treatments?",
        answer:
          "Yes! Whiteboard videos make complex therapy techniques easy to understand.",
      },
      {
        question: "What results can PTs expect?",
        answer: "Typically 25-40 new patient inquiries per month.",
      },
    ],
    primaryBenefit: "attract more patients",
    mainProblem: "depending solely on referrals",
    icon: "🏃",
  },
  {
    id: "roofer",
    niche: "Roofer",
    nichePlural: "Roofers",
    serviceType: "roofing services",
    customerType: "Homeowners",
    painPoints: [
      "Roof damage",
      "Finding trustworthy contractors",
      "High costs",
    ],
    benefits: ["Protected home", "Quality workmanship", "Long-lasting results"],
    idealCustomer: "Homeowners needing roof repair or replacement",
    averageTransaction: "$8,000-$25,000",
    customerLifetimeValue: "$30,000+",
    typicalLeadCost: "$50-$150",
    challenges: [
      {
        title: "Trust Issues",
        explanation: "Roofing industry has reputation problems",
      },
      {
        title: "High Stakes",
        explanation: "Large investment requires confidence",
      },
      {
        title: "Storm Chasers",
        explanation: "Competing with fly-by-night operators",
      },
      { title: "Insurance Claims", explanation: "Helping with claim process" },
      {
        title: "Seasonal Business",
        explanation: "Managing weather-dependent demand",
      },
      {
        title: "Price Justification",
        explanation: "Explaining quality vs. cheap options",
      },
    ],
    solutions: [
      "Show professional installation process",
      "Demonstrate quality materials and workmanship",
      "Build trust through transparency",
      "Explain insurance claim assistance",
      "Showcase your warranty and guarantees",
      "Illustrate before/after transformations",
    ],
    advantages: [
      "Builds crucial trust in high-ticket sales",
      "Differentiates from storm chasers",
      "Shows quality and process",
      "Perfect for insurance-related content",
    ],
    videoTopics: {
      commercial: {
        title: "Protect Your Home for Decades",
        description: "Showcase quality installation and guarantees",
      },
      explainer: {
        title: "Navigating Your Roof Insurance Claim",
        description: "Step-by-step claim assistance guide",
      },
      storytelling: {
        title: "The Anderson Family Roof Transformation",
        description: "Complete project from storm damage to beautiful new roof",
      },
    },
    faqItems: [
      {
        question: "How do videos build trust for big purchases?",
        answer:
          "Videos show your process, team, and quality, building confidence for large investments.",
      },
      {
        question: "What results can roofers expect?",
        answer:
          "Typically 15-30 qualified leads per month, with high close rates.",
      },
    ],
    primaryBenefit: "close more roofing jobs",
    mainProblem: "competing with untrustworthy contractors",
    icon: "🏠",
  },
  {
    id: "bankruptcy-lawyer",
    niche: "Bankruptcy Lawyer",
    nichePlural: "Bankruptcy Lawyers",
    serviceType: "bankruptcy legal services",
    customerType: "Clients",
    painPoints: ["Financial stress", "Fear of judgment", "Legal confusion"],
    benefits: ["Debt relief", "Fresh start", "Expert guidance"],
    idealCustomer: "Individuals or businesses facing financial hardship",
    averageTransaction: "$1,500-$4,000",
    customerLifetimeValue: "$5,000+",
    typicalLeadCost: "$100-$250",
    challenges: [
      { title: "Stigma", explanation: "Clients feel shame about bankruptcy" },
      { title: "Confusion", explanation: "Legal process seems overwhelming" },
      {
        title: "Competition",
        explanation: "Standing out among many attorneys",
      },
      {
        title: "Trust Building",
        explanation: "Clients are vulnerable and cautious",
      },
      { title: "Education", explanation: "Explaining Chapter 7 vs 13 options" },
      { title: "Timing", explanation: "Reaching clients before it's too late" },
    ],
    solutions: [
      "Remove stigma with compassionate messaging",
      "Explain process simply and clearly",
      "Show path to fresh start",
      "Build trust through empathy",
      "Illustrate success stories",
      "Demonstrate expertise without intimidation",
    ],
    advantages: [
      "Friendly format reduces stigma",
      "Simplifies complex legal concepts",
      "Builds trust with vulnerable clients",
      "Shows empathy and expertise",
    ],
    videoTopics: {
      commercial: {
        title: "Your Fresh Start Begins Today",
        description: "Compassionate call to action for debt relief",
      },
      explainer: {
        title: "Chapter 7 vs Chapter 13: What's Right for You?",
        description: "Clear comparison of options",
      },
      storytelling: {
        title: "From Overwhelmed to Debt-Free",
        description: "Real client's journey to financial freedom",
      },
    },
    faqItems: [
      {
        question: "Can videos help reduce stigma?",
        answer:
          "Yes! The friendly whiteboard format makes bankruptcy feel less intimidating.",
      },
      {
        question: "What results can bankruptcy attorneys expect?",
        answer: "Typically 20-40 qualified consultation requests per month.",
      },
    ],
    primaryBenefit: "help more people get a fresh start",
    mainProblem: "reaching clients who need help",
    icon: "⚖️",
  },
  {
    id: "senior-care",
    niche: "Senior Care",
    nichePlural: "Senior Care Providers",
    serviceType: "senior care services",
    customerType: "Families",
    painPoints: ["Parent's safety", "Caregiver trust", "Quality of care"],
    benefits: ["Peace of mind", "Compassionate care", "Independence support"],
    idealCustomer: "Adult children caring for aging parents",
    averageTransaction: "$3,000-$8,000/month",
    customerLifetimeValue: "$50,000+",
    typicalLeadCost: "$100-$300",
    challenges: [
      {
        title: "Emotional Decision",
        explanation: "Families feel guilt about needing help",
      },
      {
        title: "Trust Requirements",
        explanation: "Entrusting loved ones to strangers",
      },
      { title: "Competition", explanation: "Many options in senior care" },
      {
        title: "Cost Concerns",
        explanation: "Affordability and value questions",
      },
      {
        title: "Quality Assurance",
        explanation: "Demonstrating care standards",
      },
      { title: "Timing", explanation: "Reaching families before crisis" },
    ],
    solutions: [
      "Show compassionate, personalized care",
      "Demonstrate caregiver training and vetting",
      "Build trust through transparency",
      "Illustrate daily care routines",
      "Showcase family testimonials",
      "Address common concerns empathetically",
    ],
    advantages: [
      "Warm format matches sensitive topic",
      "Builds trust with hesitant families",
      "Shows care quality visually",
      "Perfect for emotional storytelling",
    ],
    videoTopics: {
      commercial: {
        title: "Care That Feels Like Family",
        description: "Showcase compassionate, personalized care",
      },
      explainer: {
        title: "Choosing the Right Care for Your Parents",
        description: "Guide through care options and decisions",
      },
      storytelling: {
        title: "Mom's New Chapter",
        description: "Family's journey to finding perfect care",
      },
    },
    faqItems: [
      {
        question: "How do videos help with emotional decisions?",
        answer:
          "Warm, personal videos help families feel confident about their care choices.",
      },
      {
        question: "What results can senior care providers expect?",
        answer: "Typically 10-20 qualified family inquiries per month.",
      },
    ],
    primaryBenefit: "connect with more families",
    mainProblem: "building trust for difficult decisions",
    icon: "👴",
  },
  {
    id: "pediatrician",
    niche: "Pediatrician",
    nichePlural: "Pediatricians",
    serviceType: "pediatric healthcare",
    customerType: "Parents",
    painPoints: [
      "Child health concerns",
      "Finding the right doctor",
      "Trusting medical advice",
    ],
    benefits: ["Healthy children", "Peace of mind", "Trusted guidance"],
    idealCustomer: "Parents of infants and children",
    averageTransaction: "$150-$300 per visit",
    customerLifetimeValue: "$15,000+",
    typicalLeadCost: "$40-$100",
    challenges: [
      { title: "Trust Building", explanation: "Parents are very protective" },
      { title: "Competition", explanation: "Many pediatric options available" },
      { title: "Convenience", explanation: "Modern parents want easy access" },
      {
        title: "Education",
        explanation: "Answering countless parent questions",
      },
      {
        title: "Differentiation",
        explanation: "Standing out as the best choice",
      },
      {
        title: "First Impressions",
        explanation: "Making families feel welcome",
      },
    ],
    solutions: [
      "Show child-friendly office environment",
      "Demonstrate your approach with children",
      "Educate parents on key health topics",
      "Build trust through expertise and warmth",
      "Showcase your team and philosophy",
      "Illustrate your care continuity",
    ],
    advantages: [
      "Friendly format appeals to families",
      "Educates while building trust",
      "Shows your care philosophy",
      "Perfect for parent-targeted content",
    ],
    videoTopics: {
      commercial: {
        title: "Where Every Child Matters",
        description: "Showcase caring environment and happy families",
      },
      explainer: {
        title: "What to Expect at Well-Child Visits",
        description: "Guide parents through developmental checkups",
      },
      storytelling: {
        title: "Growing Up Healthy Together",
        description: "A family's journey with your practice",
      },
    },
    faqItems: [
      {
        question: "How do videos help attract families?",
        answer:
          "Videos show your practice personality and approach, helping parents feel confident choosing you.",
      },
      {
        question: "What results can pediatricians expect?",
        answer: "Typically 25-45 new family patient inquiries per month.",
      },
    ],
    primaryBenefit: "attract more families",
    mainProblem: "competing for parent trust",
    icon: "👨‍⚕️",
  },
  {
    id: "massage-therapist",
    niche: "Massage Therapist",
    nichePlural: "Massage Therapists",
    serviceType: "massage therapy",
    customerType: "Clients",
    painPoints: [
      "Chronic tension",
      "Stress relief",
      "Finding skilled therapists",
    ],
    benefits: ["Pain relief", "Stress reduction", "Improved wellness"],
    idealCustomer: "Adults seeking stress relief or pain management",
    averageTransaction: "$80-$150",
    customerLifetimeValue: "$2,000+",
    typicalLeadCost: "$15-$40",
    challenges: [
      {
        title: "Commoditization",
        explanation: "Massage seen as luxury, not necessity",
      },
      {
        title: "Price Competition",
        explanation: "Competing with chains and discounters",
      },
      {
        title: "Client Retention",
        explanation: "Building recurring appointments",
      },
      {
        title: "Differentiation",
        explanation: "Showing expertise beyond basic massage",
      },
      {
        title: "Trust Building",
        explanation: "Personal service requires comfort",
      },
      { title: "Education", explanation: "Explaining therapeutic benefits" },
    ],
    solutions: [
      "Educate on therapeutic benefits beyond relaxation",
      "Show your unique techniques and expertise",
      "Build trust through professionalism",
      "Demonstrate your treatment approach",
      "Showcase client transformations",
      "Illustrate your training and credentials",
    ],
    advantages: [
      "Educates on therapeutic value",
      "Differentiates from discount chains",
      "Builds trust before first visit",
      "Shows expertise and approach",
    ],
    videoTopics: {
      commercial: {
        title: "Relief That Lasts",
        description: "Showcase therapeutic benefits and easy booking",
      },
      explainer: {
        title: "How Massage Therapy Heals",
        description: "Explain the science of therapeutic massage",
      },
      storytelling: {
        title: "From Chronic Pain to Freedom",
        description: "Client's journey from constant pain to relief",
      },
    },
    faqItems: [
      {
        question: "How do videos help compete with chains?",
        answer:
          "Videos show your expertise and personal approach, differentiating from impersonal chains.",
      },
      {
        question: "What results can massage therapists expect?",
        answer: "Typically 30-60 new client bookings per month.",
      },
    ],
    primaryBenefit: "book more appointments",
    mainProblem: "competing with discount chains",
    icon: "💆",
  },
  {
    id: "plumber",
    niche: "Plumber",
    nichePlural: "Plumbers",
    serviceType: "plumbing services",
    customerType: "Homeowners",
    painPoints: [
      "Plumbing emergencies",
      "Finding reliable plumbers",
      "Fair pricing",
    ],
    benefits: ["Fast repairs", "Quality work", "Honest pricing"],
    idealCustomer: "Homeowners with plumbing issues",
    averageTransaction: "$200-$800",
    customerLifetimeValue: "$3,000+",
    typicalLeadCost: "$25-$75",
    challenges: [
      {
        title: "Emergency Timing",
        explanation: "Customers need immediate help",
      },
      { title: "Trust Issues", explanation: "Plumber reputation concerns" },
      { title: "Price Transparency", explanation: "Fear of being overcharged" },
      { title: "Competition", explanation: "Many plumbing options available" },
      {
        title: "Recurring Business",
        explanation: "Building maintenance relationships",
      },
      { title: "First Impression", explanation: "Being found in emergencies" },
    ],
    solutions: [
      "Show transparent, upfront pricing",
      "Demonstrate professional, clean service",
      "Build trust through reliability",
      "Illustrate your service process",
      "Showcase your team and values",
      "Highlight emergency response capabilities",
    ],
    advantages: [
      "Builds trust with transparent messaging",
      "Shows professionalism visually",
      "Differentiates from stereotypes",
      "Perfect for local emergency marketing",
    ],
    videoTopics: {
      commercial: {
        title: "Fast, Fair, and Reliable Plumbing",
        description: "Showcase quick response and honest pricing",
      },
      explainer: {
        title: "Our No-Surprise Pricing Promise",
        description: "Explain transparent pricing approach",
      },
      storytelling: {
        title: "Saving the Day for the Williams Family",
        description: "Emergency plumbing rescue story",
      },
    },
    faqItems: [
      {
        question: "How do videos help build trust?",
        answer:
          "Videos show your team, process, and pricing approach, overcoming common plumber stereotypes.",
      },
      {
        question: "What results can plumbers expect?",
        answer: "Typically 40-80 service calls per month.",
      },
    ],
    primaryBenefit: "get more service calls",
    mainProblem: "overcoming trust issues",
    icon: "🔧",
  },
  {
    id: "dui-lawyer",
    niche: "DUI Lawyer",
    nichePlural: "DUI Lawyers",
    serviceType: "DUI legal defense",
    customerType: "Clients",
    painPoints: ["Legal trouble", "Fear of consequences", "Urgent help needed"],
    benefits: ["Expert defense", "Reduced penalties", "Protected rights"],
    idealCustomer: "Individuals facing DUI charges",
    averageTransaction: "$2,500-$10,000",
    customerLifetimeValue: "$8,000+",
    typicalLeadCost: "$150-$400",
    challenges: [
      { title: "Urgency", explanation: "Clients need help immediately" },
      {
        title: "Fear and Shame",
        explanation: "Clients are scared and embarrassed",
      },
      { title: "Competition", explanation: "Many DUI attorneys advertising" },
      { title: "Trust Building", explanation: "Proving expertise quickly" },
      {
        title: "Price Sensitivity",
        explanation: "High stress about legal costs",
      },
      { title: "First Contact", explanation: "Being found when needed" },
    ],
    solutions: [
      "Provide reassurance and guidance",
      "Explain the process simply",
      "Demonstrate your track record",
      "Build trust through expertise",
      "Show compassion without judgment",
      "Illustrate defense strategies",
    ],
    advantages: [
      "Calming format for stressed clients",
      "Explains complex legal process",
      "Builds trust quickly",
      "Shows expertise and compassion",
    ],
    videoTopics: {
      commercial: {
        title: "Don't Face DUI Charges Alone",
        description: "Reassuring call to action with expert help",
      },
      explainer: {
        title: "What Happens After a DUI Arrest",
        description: "Step-by-step process explanation",
      },
      storytelling: {
        title: "One Mistake, A Second Chance",
        description: "Client's journey from arrest to defense",
      },
    },
    faqItems: [
      {
        question: "How do videos help scared clients?",
        answer:
          "Calming whiteboard videos explain the process and provide reassurance.",
      },
      {
        question: "What results can DUI lawyers expect?",
        answer: "Typically 15-30 qualified leads per month.",
      },
    ],
    primaryBenefit: "help more clients fight charges",
    mainProblem: "reaching scared clients quickly",
    icon: "🚗",
  },
  {
    id: "insurance-agency",
    niche: "Insurance Agency",
    nichePlural: "Insurance Agencies",
    serviceType: "insurance services",
    customerType: "Customers",
    painPoints: [
      "Coverage confusion",
      "Finding the right policy",
      "Price concerns",
    ],
    benefits: ["Proper coverage", "Expert guidance", "Competitive rates"],
    idealCustomer: "Individuals and businesses needing insurance",
    averageTransaction: "$1,000-$5,000/year",
    customerLifetimeValue: "$20,000+",
    typicalLeadCost: "$30-$100",
    challenges: [
      { title: "Complexity", explanation: "Insurance is confusing for most" },
      { title: "Commoditization", explanation: "Competing on price alone" },
      { title: "Trust Building", explanation: "Showing value beyond premiums" },
      {
        title: "Education",
        explanation: "Helping clients understand coverage",
      },
      { title: "Retention", explanation: "Preventing price shopping" },
      {
        title: "Differentiation",
        explanation: "Standing out from big carriers",
      },
    ],
    solutions: [
      "Simplify insurance concepts",
      "Show personalized service value",
      "Build trust through education",
      "Demonstrate claims support",
      "Illustrate coverage scenarios",
      "Showcase client success stories",
    ],
    advantages: [
      "Makes complex topics simple",
      "Builds trust through education",
      "Shows personal service value",
      "Differentiates from online quotes",
    ],
    videoTopics: {
      commercial: {
        title: "Insurance That Actually Protects You",
        description: "Showcase personalized protection and service",
      },
      explainer: {
        title: "What's Really Covered? Understanding Your Policy",
        description: "Clear explanation of coverage basics",
      },
      storytelling: {
        title: "When the Storm Hit, We Were There",
        description: "Client's claims experience story",
      },
    },
    faqItems: [
      {
        question: "How do videos help explain complex policies?",
        answer:
          "Whiteboard videos simplify insurance concepts, building trust through education.",
      },
      {
        question: "What results can agencies expect?",
        answer: "Typically 30-60 qualified quote requests per month.",
      },
    ],
    primaryBenefit: "attract more clients",
    mainProblem: "competing with online-only quotes",
    icon: "🛡️",
  },
  {
    id: "dermatologist",
    niche: "Dermatologist",
    nichePlural: "Dermatologists",
    serviceType: "dermatology services",
    customerType: "Patients",
    painPoints: ["Skin concerns", "Self-confidence", "Finding specialists"],
    benefits: ["Clear skin", "Expert care", "Confidence boost"],
    idealCustomer: "Adults with skin conditions or cosmetic concerns",
    averageTransaction: "$200-$1,000",
    customerLifetimeValue: "$5,000+",
    typicalLeadCost: "$50-$150",
    challenges: [
      { title: "Competition", explanation: "Many dermatology options" },
      { title: "Wait Times", explanation: "Long waits discourage patients" },
      {
        title: "Cosmetic vs Medical",
        explanation: "Balancing both service types",
      },
      { title: "Before/After", explanation: "Showing results ethically" },
      { title: "Trust Building", explanation: "Choosing the right specialist" },
      { title: "Education", explanation: "Explaining treatment options" },
    ],
    solutions: [
      "Show treatment process and results",
      "Educate on skin conditions",
      "Build trust through expertise",
      "Demonstrate patient care approach",
      "Illustrate treatment options",
      "Showcase technology and techniques",
    ],
    advantages: [
      "Perfect for before/after education",
      "Explains treatments visually",
      "Builds trust with detailed info",
      "Shows expertise and results",
    ],
    videoTopics: {
      commercial: {
        title: "Reveal Your Best Skin",
        description: "Showcase transformation possibilities",
      },
      explainer: {
        title: "Understanding Your Skin Treatment Options",
        description: "Compare treatment approaches",
      },
      storytelling: {
        title: "Jessica's Clear Skin Journey",
        description: "Patient's transformation from struggling to confident",
      },
    },
    faqItems: [
      {
        question: "Can videos show results ethically?",
        answer:
          "Yes! Whiteboard videos educate on possibilities without making unrealistic promises.",
      },
      {
        question: "What results can dermatologists expect?",
        answer: "Typically 30-50 new patient consultation requests per month.",
      },
    ],
    primaryBenefit: "attract more patients",
    mainProblem: "standing out among competitors",
    icon: "🧴",
  },
  {
    id: "electrician",
    niche: "Electrician",
    nichePlural: "Electricians",
    serviceType: "electrical services",
    customerType: "Homeowners",
    painPoints: [
      "Electrical problems",
      "Safety concerns",
      "Finding reliable help",
    ],
    benefits: ["Safe electrical systems", "Expert repairs", "Code compliance"],
    idealCustomer: "Homeowners with electrical needs",
    averageTransaction: "$200-$2,000",
    customerLifetimeValue: "$5,000+",
    typicalLeadCost: "$30-$80",
    challenges: [
      {
        title: "Safety Concerns",
        explanation: "Electrical work seems dangerous",
      },
      { title: "Trust Issues", explanation: "Letting workers into homes" },
      {
        title: "Emergency Response",
        explanation: "Being available when needed",
      },
      { title: "Price Transparency", explanation: "Fear of hidden costs" },
      {
        title: "Differentiation",
        explanation: "Standing out from competitors",
      },
      {
        title: "Code Compliance",
        explanation: "Explaining importance of proper work",
      },
    ],
    solutions: [
      "Demonstrate safety expertise",
      "Show transparent pricing approach",
      "Build trust through professionalism",
      "Illustrate your service process",
      "Showcase licensing and qualifications",
      "Explain code compliance importance",
    ],
    advantages: [
      "Shows safety and professionalism",
      "Builds trust visually",
      "Explains complex work simply",
      "Perfect for local marketing",
    ],
    videoTopics: {
      commercial: {
        title: "Safe, Reliable Electrical Service",
        description: "Showcase expertise and quick response",
      },
      explainer: {
        title: "Why Licensed Electricians Matter",
        description: "Explain safety and code compliance",
      },
      storytelling: {
        title: "Protecting the Chen Family Home",
        description: "Story of electrical safety upgrade",
      },
    },
    faqItems: [
      {
        question: "How do videos build trust?",
        answer:
          "Videos show your professionalism, safety practices, and transparent approach.",
      },
      {
        question: "What results can electricians expect?",
        answer: "Typically 35-70 service inquiries per month.",
      },
    ],
    primaryBenefit: "get more service calls",
    mainProblem: "building trust with homeowners",
    icon: "⚡",
  },
  {
    id: "hvac-contractor",
    niche: "HVAC Contractor",
    nichePlural: "HVAC Contractors",
    serviceType: "heating and cooling services",
    customerType: "Homeowners",
    painPoints: ["System failures", "Energy costs", "Finding reliable service"],
    benefits: ["Reliable comfort", "Energy savings", "Expert repairs"],
    idealCustomer: "Homeowners with HVAC needs",
    averageTransaction: "$500-$10,000",
    customerLifetimeValue: "$15,000+",
    typicalLeadCost: "$40-$120",
    challenges: [
      {
        title: "Emergency Timing",
        explanation: "Heating/cooling failures are urgent",
      },
      { title: "Seasonal Demand", explanation: "Managing peak seasons" },
      { title: "Trust Issues", explanation: "Fear of unnecessary repairs" },
      { title: "Price Concerns", explanation: "HVAC work is expensive" },
      {
        title: "Maintenance Sales",
        explanation: "Building recurring relationships",
      },
      {
        title: "Differentiation",
        explanation: "Standing out from competitors",
      },
    ],
    solutions: [
      "Show reliable, fast response",
      "Demonstrate transparent diagnostics",
      "Build trust through expertise",
      "Illustrate maintenance benefits",
      "Showcase energy-saving solutions",
      "Explain repair vs. replace decisions",
    ],
    advantages: [
      "Perfect for emergency marketing",
      "Builds trust for big purchases",
      "Shows expertise visually",
      "Explains complex systems simply",
    ],
    videoTopics: {
      commercial: {
        title: "Stay Comfortable Year-Round",
        description: "Showcase reliable service and quick response",
      },
      explainer: {
        title: "Repair vs. Replace: Making the Right Choice",
        description: "Help homeowners decide",
      },
      storytelling: {
        title: "The Hottest Day of Summer",
        description: "Emergency AC repair saves the day",
      },
    },
    faqItems: [
      {
        question: "How do videos help with trust?",
        answer:
          "Videos show your diagnostic process and honest approach, building confidence.",
      },
      {
        question: "What results can HVAC companies expect?",
        answer: "Typically 30-60 service leads per month.",
      },
    ],
    primaryBenefit: "book more HVAC jobs",
    mainProblem: "overcoming trust issues",
    icon: "❄️",
  },
  {
    id: "personal-injury-lawyer",
    niche: "Personal Injury Lawyer",
    nichePlural: "Personal Injury Lawyers",
    serviceType: "personal injury legal services",
    customerType: "Clients",
    painPoints: ["Injury recovery", "Insurance fights", "Fair compensation"],
    benefits: ["Maximum compensation", "Expert advocacy", "No upfront costs"],
    idealCustomer: "Individuals injured in accidents",
    averageTransaction: "$15,000-$100,000+ (contingency)",
    customerLifetimeValue: "$50,000+",
    typicalLeadCost: "$200-$500",
    challenges: [
      { title: "Competition", explanation: "Saturated PI advertising market" },
      {
        title: "Trust Building",
        explanation: "Standing out from 'ambulance chasers'",
      },
      { title: "Timing", explanation: "Reaching injured clients quickly" },
      { title: "Differentiation", explanation: "Showing why you're different" },
      {
        title: "Education",
        explanation: "Helping clients understand their rights",
      },
      { title: "Empathy", explanation: "Connecting with clients in pain" },
    ],
    solutions: [
      "Show compassionate, client-focused approach",
      "Explain the claims process simply",
      "Demonstrate your track record",
      "Build trust through transparency",
      "Illustrate the path to compensation",
      "Showcase client success stories",
    ],
    advantages: [
      "Warm format builds trust",
      "Explains process to stressed clients",
      "Differentiates from aggressive ads",
      "Shows results and compassion",
    ],
    videoTopics: {
      commercial: {
        title: "You Deserve Justice. We'll Fight for It.",
        description: "Compassionate call to action",
      },
      explainer: {
        title: "What Your Injury Claim is Really Worth",
        description: "Explain compensation factors",
      },
      storytelling: {
        title: "Maria's Road to Recovery",
        description: "Injured client's journey to fair compensation",
      },
    },
    faqItems: [
      {
        question: "How do videos differentiate from competitors?",
        answer:
          "Warm, educational videos show your compassion and expertise, standing out from aggressive ads.",
      },
      {
        question: "What results can PI lawyers expect?",
        answer: "Typically 10-25 qualified case inquiries per month.",
      },
    ],
    primaryBenefit: "help more injured clients",
    mainProblem: "standing out in competitive market",
    icon: "🏛️",
  },
  {
    id: "bookkeeper",
    niche: "Bookkeeper",
    nichePlural: "Bookkeepers",
    serviceType: "bookkeeping services",
    customerType: "Business Owners",
    painPoints: [
      "Financial disorganization",
      "Tax stress",
      "Finding reliable help",
    ],
    benefits: ["Organized finances", "Tax readiness", "Peace of mind"],
    idealCustomer: "Small business owners",
    averageTransaction: "$300-$1,500/month",
    customerLifetimeValue: "$20,000+",
    typicalLeadCost: "$50-$150",
    challenges: [
      { title: "Trust Issues", explanation: "Giving access to financial data" },
      {
        title: "Value Demonstration",
        explanation: "Showing ROI of bookkeeping",
      },
      { title: "Competition", explanation: "Competing with DIY software" },
      { title: "Retention", explanation: "Keeping clients long-term" },
      { title: "Education", explanation: "Helping owners understand finances" },
      {
        title: "Differentiation",
        explanation: "Standing out from other bookkeepers",
      },
    ],
    solutions: [
      "Demonstrate expertise and confidentiality",
      "Show value beyond data entry",
      "Build trust through transparency",
      "Illustrate financial insights provided",
      "Showcase your process and tools",
      "Explain time/money savings",
    ],
    advantages: [
      "Makes finance topics approachable",
      "Builds trust for sensitive data",
      "Shows expertise visually",
      "Differentiates from DIY software",
    ],
    videoTopics: {
      commercial: {
        title: "Focus on Your Business, We'll Handle the Books",
        description: "Showcase peace of mind and expertise",
      },
      explainer: {
        title: "What Great Bookkeeping Actually Does for You",
        description: "Show value beyond basics",
      },
      storytelling: {
        title: "How Clean Books Saved Tom's Business",
        description: "Business owner's financial transformation",
      },
    },
    faqItems: [
      {
        question: "How do videos build trust for financial services?",
        answer:
          "Videos show your process, security measures, and expertise, building confidence.",
      },
      {
        question: "What results can bookkeepers expect?",
        answer: "Typically 15-30 qualified business leads per month.",
      },
    ],
    primaryBenefit: "attract more business clients",
    mainProblem: "competing with DIY software",
    icon: "📊",
  },
];

export const getNicheBySlug = (slug: string): NicheData | undefined => {
  return nicheData.find((niche) => niche.id === slug);
};
