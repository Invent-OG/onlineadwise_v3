import { motion } from "framer-motion";
import { PillarScore } from "@/utils/scoring";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

interface PillarScoresProps {
  scores: PillarScore[];
}

export function PillarScores({ scores }: PillarScoresProps) {
  const getStatusIcon = (percentage: number) => {
    if (percentage >= 70)
      return <CheckCircle className="w-4 h-4 text-success" />;
    if (percentage >= 40)
      return <AlertTriangle className="w-4 h-4 text-warning" />;
    return <AlertCircle className="w-4 h-4 text-destructive" />;
  };

  const getBarColor = (percentage: number) => {
    if (percentage >= 70) return "bg-success";
    if (percentage >= 40) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
        📊 Scores by Pillar
      </h3>

      <div className="space-y-3">
        {scores.map((pillar, index) => (
          <motion.div
            key={pillar.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-card p-4 rounded-lg border border-border"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getStatusIcon(pillar.percentage)}
                <span className="text-sm font-medium text-foreground">
                  {pillar.label}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {pillar.score}/{pillar.maxScore} ({pillar.percentage}%)
              </span>
            </div>

            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${getBarColor(pillar.percentage)}`}
                initial={{ width: 0 }}
                animate={{ width: `${pillar.percentage}%` }}
                transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
