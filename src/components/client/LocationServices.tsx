
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Bell, Shield, AlertCircle } from 'lucide-react';
import { useUserLocation } from '@/hooks/useUserLocation';
import { useProximityNotifications } from '@/hooks/useProximityNotifications';
import { nearbyCompanies } from '@/pages/client/dashboard/data/nearbyCompanies';
import { useToast } from '@/hooks/use-toast';

export const LocationServices: React.FC = () => {
  const { toast } = useToast();
  const { 
    privacyConsent, 
    hasLocationStored, 
    loading, 
    updateUserLocation, 
    revokeLocationConsent, 
    hasGeolocation, 
    geoError 
  } = useUserLocation();

  const { 
    userLocation, 
    locationError, 
    isLocationEnabled 
  } = useProximityNotifications(nearbyCompanies);

  const [notificationsEnabled, setNotificationsEnabled] = useState(privacyConsent);

  useEffect(() => {
    setNotificationsEnabled(privacyConsent);
  }, [privacyConsent]);

  const handleLocationToggle = async (enabled: boolean) => {
    if (enabled) {
      const result = await updateUserLocation(true);
      if (result.error) {
        toast({
          title: "Erro",
          description: result.error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Localização ativada",
          description: "Agora você receberá notificações de empresas próximas!"
        });
      }
    } else {
      const result = await revokeLocationConsent();
      if (result.error) {
        toast({
          title: "Erro",
          description: result.error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Localização desativada",
          description: "Você não receberá mais notificações baseadas em localização."
        });
      }
    }
    setNotificationsEnabled(enabled);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Serviços de Localização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Status da Localização */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Serviços de Localização
          </CardTitle>
          <CardDescription>
            Receba notificações de cashback quando estiver próximo de empresas parceiras
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status atual */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Notificações por proximidade</p>
              <p className="text-sm text-muted-foreground">
                Receba alertas quando estiver perto de empresas com cashback
              </p>
            </div>
            <Switch 
              checked={notificationsEnabled}
              onCheckedChange={handleLocationToggle}
              disabled={loading}
            />
          </div>

          {/* Informações de status */}
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${hasGeolocation ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm">
                GPS: {hasGeolocation ? 'Disponível' : 'Indisponível'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isLocationEnabled ? 'bg-green-500' : 'bg-yellow-500'}`} />
              <span className="text-sm">
                Localização: {isLocationEnabled ? 'Ativa' : 'Inativa'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${privacyConsent ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-sm">
                Consentimento: {privacyConsent ? 'Concedido' : 'Não concedido'}
              </span>
            </div>
          </div>

          {/* Empresas próximas */}
          {isLocationEnabled && (
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Empresas Próximas
              </h4>
              <div className="grid gap-2">
                {nearbyCompanies.slice(0, 3).map((company) => (
                  <div key={company.id} className="flex items-center justify-between p-2 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{company.name}</p>
                      <p className="text-xs text-muted-foreground">{company.category}</p>
                    </div>
                    <Badge variant="secondary">
                      {company.cashbackPercentage}% cashback
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Erros */}
          {(geoError || locationError) && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">Erro de Localização</p>
                  <p className="text-xs text-red-700">
                    {geoError || locationError}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Informações de Privacidade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacidade da Localização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Sua localização é usada apenas para notificações de proximidade</p>
            <p>• Os dados são armazenados de forma anônima e agregada</p>
            <p>• Você pode revogar o consentimento a qualquer momento</p>
            <p>• Nenhuma informação pessoal é compartilhada com as empresas</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
