
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { MapPin, Shield, Bell, Users, Info } from 'lucide-react';
import { useUserLocation } from '@/hooks/useUserLocation';
import { useToast } from '@/hooks/use-toast';

export const UserLocationConsent: React.FC = () => {
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

  const [isUpdating, setIsUpdating] = useState(false);

  const handleConsentToggle = async (enabled: boolean) => {
    setIsUpdating(true);
    
    try {
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
            title: "Consentimento concedido",
            description: "Sua localização será usada para enviar notificações personalizadas."
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
            title: "Consentimento revogado",
            description: "Não receberá mais notificações baseadas em localização."
          });
        }
      }
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Consentimento de Localização
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Consentimento de Localização
        </CardTitle>
        <CardDescription>
          Gerencie como seus dados de localização são utilizados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status atual */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="font-medium">Compartilhar localização</p>
              <Badge variant={privacyConsent ? "default" : "secondary"}>
                {privacyConsent ? "Ativo" : "Inativo"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Permite receber notificações de empresas próximas
            </p>
          </div>
          <Switch 
            checked={privacyConsent}
            onCheckedChange={handleConsentToggle}
            disabled={isUpdating || !hasGeolocation}
          />
        </div>

        {/* Informações de status */}
        <div className="space-y-3">
          <h4 className="font-medium">Status do Sistema</h4>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${hasGeolocation ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm">
                GPS: {hasGeolocation ? 'Disponível' : 'Indisponível'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${hasLocationStored ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-sm">
                Localização: {hasLocationStored ? 'Armazenada' : 'Não armazenada'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${privacyConsent ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-sm">
                Notificações: {privacyConsent ? 'Ativas' : 'Inativas'}
              </span>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        {privacyConsent && (
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Benefícios Ativos
            </h4>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Notificações quando próximo de empresas parceiras</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                <span>Ofertas personalizadas baseadas na sua região</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-purple-600" />
                <span>Alertas de cashback em tempo real</span>
              </div>
            </div>
          </div>
        )}

        {/* Informações de privacidade */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">Como protegemos seus dados</p>
              <ul className="text-xs text-blue-700 mt-1 space-y-1">
                <li>• Sua localização é armazenada de forma anônima</li>
                <li>• Dados são usados apenas para notificações de proximidade</li>
                <li>• Você pode revogar o consentimento a qualquer momento</li>
                <li>• Conformidade total com a LGPD</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erro de geolocalização */}
        {geoError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-800">Erro de Localização</p>
                <p className="text-xs text-red-700 mt-1">{geoError}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
