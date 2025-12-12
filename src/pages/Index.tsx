import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NarenMethodSection from "@/components/NarenMethodSection";
import PlatformServicesSection from "@/components/PlatformServicesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import VideoPacksSection from "@/components/VideoPacksSection";
import CompleteSuitesSection from "@/components/CompleteSuitesSection";
import FunnelSystemsSection from "@/components/FunnelSystemsSection";
import PackagesSection from "@/components/PackagesSection";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Index;
