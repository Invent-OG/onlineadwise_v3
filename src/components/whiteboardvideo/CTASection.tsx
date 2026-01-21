import { ArrowRight, Calendar, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NicheData } from "@/components/data/nicheData.ts";

interface CTASectionProps {
  niche: NicheData;
}

const CTASection = ({ niche }: CTASectionProps) => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-gold mb-6">
            <Zap className="w-4 h-4" />
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-primary italic">Grow Your Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Get your personalized video template with your logo, brand name, and
            CTA in just 24-48 hours.
          </p>
          <p className="text-lg text-primary font-medium italic mb-8">
            "Where Strategy Meets Psychology. Where Ads Become Systems."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild  size="xl">
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild  size="xl">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              Your Logo & Brand Added
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              Custom CTA Message
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              Ready in 24-48 Hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
