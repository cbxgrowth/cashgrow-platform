
import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Pronto para Começar a Economizar?
            </CardTitle>
            <CardDescription className="text-lg mb-8">
              Junte-se a mais de 2.5 milhões de usuários que já estão ganhando cashback inteligente
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  <Gift className="mr-2 h-5 w-5" />
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  <Clock className="mr-2 h-5 w-5" />
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};
