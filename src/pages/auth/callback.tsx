
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { UserType } from '@/types/auth';

// Dialog para escolher o tipo de usuário
const UserTypeDialog = ({ onSelect }: { onSelect: (type: UserType) => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao sistema de cashback!</h2>
        <p className="text-muted-foreground mb-6">Para continuar, precisamos saber como você deseja utilizar nossa plataforma.</p>
        <div className="grid gap-4">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center h-auto py-6" 
            onClick={() => onSelect('company')}
          >
            <span className="text-lg font-medium">Sou uma Empresa</span>
            <span className="text-sm text-muted-foreground mt-1">
              Quero oferecer cashback aos meus clientes
            </span>
          </Button>
          <Button
            className="flex flex-col items-center justify-center h-auto py-6"
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
  const [sessionData, setSessionData] = useState<any>(null);

  const determineUserType = (email: string): UserType => {
    // Verificando se o email parece ser empresarial
    if (email.includes('.com.br') || 
        email.includes('.co') ||
        /\.org$/i.test(email) ||
        /\.gov/i.test(email) ||
        email.includes('empresa') ||
        email.includes('business') ||
        email.includes('corp')) {
      return 'company';
    }
    return 'client';
  };

  const handleSelectUserType = async (userType: UserType) => {
    try {
      const { error: updateError } = await supabase.auth.updateUser({
        data: { user_type: userType }
      });
      
      if (updateError) {
        toast.error("Erro ao atualizar perfil do usuário");
        navigate('/auth/login');
        return;
      }
      
      toast.success("Tipo de usuário definido com sucesso!");
      navigate(userType === 'company' ? '/company/dashboard' : '/client/dashboard');
    } catch (error) {
      console.error("Error updating user type:", error);
      toast.error("Ocorreu um erro ao processar sua solicitação");
      navigate('/auth/login');
    }
  };

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        setMessage('Erro na autenticação');
        toast.error("Erro ao processar login", {
          description: error.message,
        });
        setTimeout(() => navigate('/auth/login'), 1500);
        return;
      }

      if (data?.session) {
        // Verifica se é um novo usuário ou login via Google/OAuth
        const isOAuthUser = data.session.user.app_metadata?.provider === 'google' || 
                           data.session.user.app_metadata?.provider === 'github';
        
        // Verifica se o tipo de usuário já está definido
        const userTypeExists = data.session.user.user_metadata?.user_type;
        
        // Se for OAuth e não tiver tipo definido, mostra diálogo ou determina automaticamente
        if (isOAuthUser && !userTypeExists) {
          // Opção 1: Mostrar diálogo para o usuário escolher
          setSessionData(data.session);
          setShowUserTypeDialog(true);
          
          // Opção 2: Determinar automaticamente pelo email (comentado)
          // const email = data.session.user.email || '';
          // const userType = determineUserType(email);
          // handleSelectUserType(userType);
          return;
        }
        
        // Para usuários existentes ou novos com tipo já definido
        const userType = data.session.user.user_metadata?.user_type as UserType;
        let redirectPath = '/client/dashboard'; // Default para cliente
        
        if (userType === 'company') {
          redirectPath = '/company/dashboard';
        } else if (!userType) {
          // Caso ainda não tenha tipo definido (improvável chegar aqui), determina pelo email
          const email = data.session.user.email || '';
          const determinedType = determineUserType(email);
          
          if (determinedType === 'company') {
            redirectPath = '/company/dashboard';
          }
          
          // Atualiza os metadados com o tipo determinado
          await supabase.auth.updateUser({
            data: { user_type: determinedType }
          });
        }
        
        toast.success("Login realizado com sucesso!");
        navigate(redirectPath);
      } else {
        setMessage('Sessão não encontrada');
        toast.error("Sessão não encontrada");
        setTimeout(() => navigate('/auth/login'), 1500);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  if (showUserTypeDialog) {
    return <UserTypeDialog onSelect={handleSelectUserType} />;
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
        <h2 className="text-xl font-medium">{message}</h2>
        <p className="text-muted-foreground mt-2">
          Você será redirecionado em instantes
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;
