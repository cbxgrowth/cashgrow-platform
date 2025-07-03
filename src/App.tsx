import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Index from "@/pages/Index";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Help from "@/pages/Help";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import Callback from "@/pages/auth/callback";
import NotFound from "@/pages/NotFound";
import ClientDashboard from "@/pages/client/ClientDashboard";
import CompanyDashboard from "@/pages/company/CompanyDashboard";
import MainLayout from "@/components/layouts/MainLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useAuth } from "@/hooks/auth/useAuth";
import { useEffect } from "react";

// Soluções páginas
import SolutionsIndex from "@/pages/solutions/index";
import ConsumerSolutions from "@/pages/solutions/ConsumerSolutions";
import BusinessSolutions from "@/pages/solutions/BusinessSolutions";
import MissionsPage from "@/pages/solutions/consumer/MissionsPage";
import AnalyticsPage from "@/pages/solutions/business/AnalyticsPage";
import ApiPage from "@/pages/solutions/business/ApiPage";

// Pricing pages
import PersonalPlans from "@/pages/pricing/PersonalPlans";
import BusinessPlans from "@/pages/pricing/BusinessPlans";
import ComparePlans from "@/pages/pricing/ComparePlans";

// Client pages
import ClientAnalytics from "@/pages/client/analytics/index";
import VIPClub from "@/pages/client/vip-club/index";
import Community from "@/pages/client/community/index";
import ClientPlans from "@/pages/client/plans/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

const AppContent = () => {
  const { user, userType } = useAuth();

  useEffect(() => {
    // Initialize any app-wide settings here
    console.log('App initialized');
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="pricing/personal" element={<PersonalPlans />} />
        <Route path="pricing/business" element={<BusinessPlans />} />
        <Route path="pricing/compare" element={<ComparePlans />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="help" element={<Help />} />
        
        {/* Soluções Routes */}
        <Route path="solutions" element={<SolutionsIndex />} />
        <Route path="solutions/consumer" element={<ConsumerSolutions />} />
        <Route path="solutions/consumer/missions" element={<MissionsPage />} />
        <Route path="solutions/business" element={<BusinessSolutions />} />
        <Route path="solutions/business/analytics" element={<AnalyticsPage />} />
        <Route path="solutions/business/api" element={<ApiPage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="callback" element={<Callback />} />
      </Route>

      {/* Client Dashboard Routes */}
      {user && userType === 'client' && (
        <Route path="/client" element={<DashboardLayout userType="client" />}>
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="analytics" element={<ClientAnalytics />} />
          <Route path="vip-club" element={<VIPClub />} />
          <Route path="community" element={<Community />} />
          <Route path="plans" element={<ClientPlans />} />
        </Route>
      )}

      {/* Company Dashboard Routes */}
      {user && userType === 'company' && (
        <Route path="/company" element={<DashboardLayout userType="company" />}>
          <Route path="dashboard" element={<CompanyDashboard />} />
        </Route>
      )}

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
