
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ProductCard,
  ProductCardImage, 
  ProductCardContent, 
  CardFooter
} from "@/components/ui/card";
import { ShoppingBag, Tag, Percent, Star } from "lucide-react";
import { toast } from "sonner";

interface PromotionCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  cashbackPercentage: number;
  categoryName: string;
  isNew?: boolean;
  isBestseller?: boolean;
  isPromotion?: boolean;
  onRedeemCashback?: () => void;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  price,
  originalPrice,
  cashbackPercentage,
  categoryName,
  isNew = false,
  isBestseller = false,
  isPromotion = false,
  onRedeemCashback
}) => {
  const handleAddToCart = () => {
    toast.success(`${name} adicionado ao carrinho`);
  };

  const handleRedeemCashback = () => {
    if (onRedeemCashback) {
      onRedeemCashback();
    } else {
      toast.success(`Cashback aplicado para ${name}`);
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <ProductCard className="h-full">
      <ProductCardImage>
        <img 
          src={imageUrl} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">Novo</Badge>
        )}
        {isBestseller && (
          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600">
            <Star className="h-3 w-3 mr-1" /> Mais Vendido
          </Badge>
        )}
        {isPromotion && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Promoção</Badge>
        )}
        <Badge className="absolute bottom-2 right-2 bg-green-500/90 hover:bg-green-600/90 text-white">
          <Percent className="h-3 w-3 mr-1" /> {cashbackPercentage}% cashback
        </Badge>
      </ProductCardImage>
      
      <ProductCardContent>
        <div className="mb-2">
          <Badge variant="outline" className="bg-primary/5 text-xs">
            <Tag className="h-3 w-3 mr-1" /> {categoryName}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            {originalPrice && originalPrice > price ? (
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
                <span className="font-bold text-lg">{formatPrice(price)}</span>
              </div>
            ) : (
              <span className="font-bold text-lg">{formatPrice(price)}</span>
            )}
            
            <div className="text-sm text-green-600 font-medium">
              Ganhe {formatPrice(price * cashbackPercentage / 100)}
            </div>
          </div>
        </div>
      </ProductCardContent>
      
      <CardFooter className="border-t flex flex-col sm:flex-row gap-2 pt-4">
        <Button 
          className="w-full sm:w-auto flex-1"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4 mr-1" /> Comprar
        </Button>
        <Button 
          variant="cashback"
          className="w-full sm:w-auto flex-1"
          onClick={handleRedeemCashback}
        >
          <Percent className="h-4 w-4 mr-1" /> Usar Cashback
        </Button>
      </CardFooter>
    </ProductCard>
  );
};

export default PromotionCard;
