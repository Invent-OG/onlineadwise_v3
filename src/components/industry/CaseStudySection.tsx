import { LucideIcon, CheckCircle2 } from "lucide-react";

interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
  icon: LucideIcon;
}

interface CaseStudy {
  companyName: string;
  niche: string;
  location: string;
  challenge: string;
  solutions: string[];
  results: CaseStudyResult[];
  testimonial: string;
  author: string;
  authorTitle: string;
}

interface CaseStudySectionProps {
  headline: string;
  caseStudies: CaseStudy[];
}

export function CaseStudySection({
  headline,
  caseStudies,
}: CaseStudySectionProps) {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container-narrow px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16">
            {headline}
          </h2>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="card-glow rounded-2xl border border-border/50 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
                        {study.companyName}
                      </h3>
                      <p className="text-muted-foreground">
                        {study.niche} | {study.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Challenge */}
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      The Challenge
                    </h4>
                    <p className="text-foreground/90 text-lg leading-relaxed italic border-l-2 border-primary/30 pl-4">
                      "{study.challenge}"
                    </p>
                  </div>

                  {/* Solutions */}
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      The NAREN Solution
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.solutions.map((solution, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      The Results
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.results.map((result, rIndex) => {
                        const Icon = result.icon;
                        return (
                          <div
                            key={rIndex}
                            className="bg-muted/50 rounded-xl p-4 border border-border/50"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <span className="text-sm text-muted-foreground">
                                {result.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground line-through text-sm">
                                {result.before}
                              </span>
                              <span className="text-primary">→</span>
                              <span className="text-foreground font-bold text-lg">
                                {result.after}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <p className="text-foreground text-lg italic mb-4">
                      "{study.testimonial}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {study.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          {study.author}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {study.authorTitle}
                        </p>
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
