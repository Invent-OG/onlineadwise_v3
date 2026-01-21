import HeroSection from "@/components/medspa/HeroSection";
import ProblemSection from "@/components/medspa/ProblemSection";
import SolutionSection from "@/components/medspa/SolutionSection";
import CaseStudiesSection from "@/components/medspa/CaseStudiesSection";
import WhyDifferentSection from "@/components/medspa/WhyDifferentSection";
import NARENMethodSection from "@/components/medspa/NARENMethodSection";
import QualificationSection from "@/components/medspa/QualificationSection";
import FAQSection from "@/components/medspa/FAQSection";
import FounderSection from "@/components/medspa/FounderSection";
import FinalCTASection from "@/components/medspa/FinalCTASection";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
      <WhyDifferentSection />
      <NARENMethodSection />
      <QualificationSection />
      <FAQSection />
      <FounderSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
