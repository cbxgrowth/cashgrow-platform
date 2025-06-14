
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Plus } from "lucide-react";

const businesses = [
  { name: "Mercado Verde", initials: "MV", color: "bg-green-500" },
  { name: "Farmácia Saúde", initials: "FS", color: "bg-blue-500" },
  { name: "Moda Express", initials: "ME", color: "bg-purple-500" },
  { name: "Tech Store", initials: "TS", color: "bg-orange-500" },
  { name: "Padaria Delícia", initials: "PD", color: "bg-pink-500" }
];

export const ConnectedBusinessesCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 card-shadow mobile-card">
      <CardHeader className="pb-4 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg sm:text-xl">Empresas Conectadas</CardTitle>
            <CardDescription className="text-sm">
              Lojas onde você acumula cashback
            </CardDescription>
          </div>
          <div className="bg-primary/10 p-2 rounded-lg">
            <Store className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {businesses.map((business, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center store-item opacity-0 translate-y-4 hover-scale cursor-pointer p-2 sm:p-3 rounded-lg hover:bg-muted/30 transition-colors touch-target"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${business.color} flex items-center justify-center mb-2 sm:mb-3 text-white font-bold shadow-lg`}>
                {business.initials}
              </div>
              <p className="text-xs sm:text-sm font-medium mb-1 truncate w-full">{business.name}</p>
              <p className="text-xs text-muted-foreground">
                {Math.floor(Math.random() * 10 + 1)}% cashback
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button variant="outline" className="w-full hover-scale touch-target">
          <Plus className="mr-2 h-4 w-4" />
          Descobrir mais lojas
        </Button>
      </CardFooter>
    </Card>
  );
};
