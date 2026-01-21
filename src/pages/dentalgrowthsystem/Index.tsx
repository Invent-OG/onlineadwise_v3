import CaseStudySection from "@/components/dentalgrowthsystem/CaseStudySection";
import FAQSection from "@/components/dentalgrowthsystem/FAQSection";
import FinalCTASection from "@/components/dentalgrowthsystem/FinalCTASection";
import Header from "@/components/dentalgrowthsystem/Header";
import HeroSection from "@/components/dentalgrowthsystem/HeroSection";
import PricingSection from "@/components/dentalgrowthsystem/PricingSection";
import ProblemSection from "@/components/dentalgrowthsystem/ProblemSection";
import ProcessSection from "@/components/dentalgrowthsystem/ProcessSection";
import SolutionSection from "@/components/dentalgrowthsystem/SolutionSection";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <section id="case-study">
          <CaseStudySection />
        </section>
        <ProcessSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
