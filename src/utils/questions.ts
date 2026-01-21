export interface QuestionOption {
  label: string;
  points: number;
  value: string;
}

export interface Question {
  id: string;
  section: string;
  pillar?:
    | "niche"
    | "acquisition"
    | "tracking"
    | "experimentation"
    | "operations"
    | "visibility";
  question: string;
  type: "single" | "multi" | "text" | "email";
  options?: QuestionOption[];
  required?: boolean;
  placeholder?: string;
}

export const questions: Question[] = [
  // Section 1: Business Info (No Points)
  {
    id: "q1",
    section: "Business Info",
    question: "What best describes your business?",
    type: "single",
    options: [
      { label: "Home Services", points: 0, value: "home-services" },
      { label: "Agency", points: 0, value: "agency" },
      { label: "Marketer", points: 0, value: "marketer" },
      { label: "Developer", points: 0, value: "developer" },
      { label: "Other", points: 0, value: "other" },
    ],
  },
  {
    id: "q2",
    section: "Business Info",
    question: "What is your monthly revenue?",
    type: "single",
    options: [
      { label: "$0 - $10K", points: 0, value: "0-10k" },
      { label: "$10K - $30K", points: 0, value: "10k-30k" },
      { label: "$30K - $75K", points: 0, value: "30k-75k" },
      { label: "$75K - $150K", points: 0, value: "75k-150k" },
      { label: "$150K - $300K", points: 0, value: "150k-300k" },
      { label: "$300K+", points: 0, value: "300k+" },
    ],
  },
  {
    id: "q3",
    section: "Business Info",
    question: "How many years have you been in business?",
    type: "single",
    options: [
      { label: "Less than 1 year", points: 0, value: "<1" },
      { label: "1-3 years", points: 0, value: "1-3" },
      { label: "3-5 years", points: 0, value: "3-5" },
      { label: "5-10 years", points: 0, value: "5-10" },
      { label: "10+ years", points: 0, value: "10+" },
    ],
  },

  // Section 2: Niche & Narrative (15 pts)
  {
    id: "q4",
    section: "Niche & Narrative",
    pillar: "niche",
    question: "How clearly can you describe your ideal customer?",
    type: "single",
    options: [
      { label: "Detailed avatar documented", points: 5, value: "detailed" },
      { label: "General idea, not documented", points: 3, value: "general" },
      { label: "Serve whoever pays", points: 1, value: "anyone" },
      { label: "Never thought about it", points: 0, value: "never" },
    ],
  },
  {
    id: "q5",
    section: "Niche & Narrative",
    pillar: "niche",
    question: "Do you have a unique value proposition?",
    type: "single",
    options: [
      { label: "Yes, featured prominently", points: 5, value: "prominent" },
      { label: "Have one, not consistent", points: 3, value: "inconsistent" },
      { label: "Same as competitors", points: 1, value: "same" },
      { label: "Don't have one", points: 0, value: "none" },
    ],
  },
  {
    id: "q6",
    section: "Niche & Narrative",
    pillar: "niche",
    question: "How differentiated is your business?",
    type: "single",
    options: [
      { label: "Clear, documented, proven", points: 5, value: "clear" },
      { label: "Some, not articulated", points: 3, value: "some" },
      { label: "Generic claims only", points: 1, value: "generic" },
      { label: "No differentiation", points: 0, value: "none" },
    ],
  },

  // Section 3: Acquisition Systems (20 pts)
  {
    id: "q7",
    section: "Acquisition Systems",
    pillar: "acquisition",
    question: "Which marketing channels are you actively using?",
    type: "multi",
    options: [
      { label: "Google My Business", points: 1, value: "gmb" },
      { label: "Google Ads", points: 1, value: "google-ads" },
      { label: "Facebook/Instagram Ads", points: 1, value: "meta-ads" },
      { label: "LinkedIn", points: 1, value: "linkedin" },
      { label: "YouTube", points: 1, value: "youtube" },
      { label: "SEO/Content", points: 1, value: "seo" },
      { label: "Email Marketing", points: 1, value: "email" },
      { label: "Direct Mail", points: 1, value: "direct-mail" },
      { label: "Referrals", points: 1, value: "referrals" },
      { label: "Partnerships", points: 1, value: "partnerships" },
      { label: "Cold Outreach", points: 1, value: "cold-outreach" },
      { label: "None", points: 0, value: "none" },
    ],
  },
  {
    id: "q8",
    section: "Acquisition Systems",
    pillar: "acquisition",
    question: "What is your monthly marketing investment?",
    type: "single",
    options: [
      { label: "$5K+", points: 5, value: "5k+" },
      { label: "$2.5K - $5K", points: 4, value: "2.5k-5k" },
      { label: "$1K - $2.5K", points: 3, value: "1k-2.5k" },
      { label: "$500 - $1K", points: 2, value: "500-1k" },
      { label: "Less than $500", points: 1, value: "<500" },
      { label: "$0", points: 0, value: "0" },
    ],
  },
  {
    id: "q9",
    section: "Acquisition Systems",
    pillar: "acquisition",
    question: "Is your acquisition process documented?",
    type: "single",
    options: [
      { label: "Fully documented", points: 5, value: "full" },
      { label: "Partially documented", points: 3, value: "partial" },
      { label: "All in my head", points: 1, value: "head" },
      { label: "No process", points: 0, value: "none" },
    ],
  },
  {
    id: "q10",
    section: "Acquisition Systems",
    pillar: "acquisition",
    question: "How consistent is your lead flow?",
    type: "single",
    options: [
      { label: "Very consistent", points: 5, value: "very" },
      { label: "Somewhat consistent", points: 3, value: "somewhat" },
      { label: "Feast or famine", points: 1, value: "feast-famine" },
      { label: "Completely unpredictable", points: 0, value: "unpredictable" },
    ],
  },

  // Section 4: Revenue Tracking (20 pts)
  {
    id: "q11",
    section: "Revenue Tracking",
    pillar: "tracking",
    question: "Do you track revenue by marketing channel?",
    type: "single",
    options: [
      { label: "Yes, track ROI by channel", points: 7, value: "roi" },
      { label: "Track leads, not revenue", points: 4, value: "leads" },
      { label: "Incomplete tracking", points: 2, value: "incomplete" },
      { label: "No idea where revenue comes from", points: 0, value: "none" },
    ],
  },
  {
    id: "q12",
    section: "Revenue Tracking",
    pillar: "tracking",
    question: "Which tracking tools do you use?",
    type: "multi",
    options: [
      { label: "Google Analytics", points: 1, value: "ga" },
      { label: "Call Tracking", points: 1, value: "call" },
      { label: "CRM with pipeline", points: 1, value: "crm" },
      { label: "Facebook Pixel", points: 1, value: "fb-pixel" },
      { label: "Google Ads tracking", points: 1, value: "gads" },
      { label: "Heat mapping", points: 1, value: "heatmap" },
      { label: "Attribution software", points: 1, value: "attribution" },
      { label: "None", points: 0, value: "none" },
    ],
  },
  {
    id: "q13",
    section: "Revenue Tracking",
    pillar: "tracking",
    question: "How do you measure marketing success?",
    type: "single",
    options: [
      { label: "Revenue, LTV, CAC:LTV", points: 7, value: "advanced" },
      { label: "Revenue + CPA", points: 5, value: "revenue-cpa" },
      { label: "Leads/calls only", points: 3, value: "leads" },
      { label: "Clicks/impressions", points: 1, value: "vanity" },
      { label: "Don't measure", points: 0, value: "none" },
    ],
  },

  // Section 5: Experimentation (15 pts)
  {
    id: "q14",
    section: "Experimentation",
    pillar: "experimentation",
    question: "How often do you test your marketing?",
    type: "single",
    options: [
      { label: "Weekly/bi-weekly", points: 5, value: "weekly" },
      { label: "Monthly reviews", points: 3, value: "monthly" },
      { label: "Rarely", points: 1, value: "rarely" },
      { label: "Never", points: 0, value: "never" },
    ],
  },
  {
    id: "q15",
    section: "Experimentation",
    pillar: "experimentation",
    question: "Do you run A/B tests?",
    type: "single",
    options: [
      { label: "Yes, regularly", points: 5, value: "regular" },
      { label: "Sometimes", points: 3, value: "sometimes" },
      { label: "Tried once or twice", points: 1, value: "tried" },
      { label: "No", points: 0, value: "no" },
    ],
  },
  {
    id: "q16",
    section: "Experimentation",
    pillar: "experimentation",
    question: "How do you decide on marketing changes?",
    type: "single",
    options: [
      { label: "Data-driven decisions", points: 5, value: "data" },
      { label: "Data + gut feeling", points: 3, value: "mixed" },
      { label: "Gut/copying competitors", points: 1, value: "gut" },
      { label: "Random changes", points: 0, value: "random" },
    ],
  },

  // Section 6: Operations (15 pts)
  {
    id: "q17",
    section: "Operations",
    pillar: "operations",
    question: "Do you have documented SOPs?",
    type: "single",
    options: [
      { label: "Everything documented", points: 5, value: "all" },
      { label: "Some documented", points: 3, value: "some" },
      { label: "All in my head", points: 1, value: "head" },
      { label: "No documentation", points: 0, value: "none" },
    ],
  },
  {
    id: "q18",
    section: "Operations",
    pillar: "operations",
    question: "What CRM system do you use?",
    type: "single",
    options: [
      { label: "Fully automated CRM", points: 5, value: "automated" },
      { label: "CRM with manual tracking", points: 3, value: "manual-crm" },
      { label: "Spreadsheets", points: 1, value: "spreadsheets" },
      { label: "No system", points: 0, value: "none" },
    ],
  },
  {
    id: "q19",
    section: "Operations",
    pillar: "operations",
    question: "Is your lead follow-up automated?",
    type: "single",
    options: [
      { label: "Fully automated", points: 5, value: "full" },
      { label: "Partially automated", points: 3, value: "partial" },
      { label: "Manual only", points: 1, value: "manual" },
      { label: "No follow-up process", points: 0, value: "none" },
    ],
  },

  // Section 7: Visibility (15 pts)
  {
    id: "q20",
    section: "Visibility",
    pillar: "visibility",
    question: "How strong is your online presence?",
    type: "single",
    options: [
      {
        label: "Strong (website, portfolio, cases)",
        points: 5,
        value: "strong",
      },
      { label: "Decent presence", points: 3, value: "decent" },
      { label: "Basic website only", points: 1, value: "basic" },
      { label: "Weak or none", points: 0, value: "weak" },
    ],
  },
  {
    id: "q21",
    section: "Visibility",
    pillar: "visibility",
    question: "How many testimonials/reviews do you have?",
    type: "single",
    options: [
      {
        label: "100+ reviews or 10+ case studies",
        points: 5,
        value: "excellent",
      },
      { label: "20-100 reviews or 3-10 cases", points: 3, value: "good" },
      { label: "Under 20 reviews or 1-2 cases", points: 1, value: "few" },
      { label: "None", points: 0, value: "none" },
    ],
  },
  {
    id: "q22",
    section: "Visibility",
    pillar: "visibility",
    question: "How do prospects discover you?",
    type: "multi",
    options: [
      { label: "Referrals", points: 1, value: "referrals" },
      { label: "Google SEO", points: 1, value: "seo" },
      { label: "LinkedIn", points: 1, value: "linkedin" },
      { label: "Social media", points: 1, value: "social" },
      { label: "Content marketing", points: 1, value: "content" },
      { label: "Paid ads", points: 1, value: "paid" },
      { label: "Networking", points: 1, value: "networking" },
      { label: "Cold outreach", points: 1, value: "cold" },
      { label: "Struggling to get discovered", points: 0, value: "struggling" },
    ],
  },

  // Section 8: Lead Capture
  {
    id: "q23",
    section: "Your Details",
    question: "What is your email address?",
    type: "email",
    required: true,
    placeholder: "your@email.com",
  },
  {
    id: "q24",
    section: "Your Details",
    question: "What is your business name?",
    type: "text",
    required: true,
    placeholder: "Your Business Name",
  },
  {
    id: "q25",
    section: "Your Details",
    question: "What is your phone number? (optional)",
    type: "text",
    required: false,
    placeholder: "+1 (555) 123-4567",
  },
  {
    id: "q26",
    section: "Your Details",
    question: "What is your biggest marketing challenge?",
    type: "text",
    required: false,
    placeholder: "Tell us about your biggest challenge...",
  },
];

export const pillarMaxScores = {
  niche: 15,
  acquisition: 20,
  tracking: 20,
  experimentation: 15,
  operations: 15,
  visibility: 15,
};

export const pillarLabels = {
  niche: "Niche & Narrative",
  acquisition: "Acquisition Systems",
  tracking: "Revenue Tracking",
  experimentation: "Experimentation",
  operations: "Operations",
  visibility: "Visibility",
};
