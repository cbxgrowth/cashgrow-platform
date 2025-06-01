
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Building, CheckCircle2, Save, Plus, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const PaymentSettingsTab: React.FC = () => {
  const [bankData, setBankData] = useState({
    bank: 'Banco do Brasil',
    agency: '1234-5',
    account: '12345-6',
    accountType: 'Conta Corrente',
    pixKey: 'contato@techstore.com.br'
  });

  const [cashbackSettings, setCashbackSettings] = useState({
    minimumWithdraw: '50.00',
    processingTime: '2',
    fee: '0.00'
  });

  const paymentMethods = [
    { id: 1, name: 'PIX', status: 'Ativo', description: 'Transferência instantânea' },
    { id: 2, name: 'TED', status: 'Ativo', description: 'Transferência entre bancos' },
    { id: 3, name: 'Cartão Pré-pago', status: 'Inativo', description: 'Cartão virtual para saque' }
  ];

  const handleSave = () => {
    toast.success('Configurações de pagamento salvas com sucesso!');
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === 'bank') {
      setBankData(prev => ({ ...prev, [field]: value }));
    } else if (section === 'cashback') {
      setCashbackSettings(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-accent" />
          <span>Configurações de Pagamento</span>
        </CardTitle>
        <CardDescription>
          Configure como os clientes receberão o cashback
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Dados Bancários */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Building className="h-5 w-5 text-accent" />
            Dados Bancários da Empresa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bank">Banco</Label>
              <Input
                id="bank"
                value={bankData.bank}
                onChange={(e) => handleInputChange('bank', 'bank', e.target.value)}
                placeholder="Nome do banco"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="agency">Agência</Label>
              <Input
                id="agency"
                value={bankData.agency}
                onChange={(e) => handleInputChange('bank', 'agency', e.target.value)}
                placeholder="0000-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="account">Conta</Label>
              <Input
                id="account"
                value={bankData.account}
                onChange={(e) => handleInputChange('bank', 'account', e.target.value)}
                placeholder="00000-0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="accountType">Tipo de Conta</Label>
              <select 
                id="accountType"
                value={bankData.accountType}
                onChange={(e) => handleInputChange('bank', 'accountType', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Conta Corrente">Conta Corrente</option>
                <option value="Conta Poupança">Conta Poupança</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pixKey">Chave PIX</Label>
            <Input
              id="pixKey"
              value={bankData.pixKey}
              onChange={(e) => handleInputChange('bank', 'pixKey', e.target.value)}
              placeholder="email@empresa.com ou CPF/CNPJ"
            />
          </div>
        </div>

        {/* Configurações de Cashback */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-accent" />
            Configurações de Cashback
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minimumWithdraw">Valor Mínimo para Saque (R$)</Label>
              <Input
                id="minimumWithdraw"
                type="number"
                step="0.01"
                value={cashbackSettings.minimumWithdraw}
                onChange={(e) => handleInputChange('cashback', 'minimumWithdraw', e.target.value)}
                placeholder="50.00"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="processingTime">Tempo de Processamento (dias)</Label>
              <Input
                id="processingTime"
                type="number"
                value={cashbackSettings.processingTime}
                onChange={(e) => handleInputChange('cashback', 'processingTime', e.target.value)}
                placeholder="2"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fee">Taxa de Processamento (%)</Label>
              <Input
                id="fee"
                type="number"
                step="0.01"
                value={cashbackSettings.fee}
                onChange={(e) => handleInputChange('cashback', 'fee', e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-accent" />
              Métodos de Pagamento Disponíveis
            </h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Método
            </Button>
          </div>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{method.name}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    className={method.status === 'Ativo' ? 
                      'bg-green-500/20 text-green-600' : 
                      'bg-red-500/20 text-red-600'
                    }
                  >
                    {method.status === 'Ativo' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {method.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale" onClick={handleSave}>
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSettingsTab;
