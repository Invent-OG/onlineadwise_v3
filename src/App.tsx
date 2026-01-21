import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaAds from "./pages/services/MetaAds";
import NotFound from "./pages/NotFound";
import CarpetCleanersLanding from "./pages/industry/CarpetCleanersLanding";
import ElectriciansLanding from "./pages/industry/ElectriciansLanding";
import HVACLanding from "./pages/industry/HVACLanding";
import PaintersLanding from "./pages/industry/PaintersLanding";
import PestControlLanding from "./pages/industry/PestControlLanding";
import PlumbersLanding from "./pages/industry/PlumbersLanding";
import RoofersLanding from "./pages/industry/RoofersLanding";
import Industry from "./pages/industry/Index";
import Services from "./pages/services/Index";
import AdPlanner from "./pages/adplanner/Index";
import Booking from "./pages/booking/Index";
import PaymentLinks from "./pages/booking/PaymentLinks";
import ThankYou from "./pages/booking/ThankYou";
import DentalGrowthSystem from "./pages/dentalgrowthsystem/Index";
import MedSpa from "./pages/medspa/index";
import Scorecard from "./pages/scorecard/Index";
import WhiteboardVideo from "./pages/whiteboardvideo/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          
          {/* Ad Planner */}
          <Route path="/ad-planner" element={<AdPlanner />} />

          {/* Booking & Payment */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/payment-links" element={<PaymentLinks />} />
          <Route path="/booking/thank-you" element={<ThankYou />} />

          {/* Dental Growth System */}
          <Route path="/dental-growth-system" element={<DentalGrowthSystem />} />

          {/* MedSpa */}
          <Route path="/medspa" element={<MedSpa />} />

          {/* Scorecard */}
          <Route path="/scorecard" element={<Scorecard />} />

          {/* Whiteboard Video */}
          <Route path="/whiteboard-video" element={<WhiteboardVideo />} />

          {/* Industry Routes */}
          <Route path="/industry" element={<Industry />} />
          <Route path="/industry/painters" element={<PaintersLanding />} />
          <Route
            path="/industry/pest-control"
            element={<PestControlLanding />}
          />
          <Route
            path="/industry/carpet-cleaners"
            element={<CarpetCleanersLanding />}
          />
          <Route path="/industry/roofers" element={<RoofersLanding />} />
          <Route
            path="/industry/electricians"
            element={<ElectriciansLanding />}
          />
          <Route path="/industry/hvac" element={<HVACLanding />} />
          <Route path="/plumbers" element={<PlumbersLanding />} />{" "}

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
