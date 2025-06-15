
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const AIFeaturesCard: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          IA com Sistema de Créditos Inteligente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Nossa IA opera com um sistema de créditos fair-use. Cada sugestão gerada, insight analisado 
          ou campanha aplicada consome créditos baseados na complexidade da operação. Isso garante 
          uso eficiente e custos transparentes.
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">
            Ver Planos de Créditos
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Histórico de Uso
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
