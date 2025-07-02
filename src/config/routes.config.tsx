
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EnhancedNavbar from '@/components/navigation/EnhancedNavbar';
import AuthLayout from '@/components/layouts/AuthLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';

// Public Pages
import Index from '@/pages/Index';
import Home from '@/pages/Home/index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Docs from '@/pages/Docs';

// Auth Pages  
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

// Pricing Pages
import ConsumerPlans from '@/pages/pricing/ConsumerPlans';
import BusinessPlans from '@/pages/pricing/BusinessPlans';
import PersonalPlans from '@/pages/pricing/PersonalPlans';
import EnterpriseProducts from '@/pages/pricing/EnterpriseProducts';

// Solutions Pages
import ConsumerSolutions from '@/pages/solutions/ConsumerSolutions';
import BusinessSolutions from '@/pages/solutions/BusinessSolutions';
import MissionsPage from '@/pages/solutions/consumer/MissionsPage';

// Client Pages
import ClientDashboard from '@/pages/client/ClientDashboard';
import ClientPlans from '@/pages/client/plans';
import ClientAnalytics from '@/pages/client/analytics';
import VIPClub from '@/pages/client/vip-club';
import ClientLocationPage from '@/pages/client/location';
import ClientWalletPage from '@/pages/client/wallet';
import ClientTransactionsPage from '@/pages/client/transactions';
import ClientNotificationsPage from '@/pages/client/notifications';
import ClientMissionsPage from '@/pages/client/missions';
import ClientRecommendationsPage from '@/pages/client/recommendations';
import ClientCompaniesPage from '@/pages/client/companies';
import ClientProfilePage from '@/pages/client/profile';

// Company Pages
import CompanyDashboard from '@/pages/company/CompanyDashboard';
import CompanyClients from '@/pages/company/clients';
import CompanySettings from '@/pages/company/settings';
import CompanyProfile from '@/pages/company/profile';
import AICampaigns from '@/pages/company/ai-campaigns';
import CompanyAnalytics from '@/pages/company/analytics';
import APIIntegration from '@/pages/company/api-integration';
import ClientImport from '@/pages/company/imports/clients';
import ProductImport from '@/pages/company/imports/products';
import CompanyProximityPage from '@/pages/company/proximity';
import CompanyProductsPage from '@/pages/company/products';
import CompanyReportsPage from '@/pages/company/reports';
import CompanyTransactionsPage from '@/pages/company/transactions';
import CompanyPerformancePage from '@/pages/company/performance';
import CompanyCorporatePage from '@/pages/company/corporate';
import CashbackRules from '@/pages/company/CashbackRules';

// Admin Pages
import TestDataManager from '@/components/admin/TestDataManager';

const AppRoutes: React.FC = () => (
  <Routes>
    {/* Public routes with navbar */}
    <Route path="/" element={
      <>
        <EnhancedNavbar />
        <Index />
      </>
    } />
    <Route path="/home" element={
      <>
        <EnhancedNavbar />
        <Home />
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
    
    {/* Test Data Manager - Hidden route for development */}
    <Route path="/admin/test-data" element={<TestDataManager />} />
    
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
    <Route path="/client" element={<DashboardLayout userType="client" />}>
      <Route path="dashboard" element={<ClientDashboard />} />
      <Route path="wallet" element={<ClientWalletPage />} />
      <Route path="transactions" element={<ClientTransactionsPage />} />
      <Route path="missions" element={<ClientMissionsPage />} />
      <Route path="plans" element={<ClientPlans />} />
      <Route path="analytics" element={<ClientAnalytics />} />
      <Route path="recommendations" element={<ClientRecommendationsPage />} />
      <Route path="vip-club" element={<VIPClub />} />
      <Route path="companies" element={<ClientCompaniesPage />} />
      <Route path="location" element={<ClientLocationPage />} />
      <Route path="notifications" element={<ClientNotificationsPage />} />
      <Route path="profile" element={<ClientProfilePage />} />
    </Route>

    {/* Company routes */}
    <Route path="/company" element={<DashboardLayout userType="company" />}>
      <Route path="dashboard" element={<CompanyDashboard />} />
      <Route path="clients" element={<CompanyClients />} />
      <Route path="products" element={<CompanyProductsPage />} />
      <Route path="transactions" element={<CompanyTransactionsPage />} />
      <Route path="analytics" element={<CompanyAnalytics />} />
      <Route path="reports" element={<CompanyReportsPage />} />
      <Route path="performance" element={<CompanyPerformancePage />} />
      <Route path="ai-campaigns" element={<AICampaigns />} />
      <Route path="corporate" element={<CompanyCorporatePage />} />
      <Route path="cashback-rules" element={<CashbackRules />} />
      <Route path="api-integration" element={<APIIntegration />} />
      <Route path="imports/clients" element={<ClientImport />} />
      <Route path="imports/products" element={<ProductImport />} />
      <Route path="proximity" element={<CompanyProximityPage />} />
      <Route path="settings" element={<CompanySettings />} />
      <Route path="profile" element={<CompanyProfile />} />
    </Route>
  </Routes>
);

export default AppRoutes;
