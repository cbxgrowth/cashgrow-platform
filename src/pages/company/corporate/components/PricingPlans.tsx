
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export const PricingPlans: React.FC = () => {
  return (
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
  );
};
