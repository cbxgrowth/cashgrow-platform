
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoTab } from './components/PersonalInfoTab';
import { SecurityTab } from './components/SecurityTab';
import { PaymentTab } from './components/PaymentTab';
import { ProximityNotificationSettings } from '@/components/proximity/ProximityNotificationSettings';

const ClientProfile: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie suas informações pessoais e configurações da conta
        </p>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="payment">Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <PersonalInfoTab />
        </TabsContent>

        <TabsContent value="security">
          <SecurityTab />
        </TabsContent>

        <TabsContent value="payment">
          <PaymentTab />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <ProximityNotificationSettings />
          
          <Card>
            <CardHeader>
              <CardTitle>Outras Notificações</CardTitle>
              <CardDescription>
                Configure outros tipos de alertas e comunicações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configurações adicionais de notificação em breve...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientProfile;
