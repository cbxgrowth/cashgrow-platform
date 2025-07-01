
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Bell, Volume2, Smartphone, Clock, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ProximityNotificationSettings: React.FC = () => {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    enabled: true,
    soundEnabled: true,
    vibrationEnabled: true,
    distance: [50], // meters
    quietHours: {
      enabled: false,
      start: '22:00',
      end: '07:00'
    },
    categories: {
      restaurants: true,
      shopping: true,
      services: true,
      entertainment: false
    },
    frequency: 'moderate' // low, moderate, high
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    toast({
      title: "Configuração atualizada",
      description: "Suas preferências de notificação foram salvas."
    });
  };

  const handleCategoryChange = (category: string, enabled: boolean) => {
    setSettings(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: enabled
      }
    }));
  };

  const distanceLabels = {
    10: 'Muito próximo (10m)',
    25: 'Próximo (25m)',
    50: 'Moderado (50m)',
    100: 'Distante (100m)',
    200: 'Muito distante (200m)'
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Configurações de Notificação
        </CardTitle>
        <CardDescription>
          Personalize como e quando receber notificações de proximidade
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Notificações gerais */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notificações de proximidade</p>
              <p className="text-sm text-muted-foreground">Receber alertas quando próximo de empresas</p>
            </div>
            <Switch 
              checked={settings.enabled}
              onCheckedChange={(enabled) => handleSettingChange('enabled', enabled)}
            />
          </div>

          {settings.enabled && (
            <>
              {/* Configurações de som e vibração */}
              <div className="grid gap-4 pl-4 border-l-2 border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Som</span>
                  </div>
                  <Switch 
                    checked={settings.soundEnabled}
                    onCheckedChange={(enabled) => handleSettingChange('soundEnabled', enabled)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span className="text-sm font-medium">Vibração</span>
                  </div>
                  <Switch 
                    checked={settings.vibrationEnabled}
                    onCheckedChange={(enabled) => handleSettingChange('vibrationEnabled', enabled)}
                  />
                </div>
              </div>

              {/* Distância para notificação */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Distância para notificação</span>
                </div>
                <div className="px-3">
                  <Slider
                    value={settings.distance}
                    onValueChange={(distance) => handleSettingChange('distance', distance)}
                    max={200}
                    min={10}
                    step={15}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10m</span>
                    <span className="font-medium">
                      {settings.distance[0]}m
                    </span>
                    <span>200m</span>
                  </div>
                </div>
              </div>

              {/* Frequência */}
              <div className="space-y-3">
                <p className="font-medium">Frequência de notificações</p>
                <Select value={settings.frequency} onValueChange={(frequency) => handleSettingChange('frequency', frequency)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a frequência" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Baixa - Apenas ofertas especiais</SelectItem>
                    <SelectItem value="moderate">Moderada - Ofertas relevantes</SelectItem>
                    <SelectItem value="high">Alta - Todas as oportunidades</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Horário silencioso */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Horário silencioso</span>
                  </div>
                  <Switch 
                    checked={settings.quietHours.enabled}
                    onCheckedChange={(enabled) => handleSettingChange('quietHours', {
                      ...settings.quietHours,
                      enabled
                    })}
                  />
                </div>
                
                {settings.quietHours.enabled && (
                  <div className="grid grid-cols-2 gap-4 pl-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Início</p>
                      <Select value={settings.quietHours.start} onValueChange={(start) => 
                        handleSettingChange('quietHours', { ...settings.quietHours, start })
                      }>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => {
                            const hour = i.toString().padStart(2, '0');
                            return (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {hour}:00
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fim</p>
                      <Select value={settings.quietHours.end} onValueChange={(end) => 
                        handleSettingChange('quietHours', { ...settings.quietHours, end })
                      }>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => {
                            const hour = i.toString().padStart(2, '0');
                            return (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {hour}:00
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              {/* Categorias */}
              <div className="space-y-3">
                <p className="font-medium">Categorias de interesse</p>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Restaurantes & Alimentação</span>
                    <Switch 
                      checked={settings.categories.restaurants}
                      onCheckedChange={(enabled) => handleCategoryChange('restaurants', enabled)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Compras & Varejo</span>
                    <Switch 
                      checked={settings.categories.shopping}
                      onCheckedChange={(enabled) => handleCategoryChange('shopping', enabled)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Serviços</span>
                    <Switch 
                      checked={settings.categories.services}
                      onCheckedChange={(enabled) => handleCategoryChange('services', enabled)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Entretenimento</span>
                    <Switch 
                      checked={settings.categories.entertainment}
                      onCheckedChange={(enabled) => handleCategoryChange('entertainment', enabled)}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Status atual */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium mb-2">Status atual das notificações</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant={settings.enabled ? "default" : "secondary"}>
              {settings.enabled ? "Ativas" : "Inativas"}
            </Badge>
            {settings.enabled && (
              <>
                <Badge variant="outline">
                  Distância: {settings.distance[0]}m
                </Badge>
                <Badge variant="outline">
                  Frequência: {settings.frequency === 'low' ? 'Baixa' : settings.frequency === 'moderate' ? 'Moderada' : 'Alta'}
                </Badge>
                {settings.quietHours.enabled && (
                  <Badge variant="outline">
                    Silencioso: {settings.quietHours.start} - {settings.quietHours.end}
                  </Badge>
                )}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
