
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Check, 
  X,
  Crown, 
  Users, 
  Building2, 
  Star,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react';

const ComparePlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [planType, setPlanType] = useState<'personal' | 'business'>('personal');

  const personalPlans = [
    {
      name: 'Gratuito',
      price: { monthly: 0, annual: 0 },
      icon: Users,
      description: 'Perfeito para começar',
      popular: false,
      features: {
        cashback: '1%',
        stores: '5 lojas',
        transactions: 'Ilimitadas',
        support: 'Email',
        reports: 'Básicos',
        missions: 'Básicas',
        vipClub: false,
        withdrawal: 'R$ 50 mín.',
        bonusDates: false,
        earlyAccess: false,
        exclusiveVouchers: false,
        prioritySupport: false
      }
    },
    {
      name: 'Premium',
      price: { monthly: 29, annual: 290 },
      icon: Star,
      description: 'Mais cashback e benefícios',
      popular: true,
      features: {
        cashback: 'Até 5%',
        stores: 'Ilimitadas',
        transactions: 'Ilimitadas',
        support: 'Prioritário',
        reports: 'Detalhados',
        missions: 'Premium',
        vipClub: 'Básico',
        withdrawal: 'Instantânea',
        bonusDates: true,
        earlyAccess: true,
        exclusiveVouchers: true,
        prioritySupport: true
      }
    },
    {
      name: 'VIP Elite',
      price: { monthly: 79, annual: 790 },
      icon: Crown,
      description: 'Máximo cashback e exclusividade',
      popular: false,
      features: {
        cashback: 'Até 10%',
        stores: 'Ilimitadas',
        transactions: 'Ilimitadas',
        support: 'Gerente pessoal',
        reports: 'Tempo real',
        missions: 'Exclusivas VIP',
        vipClub: 'Completo',
        withdrawal: 'Instantânea',
        bonusDates: true,
        earlyAccess: true,
        exclusiveVouchers: true,
        prioritySupport: true
      }
    }
  ];

  const businessPlans = [
    {
      name: 'Starter',
      price: { monthly: 299, annual: 2990 },
      icon: Building2,
      description: 'Ideal para pequenas empresas',
      popular: false,
      features: {
        clients: '1.000 clientes',
        dashboard: 'Básico',
        reports: 'Mensais',
        support: 'Email',
        api: 'Básica',
        campaigns: 'Simples',
        integrations: 'Básicas',
        whitelabel: false,
        aiSuggestions: false,
        dedicatedManager: false,
        sla: false,
        customReports: false
      }
    },
    {
      name: 'Professional',
      price: { monthly: 599, annual: 5990 },
      icon: TrendingUp,
      description: 'Para empresas em crescimento',
      popular: true,
      features: {
        clients: '10.000 clientes',
        dashboard: 'Avançado',
        reports: 'Tempo real',
        support: 'Prioritário',
        api: 'Completa',
        campaigns: 'IA',
        integrations: 'Avançadas',
        whitelabel: 'Básico',
        aiSuggestions: true,
        dedicatedManager: false,
        sla: false,
        customReports: true
      }
    },
    {
      name: 'Enterprise',
      price: { monthly: 1299, annual: 12990 },
      icon: Crown,
      description: 'Solução completa para grandes empresas',
      popular: false,
      features: {
        clients: 'Ilimitados',
        dashboard: 'Customizado',
        reports: 'Personalizados',
        support: 'Gerente dedicado',
        api: 'Enterprise',
        campaigns: 'IA Personalizada',
        integrations: 'Sob medida',
        whitelabel: 'Completo',
        aiSuggestions: true,
        dedicatedManager: true,
        sla: '99.9%',
        customReports: true
      }
    }
  ];

  const currentPlans = planType === 'personal' ? personalPlans : businessPlans;
  
  const getPrice = (plan: any) => {
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

  const getSavings = (plan: any) => {
    if (plan.price.monthly === 0) return 0;
    return Math.round((plan.price.monthly * 12 - plan.price.annual) / (plan.price.monthly * 12) * 100);
  };

  const featureKeys = planType === 'personal' 
    ? Object.keys(personalPlans[0].features)
    : Object.keys(businessPlans[0].features);

  const getFeatureLabel = (key: string) => {
    const labels: Record<string, string> = {
      // Personal
      cashback: 'Taxa de Cashback',
      stores: 'Lojas Conectadas',
      transactions: 'Transações',
      support: 'Suporte',
      reports: 'Relatórios',
      missions: 'Missões',
      vipClub: 'Clube VIP',
      withdrawal: 'Saque',
      bonusDates: 'Cashback em Dobro',
      earlyAccess: 'Acesso Antecipado',
      exclusiveVouchers: 'Vouchers Exclusivos',
      prioritySupport: 'Suporte Prioritário',
      // Business
      clients: 'Clientes',
      dashboard: 'Dashboard',
      api: 'API',
      campaigns: 'Campanhas',
      integrations: 'Integrações',
      whitelabel: 'White-label',
      aiSuggestions: 'Sugestões IA',
      dedicatedManager: 'Gerente Dedicado',
      sla: 'SLA',
      customReports: 'Relatórios Customizados'
    };
    return labels[key] || key;
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 text-green-500 mx-auto" />
      ) : (
        <X className="h-4 w-4 text-gray-400 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            Comparação Completa
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Compare Todos os Planos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja lado a lado todos os recursos e escolha o plano perfeito para suas necessidades
          </p>
        </div>

        {/* Plan Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setPlanType('personal')}
              className={`px-6 py-2 rounded-md transition-all ${
                planType === 'personal'
                  ? 'bg-background shadow-sm font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              Planos Pessoais
            </button>
            <button
              onClick={() => setPlanType('business')}
              className={`px-6 py-2 rounded-md transition-all ${
                planType === 'business'
                  ? 'bg-background shadow-sm font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              <Building2 className="h-4 w-4 inline mr-2" />
              Planos Empresariais
            </button>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Mensal
          </span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Anual
          </span>
          {isAnnual && (
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Economize até 30%
            </Badge>
          )}
        </div>

        {/* Plans Comparison Table */}
        <div className="bg-background rounded-lg border shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header with Plan Names and Prices */}
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-6 font-semibold">Recursos</th>
                  {currentPlans.map((plan, index) => (
                    <th key={index} className="text-center p-6 min-w-[200px] relative">
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                          Mais Popular
                        </Badge>
                      )}
                      <div className="flex flex-col items-center space-y-2 mt-4">
                        <div className={`p-2 rounded-lg ${
                          plan.name === 'VIP Elite' || plan.name === 'Enterprise' ? 'bg-purple-100' :
                          plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <plan.icon className={`h-6 w-6 ${
                            plan.name === 'VIP Elite' || plan.name === 'Enterprise' ? 'text-purple-600' :
                            plan.popular ? 'text-blue-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <h3 className="font-bold text-lg">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground text-center">{plan.description}</p>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">
                            {getPrice(plan) === 0 ? 'Gratuito' : `R$ ${getPrice(plan)}`}
                          </div>
                          {getPrice(plan) > 0 && (
                            <div className="text-sm text-muted-foreground">
                              /{isAnnual ? 'ano' : 'mês'}
                            </div>
                          )}
                          {isAnnual && getSavings(plan) > 0 && (
                            <div className="text-xs text-green-600 font-medium">
                              Economize {getSavings(plan)}%
                            </div>
                          )}
                        </div>
                        <Button 
                          className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                          variant={plan.popular ? 'default' : 'outline'}
                        >
                          {getPrice(plan) === 0 ? 'Começar Grátis' : 'Escolher Plano'}
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Features Comparison */}
              <tbody>
                {featureKeys.map((feature, featureIndex) => (
                  <tr key={feature} className={featureIndex % 2 === 0 ? 'bg-muted/20' : ''}>
                    <td className="p-4 font-medium border-r">
                      {getFeatureLabel(feature)}
                    </td>
                    {currentPlans.map((plan, planIndex) => (
                      <td key={planIndex} className="p-4 text-center">
                        {renderFeatureValue((plan.features as any)[feature])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a escolher o plano ideal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Falar com Especialista
                </Button>
                <Button variant="outline" size="lg">
                  Ver FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
