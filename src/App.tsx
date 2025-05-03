
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from '@/components/ui/sonner';
import { SidebarProvider } from "@/components/ui/sidebar";

import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

import Index from './pages/Index';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ClientDashboard from './pages/client/ClientDashboard';
import ClientTransactions from './pages/client/transactions';
import ClientProfile from './pages/client/profile';
import ClientCompanies from './pages/client/companies';
import ClientRecommendations from './pages/client/recommendations';
import ClientMissions from './pages/client/missions';
import CompanyDashboard from './pages/company/CompanyDashboard';
import CompanyClients from './pages/company/clients';
import CompanyTransactions from './pages/company/transactions';
import CompanyReports from './pages/company/reports';
import CompanySettings from './pages/company/settings';
import CashbackRules from './pages/company/CashbackRules';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cashback-theme">
      <SidebarProvider>
        <Router>
          <Routes>
            {/* Páginas principais */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
            </Route>

            {/* Páginas de autenticação */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Páginas de dashboard do cliente */}
            <Route path="/client" element={<DashboardLayout userType="client" />}>
              <Route path="dashboard" element={<ClientDashboard />} />
              <Route path="transactions" element={<ClientTransactions />} />
              <Route path="profile" element={<ClientProfile />} />
              <Route path="companies" element={<ClientCompanies />} />
              <Route path="recommendations" element={<ClientRecommendations />} />
              <Route path="missions" element={<ClientMissions />} />
              <Route path="vip-club" element={<Index />} />
            </Route>

            {/* Páginas de dashboard da empresa */}
            <Route path="/company" element={<DashboardLayout userType="company" />}>
              <Route path="dashboard" element={<CompanyDashboard />} />
              <Route path="cashback-rules" element={<CashbackRules />} />
              <Route path="clients" element={<CompanyClients />} />
              <Route path="transactions" element={<CompanyTransactions />} />
              <Route path="reports" element={<CompanyReports />} />
              <Route path="ai-campaigns" element={<Index />} />
              <Route path="corporate" element={<Index />} />
              <Route path="performance" element={<Index />} />
              <Route path="settings" element={<CompanySettings />} />
            </Route>

            {/* Página de redirecionamento */}
            <Route path="/index" element={<Index />} />

            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster position="bottom-right" />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
