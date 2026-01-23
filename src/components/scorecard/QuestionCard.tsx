import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/utils/questions";

interface QuestionCardProps {
  question: Question;
  answer: string | string[];
  onAnswer: (value: string | string[]) => void;
}

export function QuestionCard({
  question,
  answer,
  onAnswer,
}: QuestionCardProps) {
  const handleSingleSelect = (value: string) => {
    onAnswer(value);
  };

  const handleMultiSelect = (value: string) => {
    const currentAnswers = Array.isArray(answer) ? answer : [];

    if (value === "none" || value === "struggling") {
      onAnswer([value]);
      return;
    }

    const filtered = currentAnswers.filter(
      (a) => a !== "none" && a !== "struggling",
    );

    if (filtered.includes(value)) {
      onAnswer(filtered.filter((a) => a !== value));
    } else {
      onAnswer([...filtered, value]);
    }
  };

  const isSelected = (value: string): boolean => {
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="mb-2">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {question.section}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl  font-semibold text-foreground mb-6 leading-tight">
        {question.question}
      </h2>

      {question.type === "single" && question.options && (
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSingleSelect(option.value)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left flex items-center justify-between group ${
                isSelected(option.value)
                  ? "border-primary bg-primary/10 shadow-gold"
                  : "border-border bg-card hover:border-primary/50 hover:bg-card/80"
              }`}
            >
              <div className="flex-1">
                <span className="text-foreground font-medium">
                  {option.label}
                </span>
                {option.points > 0 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({option.points} pts)
                  </span>
                )}
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected(option.value)
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30 group-hover:border-primary/50"
                }`}
              >
                {isSelected(option.value) && (
                  <Check className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {question.type === "multi" && question.options && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground mb-4">
            Select all that apply
          </p>
          {question.options.map((option, index) => (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => handleMultiSelect(option.value)}
              className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left flex items-center justify-between group ${
                isSelected(option.value)
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50 hover:bg-card/80"
              }`}
            >
              <span className="text-foreground text-sm">{option.label}</span>
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  isSelected(option.value)
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30 group-hover:border-primary/50"
                }`}
              >
                {isSelected(option.value) && (
                  <Check className="w-3 h-3 text-primary-foreground" />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {question.type === "email" && (
        <Input
          type="email"
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={question.placeholder}
          className="h-14 text-lg bg-card border-border focus:border-primary"
          required={question.required}
        />
      )}

      {question.type === "text" && question.id === "q26" && (
        <Textarea
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={question.placeholder}
          className="min-h-[120px] text-base bg-card border-border focus:border-primary resize-none"
        />
      )}

      {question.type === "text" && question.id !== "q26" && (
        <Input
          type="text"
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={question.placeholder}
          className="h-14 text-lg bg-card border-border focus:border-primary"
          required={question.required}
        />
      )}
    </motion.div>
  );
}
