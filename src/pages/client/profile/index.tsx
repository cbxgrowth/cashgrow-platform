
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoTab from './components/PersonalInfoTab';
import PaymentTab from './components/PaymentTab';
import SecurityTab from './components/SecurityTab';
import NotificationSettings from '@/components/notifications/NotificationSettings';

const ClientProfile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="payment">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <PersonalInfoTab />
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentTab />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings 
            initialSettings={{
              enableEmailNotifications: true,
              enablePushNotifications: false,
              notifyOnTransactions: true,
              notifyOnPromotions: true,
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

export default ClientProfile;
