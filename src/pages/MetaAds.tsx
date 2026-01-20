import MetaAdsHero from "@/components/services/metaAds/MetaAdsHero";
import ProblemsSection from "@/components/services/metaAds/ProblemsSection";
import MetaAdsProcess from "@/components/services/metaAds/MetaAdsProcess";
import BenefitsSection from "@/components/services/metaAds/BenefitsSection";
import MissionSection from "@/components/services/metaAds/MissionSection";
import ContactSection from "@/components/services/metaAds/ContactSection";
import ServicesSection from "@/components/services/metaAds/ServicesSection";
import NarenMethodSection from "@/components/services/metaAds/NarenMethodSection";
import CaseStudySection from "@/components/services/metaAds/CaseStudySection";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "react-day-picker";

const MetaAds = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <MetaAdsHero />
        <ProblemsSection />
        <NarenMethodSection />
        <ServicesSection />
        <CaseStudySection />
        <MetaAdsProcess />
        <BenefitsSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default MetaAds;
