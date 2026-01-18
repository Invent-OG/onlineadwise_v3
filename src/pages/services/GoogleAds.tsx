import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GoogleAdsHero from "@/components/GoogleAdsHero";
import ProblemsSection from "@/components/services/GoogleAds/ProblemsSection";
import NarenMethodSection from "@/components/NarenMethodSection";
import ServicesSection from "@/components/services/GoogleAds/ServicesSection";
import CaseStudiesSection from "@/components/services/GoogleAds/CaseStudiesSection";
import ProcessSection from "@/components/services/GoogleAds/ProcessSection";
import BenefitsSection from "@/components/services/GoogleAds/BenefitsSection";
import MissionSection from "@/components/services/GoogleAds/MissionSection";
import ContactSection from "@/components/services/GoogleAds/ContactSection";

const GoogleAds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <GoogleAdsHero />
      <ProblemsSection />
      <NarenMethodSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <BenefitsSection />
      <MissionSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default GoogleAds;
