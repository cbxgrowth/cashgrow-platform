import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, Lock, CreditCard, Shield, Bell } from "lucide-react";
import NotificationSettings from '@/components/notifications/NotificationSettings';

const ClientProfile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="payment">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Atualize seus dados pessoais aqui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <div className="relative">
                      <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="name" placeholder="Seu nome completo" defaultValue="João Silva" className="pl-8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <div className="relative">
                      <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="seu@email.com" defaultValue="joao.silva@email.com" className="pl-8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <div className="relative">
                      <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 98765-4321" className="pl-8" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" defaultValue="123.456.789-00" disabled />
                    <p className="text-xs text-muted-foreground">O CPF não pode ser alterado</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Data de Nascimento</Label>
                    <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" placeholder="Seu endereço completo" defaultValue="Rua das Flores, 123 - São Paulo/SP" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover-scale">Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Métodos de Pagamento e Resgate</CardTitle>
              <CardDescription>
                Gerencie suas opções de pagamento e resgate de cashback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Mastercard - Expira em 05/27</p>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Remover</Button>
                  </div>
                </div>
                
                <Card className="border-dashed">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                      <CreditCard className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-semibold text-lg">Adicionar Novo Método</h3>
                        <p className="text-muted-foreground">
                          Adicione um cartão para resgate automático ou dados PIX
                        </p>
                      </div>
                      <Button className="hover-scale">Adicionar Método</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Resgate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="min-amount">Valor Mínimo para Resgate Automático</Label>
                      <Input id="min-amount" type="number" placeholder="50" defaultValue="100" />
                      <p className="text-xs text-muted-foreground">
                        Quando seu saldo alcançar este valor, será resgatado automaticamente
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Método de Resgate Preferencial</Label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        defaultValue="pix"
                      >
                        <option value="pix">PIX</option>
                        <option value="bank">Transferência Bancária</option>
                        <option value="credit">Crédito em Cartão</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover-scale">Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings 
            initialSettings={{
              enableEmailNotifications: true,
              enablePushNotifications: false,
              notifyOnTransactions: true,
              notifyOnPromotions: true,
              notifyOnAccountChanges: true,
              notifyOnSystemUpdates: true
            }}
            onSave={(settings) => console.log('Settings saved:', settings)}
          />
        </TabsContent>
        
        <TabsContent value="security">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientProfile;
