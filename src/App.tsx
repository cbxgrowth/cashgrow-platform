
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ConsumerPlans from "./pages/pricing/ConsumerPlans";
import BusinessPlans from "./pages/pricing/BusinessPlans";
import PersonalPlans from "./pages/pricing/PersonalPlans";
import EnterpriseProducts from "./pages/pricing/EnterpriseProducts";
import MissionsPage from "./pages/solutions/consumer/MissionsPage";
import ConsumerSolutions from "./pages/solutions/consumer/ConsumerSolutions";
import BusinessSolutions from "./pages/solutions/business/BusinessSolutions";
import ClientDashboard from "./pages/client/dashboard";
import ClientPlans from "./pages/client/plans";
import CompanyDashboard from "./pages/company/dashboard";
import CompanyClients from "./pages/company/clients";
import CompanyInvitations from "./pages/company/invitations";
import CompanySettings from "./pages/company/settings";
import CompanyProfile from "./pages/company/profile";
import AICampaigns from "./pages/company/ai-campaigns";
import ClientLayout from "./components/layouts/ClientLayout";
import CompanyLayout from "./components/layouts/CompanyLayout";
import EnhancedNavbar from "./components/navigation/EnhancedNavbar";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with navbar */}
            <Route path="/" element={
              <>
                <EnhancedNavbar />
                <Index />
              </>
            } />
            <Route path="/about" element={
              <>
                <EnhancedNavbar />
                <About />
              </>
            } />
            <Route path="/contact" element={
              <>
                <EnhancedNavbar />
                <Contact />
              </>
            } />
            <Route path="/blog" element={
              <>
                <EnhancedNavbar />
                <Blog />
              </>
            } />
            <Route path="/docs" element={
              <>
                <EnhancedNavbar />
                <Docs />
              </>
            } />
            
            {/* Pricing routes */}
            <Route path="/pricing" element={
              <>
                <EnhancedNavbar />
                <ConsumerPlans />
              </>
            } />
            <Route path="/pricing/consumer" element={
              <>
                <EnhancedNavbar />
                <ConsumerPlans />
              </>
            } />
            <Route path="/pricing/business" element={
              <>
                <EnhancedNavbar />
                <BusinessPlans />
              </>
            } />
            <Route path="/pricing/personal" element={
              <>
                <EnhancedNavbar />
                <PersonalPlans />
              </>
            } />
            <Route path="/pricing/enterprise" element={
              <>
                <EnhancedNavbar />
                <EnterpriseProducts />
              </>
            } />
            
            {/* Solutions routes */}
            <Route path="/solutions/consumer" element={
              <>
                <EnhancedNavbar />
                <ConsumerSolutions />
              </>
            } />
            <Route path="/solutions/consumer/missions" element={
              <>
                <EnhancedNavbar />
                <MissionsPage />
              </>
            } />
            <Route path="/solutions/business" element={
              <>
                <EnhancedNavbar />
                <BusinessSolutions />
              </>
            } />

            {/* Auth routes */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Client routes */}
            <Route path="/client" element={<ClientLayout />}>
              <Route path="dashboard" element={<ClientDashboard />} />
              <Route path="plans" element={<ClientPlans />} />
            </Route>

            {/* Company routes */}
            <Route path="/company" element={<CompanyLayout />}>
              <Route path="dashboard" element={<CompanyDashboard />} />
              <Route path="clients" element={<CompanyClients />} />
              <Route path="invitations" element={<CompanyInvitations />} />
              <Route path="settings" element={<CompanySettings />} />
              <Route path="profile" element={<CompanyProfile />} />
              <Route path="ai-campaigns" element={<AICampaigns />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;
