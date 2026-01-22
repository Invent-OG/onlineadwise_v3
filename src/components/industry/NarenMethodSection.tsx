import {
  Target,
  TrendingUp,
  BarChart3,
  FlaskConical,
  Settings,
} from "lucide-react";

interface Pillar {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  outcome: string;
}

interface NarenMethodSectionProps {
  headline: string;
  subheadline: string;
  pillars: Pillar[];
}

const pillarIcons: Record<string, React.ReactNode> = {
  N: <Target className="w-6 h-6" />,
  A: <TrendingUp className="w-6 h-6" />,
  R: <BarChart3 className="w-6 h-6" />,
  E: <FlaskConical className="w-6 h-6" />,
  N2: <Settings className="w-6 h-6" />,
};

export function NarenMethodSection({
  headline,
  subheadline,
  pillars,
}: NarenMethodSectionProps) {
  return (
    <section className="py-16 md:py-24 relative section-glow">
      <div className="container-narrow px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Introducing the{" "}
              <span className="text-gradient-gold">NAREN Method™</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {subheadline}
            </p>
          </div>

          {/* NAREN Letters Display */}
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-16">
            {["N", "A", "R", "E", "N"].map((letter, index) => (
              <div
                key={index}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-heading font-bold text-xl md:text-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden card-glow">
              <div className="w-full h-full flex items-center justify-center bg-muted/50">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div
                      className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-primary ml-1"
                      style={{ borderLeftWidth: "16px" }}
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Whiteboard Explainer Video
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    2-3 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="card-glow rounded-2xl border border-border/50 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      {pillarIcons[index === 4 ? "N2" : pillar.letter] ||
                        pillarIcons.N}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-heading font-bold text-xl">
                          {index + 1}. {pillar.title}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                        {pillar.subtitle}
                      </p>
                      <p className="text-foreground/90 mb-6 leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Benefits list */}
                      {pillar.benefits.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {pillar.benefits.map((benefit, bIndex) => (
                            <li
                              key={bIndex}
                              className="flex items-start gap-2 text-foreground/80"
                            >
                              <span className="text-primary mt-1">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Outcome */}
                      <div className="inline-flex items-start gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                        <span className="text-primary font-medium">
                          You get:
                        </span>
                        <span className="text-foreground/90">
                          {pillar.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
