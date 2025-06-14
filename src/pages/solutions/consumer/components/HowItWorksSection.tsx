
import React from 'react';
import { CreditCard, MapPin, Gift, RefreshCw, ArrowRight } from "lucide-react";

const howItWorks = [
  {
    step: 1,
    icon: CreditCard,
    title: "Cadastre-se Grátis",
    description: "Crie sua conta em menos de 2 minutos"
  },
  {
    step: 2,
    icon: MapPin,
    title: "Compre nas Lojas Parceiras",
    description: "Mais de 5.000 lojas online e físicas"
  },
  {
    step: 3,
    icon: Gift,
    title: "Receba Cashback",
    description: "Dinheiro na sua carteira automaticamente"
  },
  {
    step: 4,
    icon: RefreshCw,
    title: "Resgate ou Reinvista",
    description: "Use como quiser ou potencialize ganhos"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            4 passos simples para começar a ganhar cashback
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative">
                  <step.icon className="h-8 w-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
