
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { NotificationSettings as NotificationSettingsType } from '@/types/notifications';
import { toast } from 'sonner';
import { Bell } from 'lucide-react';

interface NotificationSettingsProps {
  initialSettings?: Partial<NotificationSettingsType>;
  onSave?: (settings: NotificationSettingsType) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ 
  initialSettings,
  onSave 
}) => {
  const [settings, setSettings] = useState<NotificationSettingsType>({
    enableEmailNotifications: initialSettings?.enableEmailNotifications ?? true,
    enablePushNotifications: initialSettings?.enablePushNotifications ?? false,
    notifyOnTransactions: initialSettings?.notifyOnTransactions ?? true,
    notifyOnPromotions: initialSettings?.notifyOnPromotions ?? true,
    notifyOnAccountChanges: initialSettings?.notifyOnAccountChanges ?? true,
    notifyOnSystemUpdates: initialSettings?.notifyOnSystemUpdates ?? true
  });

  const handleSaveSettings = () => {
    if (onSave) {
      onSave(settings);
    }
    toast.success('Preferências de notificação salvas com sucesso!');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <CardTitle>Preferências de Notificação</CardTitle>
        </div>
        <CardDescription>
          Configure como e quando você deseja receber notificações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Canais de Notificação</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações importantes por email
                </p>
              </div>
              <Switch 
                id="email-notifications" 
                checked={settings.enableEmailNotifications}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, enableEmailNotifications: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações em tempo real no navegador
                </p>
              </div>
              <Switch 
                id="push-notifications" 
                checked={settings.enablePushNotifications}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, enablePushNotifications: checked }))
                }
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Tipos de Notificação</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="transactions">Transações</Label>
                <p className="text-sm text-muted-foreground">
                  Notificações sobre transações de cashback
                </p>
              </div>
              <Switch 
                id="transactions" 
                checked={settings.notifyOnTransactions}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, notifyOnTransactions: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="promotions">Promoções</Label>
                <p className="text-sm text-muted-foreground">
                  Ofertas especiais e promoções de cashback
                </p>
              </div>
              <Switch 
                id="promotions" 
                checked={settings.notifyOnPromotions}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, notifyOnPromotions: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="account">Mudanças na Conta</Label>
                <p className="text-sm text-muted-foreground">
                  Notificações sobre alterações na sua conta
                </p>
              </div>
              <Switch 
                id="account" 
                checked={settings.notifyOnAccountChanges}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, notifyOnAccountChanges: checked }))
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="system">Atualizações do Sistema</Label>
                <p className="text-sm text-muted-foreground">
                  Novos recursos e melhorias na plataforma
                </p>
              </div>
              <Switch 
                id="system" 
                checked={settings.notifyOnSystemUpdates}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, notifyOnSystemUpdates: checked }))
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSaveSettings} className="hover-scale">Salvar Preferências</Button>
      </CardFooter>
    </Card>
  );
};

export default NotificationSettings;
