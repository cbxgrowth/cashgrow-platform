
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Textarea } from '@/components/ui/textarea';

const BusinessInfoTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Informações da Empresa</CardTitle>
        <CardDescription>
          Atualize os dados da sua empresa
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Nome da Empresa</Label>
              <div className="relative">
                <Building2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="company-name" placeholder="Nome da empresa" defaultValue="Tech Store" className="pl-8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail de Contato</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="contato@empresa.com" defaultValue="contato@techstore.com" className="pl-8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone de Contato</Label>
              <div className="relative">
                <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 3456-7890" className="pl-8" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" placeholder="00.000.000/0000-00" defaultValue="12.345.678/0001-90" disabled />
              <p className="text-xs text-muted-foreground">O CNPJ não pode ser alterado</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <Globe className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="website" placeholder="https://www.empresa.com" defaultValue="https://www.techstore.com" className="pl-8" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <div className="relative">
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="address" placeholder="Endereço completo" defaultValue="Av. Paulista, 1000 - São Paulo/SP" className="pl-8" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Descrição da Empresa</Label>
          <Textarea 
            id="description" 
            placeholder="Descreva sua empresa em poucas palavras" 
            defaultValue="A Tech Store é uma loja especializada em produtos de tecnologia, oferecendo os melhores produtos com cashback exclusivo para nossos clientes."
            className="min-h-[100px]"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sector">Setor de Atuação</Label>
          <select 
            id="sector"
            className="w-full p-2 border rounded-md"
            defaultValue="tecnologia"
          >
            <option value="tecnologia">Tecnologia</option>
            <option value="alimentacao">Alimentação</option>
            <option value="moda">Moda e Vestuário</option>
            <option value="saude">Saúde e Bem-estar</option>
            <option value="servicos">Serviços</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="hover-scale">Salvar Alterações</Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessInfoTab;
