
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Palette, Lock, CreditCard, ShoppingBag } from "lucide-react";

// Components
import BusinessInfoTab from './components/BusinessInfoTab';
import BrandingTab from './components/BrandingTab';
import SecurityTab from './components/SecurityTab';
import PaymentSettingsTab from './components/PaymentSettingsTab';
import StoreIntegrationTab from './components/StoreIntegrationTab';

const CompanyProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business');
  
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Empresa</h1>
        <p className="text-muted-foreground">
          Configure as informações da empresa, identidade visual, pagamentos e integrações
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="business" className="flex items-center gap-2">
            <Building className="h-4 w-4" /> <span className="hidden md:inline">Negócio</span>
          </TabsTrigger>
          <TabsTrigger value="branding" className="flex items-center gap-2">
            <Palette className="h-4 w-4" /> <span className="hidden md:inline">Marca</span>
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> <span className="hidden md:inline">Pagamentos</span>
          </TabsTrigger>
          <TabsTrigger value="store" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" /> <span className="hidden md:inline">Loja</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" /> <span className="hidden md:inline">Segurança</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="business">
            <BusinessInfoTab />
          </TabsContent>
          
          <TabsContent value="branding">
            <BrandingTab />
          </TabsContent>
          
          <TabsContent value="payment">
            <PaymentSettingsTab />
          </TabsContent>
          
          <TabsContent value="store">
            <StoreIntegrationTab />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CompanyProfilePage;
