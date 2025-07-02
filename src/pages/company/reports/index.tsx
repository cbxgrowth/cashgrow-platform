import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Download, TrendingUp, Users, DollarSign, Package, BarChart3, PieChart, LineChart } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';

const CompanyReportsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 1),
    to: new Date()
  });
  const [reportType, setReportType] = useState('overview');

  const reportData = {
    overview: {
      totalRevenue: 1250000.00,
      totalTransactions: 8543,
      totalCustomers: 2150,
      avgOrderValue: 146.32,
      topProducts: [
        { name: 'Smartphone XYZ Pro', sales: 127, revenue: 317487.30 },
        { name: 'Notebook Gamer RGB', sales: 89, revenue: 169996.60 },
        { name: 'Smart TV 55"', sales: 67, revenue: 127293.30 }
      ],
      monthlyData: [
        { month: 'Jan', revenue: 98000, transactions: 650 },
        { month: 'Fev', revenue: 125000, transactions: 780 },
        { month: 'Mar', revenue: 142000, transactions: 890 },
        { month: 'Abr', revenue: 138000, transactions: 850 },
        { month: 'Mai', revenue: 156000, transactions: 950 },
        { month: 'Jun', revenue: 168000, transactions: 1020 }
      ]
    },
    cashback: {
      totalPaid: 89500.00,
      avgPercentage: 7.8,
      topCategories: [
        { category: 'Eletrônicos', percentage: 8.5, total: 35000 },
        { category: 'Moda', percentage: 10.0, total: 25000 },
        { category: 'Casa & Jardim', percentage: 6.5, total: 18500 }
      ]
    },
    customers: {
      newCustomers: 340,
      returningCustomers: 1810,
      customerLifetimeValue: 582.45,
      topSpenders: [
        { name: 'João Silva', total: 4580.90, orders: 23 },
        { name: 'Maria Santos', total: 3920.50, orders: 18 },
        { name: 'Carlos Lima', total: 3456.80, orders: 15 }
      ]
    }
  };

  const quickReports = [
    {
      title: 'Vendas por Período',
      description: 'Análise detalhada das vendas em período específico',
      icon: BarChart3,
      type: 'sales'
    },
    {
      title: 'Performance de Cashback',
      description: 'Relatório de cashback pago e economizado',
      icon: DollarSign,
      type: 'cashback'
    },
    {
      title: 'Análise de Clientes',
      description: 'Comportamento e segmentação de clientes',
      icon: Users,
      type: 'customers'
    },
    {
      title: 'Produtos mais Vendidos',
      description: 'Ranking de produtos por performance',
      icon: Package,
      type: 'products'
    },
    {
      title: 'Análise de Proximidade',
      description: 'Impacto das campanhas de geolocalização',
      icon: PieChart,
      type: 'proximity'
    },
    {
      title: 'Tendências de Mercado',
      description: 'Análise de tendências e oportunidades',
      icon: LineChart,
      type: 'trends'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground mt-2">
            Análises detalhadas e insights do seu negócio
          </p>
        </div>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "dd MMM", { locale: ptBR })} -{' '}
                      {format(dateRange.to, "dd MMM yyyy", { locale: ptBR })}
                    </>
                  ) : (
                    format(dateRange.from, "dd MMM yyyy", { locale: ptBR })
                  )
                ) : (
                  "Selecionar período"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Cards de estatísticas principais */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {reportData.overview.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              +12.5% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transações</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.overview.totalTransactions.toLocaleString('pt-BR')}</div>
            <p className="text-xs text-muted-foreground">
              +8.2% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.overview.totalCustomers.toLocaleString('pt-BR')}</div>
            <p className="text-xs text-muted-foreground">
              +15.7% novos clientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {reportData.overview.avgOrderValue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              +5.3% em relação ao período anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios rápidos */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Rápidos</CardTitle>
          <CardDescription>
            Acesse rapidamente os relatórios mais utilizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickReports.map((report, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <report.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {report.description}
                      </p>
                      <Button size="sm" variant="outline" className="mt-3">
                        Gerar Relatório
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top produtos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Produtos Mais Vendidos</CardTitle>
            <CardDescription>
              Ranking dos produtos com melhor performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportData.overview.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">#{index + 1}</Badge>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      R$ {product.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Cashback</CardTitle>
            <CardDescription>
              Distribuição de cashback por categoria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">
                  R$ {reportData.cashback.totalPaid.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-muted-foreground">Total pago em cashback</p>
              </div>
              
              {reportData.cashback.topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{category.category}</p>
                    <p className="text-sm text-muted-foreground">{category.percentage}% de cashback</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      R$ {category.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyReportsPage;
