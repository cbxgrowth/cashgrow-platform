
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, CheckCircle2, AlertCircle } from "lucide-react";

const APIConnectionSection: React.FC = () => {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <Link className="h-5 w-5 text-accent" />
        Conexão da API
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="api-url">URL da API</Label>
          <Input
            id="api-url"
            placeholder="https://sua-loja.com/api"
            value="https://techstore.com/api"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="api-key">Chave da API</Label>
          <Input
            id="api-key"
            type="password"
            placeholder="sk_live_..."
            value="sk_live_abc123..."
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-medium">Status da Conexão</h4>
            <p className="text-sm text-muted-foreground">Conectado e sincronizando</p>
          </div>
        </div>
        <Badge variant="default">Conectado</Badge>
      </div>

      <Button variant="outline">
        Testar Conexão
      </Button>
    </div>
  );
};

export default APIConnectionSection;
