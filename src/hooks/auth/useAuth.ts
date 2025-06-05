
import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { UserType } from '@/types/auth';

interface UseAuthReturn {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAuthenticated: boolean;
  userType: UserType | null;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Função para atualizar estado de auth de forma segura
  const updateAuthState = (newSession: Session | null) => {
    setSession(newSession);
    setUser(newSession?.user ?? null);
  };

  // Função para refresh manual da auth
  const refreshAuth = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Erro ao refresh auth:', error);
        return;
      }
      updateAuthState(session);
    } catch (error) {
      console.error('Erro inesperado no refresh auth:', error);
    }
  };

  useEffect(() => {
    // Configurar listener de mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        
        updateAuthState(session);
        
        // Não usar toast para eventos de token refresh para evitar spam
        if (event === 'SIGNED_IN' && session?.user) {
          toast.success('Login realizado com sucesso!');
        } else if (event === 'SIGNED_OUT') {
          toast.success('Logout realizado com sucesso!');
        }
        
        setLoading(false);
      }
    );

    // Verificar sessão existente
    supabase.auth.getSession().then(({ data: { session } }) => {
      updateAuthState(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Erro ao fazer logout", { description: error.message });
      }
    } catch (error) {
      console.error('Erro no signOut:', error);
      toast.error("Erro inesperado ao fazer logout");
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      
      if (error) {
        toast.error("Erro ao fazer login com Google", { description: error.message });
      }
    } catch (error) {
      console.error('Erro no signInWithGoogle:', error);
      toast.error("Erro inesperado ao fazer login com Google");
    }
  };

  // Extrair tipo de usuário dos metadados
  const userType: UserType | null = user?.user_metadata?.user_type || null;

  return {
    user,
    session,
    loading,
    isAuthenticated: !!user,
    userType,
    signOut,
    signInWithGoogle,
    refreshAuth
  };
};
