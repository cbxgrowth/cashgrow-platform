
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MapPin, Bell, Settings } from 'lucide-react';
import { useGeolocation } from '@/hooks/useGeolocation';

export const ProximityNotificationSettings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    localStorage.getItem('proximityNotifications') !== 'false'
  );
  const [distances, setDistances] = useState({
    hundredMeters: localStorage.getItem('notify100m') !== 'false',
    fiftyMeters: localStorage.getItem('notify50m') !== 'false',
    tenMeters: localStorage.getItem('notify10m') !== 'false',
  });

  const { latitude, longitude, error, loading } = useGeolocation();

  const handleNotificationsToggle = (enabled: boolean) => {
    setNotificationsEnabled(enabled);
    localStorage.setItem('proximityNotifications', enabled.toString());
  };

  const handleDistanceToggle = (distance: keyof typeof distances, enabled: boolean) => {
    setDistances(prev => ({ ...prev, [distance]: enabled }));
    const storageKey = distance === 'hundredMeters' ? 'notify100m' : 
                      distance === 'fiftyMeters' ? 'notify50m' : 'notify10m';
    localStorage.setItem(storageKey, enabled.toString());
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // Permissão concedida
        },
        (error) => {
          console.error('Erro ao solicitar localização:', error);
        }
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Notificações de Proximidade
        </CardTitle>
        <CardDescription>
          Receba alertas quando estiver perto de empresas parceiras
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status da localização */}
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-2">
            <MapPin className={`h-4 w-4 ${latitude && longitude ? 'text-green-600' : 'text-gray-400'}`} />
            <span className="text-sm">
              {loading ? 'Obtendo localização...' : 
               error ? 'Localização indisponível' :
               latitude && longitude ? 'Localização ativa' : 'Localização desabilitada'}
            </span>
          </div>
          {error && (
            <Button variant="outline" size="sm" onClick={requestLocationPermission}>
              Ativar
            </Button>
          )}
        </div>

        {/* Toggle principal */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="proximity-notifications">Ativar notificações</Label>
            <p className="text-sm text-muted-foreground">
              Receba alertas baseados na sua localização
            </p>
          </div>
          <Switch
            id="proximity-notifications"
            checked={notificationsEnabled}
            onCheckedChange={handleNotificationsToggle}
            disabled={!latitude || !longitude}
          />
        </div>

        {/* Configurações de distância */}
        {notificationsEnabled && (
          <div className="space-y-3 pl-4 border-l-2 border-muted">
            <h4 className="text-sm font-medium">Distâncias de notificação</h4>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="notify-100m" className="text-sm">
                100 metros - "Empresa próxima"
              </Label>
              <Switch
                id="notify-100m"
                checked={distances.hundredMeters}
                onCheckedChange={(checked) => handleDistanceToggle('hundredMeters', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notify-50m" className="text-sm">
                50 metros - "Quase chegando"
              </Label>
              <Switch
                id="notify-50m"
                checked={distances.fiftyMeters}
                onCheckedChange={(checked) => handleDistanceToggle('fiftyMeters', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notify-10m" className="text-sm">
                10 metros - "Você chegou"
              </Label>
              <Switch
                id="notify-10m"
                checked={distances.tenMeters}
                onCheckedChange={(checked) => handleDistanceToggle('tenMeters', checked)}
              />
            </div>
          </div>
        )}

        <div className="p-3 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 As notificações só funcionam quando o app está aberto e você permitiu acesso à localização.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
