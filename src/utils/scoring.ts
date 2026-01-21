import { questions, pillarMaxScores, pillarLabels } from "./questions";

export interface Answers {
  [questionId: string]: string | string[];
}

export interface PillarScore {
  name: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface ScoreResult {
  total: number;
  maxTotal: number;
  percentage: number;
  band: string;
  bandEmoji: string;
  bandColor: string;
  pillarScores: PillarScore[];
  priorities: PillarScore[];
}

function getMultiSelectScore(answers: string[], questionId: string): number {
  const count = answers.filter((a) => a !== "none").length;

  if (questionId === "q7") {
    if (count === 0) return 0;
    if (count <= 2) return 2;
    if (count <= 4) return 4;
    return 5;
  }

  if (questionId === "q12") {
    if (count === 0) return 0;
    if (count <= 2) return 2;
    if (count <= 4) return 4;
    return 6;
  }

  if (questionId === "q22") {
    if (count >= 5) return 5;
    if (count >= 3) return 3;
    if (count >= 1) return 1;
    return 0;
  }

  return Math.min(count, 5);
}

function getQuestionScore(
  questionId: string,
  answer: string | string[],
): number {
  const question = questions.find((q) => q.id === questionId);
  if (!question || !question.options) return 0;

  if (question.type === "multi" && Array.isArray(answer)) {
    return getMultiSelectScore(answer, questionId);
  }

  if (typeof answer === "string") {
    const option = question.options.find((o) => o.value === answer);
    return option?.points || 0;
  }

  return 0;
}

export function calculateScore(answers: Answers): ScoreResult {
  const pillarScores: { [key: string]: number } = {
    niche: 0,
    acquisition: 0,
    tracking: 0,
    experimentation: 0,
    operations: 0,
    visibility: 0,
  };

  questions.forEach((question) => {
    if (question.pillar && answers[question.id]) {
      pillarScores[question.pillar] += getQuestionScore(
        question.id,
        answers[question.id],
      );
    }
  });

  const total = Object.values(pillarScores).reduce(
    (sum, score) => sum + score,
    0,
  );
  const maxTotal = Object.values(pillarMaxScores).reduce(
    (sum, max) => sum + max,
    0,
  );
  const percentage = Math.round((total / maxTotal) * 100);

  const pillarScoresList: PillarScore[] = Object.entries(pillarScores).map(
    ([name, score]) => ({
      name,
      label: pillarLabels[name as keyof typeof pillarLabels],
      score,
      maxScore: pillarMaxScores[name as keyof typeof pillarMaxScores],
      percentage: Math.round(
        (score / pillarMaxScores[name as keyof typeof pillarMaxScores]) * 100,
      ),
    }),
  );

  const { band, bandEmoji, bandColor } = getScoreBand(percentage);

  const priorities = [...pillarScoresList]
    .filter((p) => p.percentage < 60)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 3);

  return {
    total,
    maxTotal,
    percentage,
    band,
    bandEmoji,
    bandColor,
    pillarScores: pillarScoresList,
    priorities,
  };
}

function getScoreBand(percentage: number): {
  band: string;
  bandEmoji: string;
  bandColor: string;
} {
  if (percentage >= 90) {
    return { band: "ELITE", bandEmoji: "🏆", bandColor: "text-success" };
  }
  if (percentage >= 75) {
    return { band: "STRONG", bandEmoji: "💪", bandColor: "text-success" };
  }
  if (percentage >= 60) {
    return { band: "AVERAGE", bandEmoji: "📊", bandColor: "text-primary" };
  }
  if (percentage >= 40) {
    return { band: "STRUGGLING", bandEmoji: "⚠️", bandColor: "text-warning" };
  }
  return { band: "CRITICAL", bandEmoji: "🚨", bandColor: "text-destructive" };
}

export function getAnswerLabel(
  questionId: string,
  answer: string | string[],
): string {
  const question = questions.find((q) => q.id === questionId);
  if (!question || !question.options) return String(answer);

  if (Array.isArray(answer)) {
    return answer
      .map((a) => question.options?.find((o) => o.value === a)?.label || a)
      .join(", ");
  }

  return question.options.find((o) => o.value === answer)?.label || answer;
}
