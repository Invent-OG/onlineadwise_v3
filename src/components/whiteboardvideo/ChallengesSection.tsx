import { AlertCircle, CheckCircle2, Zap } from "lucide-react";
import { NicheData } from "@/components/data/nicheData.ts";

interface ChallengesSectionProps {
  niche: NicheData;
}

const ChallengesSection = ({ niche }: ChallengesSectionProps) => {
  return (
    <section className="py-20 bg-card section-pattern">
      <div className="container-narrow px-4">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4">
            <Zap className="w-4 h-4" />
            Why Whiteboard Videos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-gradient">{niche.niche}</span> Marketing
            Challenge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {niche.nichePlural} face unique marketing obstacles. Here's how our
            ready-made video templates solve them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div className="bg-background rounded-2xl p-8 border border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Common Challenges
              </h3>
            </div>
            <div className="space-y-4">
              {niche.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border hover:border-destructive/30 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {challenge.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {challenge.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-background rounded-2xl p-8 border border-success/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                How Our Templates Solve This
              </h3>
            </div>
            <div className="space-y-4">
              {niche.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border hover:border-success/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            The Whiteboard Advantage for{" "}
            <span className="text-primary">{niche.nichePlural}</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {niche.advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <p className="text-foreground font-medium">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
