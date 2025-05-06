
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyRegisterForm from '@/components/auth/CompanyRegisterForm';
import ClientRegisterForm from '@/components/auth/ClientRegisterForm';
import RegisterCardFooter from '@/components/auth/RegisterCardFooter';
import { useRegisterForm } from '@/hooks/auth/useRegisterForm';

const Register: React.FC = () => {
  const { step } = useRegisterForm({ userType: 'company' });

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
            <CompanyRegisterForm />
          </CardContent>
          {step < 3 && (
            <CardFooter>
              <RegisterCardFooter />
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
            <ClientRegisterForm />
          </CardContent>
          <CardFooter>
            <RegisterCardFooter />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Register;
