
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { UserType } from '@/types/auth';

interface RegisterFormProps {
  userType: UserType;
}

export const useRegisterForm = ({ userType }: RegisterFormProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRegistration = async (
    email: string,
    password: string,
    passwordConfirm: string,
    userData: Record<string, any>
  ) => {
    if (password !== passwordConfirm) {
      toast.error("As senhas não coincidem");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...userData,
            user_type: userType
          }
        }
      });
      
      if (error) {
        toast.error("Erro ao criar conta", {
          description: error.message,
        });
      } else {
        if (userType === 'company') {
          nextStep(); // Show success step for companies
        } else {
          toast.success("Conta criada com sucesso!", {
            description: "Verifique seu email para confirmar seu cadastro.",
          });
          navigate("/auth/login");
        }
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao registrar");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    step,
    nextStep,
    prevStep,
    handleRegistration
  };
};
