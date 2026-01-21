import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  TrendingUp,
  Target,
  DollarSign,
  Users,
  BarChart3,
  Calendar,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const CALENDAR_LINK = "https://calendar.app.google/eD4t7GPF2hUhJ7GA9";

interface FormData {
  productName: string;
  productValue: number;
  grossMargin: number;
  targetMarket: string;
  industry: string;
  dailyBudget: number;
  objective: string;
  conversionType: string;
}

interface Results {
  monthlyBudget: number;
  estimatedImpressions: { min: number; max: number };
  estimatedClicks: { min: number; max: number };
  estimatedCPC: { min: number; max: number };
  estimatedCTR: { min: number; max: number };
  estimatedConversions: { min: number; max: number };
  estimatedCPA: { min: number; max: number };
  breakEvenCPA: number;
  estimatedROAS: { min: number; max: number };
  profitability: "red" | "yellow" | "green";
}

const industries = [
  "E-commerce",
  "SaaS",
  "Education",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Travel",
  "Food & Beverage",
  "Fashion",
  "Technology",
  "Other",
];

const objectives = ["Leads", "Sales", "App Install", "Booking", "Traffic"];
const conversionTypes = ["Lead", "Purchase", "Booking", "Trial", "Sign-up"];

export const AdCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    productValue: 5000,
    grossMargin: 40,
    targetMarket: "India",
    industry: "E-commerce",
    dailyBudget: 1000,
    objective: "Sales",
    conversionType: "Purchase",
  });

  const [results, setResults] = useState<Results | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateResults = () => {
    setIsCalculating(true);

    // Simulate calculation delay for effect
    setTimeout(() => {
      const { productValue, grossMargin, dailyBudget } = formData;
      const monthlyBudget = dailyBudget * 30;

      // Industry-adjusted CPM (Cost per 1000 impressions)
      const baseCPM = 150; // INR
      const impressionsPerDay = (dailyBudget / baseCPM) * 1000;

      // CTR estimation (industry average 1-3%)
      const avgCTR = 0.02;
      const clicksPerDay = impressionsPerDay * avgCTR;
      const cpc = dailyBudget / clicksPerDay;

      // Conversion rate (2-5% for well-optimized campaigns)
      const conversionRate = 0.03;
      const conversionsPerDay = clicksPerDay * conversionRate;
      const cpa = dailyBudget / conversionsPerDay;

      // ROAS calculation
      const revenuePerDay = conversionsPerDay * productValue;
      const roas = revenuePerDay / dailyBudget;

      // Break-even CPA
      const profitPerSale = productValue * (grossMargin / 100);
      const breakEvenCPA = profitPerSale;

      // Profitability assessment
      let profitability: "red" | "yellow" | "green" = "green";
      if (cpa > breakEvenCPA * 1.2) {
        profitability = "red";
      } else if (cpa > breakEvenCPA * 0.8) {
        profitability = "yellow";
      }

      setResults({
        monthlyBudget,
        estimatedImpressions: {
          min: Math.floor(impressionsPerDay * 30 * 0.8),
          max: Math.floor(impressionsPerDay * 30 * 1.2),
        },
        estimatedClicks: {
          min: Math.floor(clicksPerDay * 30 * 0.7),
          max: Math.floor(clicksPerDay * 30 * 1.3),
        },
        estimatedCPC: {
          min: Math.floor(cpc * 0.8),
          max: Math.floor(cpc * 1.2),
        },
        estimatedCTR: { min: 1.5, max: 3.5 },
        estimatedConversions: {
          min: Math.floor(conversionsPerDay * 30 * 0.6),
          max: Math.floor(conversionsPerDay * 30 * 1.4),
        },
        estimatedCPA: {
          min: Math.floor(cpa * 0.7),
          max: Math.floor(cpa * 1.3),
        },
        breakEvenCPA: Math.floor(breakEvenCPA),
        estimatedROAS: {
          min: Math.round(roas * 0.7 * 10) / 10,
          max: Math.round(roas * 1.3 * 10) / 10,
        },
        profitability,
      });

      setIsCalculating(false);
    }, 1500);
  };

  const getProfitabilityIcon = (status: "red" | "yellow" | "green") => {
    switch (status) {
      case "green":
        return <CheckCircle2 className="h-6 w-6 text-green-500" />;
      case "yellow":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case "red":
        return <XCircle className="h-6 w-6 text-red-500" />;
    }
  };

  const getProfitabilityText = (status: "red" | "yellow" | "green") => {
    switch (status) {
      case "green":
        return { text: "Scale-Ready", color: "text-green-500" };
      case "yellow":
        return { text: "Needs Optimization", color: "text-yellow-500" };
      case "red":
        return { text: "Not Viable", color: "text-red-500" };
    }
  };

  return (
    <section id="calculator" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Calculator className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary">Free Tool</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Ad Performance</span>{" "}
            Calculator
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Input your business metrics and get instant forecasts for
            impressions, clicks, conversions, ROAS, and profitability
            assessment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-sci-fi p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Business Inputs
            </h3>

            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Product / Service Name
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  placeholder="e.g., Digital Marketing Course"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Product Value & Margin */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Product Value (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.productValue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productValue: Number(e.target.value),
                      })
                    }
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Gross Margin (%)
                  </label>
                  <input
                    type="number"
                    value={formData.grossMargin}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        grossMargin: Number(e.target.value),
                      })
                    }
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Industry / Category
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Daily Budget */}
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Daily Ad Spend (₹)
                </label>
                <input
                  type="number"
                  value={formData.dailyBudget}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dailyBudget: Number(e.target.value),
                    })
                  }
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Monthly: ₹{(formData.dailyBudget * 30).toLocaleString()}
                </p>
              </div>

              {/* Objective & Conversion */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Campaign Objective
                  </label>
                  <select
                    value={formData.objective}
                    onChange={(e) =>
                      setFormData({ ...formData, objective: e.target.value })
                    }
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                  >
                    {objectives.map((obj) => (
                      <option key={obj} value={obj}>
                        {obj}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Conversion Type
                  </label>
                  <select
                    value={formData.conversionType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conversionType: e.target.value,
                      })
                    }
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                  >
                    {conversionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={calculateResults}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="h-5 w-5" />
                    Generate Forecast
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-sci-fi p-8"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Performance Forecast
            </h3>

            {!results ? (
              <div className="h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p className="font-body">
                    Enter your business details and click "Generate Forecast"
                  </p>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {/* Profitability Status */}
                <div
                  className={`p-4 rounded-lg border ${
                    results.profitability === "green"
                      ? "border-green-500/30 bg-green-500/5"
                      : results.profitability === "yellow"
                        ? "border-yellow-500/30 bg-yellow-500/5"
                        : "border-red-500/30 bg-red-500/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getProfitabilityIcon(results.profitability)}
                    <div>
                      <p
                        className={`font-display font-bold ${getProfitabilityText(results.profitability).color}`}
                      >
                        {getProfitabilityText(results.profitability).text}
                      </p>
                      <p className="text-xs text-muted-foreground font-body">
                        Based on your margins and estimated CPA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    icon={<Users className="h-4 w-4" />}
                    label="Monthly Impressions"
                    value={`${(results.estimatedImpressions.min / 1000).toFixed(0)}K - ${(results.estimatedImpressions.max / 1000).toFixed(0)}K`}
                  />
                  <MetricCard
                    icon={<Target className="h-4 w-4" />}
                    label="Monthly Clicks"
                    value={`${results.estimatedClicks.min.toLocaleString()} - ${results.estimatedClicks.max.toLocaleString()}`}
                  />
                  <MetricCard
                    icon={<DollarSign className="h-4 w-4" />}
                    label="Est. CPC"
                    value={`₹${results.estimatedCPC.min} - ₹${results.estimatedCPC.max}`}
                  />
                  <MetricCard
                    icon={<TrendingUp className="h-4 w-4" />}
                    label="Est. CTR"
                    value={`${results.estimatedCTR.min}% - ${results.estimatedCTR.max}%`}
                  />
                  <MetricCard
                    icon={<CheckCircle2 className="h-4 w-4" />}
                    label="Monthly Conversions"
                    value={`${results.estimatedConversions.min} - ${results.estimatedConversions.max}`}
                  />
                  <MetricCard
                    icon={<DollarSign className="h-4 w-4" />}
                    label="Est. CPA"
                    value={`₹${results.estimatedCPA.min.toLocaleString()} - ₹${results.estimatedCPA.max.toLocaleString()}`}
                  />
                </div>

                {/* ROAS & Break-even */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <p className="text-xs text-muted-foreground font-body mb-1">
                      Expected ROAS
                    </p>
                    <p className="text-2xl font-display font-bold text-gradient-gold">
                      {results.estimatedROAS.min}x - {results.estimatedROAS.max}
                      x
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-xs text-muted-foreground font-body mb-1">
                      Break-even CPA
                    </p>
                    <p className="text-2xl font-display font-bold">
                      ₹{results.breakEvenCPA.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    Want a detailed campaign strategy and expert optimization?
                  </p>
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full">
                      <Calendar className="h-5 w-5" />
                      Book a Strategy Call
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/30 transition-colors">
    <div className="flex items-center gap-2 text-primary mb-1">
      {icon}
      <span className="text-xs font-body text-muted-foreground">{label}</span>
    </div>
    <p className="text-sm font-display font-semibold">{value}</p>
  </div>
);
