import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaAds from "./pages/services/MetaAds";
import GoogleAds from "./pages/services/GoogleAds";
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
import MedSpa from "./pages/medspa/index";
import AdPlanner from "./pages/adplanner/Index";
import Booking from "./pages/booking/Index";
import PaymentLinks from "./pages/booking/PaymentLinks";
import BookingThankYou from "./pages/booking/ThankYou";
import Scorecard from "./pages/scorecard/Index";
import DentalGrowthSystem from "./pages/dentalgrowthsystem/Index";
import WhiteboardVideo from "./pages/whiteboardvideo/Index";
import WhiteboardNiche from "./pages/whiteboardvideo/NichePage";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Services />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/google-ads" element={<GoogleAds />} />

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
            <Route path="/industry/plumbers" element={<PlumbersLanding />} />

            {/* Other Service Pages */}
            <Route path="/medspa" element={<MedSpa />} />
            <Route path="/adplanner" element={<AdPlanner />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/payment-links" element={<PaymentLinks />} />
            <Route path="/booking/thank-you" element={<BookingThankYou />} />
            <Route path="/scorecard" element={<Scorecard />} />
            <Route
              path="/dental-growth-system"
              element={<DentalGrowthSystem />}
            />

            {/* Whiteboard Video */}
            <Route path="/whiteboard-video" element={<WhiteboardVideo />} />
            <Route
              path="/whiteboard-video/:niche"
              element={<WhiteboardNiche />}
            />

            {/* CATCH-ALL ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
