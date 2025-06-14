
import React from 'react';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw, Clock } from "lucide-react";

const SynchronizationSettingsSection: React.FC = () => {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <RefreshCw className="h-5 w-5 text-accent" />
        Configurações de Sincronização
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Frequência de Sincronização</Label>
          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
            <option value="realtime">Tempo Real</option>
            <option value="hourly">A cada hora</option>
            <option value="daily">Diário</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label>Última Sincronização</Label>
          <div className="flex items-center gap-2 p-2 border rounded bg-white dark:bg-slate-800">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Há 5 minutos</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Dados para Sincronizar</Label>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Produtos e Inventário</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Pedidos e Transações</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Dados de Clientes</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Relatórios de Vendas</span>
          </label>
        </div>
      </div>

      <Button variant="outline">
        <RefreshCw className="h-4 w-4 mr-2" />
        Sincronizar Agora
      </Button>
    </div>
  );
};

export default SynchronizationSettingsSection;
