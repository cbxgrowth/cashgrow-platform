
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  Gift, 
  Target,
  Shield,
  Sparkles
} from 'lucide-react';

const PersonalPlans = () => {
  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para começar',
      icon: Gift,
      features: [
        'Cashback básico de 1%',
        'Até 5 lojas conectadas',
        'Relatórios mensais',
        'Suporte por email',
        'Missões básicas'
      ],
      limitations: [
        'Sem acesso ao Clube VIP',
        'Retirada mínima R$ 50'
      ],
      cta: 'Começar Grátis',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Premium',
      price: 'R$ 29,00',
      period: '/mês',
      description: 'Mais cashback e benefícios',
      icon: Star,
      features: [
        'Cashback premium de até 5%',
        'Lojas ilimitadas',
        'Relatórios detalhados',
        'Suporte prioritário',
        'Missões premium',
        'Clube VIP básico',
        'Retirada instantânea',
        'Cashback em dobro em datas especiais'
      ],
      cta: 'Escolher Premium',
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'VIP Elite',
      price: 'R$ 79,00',
      period: '/mês',
      description: 'Máximo cashback e exclusividade',
      icon: Crown,
      features: [
        'Cashback elite de até 10%',
        'Acesso antecipado a promoções',
        'Gerente de conta pessoal',
        'Relatórios em tempo real',
        'Missões exclusivas VIP',
        'Clube VIP completo',
        'Cashback em produtos selecionados',
        'Eventos exclusivos',
        'Programa de referência premium'
      ],
      cta: 'Tornar-se VIP',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            Planos Pessoais
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Escolha seu Plano Ideal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ganhe mais cashback, desbloqueie benefícios exclusivos e transforme suas compras em recompensas
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.color} ${
                plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full ${
                    plan.name === 'VIP Elite' ? 'bg-purple-100' :
                    plan.name === 'Premium' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.name === 'VIP Elite' ? 'text-purple-600' :
                      plan.name === 'Premium' ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations?.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-60">
                      <Shield className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Compare os Recursos</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Recurso</th>
                  <th className="text-center py-3 px-4">Gratuito</th>
                  <th className="text-center py-3 px-4">Premium</th>
                  <th className="text-center py-3 px-4">VIP Elite</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { feature: 'Cashback %', free: '1%', premium: 'Até 5%', vip: 'Até 10%' },
                  { feature: 'Lojas conectadas', free: '5', premium: 'Ilimitadas', vip: 'Ilimitadas' },
                  { feature: 'Suporte', free: 'Email', premium: 'Prioritário', vip: 'Gerente pessoal' },
                  { feature: 'Retirada mínima', free: 'R$ 50', premium: 'Instantânea', vip: 'Instantânea' },
                  { feature: 'Clube VIP', free: '✗', premium: 'Básico', vip: 'Completo' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className="text-center py-3 px-4">{row.free}</td>
                    <td className="text-center py-3 px-4">{row.premium}</td>
                    <td className="text-center py-3 px-4">{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPlans;
