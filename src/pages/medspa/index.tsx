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

const Index = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Index;
