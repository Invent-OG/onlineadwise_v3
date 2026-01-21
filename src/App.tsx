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
import Index from "./pages/industry/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/painters" element={<PaintersLanding />} />
          <Route path="/pest-control" element={<PestControlLanding />} />
          <Route path="/carpet-cleaners" element={<CarpetCleanersLanding />} />
          <Route path="/roofers" element={<RoofersLanding />} />
          <Route path="/electricians" element={<ElectriciansLanding />} />
          <Route path="/hvac" element={<HVACLanding />} />
          <Route path="/plumbers" element={<PlumbersLanding />} />{" "}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
