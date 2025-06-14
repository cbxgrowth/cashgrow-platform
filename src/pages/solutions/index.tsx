
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building2, 
  ArrowRight,
  Gift,
  Target,
  TrendingUp,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";

const SolutionsIndex = () => {
  const solutionTypes = [
    {
      type: "consumer",
      title: "Para Consumidores",
      description: "Maximize suas economias com cashback inteligente e missões gamificadas",
      href: "/solutions/consumer",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      features: [
        { icon: Gift, text: "Cashback até 15%" },
        { icon: Target, text: "Missões Gamificadas" },
        { icon: Sparkles, text: "Recomendações IA" }
      ],
      stats: { users: "2.5M+", cashback: "R$ 45M" }
    },
    {
      type: "business",
      title: "Para Empresas",
      description: "Aumente vendas e fidelização com nossa plataforma empresarial completa",
      href: "/solutions/business",
      icon: Building2,
      color: "from-green-500 to-blue-600",
      features: [
        { icon: TrendingUp, text: "Analytics Avançados" },
        { icon: Rocket, text: "Campanhas IA" },
        { icon: Zap, text: "ROI 4x maior" }
      ],
      stats: { companies: "5K+", growth: "+400%" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Soluções CBX Growth
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Soluções para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Todos os Perfis
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Descubra como nossa plataforma pode revolucionar suas economias ou impulsionar seu negócio 
            com tecnologia de cashback inteligente e gamificação.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutionTypes.map((solution, index) => (
              <Card 
                key={solution.type} 
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5`} />
                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                      <solution.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {solution.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    {Object.entries(solution.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-foreground">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key === 'users' ? 'Usuários' : 
                           key === 'cashback' ? 'Cashback Pago' : 
                           key === 'companies' ? 'Empresas' : 
                           'Crescimento'}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <feature.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link to={solution.href}>
                    <Button 
                      size="lg" 
                      className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 transition-all duration-300 group`}
                    >
                      Explorar Soluções
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não sabe qual solução escolher?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa equipe pode ajudar você a encontrar a solução perfeita para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Falar com Especialista
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg">
                Ver Todos os Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsIndex;
