
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, Zap, Trophy, CreditCard } from "lucide-react";
import { toast } from "sonner";

const StatusCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <span>Seu Nível</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-2">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Nível Prata</h3>
            <p className="text-muted-foreground text-sm">500 pontos</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>500 pts</span>
              <span>1000 pts</span>
            </div>
            <Progress value={50} className="h-2" />
            <p className="text-xs text-muted-foreground text-center">
              500 pontos para o próximo nível
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Benefícios do Nível
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-warning/5 to-warning/10 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-warning" />
            <span>Missões do Dia</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Use seu cartão vinculado</span>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                +5% cashback
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Faça uma compra de qualquer valor hoje
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                <span>0/1 compras</span>
              </div>
              <Badge variant="outline">Válido hoje</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-warning hover:bg-warning/80" onClick={() => toast.success("Missão ativada com sucesso!")}>
            Ativar Missão
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-secondary" />
            <span>Ranking Semanal</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="font-bold">15</span>
              </div>
              <div>
                <p className="font-medium">Sua posição atual</p>
                <p className="text-xs text-muted-foreground">Entre 243 usuários</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Top 10 ganha cashback extra</p>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground">
              5 posições para entrar no Top 10
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Ver Ranking Completo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StatusCards;
