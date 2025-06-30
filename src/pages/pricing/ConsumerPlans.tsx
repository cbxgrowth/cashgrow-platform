import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Check, Star, Crown, Zap, Gift, Target, Shield, Sparkles, ArrowRight, Users, TrendingUp, Calendar, Wallet } from "lucide-react";
const ConsumerPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [{
    name: "Gratuito",
    description: "Perfeito para começar",
    monthlyPrice: 0,
    annualPrice: 0,
    icon: Gift,
    features: ["Cashback básico de 1%", "Até 5 transações por mês", "Suporte por email", "Dashboard básico", "1 carteira digital"],
    limitations: ["Sem acesso ao Clube VIP", "Retirada mínima R$ 50"],
    highlighted: false,
    buttonText: "Começar Grátis",
    gradient: "from-gray-500 to-gray-600"
  }, {
    name: "Premium",
    description: "Para usuários que querem mais benefícios",
    monthlyPrice: 29,
    annualPrice: 290,
    icon: Star,
    features: ["Cashback premium até 5%", "Transações ilimitadas", "Missões gamificadas", "Suporte prioritário", "Analytics pessoais", "Múltiplas carteiras", "Clube VIP básico", "Retirada instantânea"],
    highlighted: true,
    buttonText: "Assinar Premium",
    gradient: "from-primary to-accent"
  }, {
    name: "VIP Elite",
    description: "Experiência premium completa",
    monthlyPrice: 79,
    annualPrice: 790,
    icon: Crown,
    features: ["Cashback elite até 10%", "Acesso antecipado a promoções", "Gerente de conta dedicado", "Benefícios exclusivos", "Eventos especiais", "Cashback instantâneo", "Programa de indicação premium", "Suporte 24/7", "Análises avançadas"],
    highlighted: false,
    buttonText: "Tornar-se VIP",
    gradient: "from-amber-500 to-orange-600"
  }];
  const benefits = [{
    icon: Zap,
    title: "Cashback Instantâneo",
    description: "Receba seu cashback na hora da compra"
  }, {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção de dados de nível bancário"
  }, {
    icon: Target,
    title: "Missões Personalizadas",
    description: "Desafios únicos baseados no seu perfil"
  }, {
    icon: Wallet,
    title: "Carteira Digital",
    description: "Gerencie seus cashbacks em um só lugar"
  }];
  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };
  const getSavings = (plan: any) => {
    if (plan.monthlyPrice === 0) return 0;
    return Math.round((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12) * 100);
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              <Users className="h-3 w-3 mr-1" />
              Planos para Consumidores
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Maximize suas{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Economias
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Escolha o plano ideal e transforme cada compra em uma oportunidade de economia com nosso sistema de cashback inteligente.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Mensal
              </span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
              <span className={`text-sm ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Anual
              </span>
              {isAnnual && <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Economize até 30%
                </Badge>}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => <Card key={plan.name} className={`relative hover-scale transition-all duration-300 overflow-hidden ${plan.highlighted ? 'border-primary shadow-xl scale-105 ring-2 ring-primary/20' : 'border-border shadow-lg hover:shadow-xl'} animate-fade-in-up`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                {plan.highlighted && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />}
                
                <CardHeader className="relative pb-4">
                  {plan.highlighted && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg my-[20px]">
                      <Star className="h-3 w-3 mr-1" />
                      Mais Popular
                    </Badge>}
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center text-base">{plan.description}</CardDescription>
                  
                  <div className="text-center mt-6 space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        {plan.monthlyPrice === 0 ? 'Grátis' : `R$ ${getPrice(plan)}`}
                      </span>
                      {plan.monthlyPrice > 0 && <span className="text-muted-foreground">
                          /{isAnnual ? 'ano' : 'mês'}
                        </span>}
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && <div className="text-sm text-green-600 font-medium">
                        Economize {getSavings(plan)}% no plano anual
                      </div>}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>)}
                    
                    {plan.limitations?.map((limitation, idx) => <div key={idx} className="flex items-start gap-3 opacity-60">
                        <Shield className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{limitation}</span>
                      </div>)}
                  </div>
                  
                  <Button className={`w-full hover-scale ${plan.highlighted ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90' : ''}`} variant={plan.highlighted ? 'default' : 'outline'} size="lg">
                    <Link to="/auth/register" className="flex items-center gap-2">
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
              Por que Escolher Nossos <span className="text-primary">Planos</span>?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => <Card key={index} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-muted/30 rounded-xl p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-8">Compare os Recursos</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Recurso</th>
                    <th className="text-center py-4 px-4 font-semibold">Gratuito</th>
                    <th className="text-center py-4 px-4 font-semibold">Premium</th>
                    <th className="text-center py-4 px-4 font-semibold">VIP Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[{
                  feature: 'Cashback %',
                  free: '1%',
                  premium: 'Até 5%',
                  vip: 'Até 10%'
                }, {
                  feature: 'Transações/mês',
                  free: '5',
                  premium: 'Ilimitadas',
                  vip: 'Ilimitadas'
                }, {
                  feature: 'Suporte',
                  free: 'Email',
                  premium: 'Prioritário',
                  vip: 'Dedicado 24/7'
                }, {
                  feature: 'Retirada',
                  free: 'R$ 50 mín.',
                  premium: 'Instantânea',
                  vip: 'Instantânea'
                }, {
                  feature: 'Clube VIP',
                  free: '✗',
                  premium: 'Básico',
                  vip: 'Completo'
                }, {
                  feature: 'Missões',
                  free: 'Básicas',
                  premium: 'Avançadas',
                  vip: 'Exclusivas'
                }].map((row, idx) => <tr key={idx} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="text-center py-4 px-4">{row.free}</td>
                      <td className="text-center py-4 px-4">{row.premium}</td>
                      <td className="text-center py-4 px-4">{row.vip}</td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Comece a Economizar Hoje
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a milhares de usuários que já economizam com nosso cashback inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Gratuitamente
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ConsumerPlans;