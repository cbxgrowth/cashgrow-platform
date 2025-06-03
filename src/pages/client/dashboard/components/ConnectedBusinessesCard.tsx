
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const businesses = [
  { name: "Mercado Verde", initials: "MV" },
  { name: "Farmácia Saúde", initials: "FS" },
  { name: "Moda Express", initials: "ME" },
  { name: "Tech Store", initials: "TS" },
  { name: "Padaria Delícia", initials: "PD" }
];

export const ConnectedBusinessesCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 card-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Empresas Conectadas</CardTitle>
        <CardDescription>
          Lojas onde você já acumulou cashback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {businesses.map((business, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center store-item opacity-0 translate-y-4 hover-scale cursor-pointer p-2"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3">
                <img 
                  src={`https://via.placeholder.com/40/8B5CF6/FFFFFF?text=${business.initials}`} 
                  alt="Loja" 
                  className="w-8 h-8 rounded-full" 
                />
              </div>
              <p className="text-sm font-medium mb-1">{business.name}</p>
              <p className="text-xs text-muted-foreground">
                {Math.floor(Math.random() * 10 + 1)}% cashback
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover-scale">
          Descobrir mais lojas
        </Button>
      </CardFooter>
    </Card>
  );
};
