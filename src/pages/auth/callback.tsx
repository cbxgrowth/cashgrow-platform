
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { UserType } from '@/types/auth';
import { Loader2 } from 'lucide-react';

// Dialog para escolher o tipo de usuário
const UserTypeDialog = ({ onSelect }: { onSelect: (type: UserType) => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao sistema de cashback!</h2>
        <p className="text-muted-foreground mb-6">
          Para continuar, precisamos saber como você deseja utilizar nossa plataforma.
        </p>
        <div className="grid gap-4">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center h-auto py-6 text-left" 
            onClick={() => onSelect('company')}
          >
            <span className="text-lg font-medium">Sou uma Empresa</span>
            <span className="text-sm text-muted-foreground mt-1">
              Quero oferecer cashback aos meus clientes
            </span>
          </Button>
          <Button
            className="flex flex-col items-center justify-center h-auto py-6 text-left"
            onClick={() => onSelect('client')}
          >
            <span className="text-lg font-medium">Sou um Cliente</span>
            <span className="text-sm text-muted-foreground mt-1">
              Quero receber cashback em minhas compras
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const AuthCallback = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Autenticando...');
  const [showUserTypeDialog, setShowUserTypeDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(true);

  const determineUserType = (email: string): UserType => {
    // Heurística melhorada para determinar tipo de usuário
    const businessIndicators = [
      '.com.br', '.co', '.org', '.gov', '.edu',
      'empresa', 'business', 'corp', 'admin', 'comercial',
      'vendas', 'contato', 'info'
    ];
    
    const emailLower = email.toLowerCase();
    
    if (businessIndicators.some(indicator => emailLower.includes(indicator))) {
      return 'company';
    }
    
    return 'client';
  };

  const handleSelectUserType = async (userType: UserType) => {
    setIsProcessing(true);
    
    try {
      const { error: updateError } = await supabase.auth.updateUser({
        data: { user_type: userType }
      });
      
      if (updateError) {
        console.error('Erro ao atualizar tipo de usuário:', updateError);
        toast.error("Erro ao definir tipo de usuário");
        navigate('/auth/login');
        return;
      }
      
      toast.success("Conta configurada com sucesso!");
      
      // Delay para garantir que a atualização foi processada
      setTimeout(() => {
        navigate(userType === 'company' ? '/company/dashboard' : '/client/dashboard');
      }, 1000);
      
    } catch (error) {
      console.error("Erro ao processar tipo de usuário:", error);
      toast.error("Ocorreu um erro ao processar sua solicitação");
      navigate('/auth/login');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Aguardar um pouco para garantir que o callback foi processado
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Erro na autenticação:', error);
          setMessage('Erro na autenticação');
          toast.error("Erro ao processar login", {
            description: error.message,
          });
          setTimeout(() => navigate('/auth/login'), 2000);
          return;
        }

        if (!data?.session) {
          setMessage('Sessão não encontrada');
          toast.error("Sessão não encontrada");
          setTimeout(() => navigate('/auth/login'), 2000);
          return;
        }

        const { session } = data;
        const isOAuthUser = session.user.app_metadata?.provider === 'google';
        const userTypeExists = session.user.user_metadata?.user_type;
        
        // Se for OAuth e não tiver tipo definido, mostrar diálogo
        if (isOAuthUser && !userTypeExists) {
          setShowUserTypeDialog(true);
          setIsProcessing(false);
          return;
        }
        
        // Para usuários com tipo já definido
        const userType = session.user.user_metadata?.user_type as UserType;
        let redirectPath = '/client/dashboard'; // Default
        
        if (userType === 'company') {
          redirectPath = '/company/dashboard';
        } else if (!userType && session.user.email) {
          // Determinar tipo automaticamente se não estiver definido
          const determinedType = determineUserType(session.user.email);
          redirectPath = determinedType === 'company' ? '/company/dashboard' : '/client/dashboard';
          
          // Atualizar metadados silenciosamente
          supabase.auth.updateUser({
            data: { user_type: determinedType }
          }).catch(console.error);
        }
        
        toast.success("Login realizado com sucesso!");
        navigate(redirectPath);
        
      } catch (error) {
        console.error('Erro inesperado no callback:', error);
        setMessage('Erro inesperado');
        toast.error("Erro inesperado");
        setTimeout(() => navigate('/auth/login'), 2000);
      } finally {
        setIsProcessing(false);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  if (showUserTypeDialog && !isProcessing) {
    return <UserTypeDialog onSelect={handleSelectUserType} />;
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <h2 className="text-xl font-medium">{message}</h2>
        <p className="text-muted-foreground">
          {isProcessing ? 'Processando sua autenticação...' : 'Você será redirecionado em instantes'}
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;
