
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type OAuthProvider = 'google' | 'apple';

export const useOAuthLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthLogin = async (provider: OAuthProvider) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      
      if (error) {
        console.error(`${provider} login error:`, error);
        toast.error(`Erro ao fazer login com ${provider === 'google' ? 'Google' : 'Apple'}`, {
          description: error.message,
        });
      }
    } catch (error) {
      console.error(`${provider} login error:`, error);
      toast.error(`Ocorreu um erro ao fazer login com ${provider === 'google' ? 'Google' : 'Apple'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleOAuthLogin,
    isLoading
  };
};
