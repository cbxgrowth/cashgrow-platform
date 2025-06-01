
import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const SynchronizationSettingsSection: React.FC = () => {
  const handleSyncNow = () => {
    toast.success('Sincronização iniciada! Você receberá uma notificação quando for concluída.');
  };

  const syncOptions = [
    { id: 'sync-products', label: 'Produtos e Categorias', defaultChecked: true },
    { id: 'sync-inventory', label: 'Estoque e Disponibilidade', defaultChecked: true },
    { id: 'sync-orders', label: 'Pedidos e Transações', defaultChecked: true },
    { id: 'sync-customers', label: 'Clientes', defaultChecked: true }
  ];

  const frequencyOptions = [
    { id: 'sync-auto', label: 'Automática (a cada hora)', defaultChecked: true },
    { id: 'sync-daily', label: 'Diária', defaultChecked: false },
    { id: 'sync-manual', label: 'Manual', defaultChecked: false }
  ];

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <ArrowRightLeft className="h-5 w-5 text-accent" />
        Configurações de Sincronização
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Dados a Sincronizar</Label>
            <div className="space-y-2">
              {syncOptions.map((option) => (
                <div key={option.id} className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="checkbox" id={option.id} className="w-4 h-4 accent-primary" defaultChecked={option.defaultChecked} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Frequência de Sincronização</Label>
            <div className="space-y-2">
              {frequencyOptions.map((option) => (
                <div key={option.id} className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="radio" id={option.id} name="sync-frequency" className="w-4 h-4 accent-primary" defaultChecked={option.defaultChecked} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={handleSyncNow}>
            <RefreshCw className="h-4 w-4 mr-2" /> Sincronizar Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SynchronizationSettingsSection;
