
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const APIConnectionSection: React.FC = () => {
  const handleTestConnection = () => {
    toast.success('Conexão testada com sucesso!');
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <Code className="h-5 w-5 text-accent" />
        Conexão com API da Loja
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="platform-type">Plataforma da Loja</Label>
            <select 
              id="platform-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Selecione uma plataforma</option>
              <option value="woocommerce">WooCommerce</option>
              <option value="shopify">Shopify</option>
              <option value="magento">Magento</option>
              <option value="vtex">VTEX</option>
              <option value="nuvemshop">Nuvemshop</option>
              <option value="other">Outra</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="store-url">URL da Loja</Label>
            <Input 
              id="store-url" 
              placeholder="https://minhaloja.com.br" 
              className="transition-all duration-200 border-muted focus:border-primary" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">Chave API</Label>
            <Input 
              id="api-key" 
              type="password"
              placeholder="Chave de API da sua plataforma" 
              className="transition-all duration-200 border-muted focus:border-primary" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="api-secret">API Secret</Label>
            <Input 
              id="api-secret" 
              type="password"
              placeholder="Chave secreta de API" 
              className="transition-all duration-200 border-muted focus:border-primary" 
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleTestConnection}>
            <CheckCircle2 className="h-4 w-4 mr-2" /> Testar Conexão
          </Button>
        </div>
      </div>
    </div>
  );
};

export default APIConnectionSection;
