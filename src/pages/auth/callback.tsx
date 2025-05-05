
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        toast.error("Erro ao processar login", {
          description: error.message,
        });
        navigate('/auth/login');
        return;
      }

      if (data?.session) {
        // Verificar o tipo de usuário nos metadados
        const userType = data.session.user.user_metadata?.user_type;
        
        // Se não houver tipo de usuário especificado, verificamos o email
        // para determinar se é um email corporativo ou não
        let redirectPath = '/client/dashboard'; // Default to client
        
        if (userType === 'company') {
          redirectPath = '/company/dashboard';
        } else if (!userType) {
          const email = data.session.user.email || '';
          // Verificação simplista para email corporativo
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
        toast.error("Sessão não encontrada");
        navigate('/auth/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
        <h2 className="text-xl font-medium">Autenticando...</h2>
        <p className="text-muted-foreground mt-2">
          Você será redirecionado em instantes
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;
