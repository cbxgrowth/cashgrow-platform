
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plus, Edit, Trash2, Percent, Calendar, Users, Package } from 'lucide-react';
import { toast } from 'sonner';

interface CashbackRule {
  id: string;
  name: string;
  type: 'category' | 'customer' | 'product' | 'date';
  percentage: number;
  condition: string;
  isActive: boolean;
  priority: number;
}

const CompanyCashbackRules: React.FC = () => {
  const [rules, setRules] = useState<CashbackRule[]>([
    {
      id: '1',
      name: 'Cashback Eletrônicos',
      type: 'category',
      percentage: 5,
      condition: 'Categoria = Eletrônicos',
      isActive: true,
      priority: 1
    },
    {
      id: '2',
      name: 'Cliente VIP',
      type: 'customer',
      percentage: 8,
      condition: 'Total gasto > R$ 1000',
      isActive: true,
      priority: 2
    },
    {
      id: '3',
      name: 'Black Friday',
      type: 'date',
      percentage: 15,
      condition: '24/11/2024 - 30/11/2024',
      isActive: false,
      priority: 3
    }
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [newRule, setNewRule] = useState({
    name: '',
    type: 'category' as const,
    percentage: 0,
    condition: ''
  });

  const getRuleIcon = (type: string) => {
    switch (type) {
      case 'category': return Package;
      case 'customer': return Users;
      case 'product': return Package;
      case 'date': return Calendar;
      default: return Percent;
    }
  };

  const getRuleTypeLabel = (type: string) => {
    switch (type) {
      case 'category': return 'Categoria';
      case 'customer': return 'Cliente';
      case 'product': return 'Produto';
      case 'date': return 'Data';
      default: return 'Geral';
    }
  };

  const handleCreateRule = () => {
    if (!newRule.name || !newRule.condition || newRule.percentage <= 0) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    const rule: CashbackRule = {
      id: Date.now().toString(),
      name: newRule.name,
      type: newRule.type,
      percentage: newRule.percentage,
      condition: newRule.condition,
      isActive: true,
      priority: rules.length + 1
    };

    setRules([...rules, rule]);
    setNewRule({ name: '', type: 'category', percentage: 0, condition: '' });
    setIsCreating(false);
    toast.success('Regra criada com sucesso!');
  };

  const toggleRuleStatus = (id: string) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, isActive: !rule.isActive } : rule
    ));
    toast.success('Status da regra atualizado!');
  };

  const deleteRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
    toast.success('Regra removida com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Regras de Cashback</h1>
          <p className="text-muted-foreground">Configure as regras de cashback para seus clientes</p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Nova Regra
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Regras Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rules.filter(r => r.isActive).length}</div>
            <p className="text-xs text-green-600">De {rules.length} total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {rules.length > 0 ? (rules.reduce((sum, r) => sum + r.percentage, 0) / rules.length).toFixed(1) : 0}%
            </div>
            <p className="text-xs text-green-600">Taxa média</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Regra Máxima</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {rules.length > 0 ? Math.max(...rules.map(r => r.percentage)) : 0}%
            </div>
            <p className="text-xs text-green-600">Maior cashback</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rules.filter(r => r.type === 'category').length}</div>
            <p className="text-xs text-green-600">Regras ativas</p>
          </CardContent>
        </Card>
      </div>

      {/* Formulário de criação */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Regra de Cashback</CardTitle>
            <CardDescription>Configure uma nova regra para seus clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Regra</Label>
                  <Input
                    id="name"
                    value={newRule.name}
                    onChange={(e) => setNewRule(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Cashback Eletrônicos"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo</Label>
                  <select
                    id="type"
                    value={newRule.type}
                    onChange={(e) => setNewRule(prev => ({ ...prev, type: e.target.value as any }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="category">Categoria</option>
                    <option value="customer">Cliente</option>
                    <option value="product">Produto</option>
                    <option value="date">Data</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="percentage">Percentual de Cashback (%)</Label>
                  <Input
                    id="percentage"
                    type="number"
                    step="0.1"
                    value={newRule.percentage}
                    onChange={(e) => setNewRule(prev => ({ ...prev, percentage: parseFloat(e.target.value) }))}
                    placeholder="5.0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">Condição</Label>
                  <Input
                    id="condition"
                    value={newRule.condition}
                    onChange={(e) => setNewRule(prev => ({ ...prev, condition: e.target.value }))}
                    placeholder="Ex: Categoria = Eletrônicos"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreateRule}>Criar Regra</Button>
                <Button variant="outline" onClick={() => setIsCreating(false)}>Cancelar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lista de regras */}
      <Card>
        <CardHeader>
          <CardTitle>Regras Configuradas</CardTitle>
          <CardDescription>Gerencie todas as suas regras de cashback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rules.map((rule) => {
              const Icon = getRuleIcon(rule.type);
              return (
                <div key={rule.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{rule.name}</h3>
                        <Badge variant="outline">{getRuleTypeLabel(rule.type)}</Badge>
                        <Badge variant={rule.isActive ? 'default' : 'secondary'}>
                          {rule.isActive ? 'Ativa' : 'Inativa'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rule.condition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{rule.percentage}%</div>
                      <div className="text-xs text-muted-foreground">Cashback</div>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={rule.isActive}
                        onCheckedChange={() => toggleRuleStatus(rule.id)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteRule(rule.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCashbackRules;
