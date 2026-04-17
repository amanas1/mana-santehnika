import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const ServiceDistrictPage = lazy(() => import("./pages/ServiceDistrictPage"));
const Services = lazy(() => import("./pages/Services"));
const Prices = lazy(() => import("./pages/Prices"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogPostClog = lazy(() => import("./pages/BlogPostClog"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const BlogPostFaucet = lazy(() => import("./pages/BlogPostFaucet"));
const BlogPostLeak = lazy(() => import("./pages/BlogPostLeak"));
const BlogPostHeating = lazy(() => import("./pages/BlogPostHeating"));
const BlogPostAppliances = lazy(() => import("./pages/BlogPostAppliances"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Booking = lazy(() => import("./pages/Booking"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));
const ServiceMap = lazy(() => import("./pages/ServiceMap"));
const BlogPostWater = lazy(() => import("./pages/BlogPostWater"));
const BlogPostPipes = lazy(() => import("./pages/BlogPostPipes"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-4 border-[#1173D4] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
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
        </Suspense>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
