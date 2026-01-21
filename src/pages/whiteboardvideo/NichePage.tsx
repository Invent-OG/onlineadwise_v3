
import { getNicheBySlug } from "@/components/data/nicheData";
import LandingPage from "@/components/whiteboardvideo/LandingPage";
import { Navigate } from "react-router-dom";

interface NichePageProps {
  slug: string;
}

const NichePage = ({ slug }: NichePageProps) => {
  const niche = getNicheBySlug(slug);

  if (!niche) {
    return <Navigate to="/" replace />;
  }

  return <LandingPage niche={niche} />;
};

export default NichePage;
