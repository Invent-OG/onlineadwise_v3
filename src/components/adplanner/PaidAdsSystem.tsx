import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Target,
  BarChart3,
  GitBranch,
  Users,
  Search,
  Map,
  Activity,
  Layers,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  ExternalLink,
  Copy,
  Check,
  FileOutput,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jsPDF from "jspdf";

// Platform Dashboard Links
const platformLinks = {
  meta: {
    adsManager: "https://adsmanager.facebook.com",
    eventsManager: "https://business.facebook.com/events_manager",
    audienceInsights: "https://business.facebook.com/insights/audience",
    creativehub: "https://www.facebook.com/ads/creativehub",
  },
  google: {
    adsManager: "https://ads.google.com",
    keywordPlanner: "https://ads.google.com/aw/keywordplanner",
    analytics: "https://analytics.google.com",
    tagManager: "https://tagmanager.google.com",
  },
};

interface FormData {
  // Section 1: Conversion & Tracking
  websiteUrl: string;
  conversionEvents: string;
  adPlatform: string;
  businessObjective: string;

  // Section 2: Dashboard
  metaAccountId: string;
  googleAccountId: string;
  preferredKPIs: string;

  // Section 3: Attribution
  attributionModel: string;
  funnelStages: string;

  // Section 4: Meta Ads
  metaAudienceType: string;
  metaFunnelStage: string;
  metaOfferDetails: string;
  metaLandingPage: string;

  // Section 5: Google Ads
  targetKeywords: string;
  searchIntent: string;
  googleOfferDetails: string;
  googleLandingPage: string;

  // Section 6: Mapping
  metaAudiences: string;
  googleKeywordLists: string;
  campaignGoals: string;

  // Section 7: Reporting
  activeCampaigns: string;
  budgetAllocation: string;
  performanceThresholds: string;

  // Section 8: Creative Comparison
  messagingAcrossPlatforms: string;
  campaignNamingStructure: string;

  // Section 9: Optimization
  businessPriorities: string;
  profitTargets: string;

  // Section 10: Final
  campaignData: string;
  audienceDetails: string;
  performanceGoals: string;
}

const initialFormData: FormData = {
  websiteUrl: "",
  conversionEvents: "",
  adPlatform: "",
  businessObjective: "",
  metaAccountId: "",
  googleAccountId: "",
  preferredKPIs: "",
  attributionModel: "",
  funnelStages: "",
  metaAudienceType: "",
  metaFunnelStage: "",
  metaOfferDetails: "",
  metaLandingPage: "",
  targetKeywords: "",
  searchIntent: "",
  googleOfferDetails: "",
  googleLandingPage: "",
  metaAudiences: "",
  googleKeywordLists: "",
  campaignGoals: "",
  activeCampaigns: "",
  budgetAllocation: "",
  performanceThresholds: "",
  messagingAcrossPlatforms: "",
  campaignNamingStructure: "",
  businessPriorities: "",
  profitTargets: "",
  campaignData: "",
  audienceDetails: "",
  performanceGoals: "",
};

