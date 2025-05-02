import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Building, Globe, MapPin, Upload, Users, Bell, Shield, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CompanySettings: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <Button variant="outline" className="hover-scale">
          Visualizar Perfil Público
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="branding">Personalização</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Atualize as informações e detalhes do seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary">MV</div>
                    </div>
                    <Button variant="outline" size="sm" className="absolute bottom-0 right-0 rounded-full">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Carregue uma imagem JPG, GIF ou PNG. Tamanho máximo de 1MB.
                  </p>
                </div>
                
                <div className="md:w-2/3 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nome da Empresa</Label>
                    <div className="relative">
                      <Building className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="company-name" placeholder="Nome da sua empresa" defaultValue="Mercado Verde" className="pl-8" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-email">E-mail</Label>
                      <div className="relative">
                        <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="company-email" type="email" placeholder="contato@empresa.com" defaultValue="contato@mercadoverde.com" className="pl-8" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company-phone">Telefone</Label>
                      <div className="relative">
                        <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="company-phone" placeholder="(00) 0000-0000" defaultValue="(11) 3456-7890" className="pl-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company-website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="company-website" placeholder="https://www.seusite.com" defaultValue="https://www.mercadoverde.com" className="pl-8" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-cnpj">CNPJ</Label>
                      <Input id="company-cnpj" placeholder="00.000.000/0001-00" defaultValue="12.345.678/0001-90" disabled />
                      <p className="text-xs text-muted-foreground">O CNPJ não pode ser alterado</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company-segment">Segmento</Label>
                      <select 
                        id="company-segment"
                        defaultValue="retail"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="retail">Varejo</option>
                        <option value="food">Alimentação</option>
                        <option value="services">Serviços</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-address">Endereço Completo</Label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="company-address" 
                    placeholder="Endereço da sua empresa" 
                    defaultValue="Av. Paulista, 1000 - Bela Vista, São Paulo/SP, 01310-000" 
                    className="pl-8" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-description">Descrição da Empresa</Label>
                <textarea 
                  id="company-description" 
                  rows={4} 
                  defaultValue="Mercado Verde é uma rede de supermercados focada em produtos naturais, orgânicos e sustentáveis, oferecendo uma experiência de compra consciente para nossos clientes."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
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
                Ajuste as cores e elementos visuais do seu programa de cashback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-md border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <Button variant="outline" size="sm" className="absolute bottom-0 right-0 rounded-full">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Carregue o logotipo da sua empresa. Recomendamos 512x512px, PNG ou SVG.
                  </p>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Palette className="h-5 w-5" /> Cores da Marca
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-color">Cor Primária</Label>
                        <div className="flex gap-3 items-center">
                          <Input id="primary-color" type="color" defaultValue="#8B5CF6" className="w-12 h-8 p-1" />
                          <Input id="primary-color-hex" defaultValue="#8B5CF6" className="flex-1" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="secondary-color">Cor Secundária</Label>
                        <div className="flex gap-3 items-center">
                          <Input id="secondary-color" type="color" defaultValue="#22c55e" className="w-12 h-8 p-1" />
                          <Input id="secondary-color-hex" defaultValue="#22c55e" className="flex-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-2">Pré-visualização</h3>
                    
                    <div className="bg-gradient-primary rounded-lg p-6 text-white shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
                          MV
                        </div>
                        <div className="font-bold">Mercado Verde</div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Seu Saldo de Cashback</p>
                        <p className="text-xl font-bold">R$ 125,00</p>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/4 rounded-full" />
                        </div>
                        <p className="text-xs">Gaste mais R$ 150,00 para atingir o próximo nível</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Mensagem de Cashback</h3>
                <div className="space-y-2">
                  <Label htmlFor="cashback-message">Texto personalizado de cashback</Label>
                  <Input 
                    id="cashback-message" 
                    placeholder="Mensagem exibida ao cliente"
                    defaultValue="Obrigado por comprar no Mercado Verde! Você ganhou {valor_cashback} em cashback." 
                  />
                  <p className="text-xs text-muted-foreground">
                    Use {'{valor_cashback}'} para inserir o valor do cashback e {'{porcentagem_cashback}'} para inserir a porcentagem.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
              <Button variant="outline" className="hover-scale w-full sm:w-auto">Restaurar Padrões</Button>
              <Button className="hover-scale w-full sm:w-auto">Salvar Personalização</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Gerenciamento de Equipe</CardTitle>
              <CardDescription>
                Adicione e gerencie membros da equipe com diferentes níveis de acesso
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="hover-scale">
                <Users className="mr-2 h-4 w-4" /> Adicionar Novo Membro
              </Button>
              
              <div className="rounded-md border">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nome</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">E-mail</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Função</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle">Ana Maria</td>
                      <td className="p-4 align-middle">ana.maria@mercadoverde.com</td>
                      <td className="p-4 align-middle">Administrador</td>
                      <td className="p-4 align-middle">
                        <Badge variant="default" className="bg-green-500/20 text-green-600">Ativo</Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/80">Remover</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle">Carlos Roberto</td>
                      <td className="p-4 align-middle">carlos.roberto@mercadoverde.com</td>
                      <td className="p-4 align-middle">Gerente</td>
                      <td className="p-4 align-middle">
                        <Badge variant="default" className="bg-green-500/20 text-green-600">Ativo</Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/80">Remover</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle">Fernanda Lima</td>
                      <td className="p-4 align-middle">fernanda.lima@mercadoverde.com</td>
                      <td className="p-4 align-middle">Operador</td>
                      <td className="p-4 align-middle">
                        <Badge variant="default" className="bg-yellow-500/20 text-yellow-600">Pendente</Badge>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/80">Remover</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Funções e Permissões</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Administrador</h4>
                      <Button variant="outline" size="sm">Editar</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Acesso completo a todas as funcionalidades e configurações.</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Gerente</h4>
                      <Button variant="outline" size="sm">Editar</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Pode gerenciar clientes, transações e visualizar relatórios.</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Operador</h4>
                      <Button variant="outline" size="sm">Editar</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Pode registrar transações e visualizar clientes.</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="hover-scale">
                Criar Nova Função
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>
                Gerencie como e quando as notificações são enviadas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Bell className="h-5 w-5" /> Notificações para Clientes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Notificação de Cashback</p>
                      <p className="text-sm text-muted-foreground">Enviar notificação quando o cliente receber cashback</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-cashback" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-cashback" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="sms-cashback" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="sms-cashback" className="text-sm">SMS</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Saldo Disponível</p>
                      <p className="text-sm text-muted-foreground">Notificar quando o saldo atingir o valor mínimo para resgate</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-balance" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-balance" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="sms-balance" 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="sms-balance" className="text-sm">SMS</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Promoções e Ofertas</p>
                      <p className="text-sm text-muted-foreground">Enviar notificações sobre ofertas especiais de cashback</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-promo" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-promo" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="sms-promo" 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="sms-promo" className="text-sm">SMS</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2">Notificações para Administradores</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Novos Clientes</p>
                      <p className="text-sm text-muted-foreground">Notificar quando novos clientes se cadastrarem</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-new-client" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-new-client" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="system-new-client" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="system-new-client" className="text-sm">Sistema</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Resgates de Cashback</p>
                      <p className="text-sm text-muted-foreground">Notificar quando um cliente solicitar resgate</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-redemption" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-redemption" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="system-redemption" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="system-redemption" className="text-sm">Sistema</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-medium">Relatórios Semanais</p>
                      <p className="text-sm text-muted-foreground">Enviar resumo semanal de atividades e cashback</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="email-report" 
                          checked 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="email-report" className="text-sm">Email</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input 
                          type="checkbox" 
                          id="system-report" 
                          className="h-4 w-4 rounded-sm"
                        />
                        <Label htmlFor="system-report" className="text-sm">Sistema</Label>
                      </div>
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
        
        <TabsContent value="security">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Gerencie configurações de segurança e acesso da conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Alterar Senha
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
                <h3 className="text-lg font-medium mb-2">Segurança da Conta</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Verificação em Duas Etapas</p>
                      <p className="text-sm text-muted-foreground">
                        Requer código de verificação adicional ao fazer login
                      </p>
                    </div>
                    <Button variant="outline" className="hover-scale">Ativar</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Sessões Ativas</p>
                      <p className="text-sm text-muted-foreground">
                        Gerencie dispositivos conectados à sua conta
                      </p>
                    </div>
                    <Button variant="outline" className="hover-scale">Gerenciar</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Registro de Atividades</p>
                      <p className="text-sm text-muted-foreground">
                        Visualize o histórico de login e atividades da conta
                      </p>
                    </div>
                    <Button variant="outline" className="hover-scale">Visualizar</Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                <h3 className="text-lg font-medium text-destructive mb-2">Zona de Perigo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Essas ações são irreversíveis e podem afetar o funcionamento do seu programa de cashback.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Desativar temporariamente o programa de cashback</p>
                    <Button variant="outline" className="text-amber-600 border-amber-600">Desativar</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Excluir permanentemente sua conta e todos os dados</p>
                    <Button variant="destructive">Excluir Conta</Button>
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

export default CompanySettings;
