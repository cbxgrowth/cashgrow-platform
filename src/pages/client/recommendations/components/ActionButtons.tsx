
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, MapPin, Brain } from "lucide-react";

export const ActionButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <ShoppingBag className="h-5 w-5 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-medium">Conectar E-commerce</h3>
          <p className="text-xs text-muted-foreground">Importe seu histórico de compras</p>
        </div>
      </Button>
      
      <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-medium">Ativar Localização</h3>
          <p className="text-xs text-muted-foreground">Receba ofertas próximas</p>
        </div>
      </Button>
      
      <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover-scale">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Brain className="h-5 w-5 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="font-medium">Responder Questionário</h3>
          <p className="text-xs text-muted-foreground">Melhore sua personalização</p>
        </div>
      </Button>
    </div>
  );
};
