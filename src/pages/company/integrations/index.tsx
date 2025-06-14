
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Puzzle, Zap, ShoppingCart, Database, Globe, Settings, CheckCircle, AlertCircle } from "lucide-react";

const CompanyIntegrations: React.FC = () => {
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'Shopify', type: 'E-commerce', status: 'Conectado', active: true, icon: ShoppingCart },
    { id: 2, name: 'WooCommerce', type: 'E-commerce', status: 'Conectado', active: true, icon: Globe },
    { id: 3, name: 'Magento', type: 'E-commerce', status: 'Disponível', active: false, icon: Database },
    { id: 4, name: 'API Customizada', type: 'API', status: 'Configurando', active: false, icon: Zap },
  ]);

  const toggleIntegration = (id: number) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id ? { ...integration, active: !integration.active } : integration
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Puzzle className="h-8 w-8 text-primary" />
            Integrações
          </h1>
          <p className="text-muted-foreground">Conecte sua loja com nosso sistema de cashback</p>
        </div>
        <Button className="bg-gradient-primary">
          <Settings className="mr-2 h-4 w-4" />
          Nova Integração
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Integrações Ativas</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-green-600">Funcionando perfeitamente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sincronizações Hoje</CardTitle>
            <Zap className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-blue-600">Última: há 2 min</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-green-600">Excelente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Alertas</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-green-600">Tudo funcionando</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suas Integrações</CardTitle>
          <CardDescription>Gerencie as conexões com suas plataformas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration) => {
              const IconComponent = integration.icon;
              return (
                <div key={integration.id} className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={
                      integration.status === 'Conectado' ? 'default' : 
                      integration.status === 'Configurando' ? 'secondary' : 'outline'
                    }>
                      {integration.status}
                    </Badge>
                    <Switch
                      checked={integration.active}
                      onCheckedChange={() => toggleIntegration(integration.id)}
                      disabled={integration.status !== 'Conectado'}
                    />
                    <Button variant="outline" size="sm">
                      {integration.status === 'Conectado' ? 'Configurar' : 'Conectar'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Sincronização</CardTitle>
          <CardDescription>Últimas sincronizações realizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: '14:30', platform: 'Shopify', type: 'Produtos', status: 'Sucesso', items: 145 },
              { time: '14:28', platform: 'WooCommerce', type: 'Pedidos', status: 'Sucesso', items: 23 },
              { time: '14:25', platform: 'Shopify', type: 'Clientes', status: 'Sucesso', items: 67 },
              { time: '14:20', platform: 'WooCommerce', type: 'Produtos', status: 'Erro', items: 0 },
            ].map((sync, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${sync.status === 'Sucesso' ? 'bg-green-500' : 'bg-red-500'}`} />
                  <div>
                    <span className="font-medium">{sync.platform}</span>
                    <span className="text-muted-foreground mx-2">•</span>
                    <span className="text-sm">{sync.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">{sync.time}</span>
                  <span>{sync.items} itens</span>
                  <Badge variant={sync.status === 'Sucesso' ? 'default' : 'destructive'}>
                    {sync.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integrações Disponíveis</CardTitle>
          <CardDescription>Conecte-se com mais plataformas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: 'Magento', description: 'Plataforma de e-commerce robusta', icon: Database },
              { name: 'PrestaShop', description: 'Solução completa para lojas online', icon: ShoppingCart },
              { name: 'API REST', description: 'Integração personalizada via API', icon: Zap },
            ].map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div key={index} className="border rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                  <Button variant="outline" className="w-full">Conectar</Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyIntegrations;
