
import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { UserType } from '@/types/auth';
import { authRepository } from '@/repositories/auth.repository';

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

  const updateAuthState = (newSession: Session | null) => {
    setSession(newSession);
    setUser(newSession?.user ?? null);
  };

  const refreshAuth = async () => {
    try {
      const result = await authRepository.getCurrentSession();
      if (result.success) {
        updateAuthState(result.session);
      }
    } catch (error) {
      console.error('Erro inesperado no refresh auth:', error);
    }
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        
        updateAuthState(session);
        
        if (event === 'SIGNED_IN' && session?.user) {
          toast.success('Login realizado com sucesso!');
        } else if (event === 'SIGNED_OUT') {
          toast.success('Logout realizado com sucesso!');
        }
        
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      updateAuthState(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      const result = await authRepository.signOut();
      if (!result.success) {
        toast.error("Erro ao fazer logout", { description: result.error });
      }
    } catch (error) {
      console.error('Erro no signOut:', error);
      toast.error("Erro inesperado ao fazer logout");
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await authRepository.signInWithOAuth('google');
      if (!result.success) {
        toast.error("Erro ao fazer login com Google", { description: result.error });
      }
    } catch (error) {
      console.error('Erro no signInWithGoogle:', error);
      toast.error("Erro inesperado ao fazer login com Google");
    }
  };

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
