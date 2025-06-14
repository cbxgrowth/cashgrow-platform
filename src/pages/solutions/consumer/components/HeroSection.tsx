
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Users, DollarSign, Star, Trophy } from "lucide-react";
import { Link } from 'react-router-dom';

const statistics = [
  { icon: Users, value: "2.5M+", label: "Usuários ativos" },
  { icon: DollarSign, value: "R$ 45M", label: "Cashback pago" },
  { icon: Star, value: "4.9", label: "Avaliação na store" },
  { icon: Trophy, value: "150K", label: "Missões completadas/mês" }
];

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Soluções para Consumidor
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Maximize suas Recompensas
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Descubra como nossa plataforma revoluciona a forma como você ganha cashback, 
          com tecnologia avançada e experiência gamificada única no mercado brasileiro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/auth/register">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/pricing/consumer">
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              Ver Planos
            </Button>
          </Link>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
