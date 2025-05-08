
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Perfil da Empresa
        </h1>
      </div>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden p-1">
          <TabsTrigger value="business" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">
            Dados da Empresa
          </TabsTrigger>
          <TabsTrigger value="branding" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">
            Branding
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">
            Métodos de Pagamento
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">
            Segurança
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="business" className="animate-fade-in">
          <BusinessInfoTab />
        </TabsContent>
        
        <TabsContent value="branding" className="animate-fade-in">
          <BrandingTab />
        </TabsContent>
        
        <TabsContent value="payment" className="animate-fade-in">
          <PaymentSettingsTab />
        </TabsContent>
        
        <TabsContent value="notifications" className="animate-fade-in">
          <Card className="shadow-md enhanced-card">
            <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-accent" />
                <span>Configurações de Notificações</span>
              </CardTitle>
              <CardDescription>
                Gerencie suas preferências de notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="animate-fade-in">
          <SecurityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

import { Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default CompanyProfile;
