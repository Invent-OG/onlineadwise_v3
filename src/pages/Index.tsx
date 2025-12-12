import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NarenMethodSection from "@/components/NarenMethodSection";
import VideoPacksSection from "@/components/VideoPacksSection";
import PackagesSection from "@/components/PackagesSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NarenMethodSection />
      <VideoPacksSection />
      <PackagesSection />
      <WhySection />
      <Footer />
    </div>
  );
};

export default Index;
