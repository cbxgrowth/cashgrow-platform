
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield, Users } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Segurança da Conta</CardTitle>
        <CardDescription>
          Gerencie as configurações de segurança da sua conta e da equipe
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Lock className="h-5 w-5" /> Alterar Senha
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="hover-scale">Atualizar Senha</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Users className="h-5 w-5" /> Gerenciamento de Usuários
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Convidar Usuários</p>
                <p className="text-sm text-muted-foreground">
                  Adicione novos usuários com acesso à conta da empresa
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Convidar</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Gerenciar Permissões</p>
                <p className="text-sm text-muted-foreground">
                  Configure os níveis de acesso para cada usuário
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Configurar</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Shield className="h-5 w-5" /> Configurações de Segurança
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Verificação em Duas Etapas</p>
                <p className="text-sm text-muted-foreground">
                  Ative a autenticação de dois fatores para maior segurança
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Configurar</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Registro de Atividades</p>
                <p className="text-sm text-muted-foreground">
                  Visualize o histórico de ações realizadas na conta
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Visualizar</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTab;
