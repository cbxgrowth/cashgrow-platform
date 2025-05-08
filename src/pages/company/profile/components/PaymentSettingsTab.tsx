
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentSettingsTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Configurações de Pagamento</CardTitle>
        <CardDescription>
          Configure os métodos de pagamento e resgate de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Métodos de Pagamento Aceitos</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="credit-card" className="w-4 h-4" defaultChecked />
              <Label htmlFor="credit-card">Cartão de Crédito</Label>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="debit-card" className="w-4 h-4" defaultChecked />
              <Label htmlFor="debit-card">Cartão de Débito</Label>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="pix" className="w-4 h-4" defaultChecked />
              <Label htmlFor="pix">PIX</Label>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="boleto" className="w-4 h-4" />
              <Label htmlFor="boleto">Boleto Bancário</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Configuraçãos de Cashback</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-cashback">Porcentagem Padrão de Cashback</Label>
              <div className="flex items-center gap-2">
                <Input id="default-cashback" type="number" min="0" max="100" step="0.5" defaultValue="5" className="max-w-[100px]" />
                <span>%</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Esta é a porcentagem padrão de cashback que será aplicada às compras
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="min-amount">Valor Mínimo para Resgate</Label>
              <div className="flex items-center gap-2">
                <span>R$</span>
                <Input id="min-amount" type="number" min="0" step="5" defaultValue="20" className="max-w-[100px]" />
              </div>
              <p className="text-xs text-muted-foreground">
                Este é o valor mínimo que um cliente precisa acumular para solicitar um resgate
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expiration-days">Prazo de Expiração do Cashback (dias)</Label>
              <Input id="expiration-days" type="number" min="0" step="1" defaultValue="90" className="max-w-[100px]" />
              <p className="text-xs text-muted-foreground">
                Número de dias após os quais o cashback não resgatado expira (0 = sem expiração)
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Dados Bancários para Repasses</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank-name">Banco</Label>
              <Input id="bank-name" placeholder="Nome do banco" defaultValue="Banco Brasil" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agency">Agência</Label>
                <Input id="agency" placeholder="Número da agência" defaultValue="1234" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account">Conta</Label>
                <Input id="account" placeholder="Número da conta" defaultValue="12345-6" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="hover-scale">Salvar Configurações</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSettingsTab;
