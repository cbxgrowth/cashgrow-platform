
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard } from 'lucide-react';
import { useStripeSubscription } from '@/hooks/useStripeSubscription';
import { Plan } from '@/types/plans';

interface StripeCheckoutButtonProps {
  plan: Plan;
  isCurrentPlan?: boolean;
  disabled?: boolean;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ 
  plan, 
  isCurrentPlan = false, 
  disabled = false 
}) => {
  const [loading, setLoading] = useState(false);
  const { createCheckout } = useStripeSubscription();

  const handleCheckout = async () => {
    if (plan.price === 0) return; // Plano gratuito
    
    try {
      setLoading(true);
      await createCheckout(plan.id);
    } catch (error) {
      console.error('Erro no checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (isCurrentPlan) return 'Plano Atual';
    if (plan.price === 0) return 'Continuar Gratuito';
    return 'Assinar Agora';
  };

  const getButtonVariant = () => {
    if (isCurrentPlan) return 'outline';
    if (plan.price === 0) return 'secondary';
    return 'default';
  };

  return (
    <Button 
      className="w-full" 
      variant={getButtonVariant()}
      disabled={isCurrentPlan || disabled || loading}
      onClick={handleCheckout}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processando...
        </>
      ) : (
        <>
          {plan.price > 0 && !isCurrentPlan && (
            <CreditCard className="h-4 w-4 mr-2" />
          )}
          {getButtonText()}
        </>
      )}
    </Button>
  );
};

export default StripeCheckoutButton;
