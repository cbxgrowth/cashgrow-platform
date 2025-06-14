
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Plus } from "lucide-react";

const businesses = [
  { name: "Mercado Verde", initials: "MV", color: "bg-green-500", cashback: "2%" },
  { name: "Farmácia Saúde", initials: "FS", color: "bg-blue-500", cashback: "5%" },
  { name: "Moda Express", initials: "ME", color: "bg-purple-500", cashback: "3%" },
  { name: "Tech Store", initials: "TS", color: "bg-orange-500", cashback: "4%" },
  { name: "Padaria Delícia", initials: "PD", color: "bg-pink-500", cashback: "4%" }
];

export const ConnectedBusinessesCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 card-shadow w-full max-w-full overflow-hidden">
      <CardHeader className="pb-2 p-3 sm:p-4">
        <div className="flex items-center justify-between min-w-0">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-sm sm:text-base font-semibold truncate">Empresas Conectadas</CardTitle>
            <CardDescription className="text-xs text-muted-foreground truncate">
              Lojas onde você acumula cashback
            </CardDescription>
          </div>
          <div className="bg-primary/10 p-1.5 rounded-lg flex-shrink-0">
            <Store className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4 pt-0 w-full min-w-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
          {businesses.slice(0, 5).map((business, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center store-item opacity-0 translate-y-4 hover-scale cursor-pointer p-2 rounded-lg hover:bg-muted/30 transition-colors w-full min-w-0"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${business.color} flex items-center justify-center mb-1.5 text-white font-bold shadow-lg text-xs flex-shrink-0`}>
                {business.initials}
              </div>
              <p className="text-xs font-medium mb-0.5 truncate w-full">{business.name}</p>
              <p className="text-xs text-muted-foreground">
                {business.cashback} cashback
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9">
          <Plus className="mr-1.5 h-3 w-3" />
          Descobrir mais lojas
        </Button>
      </CardFooter>
    </Card>
  );
};
