import { getNicheBySlug } from "@/components/data/nicheData";
import LandingPage from "@/components/whiteboardvideo/LandingPage";
import { Navigate, useParams } from "react-router-dom";

const NichePage = () => {
  const { niche: slug } = useParams();
  const nicheData = slug ? getNicheBySlug(slug) : undefined;

  if (!nicheData) {
    return <Navigate to="/whiteboard-video" replace />;
  }

  return <LandingPage niche={nicheData} />;
};

export default NichePage;
