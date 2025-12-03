import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Offerings from "./pages/Offerings";
import OfferingDetail from "./pages/OfferingDetail";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Research from "./pages/Research";
import DigitalStories from "./pages/DigitalStories";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/offerings/:id" element={<OfferingDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/digital-stories" element={<DigitalStories />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
