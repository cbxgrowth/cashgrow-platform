
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Save } from "lucide-react";
import { toast } from "sonner";

import APIConnectionSection from './APIConnectionSection';
import SynchronizationSettingsSection from './SynchronizationSettingsSection';
import CashbackRulesSection from './CashbackRulesSection';

const StoreIntegrationTab: React.FC = () => {
  const handleSaveIntegration = () => {
    toast.success('Configurações de integração salvas com sucesso!');
  };

  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-accent" />
          <span>Integração da Loja</span>
        </CardTitle>
        <CardDescription>
          Configure a integração com sua loja e sincronize produtos, ofertas e cashback
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <APIConnectionSection />
        <SynchronizationSettingsSection />
        <CashbackRulesSection />
      </CardContent>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale" onClick={handleSaveIntegration}>
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoreIntegrationTab;
