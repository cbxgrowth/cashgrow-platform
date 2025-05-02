
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login: React.FC = () => {
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
            <div className="space-y-2">
              <Label htmlFor="company-email">E-mail</Label>
              <Input id="company-email" placeholder="nome@empresa.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="company-password">Senha</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input id="company-password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-primary hover:underline">
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
            <div className="space-y-2">
              <Label htmlFor="client-email">E-mail ou CPF</Label>
              <Input id="client-email" placeholder="nome@email.com ou CPF" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="client-password">Senha</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input id="client-password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-primary hover:underline">
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
