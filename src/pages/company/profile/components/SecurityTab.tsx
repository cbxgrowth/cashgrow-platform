
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield, Eye, EyeOff, Save, Smartphone, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const SecurityTab: React.FC = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const securityEvents = [
    { id: 1, event: 'Login realizado', date: '2025-01-15 14:30', ip: '192.168.1.1', location: 'São Paulo, SP' },
    { id: 2, event: 'Senha alterada', date: '2025-01-10 09:15', ip: '192.168.1.1', location: 'São Paulo, SP' },
    { id: 3, event: 'Configuração de API alterada', date: '2025-01-08 16:45', ip: '192.168.1.1', location: 'São Paulo, SP' }
  ];

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('As senhas não coincidem!');
      return;
    }
    toast.success('Senha alterada com sucesso!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast.success(twoFactorEnabled ? 
      'Autenticação de dois fatores desabilitada!' : 
      'Autenticação de dois fatores habilitada!'
    );
  };

  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <span>Segurança</span>
        </CardTitle>
        <CardDescription>
          Configure a segurança da sua conta e monitore atividades
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Alterar Senha */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Lock className="h-5 w-5 text-accent" />
            Alterar Senha
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Senha Atual</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                  placeholder="Digite sua senha atual"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                    placeholder="Digite a nova senha"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    placeholder="Confirme a nova senha"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <Button onClick={handlePasswordChange} className="hover-scale">
              <Save className="h-4 w-4 mr-2" />
              Alterar Senha
            </Button>
          </div>
        </div>

        {/* Autenticação de Dois Fatores */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-accent" />
            Autenticação de Dois Fatores (2FA)
          </h3>
          
          <div className="flex items-center justify-between p-4 border rounded-lg bg-white dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Autenticação por Aplicativo</h4>
                <p className="text-sm text-muted-foreground">
                  Use um aplicativo autenticador para gerar códigos de segurança
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                className={twoFactorEnabled ? 
                  'bg-green-500/20 text-green-600' : 
                  'bg-orange-500/20 text-orange-600'
                }
              >
                {twoFactorEnabled ? 'Ativo' : 'Inativo'}
              </Badge>
              <Button 
                variant={twoFactorEnabled ? "destructive" : "default"} 
                size="sm"
                onClick={handleTwoFactorToggle}
              >
                {twoFactorEnabled ? 'Desabilitar' : 'Habilitar'}
              </Button>
            </div>
          </div>

          {!twoFactorEnabled && (
            <div className="flex items-start gap-2 p-3 border rounded-lg bg-orange-50 dark:bg-orange-950/20 border-orange-200">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-orange-800 dark:text-orange-400">
                  Recomendamos habilitar a autenticação de dois fatores
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-500">
                  Isso adiciona uma camada extra de segurança à sua conta
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Histórico de Segurança */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            Atividade Recente
          </h3>
          
          <div className="space-y-3">
            {securityEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-slate-800">
                <div>
                  <h4 className="font-medium">{event.event}</h4>
                  <p className="text-sm text-muted-foreground">
                    {event.date} • {event.ip} • {event.location}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Detalhes
                </Button>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full">
            Ver Histórico Completo
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale">
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecurityTab;
