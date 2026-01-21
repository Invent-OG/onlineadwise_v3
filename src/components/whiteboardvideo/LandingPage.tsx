import { NicheData } from "../data/nicheData";
import ChallengesSection from "./ChallengesSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";

import HeroSection from "./HeroSection";
import PackagesSection from "./PackagesSection";
import ProcessSection from "./ProcessSection";
import VideoSection from "./VideoSection";

interface LandingPageProps {
  niche: NicheData;
}

const LandingPage = ({ niche }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection niche={niche} />
      <ChallengesSection niche={niche} />
      <VideoSection niche={niche} />
      <ProcessSection />
      <PackagesSection niche={niche} />
      <FAQSection niche={niche} />
      <CTASection niche={niche} />
    </div>
  );
};

export default LandingPage;
