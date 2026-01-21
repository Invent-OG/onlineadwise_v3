import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import NarenMethodSection from "@/components/home/NarenMethodSection";
import PlatformServicesSection from "@/components/home/PlatformServicesSection";
import AdditionalServicesSection from "@/components/home/AdditionalServicesSection";
import VideoPacksSection from "@/components/home/VideoPacksSection";
import CompleteSuitesSection from "@/components/home/CompleteSuitesSection";
import FunnelSystemsSection from "@/components/home/FunnelSystemsSection";
import PackagesSection from "@/components/home/PackagesSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhySection from "@/components/home/WhySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <NarenMethodSection />
      <PlatformServicesSection />
      <AdditionalServicesSection />
      <VideoPacksSection />
      <CompleteSuitesSection />
      <FunnelSystemsSection />
      <PackagesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <WhySection />
      <CTASection />
    </div>
  );
};

export default Index;
