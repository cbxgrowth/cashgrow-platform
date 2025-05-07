
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Mail, Phone, Lock, CreditCard, Shield, Bell, Image, MapPin, Globe, Users } from "lucide-react";
import NotificationSettings from '@/components/notifications/NotificationSettings';
import { Textarea } from '@/components/ui/textarea';

const CompanyProfile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Empresa</h1>
      </div>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="business">Dados da Empresa</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="payment">Métodos de Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="business">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Atualize os dados da sua empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nome da Empresa</Label>
                    <div className="relative">
                      <Building2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="company-name" placeholder="Nome da empresa" defaultValue="Tech Store" className="pl-8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail de Contato</Label>
                    <div className="relative">
                      <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="contato@empresa.com" defaultValue="contato@techstore.com" className="pl-8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone de Contato</Label>
                    <div className="relative">
                      <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 3456-7890" className="pl-8" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" defaultValue="12.345.678/0001-90" disabled />
                    <p className="text-xs text-muted-foreground">O CNPJ não pode ser alterado</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="website" placeholder="https://www.empresa.com" defaultValue="https://www.techstore.com" className="pl-8" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <div className="relative">
                      <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="address" placeholder="Endereço completo" defaultValue="Av. Paulista, 1000 - São Paulo/SP" className="pl-8" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição da Empresa</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva sua empresa em poucas palavras" 
                  defaultValue="A Tech Store é uma loja especializada em produtos de tecnologia, oferecendo os melhores produtos com cashback exclusivo para nossos clientes."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sector">Setor de Atuação</Label>
                <select 
                  id="sector"
                  className="w-full p-2 border rounded-md"
                  defaultValue="tecnologia"
                >
                  <option value="tecnologia">Tecnologia</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="moda">Moda e Vestuário</option>
                  <option value="saude">Saúde e Bem-estar</option>
                  <option value="servicos">Serviços</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover-scale">Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="branding">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Personalização da Marca</CardTitle>
              <CardDescription>
                Configure a identidade visual da sua marca no programa de cashback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Logo da Empresa</Label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-md bg-muted flex items-center justify-center">
                    <Image className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <Button size="sm" className="mb-2">Carregar Logo</Button>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: PNG, JPG. Tamanho máximo: 2MB
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Cores da Marca</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Cor Principal</Label>
                    <div className="flex gap-2">
                      <Input id="primary-color" type="color" defaultValue="#8B5CF6" className="w-12 h-10 p-1" />
                      <Input id="primary-color-hex" defaultValue="#8B5CF6" className="flex-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Cor Secundária</Label>
                    <div className="flex gap-2">
                      <Input id="secondary-color" type="color" defaultValue="#D946EF" className="w-12 h-10 p-1" />
                      <Input id="secondary-color-hex" defaultValue="#D946EF" className="flex-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Prévia do Cartão de Cashback</Label>
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white shadow-lg">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold">Tech Store Cashback</h3>
                    <div className="text-sm font-medium">GOLD</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm opacity-75">Saldo Disponível</div>
                    <div className="text-2xl font-bold">R$ 125,50</div>
                  </div>
                  <div className="text-xs opacity-75">Cliente desde Jan/2023</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover-scale">Salvar Personalização</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Configurações de Pagamento</CardTitle>
              <CardDescription>
                Configure os métodos de pagamento e resgate de cashback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Métodos de Pagamento Aceitos</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="credit-card" className="w-4 h-4" defaultChecked />
                    <Label htmlFor="credit-card">Cartão de Crédito</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="debit-card" className="w-4 h-4" defaultChecked />
                    <Label htmlFor="debit-card">Cartão de Débito</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="pix" className="w-4 h-4" defaultChecked />
                    <Label htmlFor="pix">PIX</Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="boleto" className="w-4 h-4" />
                    <Label htmlFor="boleto">Boleto Bancário</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Configuraçãos de Cashback</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-cashback">Porcentagem Padrão de Cashback</Label>
                    <div className="flex items-center gap-2">
                      <Input id="default-cashback" type="number" min="0" max="100" step="0.5" defaultValue="5" className="max-w-[100px]" />
                      <span>%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Esta é a porcentagem padrão de cashback que será aplicada às compras
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="min-amount">Valor Mínimo para Resgate</Label>
                    <div className="flex items-center gap-2">
                      <span>R$</span>
                      <Input id="min-amount" type="number" min="0" step="5" defaultValue="20" className="max-w-[100px]" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Este é o valor mínimo que um cliente precisa acumular para solicitar um resgate
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expiration-days">Prazo de Expiração do Cashback (dias)</Label>
                    <Input id="expiration-days" type="number" min="0" step="1" defaultValue="90" className="max-w-[100px]" />
                    <p className="text-xs text-muted-foreground">
                      Número de dias após os quais o cashback não resgatado expira (0 = sem expiração)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dados Bancários para Repasses</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bank-name">Banco</Label>
                    <Input id="bank-name" placeholder="Nome do banco" defaultValue="Banco Brasil" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agency">Agência</Label>
                      <Input id="agency" placeholder="Número da agência" defaultValue="1234" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="account">Conta</Label>
                      <Input id="account" placeholder="Número da conta" defaultValue="12345-6" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="hover-scale">Salvar Configurações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationSettings 
            initialSettings={{
              enableEmailNotifications: true,
              enablePushNotifications: true,
              notifyOnTransactions: true,
              notifyOnPromotions: false,
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyProfile;
