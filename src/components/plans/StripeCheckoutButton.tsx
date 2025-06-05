
// Componente refatorado com melhor tipagem e tratamento de erro
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard, AlertCircle } from 'lucide-react';
import { useStripeSubscription } from '@/hooks/useStripeSubscription';
import { Plan } from '@/types/plans';
import { toast } from 'sonner';

interface StripeCheckoutButtonProps {
  plan: Plan;
  isCurrentPlan?: boolean;
  disabled?: boolean;
  className?: string;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ 
  plan, 
  isCurrentPlan = false, 
  disabled = false,
  className = ""
}) => {
  const [loading, setLoading] = useState(false);
  const { createCheckout } = useStripeSubscription();

  // Handler melhorado com validações e feedback
  const handleCheckout = async () => {
    // Validação para plano gratuito
    if (plan.price === 0) {
      toast.info('Este é um plano gratuito, não requer pagamento');
      return;
    }

    // Validação de ID do plano
    if (!plan.id) {
      toast.error('Erro: ID do plano não encontrado');
      return;
    }
    
    try {
      setLoading(true);
      await createCheckout(plan.id);
      
      // Feedback de sucesso
      toast.success('Redirecionando para o checkout...');
    } catch (error) {
      console.error('Erro no checkout:', error);
      toast.error('Falha ao processar checkout. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Função para determinar texto do botão com lógica clara
  const getButtonText = (): string => {
    if (isCurrentPlan) return 'Plano Atual';
    if (plan.price === 0) return 'Continuar Gratuito';
    return 'Assinar Agora';
  };

  // Função para determinar variante do botão
  const getButtonVariant = () => {
    if (isCurrentPlan) return 'outline';
    if (plan.price === 0) return 'secondary';
    return 'default';
  };

  // Função para determinar se botão deve estar desabilitado
  const isButtonDisabled = (): boolean => {
    return isCurrentPlan || disabled || loading;
  };

  return (
    <Button 
      className={`w-full transition-all duration-200 ${className}`}
      variant={getButtonVariant()}
      disabled={isButtonDisabled()}
      onClick={handleCheckout}
      aria-label={`${getButtonText()} - ${plan.name}`}
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
          {isCurrentPlan && (
            <AlertCircle className="h-4 w-4 mr-2" />
          )}
          {getButtonText()}
        </>
      )}
    </Button>
  );
};

export default StripeCheckoutButton;
