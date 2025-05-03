
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShoppingBag, MapPin, Brain } from "lucide-react";
import { toast } from "sonner";

const AvailableMissions: React.FC = () => {
  const handleActivate = () => {
    toast.success("Missão ativada com sucesso!");
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <ArrowUpRight className="h-5 w-5 text-primary" />
          <CardTitle>Missões Disponíveis</CardTitle>
        </div>
        <CardDescription>
          Ative novas missões para aumentar seu potencial de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Compras Corporativas</CardTitle>
            <CardDescription>Missões especiais para compras da sua empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Vincule seu perfil corporativo para acessar missões exclusivas B2B 
              com cashback ampliado e benefícios para sua empresa.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full hover-scale" onClick={handleActivate}>
              Ativar Missões Corporativas
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Missões Sustentáveis</CardTitle>
            <CardDescription>Ajude o planeta e ganhe mais cashback</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Participe de missões sustentáveis comprando em empresas com certificação ESG
              ou convertendo parte do cashback em doações para causas ambientais.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full hover-scale" onClick={handleActivate}>
              Ativar Missões Sustentáveis
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
};

export default AvailableMissions;
