import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nicheData } from "@/components/data/nicheData.ts";
import FloatingWidgets from "@/components/whiteboardvideo/FloatingWidgets.ts";

const Index = () => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  return (
    <div className="min-h-screen">
      <FloatingWidgets />

      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Whiteboard Video Marketing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Hand-drawn animated videos that convert viewers into customers.
            Specialized for 20 industries with proven results.
          </p>
          <Button asChild size="xl">
            <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              20 Specialized Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each landing page is customized with industry-specific content,
              challenges, and solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {nicheData.map((niche) => (
              <Link
                key={niche.id}
                to={`/${niche.id}`}
                className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="text-4xl mb-3">{niche.icon}</div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {niche.niche}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {niche.customerType}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
