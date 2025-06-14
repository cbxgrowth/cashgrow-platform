
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "../services/auth.service";
import { toast } from "sonner";
import { AUTH_CONSTANTS } from '@/constants/auth.constants';
import OAuthButtons from '@/components/auth/OAuthButtons';

interface ClientLoginFormProps {
  onGoogleLogin?: () => Promise<void>; // Mantido para compatibilidade
}

const ClientLoginForm: React.FC<ClientLoginFormProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!AUTH_CONSTANTS.VALIDATION.EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await authService.signIn({
        email: formData.email,
        password: formData.password
      });

      if (result.success) {
        toast.success("Login realizado com sucesso!");
        navigate(AUTH_CONSTANTS.ROUTES.CLIENT_DASHBOARD);
      } else {
        toast.error("Erro ao fazer login", {
          description: result.error,
        });
      }
    } catch (error) {
      console.error("Erro inesperado no login:", error);
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="client-email">E-mail ou CPF</Label>
        <Input 
          id="client-email" 
          placeholder="nome@email.com ou CPF"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={errors.email ? 'border-destructive' : ''}
          required
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="client-password">Senha</Label>
          <Link 
            to="/auth/forgot-password" 
            className="text-xs text-primary hover:underline"
            tabIndex={isLoading ? -1 : 0}
          >
            Esqueceu a senha?
          </Link>
        </div>
        <Input 
          id="client-password" 
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className={errors.password ? 'border-destructive' : ''}
          required
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading}
      >
        {isLoading ? 'Entrando...' : 'Entrar'}
      </Button>
      
      <OAuthButtons />
    </form>
  );
};

export default ClientLoginForm;
