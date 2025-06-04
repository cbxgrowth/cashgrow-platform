
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap } from 'lucide-react';
import { Plan } from '@/types/plans';

interface PlanCardProps {
  plan: Plan;
  isCurrentPlan?: boolean;
  onSubscribe?: (planId: number) => void;
  loading?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  plan, 
  isCurrentPlan = false, 
  onSubscribe,
  loading = false 
}) => {
  const getPlanIcon = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'premium':
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 'essencial':
        return <Star className="h-6 w-6 text-blue-500" />;
      default:
        return <Zap className="h-6 w-6 text-gray-500" />;
    }
  };

  const getCardVariant = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'premium':
        return 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200';
      case 'essencial':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200';
      default:
        return '';
    }
  };

  const benefits = [
    'Cashback padrão em todas as compras',
    plan.cashback_multiplier > 1 && `Cashback ${Math.round((plan.cashback_multiplier - 1) * 100)}% maior`,
    plan.pix_limit_per_month > 1 && `${plan.pix_limit_per_month === 999999 ? 'Resgates PIX ilimitados' : `${plan.pix_limit_per_month} resgates PIX/mês`}`,
    plan.has_exclusive_campaigns && 'Vouchers e cupons exclusivos',
    plan.has_early_access && 'Acesso antecipado a promoções',
    plan.priority_support && 'Atendimento prioritário',
    plan.has_bonus_dates && 'Cashback em dobro em datas especiais'
  ].filter(Boolean);

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg ${getCardVariant(plan.name)} ${isCurrentPlan ? 'ring-2 ring-primary' : ''}`}>
      {isCurrentPlan && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
          Seu Plano Atual
        </Badge>
      )}
      
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          {getPlanIcon(plan.name)}
        </div>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <div className="text-3xl font-bold text-primary">
          {plan.price === 0 ? 'Gratuito' : `R$ ${plan.price.toFixed(2)}`}
          {plan.price > 0 && <span className="text-sm text-muted-foreground">/mês</span>}
        </div>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button 
          className="w-full" 
          variant={isCurrentPlan ? "outline" : "default"}
          disabled={isCurrentPlan || loading}
          onClick={() => onSubscribe?.(plan.id)}
        >
          {isCurrentPlan ? 'Plano Atual' : 
           plan.price === 0 ? 'Continuar Gratuito' : 'Assinar Agora'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
