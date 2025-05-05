
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // Company form fields
  const [companyName, setCompanyName] = useState('');
  const [companyCnpj, setCompanyCnpj] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyPasswordConfirm, setCompanyPasswordConfirm] = useState('');
  const [companySegment, setCompanySegment] = useState('');

  // Client form fields
  const [clientName, setClientName] = useState('');
  const [clientCpf, setClientCpf] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPassword, setClientPassword] = useState('');
  const [clientPasswordConfirm, setClientPasswordConfirm] = useState('');
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleCompanyRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (companyPassword !== companyPasswordConfirm) {
      toast.error("As senhas não coincidem");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email: companyEmail,
        password: companyPassword,
        options: {
          data: {
            company_name: companyName,
            cnpj: companyCnpj,
            phone: companyPhone,
            segment: companySegment,
            user_type: 'company'
          }
        }
      });
      
      if (error) {
        toast.error("Erro ao criar conta", {
          description: error.message,
        });
      } else {
        nextStep();
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao registrar");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClientRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (clientPassword !== clientPasswordConfirm) {
      toast.error("As senhas não coincidem");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email: clientEmail,
        password: clientPassword,
        options: {
          data: {
            full_name: clientName,
            cpf: clientCpf,
            user_type: 'client'
          }
        }
      });
      
      if (error) {
        toast.error("Erro ao criar conta", {
          description: error.message,
        });
      } else {
        toast.success("Conta criada com sucesso!", {
          description: "Verifique seu email para confirmar seu cadastro.",
        });
        navigate("/auth/login");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao registrar");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) {
        toast.error("Erro ao registrar com Google", {
          description: error.message,
        });
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao registrar com Google");
      console.error("Google sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Tabs defaultValue="company" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="company">Empresa</TabsTrigger>
        <TabsTrigger value="client">Cliente</TabsTrigger>
      </TabsList>
      
      <TabsContent value="company">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Cadastro de Empresa</CardTitle>
            <CardDescription>
              Crie sua conta e comece a oferecer cashback aos seus clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input 
                    id="company-name" 
                    placeholder="Sua Empresa Ltda." 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-cnpj">CNPJ</Label>
                  <Input 
                    id="company-cnpj" 
                    placeholder="00.000.000/0001-00" 
                    value={companyCnpj}
                    onChange={(e) => setCompanyCnpj(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">E-mail</Label>
                  <Input 
                    id="company-email" 
                    placeholder="nome@empresa.com" 
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Telefone</Label>
                  <Input 
                    id="company-phone" 
                    placeholder="(99) 99999-9999"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
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
                  onClick={handleGoogleSignUp}
                  disabled={isLoading}
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
            )}
            
            {step === 2 && (
              <form onSubmit={handleCompanyRegistration} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-password">Senha</Label>
                  <Input 
                    id="company-password" 
                    type="password"
                    value={companyPassword}
                    onChange={(e) => setCompanyPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password-confirm">Confirme a senha</Label>
                  <Input 
                    id="company-password-confirm" 
                    type="password"
                    value={companyPasswordConfirm}
                    onChange={(e) => setCompanyPasswordConfirm(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-segment">Segmento</Label>
                  <select 
                    id="company-segment"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={companySegment}
                    onChange={(e) => setCompanySegment(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>Selecione o segmento</option>
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
            )}
            
            {step === 3 && (
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
            )}
          </CardContent>
          {step < 3 && (
            <CardFooter>
              <p className="text-sm text-muted-foreground text-center w-full">
                Já tem uma conta?{" "}
                <Link to="/auth/login" className="text-primary hover:underline">
                  Entrar
                </Link>
              </p>
            </CardFooter>
          )}
        </Card>
      </TabsContent>
      
      <TabsContent value="client">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Cadastro de Cliente</CardTitle>
            <CardDescription>
              Crie sua conta para gerenciar seu cashback em diversas empresas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleClientRegistration} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-name">Nome Completo</Label>
                <Input 
                  id="client-name" 
                  placeholder="Seu nome completo" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-cpf">CPF</Label>
                <Input 
                  id="client-cpf" 
                  placeholder="000.000.000-00" 
                  value={clientCpf}
                  onChange={(e) => setClientCpf(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-email">E-mail</Label>
                <Input 
                  id="client-email" 
                  placeholder="seu@email.com" 
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password">Senha</Label>
                <Input 
                  id="client-password" 
                  type="password"
                  value={clientPassword}
                  onChange={(e) => setClientPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password-confirm">Confirme a senha</Label>
                <Input 
                  id="client-password-confirm" 
                  type="password"
                  value={clientPasswordConfirm}
                  onChange={(e) => setClientPasswordConfirm(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
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
                onClick={handleGoogleSignUp}
                disabled={isLoading}
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
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Já tem uma conta?{" "}
              <Link to="/auth/login" className="text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Register;
