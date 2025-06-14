
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import OAuthButtons from './OAuthButtons';

interface CompanyLoginFormProps {
  onGoogleLogin?: () => Promise<void>; // Mantido para compatibilidade
}

const CompanyLoginForm: React.FC<CompanyLoginFormProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Erro ao fazer login", {
          description: error.message,
        });
      } else {
        toast.success("Login realizado com sucesso!");
        navigate("/company/dashboard");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao fazer login");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="company-email">E-mail</Label>
        <Input 
          id="company-email" 
          placeholder="nome@empresa.com" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="company-password">Senha</Label>
          <Link to="/auth/forgot-password" className="text-xs text-primary hover:underline">
            Esqueceu a senha?
          </Link>
        </div>
        <Input 
          id="company-password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Entrando...' : 'Entrar'}
      </Button>
      
      <OAuthButtons />
    </form>
  );
};

export default CompanyLoginForm;
