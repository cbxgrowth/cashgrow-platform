
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from 'react-router-dom';

export const PricingPreviewSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Planos para Todos os Perfis
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Desde usuário casual até o consumidor premium
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Gratuito</CardTitle>
              <div className="text-2xl font-bold">R$ 0<span className="text-sm font-normal">/mês</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Cashback até 5%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Missões básicas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  App mobile
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary scale-105 shadow-lg">
            <CardHeader>
              <Badge className="mb-2">Mais Popular</Badge>
              <CardTitle>Premium</CardTitle>
              <div className="text-2xl font-bold">R$ 19<span className="text-sm font-normal">/mês</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Cashback até 12%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Todas as missões
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  IA personalizada
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader>
              <CardTitle>VIP</CardTitle>
              <div className="text-2xl font-bold">R$ 49<span className="text-sm font-normal">/mês</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Cashback até 20%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Acesso antecipado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Suporte priority
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Link to="/pricing/consumer">
          <Button size="lg" variant="outline">
            Ver Todos os Planos
          </Button>
        </Link>
      </div>
    </section>
  );
};
