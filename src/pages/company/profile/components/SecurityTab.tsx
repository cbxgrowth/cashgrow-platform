
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield, Users, Key, UserPlus, Settings, List, Save } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <span>Segurança da Conta</span>
        </CardTitle>
        <CardDescription>
          Gerencie as configurações de segurança da sua conta e da equipe
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Lock className="h-5 w-5 text-accent" /> Alterar Senha
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-sm font-medium">Senha Atual</Label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="current-password" 
                  type="password"
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-sm font-medium">Nova Senha</Label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="new-password" 
                  type="password"
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium">Confirmar Nova Senha</Label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="confirm-password" 
                  type="password"
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            <Button variant="glow" className="hover-scale">
              <Save className="h-4 w-4 mr-1" /> Atualizar Senha
            </Button>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" /> Gerenciamento de Usuários
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/40 transition-all duration-200">
              <div>
                <p className="font-medium flex items-center gap-1">
                  <UserPlus className="h-4 w-4 text-primary" /> Convidar Usuários
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Adicione novos usuários com acesso à conta da empresa
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">
                  <UserPlus className="h-4 w-4 mr-1" /> Convidar
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/40 transition-all duration-200">
              <div>
                <p className="font-medium flex items-center gap-1">
                  <Settings className="h-4 w-4 text-primary" /> Gerenciar Permissões
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure os níveis de acesso para cada usuário
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">
                  <Settings className="h-4 w-4 mr-1" /> Configurar
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" /> Configurações de Segurança
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/40 transition-all duration-200">
              <div>
                <p className="font-medium flex items-center gap-1">
                  <Key className="h-4 w-4 text-primary" /> Verificação em Duas Etapas
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ative a autenticação de dois fatores para maior segurança
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">
                  <Settings className="h-4 w-4 mr-1" /> Configurar
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/40 transition-all duration-200">
              <div>
                <p className="font-medium flex items-center gap-1">
                  <List className="h-4 w-4 text-primary" /> Registro de Atividades
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Visualize o histórico de ações realizadas na conta
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">
                  <List className="h-4 w-4 mr-1" /> Visualizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTab;
