
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterForm } from '@/hooks/auth/useRegisterForm';
import { useGoogleLogin } from '@/hooks/auth/useGoogleLogin';

const ClientRegisterForm: React.FC = () => {
  const { isLoading, handleRegistration } = useRegisterForm({ userType: 'client' });
  const { handleGoogleLogin, isLoading: isGoogleLoading } = useGoogleLogin();
  
  // Client form fields
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegistration(email, password, passwordConfirm, {
      full_name: name,
      cpf: cpf
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="client-name">Nome Completo</Label>
        <Input 
          id="client-name" 
          placeholder="Seu nome completo" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="client-cpf">CPF</Label>
        <Input 
          id="client-cpf" 
          placeholder="000.000.000-00" 
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="client-email">E-mail</Label>
        <Input 
          id="client-email" 
          placeholder="seu@email.com" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="client-password">Senha</Label>
        <Input 
          id="client-password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="client-password-confirm">Confirme a senha</Label>
        <Input 
          id="client-password-confirm" 
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
        {isLoading ? 'Registrando...' : 'Criar conta'}
      </Button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou registre-se com</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        type="button" 
        className="w-full" 
        onClick={handleGoogleLogin}
        disabled={isLoading || isGoogleLoading}
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </Button>
    </form>
  );
};

export default ClientRegisterForm;
