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
import ClientWallet from "@/pages/client/wallet/index";
import ClientTransactions from "@/pages/client/transactions/index";
import ClientMissions from "@/pages/client/missions/index";
import ClientRecommendations from "@/pages/client/recommendations/index";
import ClientCompanies from "@/pages/client/companies/index";
import ClientLocation from "@/pages/client/location/index";
import ClientNotifications from "@/pages/client/notifications/index";
import ClientProfile from "@/pages/client/profile/index";

// Company pages
import CompanyProducts from "@/pages/company/products/index";
import CompanyClients from "@/pages/company/clients/index";
import CompanyTransactions from "@/pages/company/transactions/index";
import CompanyAnalytics from "@/pages/company/analytics/index";
import CompanyReports from "@/pages/company/reports/index";
import CompanyPerformance from "@/pages/company/performance/index";
import CompanyAICampaigns from "@/pages/company/ai-campaigns/index";
import CompanyCorporate from "@/pages/company/corporate/index";
import CompanyCashbackRules from "@/pages/company/cashback-rules/index";
import CompanyProximity from "@/pages/company/proximity/index";
import CompanyIntegrations from "@/pages/company/integrations/index";
import CompanyAPIIntegration from "@/pages/company/api-integration/index";
import CompanyProfile from "@/pages/company/profile/index";
import CompanySettings from "@/pages/company/settings/index";

// Import pages
import ClientImport from "@/pages/company/imports/clients/index";
import ProductImport from "@/pages/company/imports/products/index";

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
      <Route path="/client" element={<DashboardLayout userType="client" />}>
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="wallet" element={<ClientWallet />} />
        <Route path="transactions" element={<ClientTransactions />} />
        <Route path="missions" element={<ClientMissions />} />
        <Route path="analytics" element={<ClientAnalytics />} />
        <Route path="recommendations" element={<ClientRecommendations />} />
        <Route path="plans" element={<ClientPlans />} />
        <Route path="vip-club" element={<VIPClub />} />
        <Route path="companies" element={<ClientCompanies />} />
        <Route path="location" element={<ClientLocation />} />
        <Route path="notifications" element={<ClientNotifications />} />
        <Route path="notifications/examples" element={<ExampleNotifications />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<ClientProfile />} />
      </Route>

      {/* Company Dashboard Routes */}
      <Route path="/company" element={<DashboardLayout userType="company" />}>
        <Route path="dashboard" element={<CompanyDashboard />} />
        <Route path="products" element={<CompanyProducts />} />
        <Route path="clients" element={<CompanyClients />} />
        <Route path="transactions" element={<CompanyTransactions />} />
        <Route path="analytics" element={<CompanyAnalytics />} />
        <Route path="reports" element={<CompanyReports />} />
        <Route path="performance" element={<CompanyPerformance />} />
        <Route path="ai-campaigns" element={<CompanyAICampaigns />} />
        <Route path="corporate" element={<CompanyCorporate />} />
        <Route path="cashback-rules" element={<CompanyCashbackRules />} />
        <Route path="proximity" element={<CompanyProximity />} />
        <Route path="integrations" element={<CompanyIntegrations />} />
        <Route path="api-integration" element={<CompanyAPIIntegration />} />
        <Route path="notifications" element={<ClientNotifications />} />
        <Route path="notifications/examples" element={<ExampleNotifications />} />
        <Route path="profile" element={<CompanyProfile />} />
        <Route path="settings" element={<CompanySettings />} />
        
        {/* Import Routes */}
        <Route path="imports/clients" element={<ClientImport />} />
        <Route path="imports/products" element={<ProductImport />} />
      </Route>

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
