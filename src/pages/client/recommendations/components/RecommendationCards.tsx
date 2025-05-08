
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, TrendingUp, MapPin, Clock, Percent } from "lucide-react";
import { toast } from "sonner";
import PromotionCard from "@/components/PromotionCard";

import { 
  PersonalizedRecommendation, 
  TrendingRecommendation, 
  UpcomingRecommendation 
} from '../data/recommendationData';

interface RecommendationCardsProps {
  recommendations: PersonalizedRecommendation[] | TrendingRecommendation[] | UpcomingRecommendation[] | Array<PersonalizedRecommendation | TrendingRecommendation | UpcomingRecommendation>;
  type: 'personalized' | 'trending' | 'upcoming' | 'products';
}

export const RecommendationCards: React.FC<RecommendationCardsProps> = ({ recommendations, type }) => {
  const handleClick = () => {
    toast.success("Oferta salva nas suas favoritas!");
  };
  
  const handleRedeemCashback = (name: string) => {
    toast.success(`Cashback aplicado com sucesso para ${name}!`);
  };

  if (type === 'products') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec: any) => (
          <PromotionCard
            key={rec.id}
            id={rec.id.toString()}
            name={rec.name}
            description={rec.reasoning || rec.trendingReason || "Produto recomendado para você"}
            imageUrl={`https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=${rec.logo}`}
            price={99.90}
            originalPrice={rec.originalPrice || 129.90}
            cashbackPercentage={rec.cashbackPercentage}
            categoryName={rec.category}
            isNew={rec.isNew}
            isBestseller={rec.isBestseller}
            isPromotion={true}
            onRedeemCashback={() => handleRedeemCashback(rec.name)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {type === 'personalized' && recommendations.map((rec: any) => (
        <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center font-bold">
                {rec.logo}
              </div>
              <div>
                <CardTitle className="text-lg">{rec.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <ShoppingBag className="h-3 w-3" /> {rec.category}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-primary/5">
                <TrendingUp className="h-3 w-3 mr-1" />
                {rec.relevanceScore}% relevante
              </Badge>
              <div className="text-green-600 font-medium">
                {rec.cashbackPercentage}% cashback
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "{rec.reasoning}"
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{rec.distance}</span>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 pt-3">
            <Button className="w-full hover-scale" onClick={handleClick}>
              Ver Oferta
            </Button>
          </CardFooter>
        </Card>
      ))}

      {type === 'trending' && recommendations.map((rec: any) => (
        <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden border-warning/20">
          <div className="bg-gradient-to-r from-warning to-warning/70 text-warning-foreground text-xs px-3 py-1 font-medium w-full">
            OFERTA POR TEMPO LIMITADO
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warning/10 to-warning/30 flex items-center justify-center font-bold">
                {rec.logo}
              </div>
              <div>
                <CardTitle className="text-lg">{rec.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <ShoppingBag className="h-3 w-3" /> {rec.category}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                <Clock className="h-3 w-3 mr-1" />
                Termina em {rec.endsIn}
              </Badge>
              <div className="text-green-600 font-medium">
                {rec.cashbackPercentage}% cashback
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "{rec.trendingReason}"
            </p>
          </CardContent>
          <CardFooter className="bg-muted/30 pt-3">
            <Button className="w-full hover-scale bg-warning hover:bg-warning/80" onClick={handleClick}>
              Aproveitar Agora
            </Button>
          </CardFooter>
        </Card>
      ))}

      {type === 'upcoming' && recommendations.map((rec: any) => (
        <Card key={rec.id} className="shadow-sm hover-scale overflow-hidden border-secondary/20">
          <div className="bg-gradient-to-r from-secondary to-secondary/70 text-secondary-foreground text-xs px-3 py-1 font-medium w-full">
            PREVISÃO DE COMPRA
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/30 flex items-center justify-center font-bold">
                {rec.logo}
              </div>
              <div>
                <CardTitle className="text-lg">{rec.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <ShoppingBag className="h-3 w-3" /> {rec.category}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                <Clock className="h-3 w-3 mr-1" />
                Previsto para {rec.predictedDate}
              </Badge>
              <div>
                <span className="text-muted-foreground line-through mr-1">{rec.usualCashback}%</span>
                <span className="text-green-600 font-medium">{rec.boostedCashback}% cashback</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "{rec.reasoning}"
            </p>
          </CardContent>
          <CardFooter className="bg-muted/30 pt-3">
            <Button className="w-full hover-scale bg-secondary hover:bg-secondary/80" onClick={handleClick}>
              Receber Lembrete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
