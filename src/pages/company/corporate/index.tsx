
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, TrendingUp, Star, Shield, Zap } from 'lucide-react';

const CompanyCorporatePage: React.FC = () => {
  const corporateFeatures = [
    {
      icon: Building2,
      title: 'Multi-Filiais',
      description: 'Gerencie múltiplas filiais em uma única plataforma',
      status: 'active'
    },
    {
      icon: Users,
      title: 'Gestão de Equipes',
      description: 'Controle de acesso e permissões por usuário',
      status: 'active'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Avançados',
      description: 'Relatórios detalhados e insights de performance',
      status: 'premium'
    },
    {
      icon: Shield,
      title: 'Segurança Enterprise',
      description: 'Autenticação avançada e compliance corporativo',
      status: 'premium'
    }
  ];

  const integrations = [
    {
      name: 'SAP',
      description: 'Integração com sistemas SAP',
      status: 'available'
    },
    {
      name: 'Oracle',
      description: 'Conectividade com bancos Oracle',
      status: 'available'
    },
    {
      name: 'Microsoft Dynamics',
      description: 'Sincronização com Dynamics 365',
      status: 'coming-soon'
    },
    {
      name: 'Salesforce',
      description: 'Integração com CRM Salesforce',
      status: 'coming-soon'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Soluções Corporativas</h1>
        <p className="text-muted-foreground mt-2">
          Recursos avançados para empresas de grande porte
        </p>
      </div>

      {/* Recursos Corporativos */}
      <div className="grid gap-6 md:grid-cols-2">
        {corporateFeatures.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <feature.icon className="h-8 w-8 text-primary" />
                <Badge variant={feature.status === 'premium' ? 'default' : 'secondary'}>
                  {feature.status === 'premium' ? 'Premium' : 'Ativo'}
                </Badge>
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant={feature.status === 'premium' ? 'default' : 'outline'}
                className="w-full"
              >
                {feature.status === 'premium' ? 'Fazer Upgrade' : 'Configurar'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Integrações Enterprise */}
      <Card>
        <CardHeader>
          <CardTitle>Integrações Enterprise</CardTitle>
          <CardDescription>
            Conecte seus sistemas corporativos existentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{integration.name}</h4>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
                <div>
                  {integration.status === 'available' ? (
                    <Button size="sm">Conectar</Button>
                  ) : (
                    <Badge variant="outline">Em Breve</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suporte Dedicado */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            Suporte Dedicado
          </CardTitle>
          <CardDescription>
            Atendimento especializado para clientes corporativos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">SLA de 2 horas</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Account Manager</h4>
              <p className="text-sm text-muted-foreground">Gerente dedicado</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Suporte 24/7</h4>
              <p className="text-sm text-muted-foreground">Disponível sempre</p>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Button>Falar com Especialista</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCorporatePage;
