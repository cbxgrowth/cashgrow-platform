
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Zap, Bell, Target, Settings, Activity, TrendingUp } from 'lucide-react';
import { ProximityMetricsCard } from '@/components/proximity/ProximityMetricsCard';

const CompanyProximity: React.FC = () => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  const companyId = "company-1"; // ID da empresa atual

  const proximityStats = {
    nearbyUsers: {
      total: 156,
      active: 89,
      growth: "+12%"
    },
    notifications: {
      sent: 234,
      opened: 187,
      clicked: 67
    },
    campaigns: {
      active: 3,
      completed: 12,
      conversion: "8.5%"
    }
  };

  const nearbyUsers = [
    {
      id: 1,
      name: "Maria Silva",
      distance: "150m",
      lastSeen: "5 min atrás",
      visits: 12,
      spent: "R$ 890,00",
      status: "regular"
    },
    {
      id: 2,
      name: "João Santos", 
      distance: "300m",
      lastSeen: "15 min atrás",
      visits: 3,
      spent: "R$ 234,00",
      status: "new"
    },
    {
      id: 3,
      name: "Ana Costa",
      distance: "450m", 
      lastSeen: "1 hora atrás",
      visits: 25,
      spent: "R$ 1.250,00",
      status: "vip"
    },
    {
      id: 4,
      name: "Pedro Lima",
      distance: "600m",
      lastSeen: "2 horas atrás", 
      visits: 8,
      spent: "R$ 567,00",
      status: "regular"
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: "Desconto Proximidade",
      type: "Desconto",
      radius: "500m",
      discount: "15%",
      status: "Ativa",
      sent: 89,
      opened: 67,
      clicked: 23
    },
    {
      id: 2,
      name: "Cashback Especial",
      type: "Cashback",
      radius: "300m", 
      discount: "10%",
      status: "Ativa",
      sent: 45,
      opened: 38,
      clicked: 12
    },
    {
      id: 3,
      name: "Produto em Destaque",
      type: "Produto",
      radius: "1km",
      discount: "20%",
      status: "Pausada",
      sent: 156,
      opened: 123,
      clicked: 45
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'vip': return 'bg-purple-100 text-purple-800';
      case 'regular': return 'bg-blue-100 text-blue-800';  
      case 'new': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'vip': return 'VIP';
      case 'regular': return 'Regular';
      case 'new': return 'Novo';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marketing de Proximidade</h1>
          <p className="text-muted-foreground">
            Engaje clientes próximos à sua loja com campanhas personalizadas
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
          <Button>
            <Zap className="mr-2 h-4 w-4" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Métricas de Proximidade */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProximityMetricsCard companyId={companyId} />
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{proximityStats.nearbyUsers.active}</div>
            <p className="text-xs text-muted-foreground">
              de {proximityStats.nearbyUsers.total} usuários próximos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notificações</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{proximityStats.notifications.sent}</div>
            <p className="text-xs text-muted-foreground">
              {proximityStats.notifications.opened} abertas • {proximityStats.notifications.clicked} cliques
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversão</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{proximityStats.campaigns.conversion}</div>
            <p className="text-xs text-muted-foreground">
              {proximityStats.campaigns.active} campanhas ativas
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Usuários Próximos</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Usuários Próximos Agora
              </CardTitle>
              <CardDescription>
                Clientes detectados próximos à sua loja
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nearbyUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{user.name}</p>
                          <Badge className={getStatusColor(user.status)}>
                            {getStatusLabel(user.status)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {user.distance} • Última atividade: {user.lastSeen}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{user.spent}</p>
                      <p className="text-sm text-muted-foreground">{user.visits} visitas</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Bell className="h-3 w-3 mr-1" />
                        Notificar
                      </Button>
                      <Button size="sm">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Campanhas de Proximidade
              </CardTitle>
              <CardDescription>
                Gerencie suas campanhas de marketing por localização
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium">{campaign.name}</h3>
                        <Badge variant={campaign.status === 'Ativa' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">
                          {campaign.status === 'Ativa' ? 'Pausar' : 'Ativar'}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Tipo</p>
                        <p className="font-medium">{campaign.type}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Raio</p>
                        <p className="font-medium">{campaign.radius}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Desconto</p>
                        <p className="font-medium">{campaign.discount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Taxa de Clique</p>
                        <p className="font-medium">
                          {((campaign.clicked / campaign.sent) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{campaign.sent} enviadas</span>
                        <span>{campaign.opened} abertas</span>
                        <span>{campaign.clicked} cliques</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance por Horário
                </CardTitle>
                <CardDescription>
                  Melhores horários para campanhas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "08:00 - 10:00", engagement: 85, color: "bg-green-500" },
                    { time: "12:00 - 14:00", engagement: 92, color: "bg-green-600" },  
                    { time: "18:00 - 20:00", engagement: 78, color: "bg-yellow-500" },
                    { time: "20:00 - 22:00", engagement: 65, color: "bg-orange-500" }
                  ].map((slot, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{slot.time}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${slot.color}`}
                            style={{ width: `${slot.engagement}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{slot.engagement}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Campanha</CardTitle>
                <CardDescription>
                  Performance por tipo de oferta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Desconto Percentual", campaigns: 8, conversion: "12.5%", revenue: "R$ 5.670" },
                    { type: "Cashback", campaigns: 5, conversion: "8.9%", revenue: "R$ 3.240" },
                    { type: "Produto Gratuito", campaigns: 3, conversion: "15.2%", revenue: "R$ 2.890" },
                    { type: "Frete Grátis", campaigns: 2, conversion: "6.7%", revenue: "R$ 1.560" }
                  ].map((type, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{type.type}</p>
                        <p className="text-sm text-muted-foreground">{type.campaigns} campanhas</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{type.conversion}</p>
                        <p className="text-sm text-muted-foreground">{type.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configurações de Proximidade
              </CardTitle>
              <CardDescription>
                Configure as opções de marketing por localização
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Detecção de Proximidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Ativar detecção automática de usuários próximos
                  </p>
                </div>
                <Button
                  variant={isLocationEnabled ? "default" : "outline"}
                  onClick={() => setIsLocationEnabled(!isLocationEnabled)}
                >
                  {isLocationEnabled ? "Ativado" : "Desativado"}
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Raio Padrão (metros)</label>
                  <select className="w-full p-2 border rounded">
                    <option>100m</option>
                    <option>300m</option>
                    <option selected>500m</option>
                    <option>1km</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Frequência de Notificação</label>
                  <select className="w-full p-2 border rounded">
                    <option>Imediata</option>
                    <option selected>A cada 15 min</option>
                    <option>A cada 30 min</option>
                    <option>A cada hora</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Horário de Funcionamento</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="time" className="p-2 border rounded" defaultValue="08:00" />
                  <input type="time" className="p-2 border rounded" defaultValue="18:00" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Campanhas só serão enviadas neste horário
                </p>
              </div>

              <Button className="w-full">
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyProximity;
