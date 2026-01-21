import Header from "@/components/booking/Header";
import HeroSection from "@/components/booking/HeroSection";
import BenefitsSection from "@/components/booking/BenefitsSection";
import HowItWorksSection from "@/components/booking/HowItWorksSection";
import CalendarSection from "@/components/booking/CalendarSection";
import PrepareSection from "@/components/booking/PrepareSection";
import AudienceSection from "@/components/booking/AudienceSection";
import SocialProofSection from "@/components/booking/SocialProofSection";
import FAQSection from "@/components/booking/FAQSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-7xl mx-auto">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <CalendarSection />
        <PrepareSection />
        <AudienceSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
