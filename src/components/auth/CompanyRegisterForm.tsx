
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterForm } from '@/hooks/auth/useRegisterForm';
import { useGoogleLogin } from '@/hooks/auth/useGoogleLogin';
import { CheckCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CompanyRegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, step, nextStep, prevStep, handleRegistration } = useRegisterForm({ userType: 'company' });
  const { handleGoogleLogin, isLoading: isGoogleLoading } = useGoogleLogin();
  
  // Company form fields
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [segment, setSegment] = useState('');

  const handleStepOne = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleStepTwo = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegistration(email, password, passwordConfirm, {
      company_name: name,
      cnpj: cnpj,
      phone: phone,
      segment: segment
    });
  };

  if (step === 1) {
    return (
      <form onSubmit={handleStepOne} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company-name">Nome da Empresa</Label>
          <Input 
            id="company-name" 
            placeholder="Sua Empresa Ltda." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-cnpj">CNPJ</Label>
          <Input 
            id="company-cnpj" 
            placeholder="00.000.000/0001-00" 
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
        </div>
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
          <Label htmlFor="company-phone">Telefone</Label>
          <Input 
            id="company-phone" 
            placeholder="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
          {isLoading ? 'Processando...' : 'Continuar'}
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
  }
  
  if (step === 2) {
    return (
      <form onSubmit={handleStepTwo} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company-password">Senha</Label>
          <Input 
            id="company-password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-password-confirm">Confirme a senha</Label>
          <Input 
            id="company-password-confirm" 
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-segment">Segmento</Label>
          <select 
            id="company-segment"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o segmento</option>
            <option value="retail">Varejo</option>
            <option value="food">Alimentação</option>
            <option value="services">Serviços</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Outro</option>
          </select>
        </div>
        <div className="flex justify-between gap-4">
          <Button variant="outline" type="button" onClick={prevStep} className="flex-1" disabled={isLoading}>
            Voltar
          </Button>
          <Button type="submit" className="flex-1" disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Cadastrar'}
          </Button>
        </div>
      </form>
    );
  }
  
  // Step 3 - Success
  return (
    <div className="space-y-6">
      <div className="text-center py-6">
        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-medium mb-2">Cadastro concluído!</h3>
        <p className="text-muted-foreground">
          Sua conta foi criada com sucesso. Agora você pode configurar seu programa de cashback.
        </p>
      </div>
      <div>
        <Button 
          className="w-full" 
          onClick={() => navigate("/company/dashboard")}
        >
          Acessar Dashboard
        </Button>
      </div>
    </div>
  );
};

export default CompanyRegisterForm;
