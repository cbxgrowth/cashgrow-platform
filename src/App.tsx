
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from '@/components/ui/sonner';
import { SidebarProvider } from "@/components/ui/sidebar";
import { NotificationProvider } from "@/contexts/NotificationContext";

import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthCallback from './pages/auth/callback';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientTransactions from './pages/client/transactions';
import ClientProfile from './pages/client/profile';
import ClientWallet from './pages/client/wallet';
import CompanyProfile from './pages/company/profile';
import ClientCompanies from './pages/client/companies';
import ClientRecommendations from './pages/client/recommendations';
import ClientMissions from './pages/client/missions';
import ClientVipClub from './pages/client/vip-club';
import CompanyDashboard from './pages/company/CompanyDashboard';
import CompanyClients from './pages/company/clients';
import CompanyProducts from './pages/company/products';
import CompanyTransactions from './pages/company/transactions';
import CompanyReports from './pages/company/reports';
import CompanySettings from './pages/company/settings';
import CashbackRules from './pages/company/CashbackRules';
import CompanyAICampaigns from './pages/company/ai-campaigns';
import CompanyCorporate from './pages/company/corporate';
import CompanyPerformance from './pages/company/performance';
import NotificationsPage from './pages/notifications';
import ExampleNotifications from './pages/notifications/ExampleNotifications';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      await supabase.auth.getSession();
      setInitialized(true);
    };

    checkSession();
  }, []);

  if (!initialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="cashback-theme">
      <NotificationProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              {/* Páginas principais */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Index />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              {/* Páginas de autenticação */}
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="callback" element={<AuthCallback />} />
              </Route>

              {/* Páginas de dashboard do cliente */}
              <Route path="/client" element={<DashboardLayout userType="client" />}>
                <Route index element={<Navigate to="/client/dashboard" replace />} />
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="transactions" element={<ClientTransactions />} />
                <Route path="profile" element={<ClientProfile />} />
                <Route path="wallet" element={<ClientWallet />} />
                <Route path="companies" element={<ClientCompanies />} />
                <Route path="recommendations" element={<ClientRecommendations />} />
                <Route path="missions" element={<ClientMissions />} />
                <Route path="vip-club" element={<ClientVipClub />} />
                <Route path="notifications" element={<NotificationsPage />} />
                <Route path="notifications/examples" element={<ExampleNotifications />} />
              </Route>

              {/* Páginas de dashboard da empresa */}
              <Route path="/company" element={<DashboardLayout userType="company" />}>
                <Route index element={<Navigate to="/company/dashboard" replace />} />
                <Route path="dashboard" element={<CompanyDashboard />} />
                <Route path="cashback-rules" element={<CashbackRules />} />
                <Route path="clients" element={<CompanyClients />} />
                <Route path="products" element={<CompanyProducts />} />
                <Route path="transactions" element={<CompanyTransactions />} />
                <Route path="reports" element={<CompanyReports />} />
                <Route path="profile" element={<CompanyProfile />} />
                <Route path="ai-campaigns" element={<CompanyAICampaigns />} />
                <Route path="corporate" element={<CompanyCorporate />} />
                <Route path="performance" element={<CompanyPerformance />} />
                <Route path="settings" element={<CompanySettings />} />
                <Route path="notifications" element={<NotificationsPage />} />
                <Route path="notifications/examples" element={<ExampleNotifications />} />
              </Route>

              {/* Página de redirecionamento */}
              <Route path="/index" element={<Index />} />

              {/* Página 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster position="bottom-right" />
        </SidebarProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
