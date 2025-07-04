
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Shield, Zap, Crown, Award, TrendingUp, Globe, Settings, FileText } from 'lucide-react';

const CompanyCorporate: React.FC = () => {
  const corporateFeatures = [
    {
      icon: Building2,
      title: "Multi-Unidades",
      description: "Gerencie múltiplas filiais e unidades de negócio",
      status: "Disponível",
      tier: "Enterprise"
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Controle de acesso e permissões por equipe",
      status: "Disponível", 
      tier: "Professional"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Autenticação multi-fator e auditoria completa",
      status: "Disponível",
      tier: "Enterprise"
    },
    {
      icon: Zap,
      title: "API Dedicada",
      description: "Integração avançada com sistemas internos",
      status: "Disponível",
      tier: "Enterprise"
    },
    {
      icon: Crown,
      title: "Suporte Premium",
      description: "Suporte 24/7 com gerente de conta dedicado",
      status: "Disponível",
      tier: "Enterprise"
    },
    {
      icon: Globe,
      title: "Multi-Regional",
      description: "Operação em múltiplas regiões e moedas",
      status: "Em Breve",
      tier: "Enterprise"
    }
  ];

  const plans = [
    {
      name: "Professional",
      price: "R$ 499",
      period: "/mês",
      description: "Para médias empresas",
      features: [
        "Até 5 unidades",
        "Até 50 usuários",
        "API básica",
        "Suporte por email",
        "Relatórios avançados",
        "Integrações básicas"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "R$ 999",
      period: "/mês",
      description: "Para grandes corporações",
      features: [
        "Unidades ilimitadas",
        "Usuários ilimitados", 
        "API completa",
        "Suporte 24/7",
        "Relatórios personalizados",
        "Integrações avançadas",
        "Gerente de conta",
        "Treinamento dedicado"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Sob consulta",
      period: "",
      description: "Soluções personalizadas",
      features: [
        "Desenvolvimento customizado",
        "Implementação dedicada",
        "SLA personalizado",
        "Suporte on-site",
        "Consultoria estratégica",
        "Integração complexa"
      ],
      popular: false
    }
  ];

  const statistics = [
    { label: "Empresas Atendidas", value: "500+", icon: Building2 },
    { label: "Usuários Corporativos", value: "25.000+", icon: Users },
    { label: "Transações/Mês", value: "1M+", icon: TrendingUp },
    { label: "Uptime", value: "99.9%", icon: Shield }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Soluções Corporativas</h1>
          <p className="text-muted-foreground">
            Recursos empresariais para escalar seu negócio
          </p>
        </div>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
          Falar com Especialista
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <stat.icon className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="features" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Recursos</TabsTrigger>
          <TabsTrigger value="plans">Planos</TabsTrigger>
          <TabsTrigger value="integration">Integração</TabsTrigger>
          <TabsTrigger value="support">Suporte</TabsTrigger>
        </TabsList>

        <TabsContent value="features" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corporateFeatures.map((feature, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <div className="text-right">
                      <Badge variant={feature.status === 'Disponível' ? 'default' : 'secondary'}>
                        {feature.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{feature.tier}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled={feature.status !== 'Disponível'}
                  >
                    {feature.status === 'Disponível' ? 'Saiba Mais' : 'Em Breve'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Custom' ? 'Solicitar Orçamento' : 'Contratar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Integrações Disponíveis
                </CardTitle>
                <CardDescription>
                  Conecte-se aos seus sistemas existentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    { name: "SAP", type: "ERP", status: "Ativo" },
                    { name: "Salesforce", type: "CRM", status: "Ativo" },
                    { name: "Microsoft Dynamics", type: "ERP", status: "Ativo" },
                    { name: "HubSpot", type: "Marketing", status: "Ativo" },
                    { name: "Slack", type: "Comunicação", status: "Ativo" },
                    { name: "Tableau", type: "BI", status: "Beta" }
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">{integration.type}</p>
                      </div>
                      <Badge variant={integration.status === 'Ativo' ? 'default' : 'secondary'}>
                        {integration.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  API & Webhooks
                </CardTitle>
                <CardDescription>
                  Acesso programático aos dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">REST API</h4>
                    <p className="text-sm text-muted-foreground">
                      Acesso completo a todos os dados e funcionalidades
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Ver Documentação
                    </Button>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Webhooks</h4>
                    <p className="text-sm text-muted-foreground">
                      Notificações em tempo real de eventos
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Configurar
                    </Button>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">SDK</h4>
                    <p className="text-sm text-muted-foreground">
                      Bibliotecas para diferentes linguagens
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Baixar SDK
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Suporte Enterprise
                </CardTitle>
                <CardDescription>
                  Suporte dedicado para clientes corporativos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Tempo de Resposta</span>
                    <Badge className="bg-green-100 text-green-800">< 2 horas</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Disponibilidade</span>
                    <Badge className="bg-blue-100 text-blue-800">24/7</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Gerente de Conta</span>
                    <Badge className="bg-purple-100 text-purple-800">Dedicado</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Treinamento</span>
                    <Badge className="bg-orange-100 text-orange-800">Incluído</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Contatar Suporte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recursos & Documentação
                </CardTitle>
                <CardDescription>
                  Materiais de apoio e documentação técnica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Guia de Implementação", type: "PDF", size: "2.5 MB" },
                    { title: "Documentação da API", type: "Online", size: "Atualizada" },
                    { title: "Casos de Uso", type: "PDF", size: "1.8 MB" },
                    { title: "Webinar: Melhores Práticas", type: "Vídeo", size: "45 min" },
                    { title: "Templates de Integração", type: "ZIP", size: "12 MB" },
                    { title: "Certificação Técnica", type: "Online", size: "2h curso" }
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                      <div>
                        <p className="font-medium text-sm">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        Acessar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyCorporate;
