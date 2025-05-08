
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Banknote, Percent, DollarSign, Save } from "lucide-react";

const PaymentSettingsTab: React.FC = () => {
  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-accent" />
          <span>Configurações de Pagamento</span>
        </CardTitle>
        <CardDescription>
          Configure os métodos de pagamento e resgate de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-accent" />
            Métodos de Pagamento Aceitos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
              <input type="checkbox" id="credit-card" className="w-4 h-4 accent-primary" defaultChecked />
              <Label htmlFor="credit-card" className="flex-1 cursor-pointer">Cartão de Crédito</Label>
            </div>
            
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
              <input type="checkbox" id="debit-card" className="w-4 h-4 accent-primary" defaultChecked />
              <Label htmlFor="debit-card" className="flex-1 cursor-pointer">Cartão de Débito</Label>
            </div>
            
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
              <input type="checkbox" id="pix" className="w-4 h-4 accent-primary" defaultChecked />
              <Label htmlFor="pix" className="flex-1 cursor-pointer">PIX</Label>
            </div>
            
            <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
              <input type="checkbox" id="boleto" className="w-4 h-4 accent-primary" />
              <Label htmlFor="boleto" className="flex-1 cursor-pointer">Boleto Bancário</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Percent className="h-5 w-5 text-accent" />
            Configuraçãos de Cashback
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-cashback" className="text-sm font-medium">Porcentagem Padrão de Cashback</Label>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="default-cashback" 
                    type="number" 
                    min="0" 
                    max="100" 
                    step="0.5" 
                    defaultValue="5" 
                    className="pr-10 max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Porcentagem padrão aplicada às compras
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="min-amount" className="text-sm font-medium">Valor Mínimo para Resgate</Label>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="min-amount" 
                    type="number" 
                    min="0" 
                    step="5" 
                    defaultValue="20" 
                    className="pl-10 max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Valor mínimo para solicitar resgate
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expiration-days" className="text-sm font-medium">Prazo de Expiração do Cashback (dias)</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id="expiration-days" 
                  type="number" 
                  min="0" 
                  step="1" 
                  defaultValue="90" 
                  className="max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                />
                <p className="text-sm text-muted-foreground">
                  Dias para expiração (0 = sem expiração)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Banknote className="h-5 w-5 text-accent" />
            Dados Bancários para Repasses
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank-name" className="text-sm font-medium">Banco</Label>
              <Input 
                id="bank-name" 
                placeholder="Nome do banco" 
                defaultValue="Banco Brasil" 
                className="transition-all duration-200 border-muted focus:border-primary" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agency" className="text-sm font-medium">Agência</Label>
                <Input 
                  id="agency" 
                  placeholder="Número da agência" 
                  defaultValue="1234" 
                  className="transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account" className="text-sm font-medium">Conta</Label>
                <Input 
                  id="account" 
                  placeholder="Número da conta" 
                  defaultValue="12345-6" 
                  className="transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale">
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSettingsTab;
