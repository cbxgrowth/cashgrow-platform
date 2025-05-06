
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyLoginForm from '@/components/auth/CompanyLoginForm';
import ClientLoginForm from '@/components/auth/ClientLoginForm';
import LoginCardFooter from '@/components/auth/LoginCardFooter';
import { useGoogleLogin } from '@/hooks/auth/useGoogleLogin';

const Login: React.FC = () => {
  const { handleGoogleLogin, isLoading } = useGoogleLogin();

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
            <CompanyLoginForm 
              onGoogleLogin={handleGoogleLogin} 
            />
          </CardContent>
          <CardFooter>
            <LoginCardFooter />
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
            <ClientLoginForm 
              onGoogleLogin={handleGoogleLogin} 
            />
          </CardContent>
          <CardFooter>
            <LoginCardFooter />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Login;
