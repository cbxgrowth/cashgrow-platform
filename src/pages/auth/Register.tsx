
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input id="company-name" placeholder="Sua Empresa Ltda." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-cnpj">CNPJ</Label>
                  <Input id="company-cnpj" placeholder="00.000.000/0001-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">E-mail</Label>
                  <Input id="company-email" placeholder="nome@empresa.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Telefone</Label>
                  <Input id="company-phone" placeholder="(99) 99999-9999" />
                </div>
                <Button onClick={nextStep} className="w-full">
                  Continuar
                </Button>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-password">Senha</Label>
                  <Input id="company-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password-confirm">Confirme a senha</Label>
                  <Input id="company-password-confirm" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-segment">Segmento</Label>
                  <select 
                    id="company-segment"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    Voltar
                  </Button>
                  <Button onClick={nextStep} className="flex-1">
                    Continuar
                  </Button>
                </div>
              </div>
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
                  <Button className="w-full">
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
                <Link to="/login" className="text-primary hover:underline">
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
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-name">Nome Completo</Label>
                <Input id="client-name" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-cpf">CPF</Label>
                <Input id="client-cpf" placeholder="000.000.000-00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-email">E-mail</Label>
                <Input id="client-email" placeholder="seu@email.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password">Senha</Label>
                <Input id="client-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-password-confirm">Confirme a senha</Label>
                <Input id="client-password-confirm" type="password" />
              </div>
              <Button className="w-full">
                Criar conta
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-primary hover:underline">
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
