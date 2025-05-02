
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from '@/components/ui/sonner';

import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

import Index from './pages/Index';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ClientDashboard from './pages/client/ClientDashboard';
import CompanyDashboard from './pages/company/CompanyDashboard';
import CashbackRules from './pages/company/CashbackRules';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cashback-theme">
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
          </Route>

          {/* Páginas de dashboard da empresa */}
          <Route path="/company" element={<DashboardLayout userType="company" />}>
            <Route path="dashboard" element={<CompanyDashboard />} />
            <Route path="cashback-rules" element={<CashbackRules />} />
          </Route>

          {/* Página de redirecionamento */}
          <Route path="/index" element={<Index />} />

          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;
