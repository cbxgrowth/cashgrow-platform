
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Crown, 
  ArrowUpRight,
  Diamond, 
  Gift, 
  ShoppingCart, 
  Calendar, 
  BadgePercent, 
  Star,
  Medal,
  Shield,
  HandHeart,
  Users
} from "lucide-react";
import { toast } from "sonner";

const ClientVipClub: React.FC = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const membershipLevels = [
    {
      name: "Bronze",
      requiredSpend: "R$ 0",
      cashbackBonus: "+2%",
      color: "from-amber-700/40 to-amber-800/40 border-amber-700/50",
      textColor: "text-amber-700",
      icon: Star,
      current: true
    },
    {
      name: "Prata",
      requiredSpend: "R$ 5.000",
      cashbackBonus: "+5%",
      color: "from-slate-400/40 to-slate-500/40 border-slate-400/50",
      textColor: "text-slate-400",
      icon: Medal
    },
    {
      name: "Ouro",
      requiredSpend: "R$ 10.000",
      cashbackBonus: "+8%",
      color: "from-amber-400/40 to-amber-500/40 border-amber-400/50",
      textColor: "text-amber-400",
      icon: Award
    },
    {
      name: "Platina",
      requiredSpend: "R$ 25.000",
      cashbackBonus: "+12%",
      color: "from-indigo-400/40 to-indigo-500/40 border-indigo-400/50",
      textColor: "text-indigo-400",
      icon: Shield
    },
    {
      name: "Diamante",
      requiredSpend: "R$ 50.000",
      cashbackBonus: "+15%",
      color: "from-sky-400/40 to-sky-500/40 border-sky-400/50",
      textColor: "text-sky-400",
      icon: Diamond
    }
  ];

  const vipBenefits = [
    {
      title: "Cashback Ampliado",
      description: "Até +15% de cashback em todas as compras",
      icon: BadgePercent
    },
    {
      title: "Ofertas Exclusivas",
      description: "Acesso prioritário a ofertas especiais de parceiros",
      icon: Gift
    },
    {
      title: "Atendimento VIP",
      description: "Suporte prioritário via WhatsApp 24/7",
      icon: HandHeart
    },
    {
      title: "Acesso Antecipado",
      description: "Seja o primeiro a ter acesso a novas funcionalidades",
      icon: ArrowUpRight
    },
    {
      title: "Indicações Premium",
      description: "Ganhe mais ao indicar amigos para o sistema",
      icon: Users
    },
    {
      title: "Resgate Rápido",
      description: "Cashback disponível em 24h (ao invés de 30 dias)",
      icon: Calendar
    }
  ];

  const premiumOffers = [
    {
      title: "Buffet Premium",
      description: "15% de cashback + frete grátis na primeira compra",
      company: "Restaurant Prime",
      value: "15%",
      expiresIn: "5 dias"
    },
    {
      title: "Hospedagem Executiva",
      description: "18% de cashback em reservas no plano business",
      company: "Royal Hotels",
      value: "18%",
      expiresIn: "7 dias"
    },
    {
      title: "Aluguel de Veículos",
      description: "20% de cashback em locações executivas",
      company: "Premium Cars",
      value: "20%",
      expiresIn: "3 dias"
    }
  ];

  const handleJoinVIP = () => {
    toast.success("Parabéns! Você aderiu ao Clube VIP!");
  };

  const handleActivateOffer = () => {
    toast.success("Oferta ativada com sucesso!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Crown className="h-8 w-8 text-amber-500" />
            Clube VIP
          </h1>
          <p className="text-muted-foreground mt-1">
            Benefícios exclusivos e cashback ampliado para membros premium
          </p>
        </div>
      </div>

      {/* Status do VIP */}
      <Card className="shadow-md bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-800/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-amber-500" />
            <span>Seu Status VIP</span>
          </CardTitle>
          <CardDescription>
            Aumente seu nível para desbloquear mais benefícios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700/40 to-amber-800/40 flex items-center justify-center">
                <Star className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <p className="font-bold">Nível Bronze</p>
                <p className="text-xs text-muted-foreground">Membro desde 15/04/2025</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1 bg-amber-50 text-amber-700 dark:bg-amber-900/20">
              <BadgePercent className="h-3 w-3" />
              +2% cashback
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Próximo Nível: Prata</span>
              <span className="text-muted-foreground">R$ 2.300 / R$ 5.000</span>
            </div>
            <Progress value={46} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Faltam R$ 2.700 em compras para atingir o próximo nível
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700" onClick={handleJoinVIP}>
            Assinar Clube VIP
          </Button>
        </CardFooter>
      </Card>

      {/* Tabs para Benefícios e Ofertas */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Clube VIP Premium</CardTitle>
          <CardDescription>
            Conheça todos os benefícios e ofertas exclusivas do Clube VIP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="benefits" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="benefits">Benefícios</TabsTrigger>
              <TabsTrigger value="levels">Níveis VIP</TabsTrigger>
              <TabsTrigger value="offers">Ofertas Exclusivas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vipBenefits.map((benefit, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <benefit.icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="levels" className="mt-4 space-y-4">
              <div className="flex flex-col space-y-4">
                {membershipLevels.map((level, index) => (
                  <Card 
                    key={index} 
                    className={`shadow-sm ${level.current ? 'ring-2 ring-amber-500 ring-offset-2' : ''}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center`}>
                            <level.icon className={`h-6 w-6 ${level.textColor}`} />
                          </div>
                          <div>
                            <h3 className={`font-bold text-lg ${level.textColor}`}>Nível {level.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Gasto mínimo: {level.requiredSpend}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className={`bg-gradient-to-br ${level.color} ${level.textColor} text-sm px-3`}>
                          {level.cashbackBonus} cashback
                        </Badge>
                      </div>
                      
                      {level.current && (
                        <div className="mt-3 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 rounded-md p-2 text-sm flex items-center gap-2">
                          <Crown className="h-4 w-4" />
                          <span>Seu nível atual</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="offers" className="mt-4 space-y-4">
              <div className="space-y-4">
                {premiumOffers.map((offer, index) => (
                  <Card key={index} className="shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 font-medium w-full">
                      EXCLUSIVO CLUBE VIP
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{offer.title}</CardTitle>
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          {offer.value} cashback
                        </Badge>
                      </div>
                      <CardDescription>{offer.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        {offer.description}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Expira em {offer.expiresIn}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/30 pt-3">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600" onClick={handleActivateOffer}>
                        Ativar Oferta
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientVipClub;
