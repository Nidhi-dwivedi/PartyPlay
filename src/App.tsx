
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import TabooPage from "./pages/TabooPage";
import TruthOrDarePage from "./pages/TruthOrDarePage";
import NeverHaveIPage from "./pages/NeverHaveIPage";
import WouldYouRatherPage from "./pages/WouldYouRatherPage";
import SpinBottlePage from "./pages/SpinBottlePage";
import CharadesPage from "./pages/CharadesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/taboo" element={<TabooPage />} />
            <Route path="/truth-or-dare" element={<TruthOrDarePage />} />
            <Route path="/never-have-i" element={<NeverHaveIPage />} />
            <Route path="/would-you-rather" element={<WouldYouRatherPage />} />
            <Route path="/spin-bottle" element={<SpinBottlePage />} />
            <Route path="/charades" element={<CharadesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
