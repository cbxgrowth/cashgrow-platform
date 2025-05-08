
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Phone, MapPin, Globe, Save } from "lucide-react";
import { Textarea } from '@/components/ui/textarea';

const BusinessInfoTab: React.FC = () => {
  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-accent" />
          <span>Informações da Empresa</span>
        </CardTitle>
        <CardDescription>
          Atualize os dados da sua empresa
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-sm font-medium">Nome da Empresa</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="company-name" 
                  placeholder="Nome da empresa" 
                  defaultValue="Tech Store" 
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">E-mail de Contato</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="contato@empresa.com" 
                  defaultValue="contato@techstore.com" 
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Telefone de Contato</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="phone" 
                  placeholder="(00) 00000-0000" 
                  defaultValue="(11) 3456-7890" 
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cnpj" className="text-sm font-medium">CNPJ</Label>
              <Input 
                id="cnpj" 
                placeholder="00.000.000/0000-00" 
                defaultValue="12.345.678/0001-90" 
                disabled 
                className="bg-muted/50" 
              />
              <p className="text-xs text-muted-foreground">O CNPJ não pode ser alterado</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website" className="text-sm font-medium">Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="website" 
                  placeholder="https://www.empresa.com" 
                  defaultValue="https://www.techstore.com" 
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">Endereço</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="address" 
                  placeholder="Endereço completo" 
                  defaultValue="Av. Paulista, 1000 - São Paulo/SP" 
                  className="pl-10 transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <Label htmlFor="description" className="text-sm font-medium">Descrição da Empresa</Label>
          <Textarea 
            id="description" 
            placeholder="Descreva sua empresa em poucas palavras" 
            defaultValue="A Tech Store é uma loja especializada em produtos de tecnologia, oferecendo os melhores produtos com cashback exclusivo para nossos clientes."
            className="min-h-[120px] resize-none transition-all duration-200 border-muted focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sector" className="text-sm font-medium">Setor de Atuação</Label>
          <select 
            id="sector"
            className="w-full p-2 border rounded-md bg-background transition-all duration-200 border-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
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
      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale">
          <Save className="h-4 w-4 mr-1" /> Salvar Alterações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessInfoTab;