const PaidAdsSystem: React.FC = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      let yPosition = margin;

      // Header with NM Logo
      pdf.setFillColor(10, 10, 10);
      pdf.rect(0, 0, pageWidth, 40, "F");

      pdf.setFillColor(212, 175, 55);
      pdf.roundedRect(margin, 10, 20, 20, 3, 3, "F");
      pdf.setTextColor(10, 10, 10);
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("NM", margin + 10, 23, { align: "center" });

      pdf.setTextColor(212, 175, 55);
      pdf.setFontSize(18);
      pdf.text("Naren Method", margin + 25, 18);
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.text("Paid Ads Performance System Report", margin + 25, 26);

      yPosition = 50;

      // Add form data to PDF
      const sections = [
        {
          title: "1. Conversion & Tracking Setup",
          fields: [
            { label: "Website URL", value: formData.websiteUrl },
            { label: "Conversion Events", value: formData.conversionEvents },
            { label: "Ad Platform", value: formData.adPlatform },
            { label: "Business Objective", value: formData.businessObjective },
          ],
        },
        {
          title: "2. Dashboard Configuration",
          fields: [
            { label: "Meta Account ID", value: formData.metaAccountId },
            { label: "Google Account ID", value: formData.googleAccountId },
            { label: "Preferred KPIs", value: formData.preferredKPIs },
          ],
        },
        {
          title: "3. Attribution & Funnel",
          fields: [
            { label: "Attribution Model", value: formData.attributionModel },
            { label: "Funnel Stages", value: formData.funnelStages },
          ],
        },
        {
          title: "4. Meta Ads Setup",
          fields: [
            { label: "Audience Type", value: formData.metaAudienceType },
            { label: "Funnel Stage", value: formData.metaFunnelStage },
            { label: "Offer Details", value: formData.metaOfferDetails },
            { label: "Landing Page", value: formData.metaLandingPage },
          ],
        },
        {
          title: "5. Google Ads Setup",
          fields: [
            { label: "Target Keywords", value: formData.targetKeywords },
            { label: "Search Intent", value: formData.searchIntent },
            { label: "Offer Details", value: formData.googleOfferDetails },
            { label: "Landing Page", value: formData.googleLandingPage },
          ],
        },
        {
          title: "6. Audience & Keyword Mapping",
          fields: [
            { label: "Meta Audiences", value: formData.metaAudiences },
            { label: "Google Keywords", value: formData.googleKeywordLists },
            { label: "Campaign Goals", value: formData.campaignGoals },
          ],
        },
        {
          title: "7. Reporting & Optimization",
          fields: [
            { label: "Active Campaigns", value: formData.activeCampaigns },
            { label: "Budget Allocation", value: formData.budgetAllocation },
            {
              label: "Performance Thresholds",
              value: formData.performanceThresholds,
            },
          ],
        },
        {
          title: "8. Creative Comparison",
          fields: [
            {
              label: "Messaging Across Platforms",
              value: formData.messagingAcrossPlatforms,
            },
            {
              label: "Campaign Naming",
              value: formData.campaignNamingStructure,
            },
          ],
        },
        {
          title: "9. Optimization Recommendations",
          fields: [
            {
              label: "Business Priorities",
              value: formData.businessPriorities,
            },
            { label: "Profit Targets", value: formData.profitTargets },
          ],
        },
        {
          title: "10. System Summary",
          fields: [
            { label: "Campaign Data", value: formData.campaignData },
            { label: "Audience Details", value: formData.audienceDetails },
            { label: "Performance Goals", value: formData.performanceGoals },
          ],
        },
      ];

      for (const section of sections) {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = margin;
        }

        pdf.setFillColor(212, 175, 55);
        pdf.roundedRect(
          margin,
          yPosition,
          pageWidth - margin * 2,
          8,
          2,
          2,
          "F",
        );
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(11);
        pdf.setFont("helvetica", "bold");
        pdf.text(section.title, margin + 3, yPosition + 5.5);
        yPosition += 12;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);

        for (const field of section.fields) {
          if (yPosition > pageHeight - 20) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.setTextColor(100, 100, 100);
          pdf.text(`${field.label}:`, margin, yPosition);
          pdf.setTextColor(40, 40, 40);
          const value = field.value || "Not provided";
          const valueLines = pdf.splitTextToSize(
            value,
            pageWidth - margin * 2 - 40,
          );
          pdf.text(valueLines, margin + 45, yPosition);
          yPosition += Math.max(valueLines.length * 4, 5);
        }
        yPosition += 8;
      }

      // Footer
      pdf.setFillColor(10, 10, 10);
      pdf.rect(0, pageHeight - 15, pageWidth, 15, "F");
      pdf.setTextColor(212, 175, 55);
      pdf.setFontSize(8);
      pdf.text(
        "Naren Method - Performance Marketing Excellence",
        pageWidth / 2,
        pageHeight - 7,
        { align: "center" },
      );
      pdf.setTextColor(150, 150, 150);
      pdf.text("connectwithmeforads@gmail.com", pageWidth / 2, pageHeight - 3, {
        align: "center",
      });

      pdf.save("Naren-Method-Paid-Ads-System.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const sections = [
    {
      id: 1,
      title: "Conversion & Tracking",
      icon: <Target className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Dashboard Setup",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Attribution & Funnel",
      icon: <GitBranch className="h-5 w-5" />,
    },
    { id: 4, title: "Meta Ads Copy", icon: <Users className="h-5 w-5" /> },
    { id: 5, title: "Google Ads Copy", icon: <Search className="h-5 w-5" /> },
    { id: 6, title: "Audience Mapping", icon: <Map className="h-5 w-5" /> },
    {
      id: 7,
      title: "Real-Time Reporting",
      icon: <Activity className="h-5 w-5" />,
    },
    {
      id: 8,
      title: "Creative Comparison",
      icon: <Layers className="h-5 w-5" />,
    },
    { id: 9, title: "Optimization", icon: <Lightbulb className="h-5 w-5" /> },
    {
      id: 10,
      title: "Final Summary",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const renderOutputCard = (
    title: string,
    items: string[],
    color: "gold" | "green",
  ) => (
    <div
      className={`rounded-xl p-4 border ${color === "gold" ? "bg-primary/5 border-primary/30" : "bg-green-500/5 border-green-500/30"}`}
    >
      <h5
        className={` font-semibold text-sm mb-3 ${color === "gold" ? "text-primary" : "text-green-400"}`}
      >
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-foreground/80 font-body"
          >
            <CheckCircle2
              className={`h-4 w-4 mt-0.5 shrink-0 ${color === "gold" ? "text-primary" : "text-green-400"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderPlatformLink = (
    platform: "meta" | "google",
    type: keyof typeof platformLinks.meta | keyof typeof platformLinks.google,
    label: string,
  ) => (
    <a
      href={
        platformLinks[platform][
          type as keyof (typeof platformLinks)[typeof platform]
        ]
      }
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
    >
      <ExternalLink className="h-4 w-4 text-primary" />
      <span className="text-muted-foreground">{label}</span>
    </a>
  );

  return (
    <section
      id="paid-ads-system"
      className="py-20 bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl  font-bold mb-4">
            <span className="text-gradient-gold">
              Paid Ads Performance System
            </span>
          </h2>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto mb-6">
            Fill in your campaign details below. The system will generate
            actionable outputs for Meta Ads and Google Ads.
          </p>
          <Button
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            size="lg"
            className="gap-2"
          >
            {isGeneratingPDF ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Download Complete Report (PDF)
              </>
            )}
          </Button>
        </motion.div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
              }`}
            >
              {section.icon}
              <span className="hidden md:inline">{section.title}</span>
              <span className="md:hidden">{section.id}</span>
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="card-sci-fi p-6 md:p-8"
          >
            {/* Section 1: Conversion & Tracking */}
            {activeSection === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Conversion & Tracking Setup
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Configure your conversion tracking across platforms
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Inputs */}
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="websiteUrl">
                          Website or Funnel URL
                        </Label>
                        <Input
                          id="websiteUrl"
                          placeholder="https://yourwebsite.com/landing-page"
                          value={formData.websiteUrl}
                          onChange={(e) =>
                            updateFormData("websiteUrl", e.target.value)
                          }
                          className="bg-background/50"
                        />
                      </div>

                      <div>
                        <Label htmlFor="conversionEvents">
                          Conversion Events to Track
                        </Label>
                        <Select
                          value={formData.conversionEvents}
                          onValueChange={(v) =>
                            updateFormData("conversionEvents", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select events..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="lead">Lead</SelectItem>
                            <SelectItem value="purchase">Purchase</SelectItem>
                            <SelectItem value="add_to_cart">
                              Add to Cart
                            </SelectItem>
                            <SelectItem value="initiate_checkout">
                              Initiate Checkout
                            </SelectItem>
                            <SelectItem value="complete_registration">
                              Complete Registration
                            </SelectItem>
                            <SelectItem value="page_view">Page View</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="adPlatform">Ad Platform</Label>
                        <Select
                          value={formData.adPlatform}
                          onValueChange={(v) => updateFormData("adPlatform", v)}
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select platform..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="meta">
                              Meta Ads (Facebook/Instagram)
                            </SelectItem>
                            <SelectItem value="google">Google Ads</SelectItem>
                            <SelectItem value="both">Both Platforms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="businessObjective">
                          Business Objective
                        </Label>
                        <Select
                          value={formData.businessObjective}
                          onValueChange={(v) =>
                            updateFormData("businessObjective", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select objective..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="lead_gen">
                              Lead Generation
                            </SelectItem>
                            <SelectItem value="sales">
                              Sales / E-commerce
                            </SelectItem>
                            <SelectItem value="app_installs">
                              App Installs
                            </SelectItem>
                            <SelectItem value="bookings">
                              Bookings / Appointments
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Expected
                      Outputs
                    </h4>

                    {renderOutputCard(
                      "What You'll Get",
                      [
                        "Accurate conversion tracking at Campaign, Ad Set, and Ad level",
                        "Clean, reliable performance data",
                        "Reduced discrepancy between platform vs actual conversions",
                        "Single source of truth for optimization",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        Platform Dashboards
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "meta",
                          "eventsManager",
                          "Meta Events Manager",
                        )}
                        {renderPlatformLink(
                          "google",
                          "tagManager",
                          "Google Tag Manager",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Dashboard Setup */}
            {activeSection === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Unified Performance Dashboard
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Connect your ad accounts for centralized reporting
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="metaAccountId">
                          Meta Ads Account ID
                        </Label>
                        <Input
                          id="metaAccountId"
                          placeholder="act_123456789"
                          value={formData.metaAccountId}
                          onChange={(e) =>
                            updateFormData("metaAccountId", e.target.value)
                          }
                          className="bg-background/50"
                        />
                      </div>

                      <div>
                        <Label htmlFor="googleAccountId">
                          Google Ads Account ID
                        </Label>
                        <Input
                          id="googleAccountId"
                          placeholder="123-456-7890"
                          value={formData.googleAccountId}
                          onChange={(e) =>
                            updateFormData("googleAccountId", e.target.value)
                          }
                          className="bg-background/50"
                        />
                      </div>

                      <div>
                        <Label htmlFor="preferredKPIs">Preferred KPIs</Label>
                        <Textarea
                          id="preferredKPIs"
                          placeholder="ROAS, CPA, CPC, Revenue, CTR, Conversion Rate..."
                          value={formData.preferredKPIs}
                          onChange={(e) =>
                            updateFormData("preferredKPIs", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent">
                      <FileOutput className="w-5 h-5 text-accent" /> Expected
                      Outputs
                    </h4>

                    {renderOutputCard(
                      "Dashboard Features",
                      [
                        "One centralized dashboard for all platforms",
                        "Meta Ads performance metrics in real-time",
                        "Google Ads performance metrics in real-time",
                        "Side-by-side campaign comparison",
                        "Faster insights without switching dashboards",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        Access Your Dashboards
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "meta",
                          "adsManager",
                          "Meta Ads Manager",
                        )}
                        {renderPlatformLink(
                          "google",
                          "adsManager",
                          "Google Ads",
                        )}
                        {renderPlatformLink(
                          "google",
                          "analytics",
                          "Google Analytics",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Attribution & Funnel */}
            {activeSection === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Attribution & Funnel Visibility
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Track user journeys and identify true conversion sources
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="attributionModel">
                          Attribution Model
                        </Label>
                        <Select
                          value={formData.attributionModel}
                          onValueChange={(v) =>
                            updateFormData("attributionModel", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select model..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="first_click">
                              First Click
                            </SelectItem>
                            <SelectItem value="last_click">
                              Last Click
                            </SelectItem>
                            <SelectItem value="linear">Linear</SelectItem>
                            <SelectItem value="time_decay">
                              Time Decay
                            </SelectItem>
                            <SelectItem value="data_driven">
                              Data-Driven / AI
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="funnelStages">Funnel Stages</Label>
                        <Textarea
                          id="funnelStages"
                          placeholder="TOF (Top of Funnel): Awareness&#10;MOF (Middle of Funnel): Consideration&#10;BOF (Bottom of Funnel): Conversion"
                          value={formData.funnelStages}
                          onChange={(e) =>
                            updateFormData("funnelStages", e.target.value)
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Expected
                      Outputs
                    </h4>

                    {renderOutputCard(
                      "Attribution Insights",
                      [
                        "Clear visibility of complete user journeys",
                        "True source of conversions identified",
                        "Assisted conversions tracked across platforms",
                        "Smarter budget allocation across funnel stages",
                      ],
                      "green",
                    )}

                    {/* Visual Funnel Display */}
                    <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                      <h5 className="text-sm font-semibold text-primary mb-3">
                        Funnel Visualization
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-primary/20 rounded-full h-8 flex items-center px-3">
                            <span className="text-xs font-medium">
                              TOF - Awareness
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 px-4">
                          <div className="w-4/5 bg-primary/40 rounded-full h-8 flex items-center px-3">
                            <span className="text-xs font-medium">
                              MOF - Consideration
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 px-8">
                          <div className="w-3/5 bg-primary/60 rounded-full h-8 flex items-center px-3">
                            <span className="text-xs font-medium">
                              BOF - Conversion
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Meta Ads Copy */}
            {activeSection === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Meta Ads Audience & Copy Creation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generate Meta Ads-ready copy assets
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="metaAudienceType">Audience Type</Label>
                        <Select
                          value={formData.metaAudienceType}
                          onValueChange={(v) =>
                            updateFormData("metaAudienceType", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select audience type..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="interest">
                              Interest-based
                            </SelectItem>
                            <SelectItem value="lookalike">
                              Lookalike Audience
                            </SelectItem>
                            <SelectItem value="retargeting">
                              Retargeting
                            </SelectItem>
                            <SelectItem value="broad">
                              Broad / Advantage+
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="metaFunnelStage">Funnel Stage</Label>
                        <Select
                          value={formData.metaFunnelStage}
                          onValueChange={(v) =>
                            updateFormData("metaFunnelStage", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select stage..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="tof">TOF - Awareness</SelectItem>
                            <SelectItem value="mof">
                              MOF - Consideration
                            </SelectItem>
                            <SelectItem value="bof">
                              BOF - Conversion
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="metaOfferDetails">Offer Details</Label>
                        <Textarea
                          id="metaOfferDetails"
                          placeholder="Describe your offer, unique selling points, pricing, etc."
                          value={formData.metaOfferDetails}
                          onChange={(e) =>
                            updateFormData("metaOfferDetails", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="metaLandingPage">
                          Landing Page URL
                        </Label>
                        <Input
                          id="metaLandingPage"
                          placeholder="https://yoursite.com/offer"
                          value={formData.metaLandingPage}
                          onChange={(e) =>
                            updateFormData("metaLandingPage", e.target.value)
                          }
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Generated
                      Copy Assets
                    </h4>

                    {renderOutputCard(
                      "Meta Ads Copy Components",
                      [
                        "Primary Text (Short Version - 125 chars)",
                        "Primary Text (Long Version - 500 chars)",
                        "Headline (40 chars max)",
                        "Description (30 chars max)",
                        "CTA Button recommendation",
                      ],
                      "gold",
                    )}

                    {renderOutputCard(
                      "Copy Optimization",
                      [
                        "Messaging aligned with audience awareness",
                        "Copy matched to buyer intent",
                        "Funnel stage appropriate language",
                        "Higher relevance & engagement potential",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        Create Your Ads
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "meta",
                          "adsManager",
                          "Meta Ads Manager",
                        )}
                        {renderPlatformLink(
                          "meta",
                          "creativehub",
                          "Creative Hub",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 5: Google Ads Copy */}
            {activeSection === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Google Ads Keyword & Copy Creation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Create Google Ads-compliant assets
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="targetKeywords">Target Keywords</Label>
                        <Textarea
                          id="targetKeywords"
                          placeholder="Enter keywords, one per line:&#10;performance marketing agency&#10;google ads expert&#10;meta ads specialist"
                          value={formData.targetKeywords}
                          onChange={(e) =>
                            updateFormData("targetKeywords", e.target.value)
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="searchIntent">Search Intent</Label>
                        <Select
                          value={formData.searchIntent}
                          onValueChange={(v) =>
                            updateFormData("searchIntent", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select intent..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="informational">
                              Informational
                            </SelectItem>
                            <SelectItem value="transactional">
                              Transactional
                            </SelectItem>
                            <SelectItem value="branded">Branded</SelectItem>
                            <SelectItem value="commercial">
                              Commercial Investigation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="googleOfferDetails">
                          Offer Details
                        </Label>
                        <Textarea
                          id="googleOfferDetails"
                          placeholder="Key benefits, pricing, unique value proposition..."
                          value={formData.googleOfferDetails}
                          onChange={(e) =>
                            updateFormData("googleOfferDetails", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="googleLandingPage">
                          Landing Page URL
                        </Label>
                        <Input
                          id="googleLandingPage"
                          placeholder="https://yoursite.com/service"
                          value={formData.googleLandingPage}
                          onChange={(e) =>
                            updateFormData("googleLandingPage", e.target.value)
                          }
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Generated
                      Ad Assets
                    </h4>

                    {renderOutputCard(
                      "Google Ads Copy Components",
                      [
                        "Headlines (30 chars each) - 15 variations",
                        "Long Headlines (90 chars)",
                        "Descriptions (90 chars each) - 4 variations",
                        "Sitelinks with descriptions",
                        "Callout extensions",
                      ],
                      "gold",
                    )}

                    {renderOutputCard(
                      "Quality Improvements",
                      [
                        "Copy aligned with keyword intent",
                        "Improved Quality Score potential",
                        "Higher ad relevance",
                        "Better expected CTR",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        Research & Create
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "google",
                          "keywordPlanner",
                          "Keyword Planner",
                        )}
                        {renderPlatformLink(
                          "google",
                          "adsManager",
                          "Google Ads",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 6: Audience Mapping */}
            {activeSection === 6 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Map className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Audience & Keyword Mapping
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Map audiences to messages for maximum relevance
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="metaAudiences">Meta Audiences</Label>
                        <Textarea
                          id="metaAudiences"
                          placeholder="List your Meta audiences:&#10;- Lookalike 1% Purchasers&#10;- Interest: Digital Marketing&#10;- Retargeting: Website Visitors 30d"
                          value={formData.metaAudiences}
                          onChange={(e) =>
                            updateFormData("metaAudiences", e.target.value)
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="googleKeywordLists">
                          Google Keyword Lists
                        </Label>
                        <Textarea
                          id="googleKeywordLists"
                          placeholder="List your keyword groups:&#10;- Brand keywords&#10;- Competitor keywords&#10;- Service keywords"
                          value={formData.googleKeywordLists}
                          onChange={(e) =>
                            updateFormData("googleKeywordLists", e.target.value)
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="campaignGoals">Campaign Goals</Label>
                        <Select
                          value={formData.campaignGoals}
                          onValueChange={(v) =>
                            updateFormData("campaignGoals", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select primary goal..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="traffic">Traffic</SelectItem>
                            <SelectItem value="leads">Leads</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="awareness">
                              Brand Awareness
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Mapping
                      Outputs
                    </h4>

                    {/* Visual Mapping Display */}
                    <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                      <h5 className="text-sm font-semibold text-primary mb-3">
                        Audience → Message Matrix
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">
                            TOF Audience
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/20 rounded text-primary">
                            → Educational Content
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">
                            MOF Audience
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/40 rounded text-primary">
                            → Case Studies
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">
                            BOF Audience
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/60 rounded text-primary-foreground">
                            → Direct Offer
                          </span>
                        </div>
                      </div>
                    </div>

                    {renderOutputCard(
                      "Mapping Benefits",
                      [
                        "Clear Audience → Message mapping",
                        "Keyword → Headline → Description flow",
                        "Elimination of generic messaging",
                        "Higher intent-matched ad delivery",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        Audience Tools
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "meta",
                          "audienceInsights",
                          "Audience Insights",
                        )}
                        {renderPlatformLink(
                          "google",
                          "keywordPlanner",
                          "Keyword Planner",
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 7: Real-Time Reporting */}
            {activeSection === 7 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Real-Time Reporting & Optimization Signals
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get actionable optimization signals
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="activeCampaigns">
                          Active Campaigns
                        </Label>
                        <Textarea
                          id="activeCampaigns"
                          placeholder="List your active campaigns:&#10;- META | SALES | IN | Course499&#10;- GOOGLE | LEADS | IN | Consultation"
                          value={formData.activeCampaigns}
                          onChange={(e) =>
                            updateFormData("activeCampaigns", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="budgetAllocation">
                          Budget Allocation
                        </Label>
                        <Textarea
                          id="budgetAllocation"
                          placeholder="Budget per campaign:&#10;- Campaign 1: ₹5,000/day&#10;- Campaign 2: ₹3,000/day"
                          value={formData.budgetAllocation}
                          onChange={(e) =>
                            updateFormData("budgetAllocation", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="performanceThresholds">
                          Performance Thresholds
                        </Label>
                        <Textarea
                          id="performanceThresholds"
                          placeholder="Target KPIs:&#10;- Target CPA: ₹500&#10;- Minimum ROAS: 3x&#10;- Max CPC: ₹20"
                          value={formData.performanceThresholds}
                          onChange={(e) =>
                            updateFormData(
                              "performanceThresholds",
                              e.target.value,
                            )
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" />{" "}
                      Optimization Signals
                    </h4>

                    {/* Mock Dashboard Display */}
                    <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                      <h5 className="text-sm font-semibold text-primary mb-3">
                        Performance Dashboard Preview
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-green-400">
                            ↑ 23%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            ROAS
                          </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">
                            ₹342
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Avg CPA
                          </div>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-green-400">
                            2.8%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            CTR
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-yellow-400">
                            ₹18
                          </div>
                          <div className="text-xs text-muted-foreground">
                            CPC
                          </div>
                        </div>
                      </div>
                    </div>

                    {renderOutputCard(
                      "What You'll See",
                      [
                        "Real-time performance updates",
                        "Winning ads identified instantly",
                        "Underperforming copy flagged",
                        "High-converting audiences highlighted",
                        "Faster optimization decisions",
                      ],
                      "green",
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        View Live Data
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {renderPlatformLink(
                          "meta",
                          "adsManager",
                          "Meta Ads Manager",
                        )}
                        {renderPlatformLink(
                          "google",
                          "adsManager",
                          "Google Ads",
                        )}
                        {renderPlatformLink("google", "analytics", "Analytics")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 8: Creative Comparison */}
            {activeSection === 8 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Cross-Platform Creative Comparison
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Compare performance across Meta and Google
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="messagingAcrossPlatforms">
                          Messaging Across Platforms
                        </Label>
                        <Textarea
                          id="messagingAcrossPlatforms"
                          placeholder="Describe your messaging themes:&#10;- Pain point messaging&#10;- Benefit-focused messaging&#10;- Urgency messaging"
                          value={formData.messagingAcrossPlatforms}
                          onChange={(e) =>
                            updateFormData(
                              "messagingAcrossPlatforms",
                              e.target.value,
                            )
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="campaignNamingStructure">
                          Campaign Naming Structure
                        </Label>
                        <Textarea
                          id="campaignNamingStructure"
                          placeholder="Your naming convention:&#10;Platform | Objective | Country | Offer | Stage"
                          value={formData.campaignNamingStructure}
                          onChange={(e) =>
                            updateFormData(
                              "campaignNamingStructure",
                              e.target.value,
                            )
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> Comparison
                      Outputs
                    </h4>

                    {/* Platform Comparison Visual */}
                    <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                      <h5 className="text-sm font-semibold text-primary mb-3">
                        Platform Performance Comparison
                      </h5>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-blue-400">Meta Ads</span>
                            <span>ROAS: 4.2x</span>
                          </div>
                          <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: "84%" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-green-400">Google Ads</span>
                            <span>ROAS: 3.8x</span>
                          </div>
                          <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {renderOutputCard(
                      "Comparison Benefits",
                      [
                        "Performance comparison across platforms",
                        "Scalable messages identified",
                        "Data-backed creative frameworks",
                        "Cross-platform optimization insights",
                      ],
                      "green",
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Section 9: Optimization */}
            {activeSection === 9 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">
                      Actionable Optimization Recommendations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get clear recommendations to scale and optimize
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Your
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="businessPriorities">
                          Business Priorities
                        </Label>
                        <Select
                          value={formData.businessPriorities}
                          onValueChange={(v) =>
                            updateFormData("businessPriorities", v)
                          }
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select priority..." />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border z-50">
                            <SelectItem value="scale">
                              Scale Aggressively
                            </SelectItem>
                            <SelectItem value="stabilize">
                              Stabilize Performance
                            </SelectItem>
                            <SelectItem value="test">
                              Test New Approaches
                            </SelectItem>
                            <SelectItem value="efficiency">
                              Improve Efficiency
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="profitTargets">
                          Profit / Lead Targets
                        </Label>
                        <Textarea
                          id="profitTargets"
                          placeholder="Define your targets:&#10;- Monthly revenue target: ₹10L&#10;- Monthly lead target: 500&#10;- Target profit margin: 40%"
                          value={formData.profitTargets}
                          onChange={(e) =>
                            updateFormData("profitTargets", e.target.value)
                          }
                          className="bg-background/50"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" />{" "}
                      Recommendations
                    </h4>

                    {/* Recommendation Cards */}
                    <div className="space-y-3">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <span className="text-sm font-semibold text-green-400">
                            SCALE
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Increase budget on winning campaigns
                        </p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <span className="text-sm font-semibold text-red-400">
                            PAUSE
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Stop wasteful ad spend
                        </p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-sm font-semibold text-yellow-400">
                            TEST
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Try new creative angles
                        </p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-sm font-semibold text-blue-400">
                            SHIFT
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Reallocate budget across platforms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 10: Final Summary */}
            {activeSection === 10 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className=" font-bold text-xl">Final System Summary</h3>
                    <p className="text-sm text-muted-foreground">
                      Your complete paid ads performance system
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className=" font-semibold text-primary flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Final
                      Inputs
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="campaignData">
                          Campaign Data Summary
                        </Label>
                        <Textarea
                          id="campaignData"
                          placeholder="Summarize your campaign structure..."
                          value={formData.campaignData}
                          onChange={(e) =>
                            updateFormData("campaignData", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="audienceDetails">
                          Audience Details
                        </Label>
                        <Textarea
                          id="audienceDetails"
                          placeholder="Key audience segments..."
                          value={formData.audienceDetails}
                          onChange={(e) =>
                            updateFormData("audienceDetails", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="performanceGoals">
                          Performance Goals
                        </Label>
                        <Textarea
                          id="performanceGoals"
                          placeholder="Define success metrics..."
                          value={formData.performanceGoals}
                          onChange={(e) =>
                            updateFormData("performanceGoals", e.target.value)
                          }
                          className="bg-background/50"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className=" font-semibold text-accent flex items-center gap-2">
                      <FileOutput className="w-5 h-5 text-accent" /> System
                      Outcome
                    </h4>

                    {renderOutputCard(
                      "Your Integrated System",
                      [
                        "Tracking is accurate across all platforms",
                        "Attribution is clear and actionable",
                        "Ad copy is intent-driven and optimized",
                        "Optimization is data-backed",
                        "Scaling decisions are confident",
                      ],
                      "green",
                    )}

                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/30">
                      <h5 className=" font-semibold text-primary mb-2">
                        Ready to Launch?
                      </h5>
                      <p className="text-sm text-muted-foreground mb-4">
                        Download your complete system report or get expert help
                        implementing it.
                      </p>
                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={generatePDF}
                          disabled={isGeneratingPDF}
                          size="sm"
                          className="w-full"
                        >
                          {isGeneratingPDF ? (
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          ) : (
                            <Download className="h-4 w-4 mr-2" />
                          )}
                          Download PDF Report
                        </Button>
                        <Button
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            window.open(
                              "https://calendar.app.google/eD4t7GPF2hUhJ7GA9",
                              "_blank",
                            )
                          }
                        >
                          Book Implementation Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
              <Button
                variant="outline"
                onClick={() =>
                  setActiveSection((prev) => Math.max(1, prev - 1))
                }
                disabled={activeSection === 1}
              >
                ← Previous
              </Button>
              <span className="text-sm text-muted-foreground self-center">
                Step {activeSection} of 10
              </span>
              <Button
                onClick={() =>
                  setActiveSection((prev) => Math.min(10, prev + 1))
                }
                disabled={activeSection === 10}
              >
                Next →
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-body mb-4">
            Need help setting up your paid ads system?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://calendar.app.google/eD4t7GPF2hUhJ7GA9",
                  "_blank",
                )
              }
            >
              Book a Strategy Call
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0",
                  "_blank",
                )
              }
            >
              Connect on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaidAdsSystem;
