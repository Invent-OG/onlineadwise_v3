import { Calendar, FileText, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  const actions = [
    {
      icon: Calendar,
      label: "Book Strategy Call",
      emoji: "🔮",
      primary: true,
    },
    {
      icon: FileText,
      label: "Fill Intake Form",
      emoji: "📝",
      primary: false,
    },
    {
      icon: ShoppingBag,
      label: "Browse Video Store",
      emoji: "🛒",
      primary: false,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="text-xl">🟣</span>
            <span className="text-sm font-medium text-primary">Ready to Transform Your Marketing?</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Ready To Build Your </span>
            <span className="text-gradient-gold">Predictable Scaling System?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Tap below to get your growth audit
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.label}
                  size="lg"
                  className={`px-8 py-6 text-lg font-semibold group transition-all duration-500 ${
                    action.primary
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-gold hover:scale-105 shine-effect"
                      : "bg-secondary/80 text-foreground hover:bg-primary/20 hover:border-primary border border-border/50"
                  }`}
                >
                  <span className="mr-2">{action.emoji}</span>
                  {action.label}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
