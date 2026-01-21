import { AdCalculator } from "@/components/adplanner/AdCalculator";
import { CTASection } from "@/components/adplanner/CTASection";
import { FeaturesSection } from "@/components/adplanner/FeaturesSection";
import { FloatingCTA } from "@/components/adplanner/FloatingCTA";
import { HeroSection } from "@/components/adplanner/HeroSection";
import { NamingConventions } from "@/components/adplanner/NamingConventions";
import PaidAdsSystem from "@/components/adplanner/PaidAdsSystem";
import { TrackingSetup } from "@/components/adplanner/TrackingSetup";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "react-day-picker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <AdCalculator />
        <div id="tracking">
          <TrackingSetup />
        </div>
        <NamingConventions />
        <PaidAdsSystem />
        <CTASection />
      </main>

      <FloatingCTA />
    </div>
  );
};

export default Index;
