
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Crown, Star, Gift, Zap, Calendar, Award, Sparkles, Users, Trophy, Lock } from "lucide-react";

const VIPClub = () => {
  const vipBenefits = [
    { icon: Crown, title: 'Cashback Exclusivo', description: 'Até 15% em lojas selecionadas', active: true },
    { icon: Star, title: 'Acesso Antecipado', description: 'Promoções 24h antes', active: true },
    { icon: Gift, title: 'Presentes Mensais', description: 'Brindes exclusivos VIP', active: true },
    { icon: Zap, title: 'Suporte Prioritário', description: 'Atendimento em até 2h', active: true },
    { icon: Calendar, title: 'Eventos Exclusivos', description: 'Webinars e workshops', active: false },
    { icon: Award, title: 'Programa Referência', description: 'Ganhe R$ 50 por indicação', active: false }
  ];

  const exclusiveOffers = [
    {
      brand: 'Nike',
      discount: '20% + 10% Cashback',
      validity: '3 dias restantes',
      image: '/api/placeholder/80/80'
    },
    {
      brand: 'Apple Store',
      discount: '15% Cashback',
      validity: '7 dias restantes',
      image: '/api/placeholder/80/80'
    },
    {
      brand: 'Zara',
      discount: '25% + Frete Grátis',
      validity: '5 dias restantes',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Crown className="h-8 w-8 text-yellow-500" />
            Clube VIP
          </h1>
          <p className="text-muted-foreground">Benefícios exclusivos para membros premium</p>
        </div>
        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <Crown className="mr-1 h-3 w-3" />
          Membro VIP Elite
        </Badge>
      </div>

      {/* VIP Status */}
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Status VIP Elite</h3>
              <p className="opacity-90">Membro desde Janeiro 2024</p>
            </div>
            <Trophy className="h-12 w-12 opacity-80" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso para Platinum</span>
              <span>2.847 / 5.000 pontos</span>
            </div>
            <Progress value={57} className="h-2 bg-white/20" />
            <p className="text-xs opacity-75">Faltam R$ 2.153 em compras para o próximo nível</p>
          </div>
        </CardContent>
      </Card>

      {/* VIP Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            Seus Benefícios VIP
          </CardTitle>
          <CardDescription>Aproveite todas as vantagens do seu plano</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vipBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`p-4 border rounded-lg ${benefit.active ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${benefit.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <benefit.icon className={`h-5 w-5 ${benefit.active ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold flex items-center gap-2">
                      {benefit.title}
                      {!benefit.active && <Lock className="h-3 w-3 text-gray-400" />}
                    </h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    {!benefit.active && (
                      <Badge variant="outline" className="mt-2 text-xs">
                        Disponível no VIP Platinum
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Exclusive Offers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-red-600" />
              Ofertas Exclusivas VIP
            </CardTitle>
            <CardDescription>Promoções disponíveis apenas para membros VIP</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exclusiveOffers.map((offer, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">{offer.brand[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{offer.brand}</h4>
                    <p className="text-sm text-green-600">{offer.discount}</p>
                    <p className="text-xs text-muted-foreground">{offer.validity}</p>
                  </div>
                </div>
                <Button size="sm">Resgatar</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* VIP Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Comunidade VIP
            </CardTitle>
            <CardDescription>Conecte-se com outros membros VIP</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1.247</div>
                <div className="text-sm text-blue-600">Membros VIP</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">R$ 156K</div>
                <div className="text-sm text-green-600">Cashback Total</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Próximos Eventos VIP</h4>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Workshop: Maximizando Cashback</h5>
                  <p className="text-sm text-muted-foreground">15 de Janeiro, 19h</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Networking VIP São Paulo</h5>
                  <p className="text-sm text-muted-foreground">22 de Janeiro, 18h</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upgrade CTA */}
      <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <CardContent className="p-6 text-center">
          <Crown className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Upgrade para VIP Platinum</h3>
          <p className="mb-4 opacity-90">
            Desbloqueie todos os benefícios e ganhe até 20% de cashback em todas as compras
          </p>
          <Button variant="secondary" size="lg">
            Fazer Upgrade Agora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VIPClub;
