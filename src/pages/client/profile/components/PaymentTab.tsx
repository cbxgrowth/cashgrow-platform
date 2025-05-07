
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";

const PaymentTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Métodos de Pagamento e Resgate</CardTitle>
        <CardDescription>
          Gerencie suas opções de pagamento e resgate de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Mastercard - Expira em 05/27</p>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">Remover</Button>
            </div>
          </div>
          
          <Card className="border-dashed">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <CreditCard className="h-12 w-12 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-lg">Adicionar Novo Método</h3>
                  <p className="text-muted-foreground">
                    Adicione um cartão para resgate automático ou dados PIX
                  </p>
                </div>
                <Button className="hover-scale">Adicionar Método</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferências de Resgate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="min-amount">Valor Mínimo para Resgate Automático</Label>
                <Input id="min-amount" type="number" placeholder="50" defaultValue="100" />
                <p className="text-xs text-muted-foreground">
                  Quando seu saldo alcançar este valor, será resgatado automaticamente
                </p>
              </div>
              
              <div className="space-y-2">
                <Label>Método de Resgate Preferencial</Label>
                <select 
                  className="w-full p-2 border rounded-md"
                  defaultValue="pix"
                >
                  <option value="pix">PIX</option>
                  <option value="bank">Transferência Bancária</option>
                  <option value="credit">Crédito em Cartão</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="hover-scale">Salvar Preferências</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentTab;
