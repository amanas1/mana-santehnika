import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import ServiceDistrictPage from "./pages/ServiceDistrictPage";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPostClog from "./pages/BlogPostClog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import BlogPostFaucet from "./pages/BlogPostFaucet";
import BlogPostLeak from "./pages/BlogPostLeak";
import BlogPostHeating from "./pages/BlogPostHeating";
import BlogPostAppliances from "./pages/BlogPostAppliances";
import Calculator from "./pages/Calculator";
import Booking from "./pages/Booking";
import FeedbackPage from "./pages/FeedbackPage";
import ServiceMap from "./pages/ServiceMap";
import BlogPostWater from "./pages/BlogPostWater";
import BlogPostPipes from "./pages/BlogPostPipes";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi/:serviceId/:districtId" element={<ServiceDistrictPage />} />
          <Route path="/santehnik-:districtId-rayon" element={<ServiceDistrictPage />} />
          <Route path="/:serviceId-almaty" element={<ServiceDistrictPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<BlogPost />} />
          <Route path="/blog/clog-removal" element={<BlogPostClog />} />
          <Route path="/blog/faucet-repair" element={<BlogPostFaucet />} />
          <Route path="/blog/leak-prevention" element={<BlogPostLeak />} />
          <Route path="/blog/leak-repair" element={<BlogPostLeak />} />
          <Route path="/blog/water-saving" element={<BlogPostWater />} />
          <Route path="/blog/noisy-pipes" element={<BlogPostPipes />} />
          <Route path="/blog/heating-maintenance" element={<BlogPostHeating />} />
          <Route path="/blog/heating-repair" element={<BlogPostHeating />} />
          <Route path="/blog/appliance-installation" element={<BlogPostAppliances />} />
          <Route path="/blog/appliances-install" element={<BlogPostAppliances />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/tools/calculator" element={<Calculator />} />
          <Route path="/tools/booking" element={<Booking />} />
          <Route path="/tools/feedback" element={<FeedbackPage />} />
          <Route path="/tools/service-map" element={<ServiceMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
