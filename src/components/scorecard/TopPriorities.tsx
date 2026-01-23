import { PillarScore } from "@/utils/scoring";
import { motion } from "framer-motion";

import { Target, AlertTriangle, AlertCircle, PartyPopper } from "lucide-react";

interface TopPrioritiesProps {
  priorities: PillarScore[];
}

export function TopPriorities({ priorities }: TopPrioritiesProps) {
  if (priorities.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-success/10 border border-success/30 rounded-lg p-6 text-center"
      >
        <span className="text-4xl mb-2 block flex justify-center">
          <PartyPopper className="w-10 h-10 text-success" />
        </span>
        <h3 className="text-lg  font-semibold text-success mb-2">
          Excellent Marketing Foundation!
        </h3>
        <p className="text-sm text-muted-foreground">
          All your pillars are performing above average. Keep optimizing!
        </p>
      </motion.div>
    );
  }

  const getIcon = (index: number) => {
    if (index === 0)
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    return <AlertTriangle className="w-5 h-5 text-warning" />;
  };

  const getStatusIcon = (percentage: number) => {
    if (percentage < 30)
      return <AlertCircle className="w-5 h-5 text-destructive" />;
    return <AlertTriangle className="w-5 h-5 text-warning" />;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg  font-semibold text-foreground flex items-center gap-2">
        <Target className="w-5 h-5 text-primary" />
        Top Priorities to Address
      </h3>

      <div className="space-y-3">
        {priorities.map((priority, index) => (
          <motion.div
            key={priority.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + 0.1 * index }}
            className={`p-4 rounded-lg border ${
              index === 0
                ? "bg-destructive/10 border-destructive/30"
                : "bg-warning/10 border-warning/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-1">{getStatusIcon(priority.percentage)}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {priority.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {priority.percentage}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {getPriorityMessage(priority.name, priority.percentage)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getPriorityMessage(pillar: string, percentage: number): string {
  const messages: { [key: string]: string } = {
    niche:
      "Clarify your ideal customer and unique value proposition to stand out.",
    acquisition:
      "Diversify your marketing channels and systematize lead generation.",
    tracking: "Implement proper tracking to understand your marketing ROI.",
    experimentation:
      "Start testing regularly to optimize your marketing performance.",
    operations: "Document your processes and automate repetitive tasks.",
    visibility:
      "Strengthen your online presence and collect more social proof.",
  };

  return messages[pillar] || "Focus on improving this area for better results.";
}
