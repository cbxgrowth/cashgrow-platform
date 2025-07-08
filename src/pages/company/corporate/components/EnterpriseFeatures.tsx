
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, Database, Cloud, Headphones, Globe, Zap, Settings, BarChart3, Lock, Cpu } from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: Building2,
    title: "Multi-Unidades Ilimitadas",
    description: "Gerencie quantas filiais e unidades precisar",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Users,
    title: "Usuários Ilimitados",
    description: "Sem limite de usuários e colaboradores",
    status: "Disponível", 
    tier: "Enterprise"
  },
  {
    icon: Database,
    title: "Backup Dedicado",
    description: "Sistema de backup automatizado e exclusivo",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Cloud,
    title: "Cloud Privada",
    description: "Infraestrutura dedicada na nuvem",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Headphones,
    title: "Suporte 24/7 Premium",
    description: "Atendimento prioritário com SLA garantido",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Globe,
    title: "Multi-Regional",
    description: "Operação em múltiplas regiões e moedas",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Criptografia de ponta e auditoria completa",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Recursos dedicados para máxima performance",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Settings,
    title: "Customização Total",
    description: "Interface e funcionalidades personalizadas",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Relatórios customizados e BI integrado",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Lock,
    title: "Compliance Total",
    description: "Conformidade com LGPD, SOX e ISO 27001",
    status: "Disponível",
    tier: "Enterprise"
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Recursos de IA para otimização automática",
    status: "Em Breve",
    tier: "Enterprise"
  }
];

export const EnterpriseFeatures: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Recursos Enterprise</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Soluções completas para grandes corporações com necessidades específicas de escalabilidade e segurança
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {enterpriseFeatures.map((feature, index) => (
          <Card key={index} className="relative hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <Badge variant={feature.status === 'Disponível' ? 'default' : 'secondary'}>
                  {feature.status}
                </Badge>
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

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de algo específico?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Nossa equipe especializada pode desenvolver soluções customizadas para atender às necessidades únicas da sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline">
              Solicitar Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
