
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPassword, setClientPassword] = useState('');

  const handleCompanyLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: companyEmail,
        password: companyPassword,
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

  const handleClientLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: clientEmail,
        password: clientPassword,
      });

      if (error) {
        toast.error("Erro ao fazer login", {
          description: error.message,
        });
      } else {
        toast.success("Login realizado com sucesso!");
        navigate("/client/dashboard");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao fazer login");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) {
        toast.error("Erro ao fazer login com Google", {
          description: error.message,
        });
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao fazer login com Google");
      console.error("Google login error:", error);
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
            <CardTitle className="text-2xl">Acesso para Empresas</CardTitle>
            <CardDescription>
              Acesse sua conta e gerencie seu programa de cashback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleCompanyLogin} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="company-password">Senha</Label>
                  <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input 
                  id="company-password" 
                  type="password"
                  value={companyPassword}
                  onChange={(e) => setCompanyPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              type="button" 
              className="w-full" 
              onClick={handleGoogleLogin}
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
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Não tem uma conta?{" "}
              <Link to="/auth/register" className="text-primary hover:underline">
                Criar conta
              </Link>
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="client">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Acesso para Clientes</CardTitle>
            <CardDescription>
              Gerencie seu cashback em diversas empresas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleClientLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-email">E-mail ou CPF</Label>
                <Input 
                  id="client-email" 
                  placeholder="nome@email.com ou CPF"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="client-password">Senha</Label>
                  <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input 
                  id="client-password" 
                  type="password"
                  value={clientPassword}
                  onChange={(e) => setClientPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              type="button" 
              className="w-full" 
              onClick={handleGoogleLogin}
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
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Não tem uma conta?{" "}
              <Link to="/auth/register" className="text-primary hover:underline">
                Criar conta
              </Link>
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Login;
