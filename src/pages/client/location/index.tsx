
import React from 'react';
import { LocationServices } from '@/components/client/LocationServices';
import { ProximityNotificationSettings } from '@/components/proximity/ProximityNotificationSettings';
import { UserLocationConsent } from '@/components/proximity/UserLocationConsent';

const ClientLocationPage: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Localização e Proximidade</h1>
        <p className="text-muted-foreground mt-2">
          Configure suas preferências de localização e receba notificações de empresas próximas
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <LocationServices />
        </div>
        
        <div className="space-y-6">
          <UserLocationConsent />
          <ProximityNotificationSettings />
        </div>
      </div>
    </div>
  );
};

export default ClientLocationPage;
