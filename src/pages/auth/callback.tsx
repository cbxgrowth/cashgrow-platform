
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Autenticando...');

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
        // Verifica se é um novo usuário ou login via Google
        const isNewUser = data.session.user.app_metadata?.provider === 'google' && 
                         !data.session.user.user_metadata?.user_type;
        
        // Se for um novo usuário sem tipo definido, podemos perguntar
        if (isNewUser) {
          // Podemos redirecionar para uma página de seleção de tipo de usuário
          // Por enquanto, vamos determinar pelo email
          const email = data.session.user.email || '';
          let userType = 'client'; // Padrão para cliente
          
          if (email.includes('.com.br') || 
              email.includes('.co') ||
              /\.org$/i.test(email) ||
              /\.gov/i.test(email)) {
            userType = 'company';
          }
          
          // Atualiza os metadados do usuário com o tipo determinado
          const { error: updateError } = await supabase.auth.updateUser({
            data: { user_type: userType }
          });
          
          if (updateError) {
            toast.error("Erro ao atualizar perfil do usuário");
            navigate('/auth/login');
            return;
          }
          
          toast.success("Conta criada com sucesso!");
          navigate(userType === 'company' ? '/company/dashboard' : '/client/dashboard');
          return;
        }
        
        // Para usuários existentes, verifica o tipo
        const userType = data.session.user.user_metadata?.user_type;
        let redirectPath = '/client/dashboard'; // Default para cliente
        
        if (userType === 'company') {
          redirectPath = '/company/dashboard';
        } else if (!userType) {
          // Caso ainda não tenha tipo definido, determina pelo email
          const email = data.session.user.email || '';
          if (email.includes('.com.br') || 
              email.includes('.co') ||
              /\.org$/i.test(email) ||
              /\.gov/i.test(email)) {
            redirectPath = '/company/dashboard';
          }
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
