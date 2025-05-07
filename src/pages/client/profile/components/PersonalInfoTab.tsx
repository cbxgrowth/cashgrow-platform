
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone } from "lucide-react";

const PersonalInfoTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>
          Atualize seus dados pessoais aqui
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <div className="relative">
                <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="name" placeholder="Seu nome completo" defaultValue="João Silva" className="pl-8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="seu@email.com" defaultValue="joao.silva@email.com" className="pl-8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <div className="relative">
                <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 98765-4321" className="pl-8" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="000.000.000-00" defaultValue="123.456.789-00" disabled />
              <p className="text-xs text-muted-foreground">O CPF não pode ser alterado</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
              <Input id="birthdate" type="date" defaultValue="1990-01-01" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Seu endereço completo" defaultValue="Rua das Flores, 123 - São Paulo/SP" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="hover-scale">Salvar Alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default PersonalInfoTab;
