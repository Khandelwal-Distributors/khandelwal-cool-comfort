import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Daikin from "./pages/brands/Daikin";
import MitsubishiHeavy from "./pages/brands/MitsubishiHeavy";
import Carrier from "./pages/brands/Carrier";
import Voltas from "./pages/brands/Voltas";
import Amstrad from "./pages/brands/Amstrad";
import Midea from "./pages/brands/Midea";
import Godrej from "./pages/brands/Godrej";
import Cruise from "./pages/brands/Cruise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/brands/daikin" element={<Daikin />} />
            <Route path="/brands/mitsubishi-heavy" element={<MitsubishiHeavy />} />
            <Route path="/brands/carrier" element={<Carrier />} />
            <Route path="/brands/voltas" element={<Voltas />} />
            <Route path="/brands/amstrad" element={<Amstrad />} />
            <Route path="/brands/midea" element={<Midea />} />
            <Route path="/brands/godrej" element={<Godrej />} />
            <Route path="/brands/cruise" element={<Cruise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
