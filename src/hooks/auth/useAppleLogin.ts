
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useAppleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAppleLogin = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      
      if (error) {
        console.error('Apple login error:', error);
        toast.error("Erro ao fazer login com Apple", {
          description: error.message,
        });
      }
    } catch (error) {
      console.error("Apple login error:", error);
      toast.error("Ocorreu um erro ao fazer login com Apple");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleAppleLogin,
    isLoading
  };
};
