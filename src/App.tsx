
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CashbackRules from "./pages/company/CashbackRules";
import ClientDashboard from "./pages/client/ClientDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          
          <Route path="/company" element={<DashboardLayout />}>
            <Route path="dashboard" element={<CompanyDashboard />} />
            <Route path="cashback-rules" element={<CashbackRules />} />
            {/* Outros componentes de empresa seriam adicionados aqui */}
          </Route>
          
          <Route path="/client" element={<DashboardLayout />}>
            <Route path="dashboard" element={<ClientDashboard />} />
            {/* Outros componentes de cliente seriam adicionados aqui */}
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
