import { CheckCircle2, LucideIcon, TrendingUp } from "lucide-react";

interface ProcessStep {
  week: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
  deliverable?: string;
}

interface ProcessSectionProps {
  headline: string;
  steps: ProcessStep[];
  timeline: string;
}

export function ProcessSection({
  headline,
  steps,
  timeline,
}: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24 relative section-glow">
      <div className="container-narrow px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16">
            {headline}
          </h2>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative pl-0 md:pl-20">
                    {/* Step number circle */}
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary items-center justify-center text-primary z-10">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="card-glow rounded-2xl border border-border/50 overflow-hidden">
                      <div className="p-6 md:p-8">
                        {/* Mobile icon */}
                        <div className="flex md:hidden items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-primary font-medium">
                            {step.week}
                          </span>
                        </div>

                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                            {step.title}
                          </h3>
                          <span className="hidden md:inline-block text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">
                            {step.week}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6">
                          {step.description}
                        </p>

                        {/* Items */}
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.items.map((item, iIndex) => (
                            <div
                              key={iIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-foreground/80 text-sm">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Deliverable */}
                        {step.deliverable && (
                          <div className="mt-6 pt-4 border-t border-border/50">
                            <span className="text-primary text-sm font-medium">
                              Deliverable:{" "}
                            </span>
                            <span className="text-foreground/80 text-sm">
                              {step.deliverable}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
              <TrendingUp className="w-5 h-5" />
              {timeline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
