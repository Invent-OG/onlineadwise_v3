import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const namingExamples = {
  campaign: {
    format: "Platform | Objective | Country | Offer | Funnel Stage",
    examples: [
      "META | SALES | IN | Course499 | Prospecting",
      "GOOGLE | LEADS | IN | Consultation | Retargeting",
      "META | TRAFFIC | US | SaaSTrial | Awareness",
    ],
  },
  adSet: {
    format: "Audience Type | Source | Size | Optimization",
    examples: [
      "LAL | Purchasers | 1% | Conversion",
      "INTEREST | DigitalMarketing | 2M | Engagement",
      "CUSTOM | VideoViewers | 30D | LeadGen",
    ],
  },
  ad: {
    format: "Creative Type | Angle | Hook | Version",
    examples: [
      "VIDEO | Pain | CostMistake | V2",
      "IMAGE | Desire | Results | V1",
      "UGC | Authority | Expert | V3",
    ],
  },
};

export const NamingConventions = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Professional{" "}
            <span className="text-gradient-gold">Naming Conventions</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Scalable naming frameworks for easy monitoring, quick scaling
            decisions, and clean client reporting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Campaign Naming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-sci-fi p-6"
          >
            <h3 className="text-lg font-display font-bold mb-2 text-primary">
              Campaign Naming
            </h3>
            <p className="text-xs text-muted-foreground font-mono mb-4 p-2 bg-muted/50 rounded">
              {namingExamples.campaign.format}
            </p>
            <div className="space-y-2">
              {namingExamples.campaign.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border group hover:border-primary/50 transition-colors"
                >
                  <code className="text-xs font-mono text-foreground">
                    {example}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(example, `campaign-${idx}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedIndex === `campaign-${idx}` ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ad Set Naming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-sci-fi p-6"
          >
            <h3 className="text-lg font-display font-bold mb-2 text-primary">
              Ad Set Naming
            </h3>
            <p className="text-xs text-muted-foreground font-mono mb-4 p-2 bg-muted/50 rounded">
              {namingExamples.adSet.format}
            </p>
            <div className="space-y-2">
              {namingExamples.adSet.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border group hover:border-primary/50 transition-colors"
                >
                  <code className="text-xs font-mono text-foreground">
                    {example}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(example, `adset-${idx}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedIndex === `adset-${idx}` ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ad Naming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-sci-fi p-6"
          >
            <h3 className="text-lg font-display font-bold mb-2 text-primary">
              Ad Naming
            </h3>
            <p className="text-xs text-muted-foreground font-mono mb-4 p-2 bg-muted/50 rounded">
              {namingExamples.ad.format}
            </p>
            <div className="space-y-2">
              {namingExamples.ad.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border group hover:border-primary/50 transition-colors"
                >
                  <code className="text-xs font-mono text-foreground">
                    {example}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(example, `ad-${idx}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedIndex === `ad-${idx}` ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="card-sci-fi p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {[
              "Instantly identify winners",
              "Faster scaling decisions",
              "Clean client reporting",
              "Zero confusion at scale",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-body">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
