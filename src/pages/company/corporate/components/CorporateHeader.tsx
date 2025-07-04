
import React from 'react';
import { Button } from "@/components/ui/button";

export const CorporateHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Soluções Corporativas</h1>
        <p className="text-muted-foreground">
          Recursos empresariais para escalar seu negócio
        </p>
      </div>
      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
        Falar com Especialista
      </Button>
    </div>
  );
};
