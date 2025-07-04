
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, Zap, Crown, Globe } from 'lucide-react';

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

export const CorporateFeatures: React.FC = () => {
  return (
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
  );
};
