
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessInfoTab from './components/BusinessInfoTab';
import BrandingTab from './components/BrandingTab';
import PaymentSettingsTab from './components/PaymentSettingsTab';
import StoreIntegrationTab from './components/StoreIntegrationTab';
import SecurityTab from './components/SecurityTab';
import { Building2, Palette, CreditCard, Store, Shield } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Empresa</h1>
        <p className="text-muted-foreground">
          Gerencie as informações e configurações da sua empresa
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="business" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Empresa</span>
              </TabsTrigger>
              <TabsTrigger value="branding" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Marca</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Pagamento</span>
              </TabsTrigger>
              <TabsTrigger value="integration" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden sm:inline">Integração</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Segurança</span>
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
              <TabsContent value="integration">
                <StoreIntegrationTab />
              </TabsContent>
              <TabsContent value="security">
                <SecurityTab />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProfile;
