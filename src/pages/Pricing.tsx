
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  X,
  Crown,
  Rocket,
  Zap,
  Star,
  Users,
  Smartphone,
  Brain,
  Shield,
  Globe,
  MessageSquare,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "START",
      subtitle: "O jeito mais rápido e econômico de fidelizar seus clientes!",
      implementationPrice: "2.557",
      implementationDiscount: "1.999",
      monthlyPrice: "279",
      maxClients: "10.000",
      icon: Rocket,
      color: "blue",
      popular: false,
      features: [
        "Capacidade para até 10.000 clientes cadastrados",
        "Integrações nativas para facilitar suas operações",
        "Campanhas promocionais eficazes",
        "Consultor Dedicado",
        "Engenharia de Pontos",
        "Gatilhos Mentais",
        "Cashback ou Pontos",
        "Estratégia de Prêmios"
      ],
      limitations: [
        "Não inclui API para integrações personalizadas"
      ]
    },
    {
      name: "PRO",
      subtitle: "Para empresas em crescimento que buscam a solução completa",
      implementationPrice: "3.917",
      implementationDiscount: "2.890",
      monthlyPrice: "399",
      maxClients: "50.000",
      icon: Crown,
      color: "purple",
      popular: true,
      features: [
        "Processo completo de criação e desenvolvimento",
        "Estratégia única para seu nicho",
        "Configuração completa da plataforma",
        "Suporte total à API para integrações personalizadas",
        "Capacidade para até 50.000 clientes cadastrados",
        "Todas as funcionalidades do Plano START",
        "Implementação inclui primeira mensalidade",
        "Mentoria especializada"
      ],
      limitations: []
    },
    {
      name: "GROWTH",
      subtitle: "Solução completa com automação via WhatsApp e apps nativos",
      implementationPrice: "4.615",
      implementationDiscount: "3.999",
      monthlyPrice: "849",
      maxClients: "350.000+",
      icon: Zap,
      color: "green",
      popular: false,
      features: [
        "Todos os recursos do Plano PRO",
        "Automação via WhatsApp Oficial",
        "Aplicativos iOS e Android personalizados",
        "Mentoria para implementação",
        "Capacidade para 350 mil clientes (expansível)",
        "Infraestrutura dedicada",
        "Possibilidades de customização ilimitadas",
        "Suporte premium 24/7"
      ],
      limitations: []
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600"
    };
    return colors[color as keyof typeof colors];
  };

  const getBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100",
      purple: "bg-purple-100",
      green: "bg-green-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Planos e <span className="text-primary">Preços</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Escolha o plano ideal para impulsionar seu programa de fidelidade. 
              Todos os planos incluem implementação e suporte especializado.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Setup em 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Sem taxa de setup adicional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-medium">
                    <Star className="h-4 w-4 inline mr-1" />
                    Mais Popular
                  </div>
                )}
                
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getBgColor(plan.color)}`}>
                      <plan.icon className={`h-6 w-6 ${getIconColor(plan.color)}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">{plan.subtitle}</p>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Implementação</span>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground line-through">R$ {plan.implementationPrice}</span>
                          <div className="text-2xl font-bold text-green-600">R$ {plan.implementationDiscount}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Mensalidade</span>
                        <div className="text-right">
                          <div className="text-3xl font-bold">R$ {plan.monthlyPrice}</div>
                          <span className="text-sm text-muted-foreground">/mês</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 inline mr-1" />
                      Até {plan.maxClients} clientes
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">✓ Incluído no plano:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-600">⚠ Observações:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button asChild className={`w-full ${plan.popular ? 'variant-default' : 'variant-outline'}`} size="lg">
                    <Link to="/auth/register">
                      Escolher {plan.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comparação Detalhada</h2>
            <p className="text-xl text-muted-foreground">Veja todas as funcionalidades de cada plano</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Funcionalidades</th>
                  <th className="text-center p-4 font-semibold">START</th>
                  <th className="text-center p-4 font-semibold bg-primary/5">PRO</th>
                  <th className="text-center p-4 font-semibold">GROWTH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Dashboard administrativo</td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Campanhas promocionais</td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">API para integrações</td>
                  <td className="text-center p-4"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">WhatsApp Business API</td>
                  <td className="text-center p-4"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Apps iOS e Android</td>
                  <td className="text-center p-4"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Infraestrutura dedicada</td>
                  <td className="text-center p-4"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso mudar de plano depois?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Entre em contato conosco para mais informações.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Existe período de teste?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Oferecemos demonstração completa antes da implementação. Você verá exatamente como funciona antes de fechar contrato.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como funciona a implementação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Nossa equipe cuida de tudo: configuração, treinamento e acompanhamento. O processo leva de 24 a 48 horas.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Existe contrato de fidelidade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Não exigimos contratos longos. Trabalhamos com mensalidade flexível e você pode cancelar quando quiser.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tem Dúvidas? Fale Conosco!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe está pronta para ajudar você a escolher o melhor plano
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  <Phone className="h-5 w-5 mr-2" />
                  Agendar Demonstração
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/auth/register">
                  <Mail className="h-5 w-5 mr-2" />
                  Começar Agora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
