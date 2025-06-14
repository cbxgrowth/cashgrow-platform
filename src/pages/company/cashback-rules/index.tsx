
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Percent, Calendar, Users, Plus, Settings } from "lucide-react";

const CompanyCashbackRules: React.FC = () => {
  const [rules, setRules] = useState([
    { id: 1, name: 'Cashback Geral', category: 'Todas', percentage: 5, active: true, minValue: 50 },
    { id: 2, name: 'Eletrônicos Premium', category: 'Eletrônicos', percentage: 8, active: true, minValue: 200 },
    { id: 3, name: 'Moda Sazonal', category: 'Moda', percentage: 12, active: false, minValue: 100 },
    { id: 4, name: 'Cliente VIP', category: 'VIP', percentage: 15, active: true, minValue: 0 },
  ]);

  const toggleRule = (id: number) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, active: !rule.active } : rule
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <CreditCard className="h-8 w-8 text-primary" />
            Regras de Cashback
          </h1>
          <p className="text-muted-foreground">Configure as regras de cashback para seus produtos</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="mr-2 h-4 w-4" />
          Nova Regra
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Regras Ativas</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-green-600">+2 esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Médio</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5%</div>
            <p className="text-xs text-green-600">Otimizado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-blue-600">2 terminam em breve</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clientes Impactados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.247</div>
            <p className="text-xs text-green-600">100% da base</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuração Global</CardTitle>
          <CardDescription>Defina as configurações gerais do programa de cashback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="minPurchase">Valor Mínimo de Compra (R$)</Label>
              <Input id="minPurchase" type="number" placeholder="50.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCashback">Cashback Máximo por Transação (R$)</Label>
              <Input id="maxCashback" type="number" placeholder="500.00" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="expireDays">Validade do Cashback (dias)</Label>
              <Input id="expireDays" type="number" placeholder="365" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minRedeem">Valor Mínimo para Resgate (R$)</Label>
              <Input id="minRedeem" type="number" placeholder="10.00" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regras por Categoria</CardTitle>
          <CardDescription>Gerencie as regras específicas para cada categoria de produto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      {rule.name}
                      <Badge variant="outline">{rule.category}</Badge>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {rule.percentage}% de cashback • Valor mínimo: R$ {rule.minValue}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={rule.active}
                      onCheckedChange={() => toggleRule(rule.id)}
                    />
                    <span className="text-sm">
                      {rule.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-3 md:grid-cols-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Percentual</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        type="number"
                        value={rule.percentage}
                        className="h-8"
                        min="0"
                        max="100"
                      />
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Valor Mínimo</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm">R$</span>
                      <Input
                        type="number"
                        value={rule.minValue}
                        className="h-8"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <Button variant="outline" size="sm" className="h-8">
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8">
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Campanhas Especiais
          </CardTitle>
          <CardDescription>Configure promoções e campanhas temporárias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-orange-50 border-orange-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-orange-900">Black Friday 2024</h3>
                  <p className="text-sm text-orange-700">Cashback em dobro para toda a loja</p>
                  <p className="text-xs text-orange-600 mt-1">Válida de 25/11 a 29/11</p>
                </div>
                <Badge className="bg-orange-100 text-orange-800">Agendada</Badge>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-green-50 border-green-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-green-900">Dia das Mães</h3>
                  <p className="text-sm text-green-700">15% de cashback em produtos de beleza</p>
                  <p className="text-xs text-green-600 mt-1">Válida de 01/05 a 15/05</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Criar Nova Campanha
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCashbackRules;
