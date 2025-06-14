import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/sonner';

// Layouts
import MainLayout from '@/components/layouts/MainLayout';
import AuthLayout from '@/components/layouts/AuthLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminProtectedRoute } from '@/components/admin/AdminProtectedRoute';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Features from '@/pages/Features';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';
import ConsumerPlans from '@/pages/pricing/ConsumerPlans';
import EnterpriseProducts from '@/pages/pricing/EnterpriseProducts';
import Help from '@/pages/Help';
import ApiDocs from '@/pages/docs/ApiDocs';
import Community from '@/pages/Community';

// Solutions Pages
import SolutionsIndex from '@/pages/solutions/index';
import ConsumerSolutions from '@/pages/solutions/ConsumerSolutions';
import BusinessSolutions from '@/pages/solutions/BusinessSolutions';

// Auth Pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import AuthCallback from '@/pages/auth/callback';

// Client Pages
import ClientDashboard from '@/pages/client/ClientDashboard';
import ClientPlans from '@/pages/client/plans';

// Company Pages
import CompanyDashboard from '@/pages/company/CompanyDashboard';

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminCompanies from '@/pages/admin/AdminCompanies';
import AdminSettings from '@/pages/admin/AdminSettings';

import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="features" element={<Features />} />
              <Route path="contact" element={<Contact />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="pricing/consumer" element={<ConsumerPlans />} />
              <Route path="pricing/enterprise" element={<EnterpriseProducts />} />
              <Route path="help" element={<Help />} />
              <Route path="docs/api" element={<ApiDocs />} />
              <Route path="community" element={<Community />} />
              <Route path="solutions" element={<SolutionsIndex />} />
              <Route path="solutions/consumer" element={<ConsumerSolutions />} />
              <Route path="solutions/business" element={<BusinessSolutions />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="callback" element={<AuthCallback />} />
            </Route>

            {/* Client Dashboard Routes */}
            <Route path="/client/*" element={<DashboardLayout userType="client" />}>
              <Route path="dashboard" element={<ClientDashboard />} />
              {/* Add more client routes here */}
            </Route>

            {/* Company Dashboard Routes */}
            <Route path="/company/*" element={<DashboardLayout userType="company" />}>
              <Route path="dashboard" element={<CompanyDashboard />} />
              {/* Add more company routes here */}
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/*" element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="companies" element={<AdminCompanies />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="analytics" element={<AdminDashboard />} />
              <Route path="audit-logs" element={<AdminDashboard />} />
            </Route>

            {/* Fallback Routes */}
            <Route path="/dashboard" element={<Navigate to="/client/dashboard" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
