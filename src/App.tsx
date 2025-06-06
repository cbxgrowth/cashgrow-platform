
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import PersonalPlans from "./pages/pricing/PersonalPlans";
import BusinessPlans from "./pages/pricing/BusinessPlans";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AuthCallback from "./pages/auth/callback";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";
import NotFound from "./pages/NotFound";

// Solution pages
import ConsumerSolutions from "./pages/solutions/ConsumerSolutions";
import BusinessSolutions from "./pages/solutions/BusinessSolutions";

// Client pages
import ClientWallet from "./pages/client/wallet";
import ClientTransactions from "./pages/client/transactions";
import ClientMissions from "./pages/client/missions";
import ClientRecommendations from "./pages/client/recommendations";
import ClientVipClub from "./pages/client/vip-club";
import ClientCompanies from "./pages/client/companies";
import ClientProfile from "./pages/client/profile";
import ClientPlans from "./pages/client/plans";

// Company pages
import CompanyProducts from "./pages/company/products";
import CompanyClients from "./pages/company/clients";
import CompanyTransactions from "./pages/company/transactions";
import CompanyReports from "./pages/company/reports";
import CompanyIntegrations from "./pages/company/integrations";
import CompanyProfile from "./pages/company/profile";
import CompanySettings from "./pages/company/settings";
import CompanyPerformance from "./pages/company/performance";
import CompanyCorporate from "./pages/company/corporate";
import CompanyAiCampaigns from "./pages/company/ai-campaigns";
import CashbackRules from "./pages/company/CashbackRules";

// Notifications
import NotificationsPage from "./pages/notifications";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Public routes with MainLayout */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Index />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="features" element={<Features />} />
                <Route path="funcionalidades" element={<Features />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="pricing/personal" element={<PersonalPlans />} />
                <Route path="pricing/business" element={<BusinessPlans />} />
                <Route path="precos" element={<Pricing />} />
                <Route path="integrations" element={<Integrations />} />
                <Route path="integracoes" element={<Integrations />} />
                <Route path="contact" element={<Contact />} />
                
                {/* New solution pages */}
                <Route path="solutions/consumer" element={<ConsumerSolutions />} />
                <Route path="solutions/business" element={<BusinessSolutions />} />
                <Route path="solucoes/consumidor" element={<ConsumerSolutions />} />
                <Route path="solucoes/empresa" element={<BusinessSolutions />} />
              </Route>

              {/* Auth routes */}
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="callback" element={<AuthCallback />} />
              </Route>

              {/* Dashboard routes */}
              <Route path="/company" element={<DashboardLayout userType="company" />}>
                <Route path="dashboard" element={<CompanyDashboard />} />
                <Route path="products" element={<CompanyProducts />} />
                <Route path="clients" element={<CompanyClients />} />
                <Route path="transactions" element={<CompanyTransactions />} />
                <Route path="reports" element={<CompanyReports />} />
                <Route path="integrations" element={<CompanyIntegrations />} />
                <Route path="profile" element={<CompanyProfile />} />
                <Route path="settings" element={<CompanySettings />} />
                <Route path="performance" element={<CompanyPerformance />} />
                <Route path="corporate" element={<CompanyCorporate />} />
                <Route path="ai-campaigns" element={<CompanyAiCampaigns />} />
                <Route path="cashback-rules" element={<CashbackRules />} />
              </Route>

              <Route path="/client" element={<DashboardLayout userType="client" />}>
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="wallet" element={<ClientWallet />} />
                <Route path="transactions" element={<ClientTransactions />} />
                <Route path="missions" element={<ClientMissions />} />
                <Route path="recommendations" element={<ClientRecommendations />} />
                <Route path="vip-club" element={<ClientVipClub />} />
                <Route path="companies" element={<ClientCompanies />} />
                <Route path="profile" element={<ClientProfile />} />
                <Route path="plans" element={<ClientPlans />} />
                <Route path="notifications" element={<NotificationsPage />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
