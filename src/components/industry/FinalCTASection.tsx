import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, Mail, Phone, MapPin } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface FinalCTASectionProps {
  headline: string;
  subheadline: string;
  testimonials: Testimonial[];
  primaryCTA: {
    text: string;
    subtext: string;
  };
  secondaryCTA: {
    text: string;
    subtext: string;
  };
  availability: {
    text: string;
    spotsRemaining: number;
    maxClients: number;
  };
  contact: {
    email: string;
    phone?: string;
    location: string;
    rating: string;
  };
}

export function FinalCTASection({
  headline,
  subheadline,
  testimonials,
  primaryCTA,
  secondaryCTA,
  availability,
  contact,
}: FinalCTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative section-glow">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container-narrow px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            {subheadline}
          </p>

          {/* Testimonials slider */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="card-glow rounded-2xl border border-primary/30 p-8 glow-gold-sm">
              {testimonials.slice(0, 1).map((testimonial, index) => (
                <div key={index}>
                  <p className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">
              Choose Your Next Step
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <Button size="xl" className="mb-2">
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  {primaryCTA.subtext}
                </p>
              </div>
              <div className="text-center">
                <Button size="xl" className="mb-2">
                  {secondaryCTA.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  {secondaryCTA.subtext}
                </p>
              </div>
            </div>
          </div>

          {/* Availability warning */}
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 max-w-lg mx-auto mb-16">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
            <p className="text-foreground text-sm">
              <span className="font-bold text-primary">
                {availability.spotsRemaining} SPOTS REMAINING
              </span>
              <br />
              <span className="text-muted-foreground">
                {availability.text.replace(
                  "{max}",
                  String(availability.maxClients),
                )}
              </span>
            </p>
          </div>

          {/* Footer info */}
          <div className="pt-12 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contact.email}
              </a>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              )}
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {contact.location}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary">
                  ★
                </span>
              ))}
              <span className="ml-2 text-foreground text-sm">
                Rated {contact.rating} by Our Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
