import GoogleAdsHero from "@/components/services/googleAds/GoogleAdsHero";
import ProblemsSection from "@/components/services/metaAds/ProblemsSection";
import MetaAdsProcess from "@/components/services/metaAds/MetaAdsProcess";
import BenefitsSection from "@/components/services/metaAds/BenefitsSection";
import MissionSection from "@/components/services/metaAds/MissionSection";
import ContactSection from "@/components/services/metaAds/ContactSection";
import ServicesSection from "@/components/services/metaAds/ServicesSection";
import NarenMethodSection from "@/components/services/metaAds/NarenMethodSection";
import CaseStudySection from "@/components/services/metaAds/CaseStudySection";

const GoogleAds = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <GoogleAdsHero />
        <ProblemsSection />
        <NarenMethodSection />
        <ServicesSection />
        <CaseStudySection />
        <MetaAdsProcess />
        <BenefitsSection />
        <MissionSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default GoogleAds;
