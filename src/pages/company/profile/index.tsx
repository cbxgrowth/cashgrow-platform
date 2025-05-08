
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessInfoTab from './components/BusinessInfoTab';
import BrandingTab from './components/BrandingTab';
import PaymentSettingsTab from './components/PaymentSettingsTab';
import SecurityTab from './components/SecurityTab';
import NotificationSettings from '@/components/notifications/NotificationSettings';

const CompanyProfile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Empresa</h1>
      </div>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="business">Dados da Empresa</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="payment">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="business">
          <BusinessInfoTab />
        </TabsContent>
        
        <TabsContent value="branding">
          <BrandingTab />
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentSettingsTab />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings 
            initialSettings={{
              enableEmailNotifications: true,
              enablePushNotifications: true,
              notifyOnTransactions: true,
              notifyOnPromotions: false,
              notifyOnAccountChanges: true,
              notifyOnSystemUpdates: true
            }}
            onSave={(settings) => console.log('Settings saved:', settings)}
          />
        </TabsContent>
        
        <TabsContent value="security">
          <SecurityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyProfile;
