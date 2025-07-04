
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Settings, Bell, Shield, Zap, Database, Mail, Globe, Users } from 'lucide-react';
import { toast } from 'sonner';

const CompanySettings: React.FC = () => {
  const [settings, setSettings] = useState({
    // Notificações
    emailNotifications: true,
    pushNotifications: true,
    transactionAlerts: true,
    lowStockAlerts: true,
    
    // Segurança
    twoFactorAuth: false,
    loginAlerts: true,
    apiAccess: true,
    
    // Integração
    autoSync: true,
    realTimeUpdates: true,
    apiRateLimit: '1000',
    webhookUrl: '',
    
    // Empresa
    companyName: 'Minha Empresa',
    companyEmail: 'contato@empresa.com',
    website: 'https://empresa.com',
    supportEmail: 'suporte@empresa.com',
    
    // Cashback
    defaultCashback: '2.0',
    maxCashback: '15.0',
    autoApprove: true,
    instantPayment: false
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    toast.success('Configuração atualizada!');
  };

  const saveAllSettings = () => {
    // Aqui você salvaria as configurações no backend
    toast.success('Todas as configurações foram salvas!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">Gerencie as configurações da sua empresa</p>
        </div>
        <Button onClick={saveAllSettings}>
          Salvar Todas as Configurações
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Integrações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Informações da Empresa
              </CardTitle>
              <CardDescription>Configure as informações básicas da sua empresa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nome da Empresa</Label>
                  <Input
                    id="companyName"
                    value={settings.companyName}
                    onChange={(e) => handleSettingChange('companyName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyEmail">Email da Empresa</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={settings.companyEmail}
                    onChange={(e) => handleSettingChange('companyEmail', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={settings.website}
                    onChange={(e) => handleSettingChange('website', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Email de Suporte</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => handleSettingChange('supportEmail', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações de Cashback</CardTitle>
              <CardDescription>Configure as regras padrão de cashback</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultCashback">Cashback Padrão (%)</Label>
                  <Input
                    id="defaultCashback"
                    type="number"
                    step="0.1"
                    value={settings.defaultCashback}
                    onChange={(e) => handleSettingChange('defaultCashback', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxCashback">Cashback Máximo (%)</Label>
                  <Input
                    id="maxCashback"
                    type="number"
                    step="0.1"
                    value={settings.maxCashback}
                    onChange={(e) => handleSettingChange('maxCashback', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Aprovação Automática</Label>
                    <p className="text-sm text-muted-foreground">Aprovar cashback automaticamente</p>
                  </div>
                  <Switch
                    checked={settings.autoApprove}
                    onCheckedChange={(checked) => handleSettingChange('autoApprove', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Pagamento Instantâneo</Label>
                    <p className="text-sm text-muted-foreground">Processar pagamentos instantaneamente</p>
                  </div>
                  <Switch
                    checked={settings.instantPayment}
                    onCheckedChange={(checked) => handleSettingChange('instantPayment', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Preferências de Notificação
              </CardTitle>
              <CardDescription>Configure como você deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email</Label>
                    <p className="text-sm text-muted-foreground">Receber notificações por email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push</Label>
                    <p className="text-sm text-muted-foreground">Notificações push no navegador</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de Transação</Label>
                    <p className="text-sm text-muted-foreground">Notificar sobre novas transações</p>
                  </div>
                  <Switch
                    checked={settings.transactionAlerts}
                    onCheckedChange={(checked) => handleSettingChange('transactionAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de Estoque</Label>
                    <p className="text-sm text-muted-foreground">Notificar quando estoque estiver baixo</p>
                  </div>
                  <Switch
                    checked={settings.lowStockAlerts}
                    onCheckedChange={(checked) => handleSettingChange('lowStockAlerts', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Configurações de Segurança
              </CardTitle>
              <CardDescription>Mantenha sua conta segura</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-muted-foreground">Adicionar camada extra de segurança</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={settings.twoFactorAuth ? 'default' : 'secondary'}>
                      {settings.twoFactorAuth ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <Switch
                      checked={settings.twoFactorAuth}
                      onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Alertas de Login</Label>
                    <p className="text-sm text-muted-foreground">Notificar sobre novos logins</p>
                  </div>
                  <Switch
                    checked={settings.loginAlerts}
                    onCheckedChange={(checked) => handleSettingChange('loginAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Acesso à API</Label>
                    <p className="text-sm text-muted-foreground">Permitir acesso via API</p>
                  </div>
                  <Switch
                    checked={settings.apiAccess}
                    onCheckedChange={(checked) => handleSettingChange('apiAccess', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Configurações de Integração
              </CardTitle>
              <CardDescription>Configure integrações com sistemas externos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Sincronização Automática</Label>
                    <p className="text-sm text-muted-foreground">Sincronizar dados automaticamente</p>
                  </div>
                  <Switch
                    checked={settings.autoSync}
                    onCheckedChange={(checked) => handleSettingChange('autoSync', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Atualizações em Tempo Real</Label>
                    <p className="text-sm text-muted-foreground">Receber atualizações instantâneas</p>
                  </div>
                  <Switch
                    checked={settings.realTimeUpdates}
                    onCheckedChange={(checked) => handleSettingChange('realTimeUpdates', checked)}
                  />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiRateLimit">Limite de Taxa da API (por minuto)</Label>
                  <Input
                    id="apiRateLimit"
                    type="number"
                    value={settings.apiRateLimit}
                    onChange={(e) => handleSettingChange('apiRateLimit', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">URL do Webhook</Label>
                  <Input
                    id="webhookUrl"
                    value={settings.webhookUrl}
                    onChange={(e) => handleSettingChange('webhookUrl', e.target.value)}
                    placeholder="https://sua-api.com/webhook"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanySettings;
