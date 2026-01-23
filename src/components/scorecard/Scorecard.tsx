import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import { ResultsScreen } from "./ResultsScreen";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { questions } from "@/utils/questions";
import { Answers, calculateScore } from "@/utils/scoring";
import { WelcomeScreen } from "./WelcomeScreen";

type Screen = "welcome" | "questions" | "results";

export function Scorecard() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const currentQ = questions[currentQuestion];
  const totalQuestions = questions.length;

  const handleStart = useCallback(() => {
    setScreen("questions");
    setCurrentQuestion(0);
    setAnswers({});
  }, []);

  const handleAnswer = useCallback(
    (value: string | string[]) => {
      setAnswers((prev) => ({
        ...prev,
        [currentQ.id]: value,
      }));
    },
    [currentQ.id],
  );

  const canProceed = useCallback((): boolean => {
    const answer = answers[currentQ.id];

    if (currentQ.required) {
      if (!answer) return false;
      if (typeof answer === "string" && answer.trim() === "") return false;
      if (currentQ.type === "email" && typeof answer === "string") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(answer);
      }
    }

    if (currentQ.type === "single" || currentQ.type === "multi") {
      if (!answer) return false;
      if (Array.isArray(answer) && answer.length === 0) return false;
    }

    return true;
  }, [answers, currentQ]);

  const handleNext = useCallback(async () => {
    if (!canProceed()) {
      toast({
        title: "Please answer the question",
        description: currentQ.required
          ? "This question is required to continue."
          : "Please select an option to continue.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Submit and show results
      setIsSubmitting(true);

      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitting(false);
      setScreen("results");

      toast({
        title: "Assessment Complete! 🎉",
        description: "Your personalized results are ready.",
      });
    }
  }, [canProceed, currentQuestion, totalQuestions, toast, currentQ.required]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleRestart = useCallback(() => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers({});
  }, []);

  const result = calculateScore(answers);
  const businessName = typeof answers["q24"] === "string" ? answers["q24"] : "";

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {screen === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {screen === "questions" && (
          <motion.div
            key="questions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col pt-20 md:pt-24"
          >
            {/* Progress */}
            <div className="w-full max-w-3xl mx-auto mb-2 flex justify-center">
              <div className="w-48 md:w-64">
                <ProgressBar
                  current={currentQuestion + 1}
                  total={totalQuestions}
                />
              </div>
            </div>

            {/* Question */}
            <div className="flex-1 flex flex-col px-4 py-4">
              <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  <QuestionCard
                    key={currentQ.id}
                    question={currentQ}
                    answer={
                      answers[currentQ.id] ||
                      (currentQ.type === "multi" ? [] : "")
                    }
                    onAnswer={handleAnswer}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="sticky bottom-0 z-10 bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3">
              <div className="max-w-md mx-auto flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="h-12 px-4 border-border"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>

                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="flex-1 h-12 text-base font-semibold bg-gold-gradient hover:opacity-90 text-primary-foreground transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Calculating...
                    </>
                  ) : currentQuestion === totalQuestions - 1 ? (
                    "See My Results"
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {screen === "results" && (
          <ResultsScreen
            key="results"
            result={result}
            businessName={businessName}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
