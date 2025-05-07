
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Segurança da Conta</CardTitle>
        <CardDescription>
          Gerencie suas credenciais e configurações de segurança
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
            <Shield className="h-5 w-5" /> Configurações de Segurança
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Verificação em Duas Etapas</p>
                <p className="text-sm text-muted-foreground">
                  Adicione uma camada extra de segurança à sua conta
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Configurar</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Histórico de Acessos</p>
                <p className="text-sm text-muted-foreground">
                  Veja dispositivos e localizações de acesso recentes
                </p>
              </div>
              <div>
                <Button variant="outline" className="hover-scale">Visualizar</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-destructive">Excluir Conta</p>
                <p className="text-sm text-muted-foreground">
                  Exclua permanentemente sua conta e dados
                </p>
              </div>
              <div>
                <Button variant="destructive" className="hover-scale">Excluir</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTab;
