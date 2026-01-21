import { X } from "lucide-react";

interface ProblemSectionProps {
  headline: string;
  problems: string[];
  transition: string;
}

export function ProblemSection({
  headline,
  problems,
  transition,
}: ProblemSectionProps) {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16">
            {headline}
          </h2>

          {/* Problems list */}
          <div className="space-y-6 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Transition text */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center glow-gold-sm">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {transition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
