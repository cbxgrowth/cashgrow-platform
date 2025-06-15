
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MapPin, Shield, Users } from 'lucide-react';
import { useUserLocation } from '@/hooks/useUserLocation';
import { useToast } from '@/hooks/use-toast';

export const UserLocationConsent: React.FC = () => {
  const { 
    privacyConsent, 
    hasLocationStored, 
    loading, 
    updateUserLocation, 
    revokeLocationConsent,
    hasGeolocation,
    geoError
  } = useUserLocation();
  const { toast } = useToast();

  const handleConsentChange = async (consent: boolean) => {
    if (consent) {
      if (!hasGeolocation) {
        toast({
          title: "Localização não disponível",
          description: "Permita o acesso à localização para continuar",
          variant: "destructive"
        });
        return;
      }

      const { error } = await updateUserLocation(true);
      if (error) {
        toast({
          title: "Erro",
          description: error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Sucesso",
          description: "Localização compartilhada com segurança!"
        });
      }
    } else {
      const { error } = await revokeLocationConsent();
      if (error) {
        toast({
          title: "Erro",
          description: error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Consentimento revogado",
          description: "Sua localização não será mais compartilhada"
        });
      }
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Compartilhar Localização</CardTitle>
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
          <MapPin className="h-5 w-5" />
          Compartilhar Localização
        </CardTitle>
        <CardDescription>
          Ajude empresas próximas a entender melhor sua região
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {geoError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              ⚠️ Erro ao acessar localização: {geoError}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="location-consent">Compartilhar localização</Label>
            <p className="text-sm text-muted-foreground">
              Permite que empresas vejam estatísticas de usuários na região
            </p>
          </div>
          <Switch
            id="location-consent"
            checked={privacyConsent}
            onCheckedChange={handleConsentChange}
            disabled={!hasGeolocation}
          />
        </div>

        {/* Benefícios */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Users className="h-4 w-4" />
            Benefícios do compartilhamento:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-6">
            <li>• Empresas podem oferecer promoções regionais</li>
            <li>• Melhor experiência de cashback na sua área</li>
            <li>• Dados são completamente anônimos</li>
            <li>• Você pode revogar a qualquer momento</li>
          </ul>
        </div>

        {/* Informações de privacidade */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Sua privacidade está protegida</p>
              <p className="text-xs text-blue-800 mt-1">
                Apenas dados agregados e anônimos são compartilhados. Nenhuma informação pessoal ou localização exata é revelada às empresas.
              </p>
            </div>
          </div>
        </div>

        {hasLocationStored && (
          <div className="text-xs text-muted-foreground">
            Status: {privacyConsent ? '✅ Compartilhando localização' : '❌ Localização não compartilhada'}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
