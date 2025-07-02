
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Users, TrendingUp, Award, Download, FileText } from 'lucide-react';

const CompanyCorporatePage: React.FC = () => {
  const corporateData = {
    summary: {
      totalEmployees: 1250,
      activePlans: 3,
      monthlySpend: 89500.00,
      totalSavings: 12750.00
    },
    plans: [
      {
        id: 1,
        name: 'Plano Corporativo Premium',
        employees: 850,
        discount: 15,
        monthlyFee: 4250.00,
        status: 'active'
      },
      {
        id: 2,
        name: 'Plano Executivo',
        employees: 250,
        discount: 20,
        monthlyFee: 2500.00,
        status: 'active'
      },
      {
        id: 3,
        name: 'Plano Básico',
        employees: 150,
        discount: 10,
        monthlyFee: 750.00,
        status: 'active'
      }
    ],
    benefits: [
      'Descontos exclusivos para funcionários',
      'Gestão centralizada de benefícios',
      'Relatórios detalhados de uso',
      'Suporte dedicado 24/7',
      'Integração com folha de pagamento'
    ]
  };

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Corporativo</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie planos corporativos e benefícios para funcionários
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Relatórios
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funcionários</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{corporateData.summary.totalEmployees.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Planos Ativos</CardTitle>
            <Building2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{corporateData.summary.activePlans}</div>
            <p className="text-xs text-muted-foreground">Todos funcionando</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gasto Mensal</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {corporateData.summary.monthlySpend.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">-5% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia Total</CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {corporateData.summary.totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList>
          <TabsTrigger value="plans">Planos Corporativos</TabsTrigger>
          <TabsTrigger value="benefits">Benefícios</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Planos Corporativos Ativos</CardTitle>
              <CardDescription>
                Gerencie os planos corporativos da sua empresa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {corporateData.plans.map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{plan.name}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{plan.employees} funcionários</span>
                        <span>{plan.discount}% de desconto</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">
                        R$ {plan.monthlyFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-sm text-muted-foreground">por mês</div>
                      <Badge variant="default" className="mt-1">
                        {plan.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits">
          <Card>
            <CardHeader>
              <CardTitle>Benefícios Corporativos</CardTitle>
              <CardDescription>
                Vantagens do plano corporativo para sua empresa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {corporateData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Corporativos</CardTitle>
              <CardDescription>
                Relatórios detalhados sobre o uso dos benefícios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Relatórios em Desenvolvimento</h3>
                <p className="text-muted-foreground mb-4">
                  Os relatórios corporativos estarão disponíveis em breve.
                </p>
                <Button variant="outline">
                  Solicitar Acesso Antecipado
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyCorporatePage;
