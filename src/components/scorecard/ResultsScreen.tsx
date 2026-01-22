import { motion } from "framer-motion";
import { PillarScores } from "./PillarScores";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Mail,
  RotateCcw,
  ExternalLink,
  Trophy,
  Award,
  TrendingUp,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";
import { ScoreResult } from "@/utils/scoring";
import { ScoreGauge } from "./ScoreGauge";
import { TopPriorities } from "./TopPriorities";

interface ResultsScreenProps {
  result: ScoreResult;
  businessName: string;
  onRestart: () => void;
}

export function ResultsScreen({
  result,
  businessName,
  onRestart,
}: ResultsScreenProps) {
  const handleBookCall = () => {
    window.open("https://onlineadwise.com", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-4 py-8 pb-24"
    >
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
            Your Marketing Score
          </h1>
          {businessName && (
            <p className="text-muted-foreground text-sm">
              Results for {businessName}
            </p>
          )}
        </motion.div>

        {/* Score Gauge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ScoreGauge score={result.total} maxScore={result.maxTotal} />
        </motion.div>

        {/* Score Band */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border`}
          >
            {result.band === "ELITE" && (
              <Trophy className="w-6 h-6 text-yellow-400" />
            )}
            {result.band === "STRONG" && (
              <Award className="w-6 h-6 text-primary" />
            )}
            {result.band === "AVERAGE" && (
              <TrendingUp className="w-6 h-6 text-blue-400" />
            )}
            {result.band === "STRUGGLING" && (
              <AlertCircle className="w-6 h-6 text-orange-400" />
            )}
            {result.band === "CRITICAL" && (
              <AlertTriangle className="w-6 h-6 text-red-500" />
            )}
            <span
              className={`text-xl font-serif font-bold ${result.bandColor}`}
            >
              {result.band}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-3">
            {getBandMessage(result.band)}
          </p>
        </motion.div>

        {/* Pillar Scores */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <PillarScores scores={result.pillarScores} />
        </motion.div>

        {/* Top Priorities */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <TopPriorities priorities={result.priorities} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-3 pt-4"
        >
          <Button
            onClick={handleBookCall}
            size="lg"
            className="w-full h-14 text-base font-semibold bg-gradient-gold hover:opacity-90 text-primary-foreground glow-gold transition-all"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Strategy Call
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="w-full h-12 text-base border-border hover:bg-card"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Retake Assessment
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pt-4"
        >
          <p className="text-xs text-muted-foreground">
            Powered by the NAREN Method™ • Online Adwise
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function getBandMessage(band: string): string {
  const messages: { [key: string]: string } = {
    ELITE: "Outstanding! You're in the top tier of marketers.",
    STRONG: "Great foundation! A few optimizations will take you further.",
    AVERAGE: "Solid start. Focus on key areas to accelerate growth.",
    STRUGGLING: "Room for improvement. Let's identify quick wins.",
    CRITICAL: "Immediate attention needed. We can help turn this around.",
  };
  return messages[band] || "";
}
