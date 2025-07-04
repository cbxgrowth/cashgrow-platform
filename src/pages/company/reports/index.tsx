
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, Calendar as CalendarIcon, Filter, TrendingUp, Users, DollarSign, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const CompanyReports: React.FC = () => {
  const [dateRange, setDateRange] = useState<{from?: Date, to?: Date}>({});
  const [reportType, setReportType] = useState<string>('sales');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const reportData = {
    sales: {
      total: "R$ 156.890,00",
      count: 1247,
      average: "R$ 125,80",
      growth: "+18%"
    },
    customers: {
      total: 1247,
      new: 89,
      active: 1158,
      retention: "92%"
    },
    cashback: {
      total: "R$ 7.844,50",
      percentage: "5%",
      transactions: 892,
      savings: "R$ 2.156,00"
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground">
            Gere relatórios detalhados sobre seu negócio
          </p>
        </div>
        <Button onClick={handleGenerateReport} disabled={isGenerating}>
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2" />
              Gerando...
            </>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" />
              Gerar Relatório
            </>
          )}
        </Button>
      </div>

      {/* Filtros de Relatório */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Relatório
          </CardTitle>
          <CardDescription>
            Configure os parâmetros para gerar seu relatório personalizado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label>Tipo de Relatório</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Vendas</SelectItem>
                  <SelectItem value="customers">Clientes</SelectItem>
                  <SelectItem value="cashback">Cashback</SelectItem>
                  <SelectItem value="products">Produtos</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Data Inicial</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.from && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? format(dateRange.from, "dd/MM/yyyy") : "Selecionar"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateRange.from}
                    onSelect={(date) => setDateRange(prev => ({...prev, from: date}))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Data Final</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.to && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.to ? format(dateRange.to, "dd/MM/yyyy") : "Selecionar"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateRange.to}
                    onSelect={(date) => setDateRange(prev => ({...prev, to: date}))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Formato</Label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resumo dos Dados */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas Totais</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.sales.total}</div>
            <p className="text-xs text-muted-foreground">
              {reportData.sales.count} transações • {reportData.sales.growth}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.customers.total}</div>
            <p className="text-xs text-muted-foreground">
              {reportData.customers.new} novos • {reportData.customers.retention} retenção
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.cashback.total}</div>
            <p className="text-xs text-muted-foreground">
              {reportData.cashback.transactions} transações • {reportData.cashback.percentage}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios Pré-definidos */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Pré-definidos</CardTitle>
          <CardDescription>
            Relatórios prontos para uso imediato
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Vendas Mensais",
                description: "Relatório completo de vendas do mês",
                icon: TrendingUp,
                period: "Mensal"
              },
              {
                title: "Performance de Produtos",
                description: "Produtos mais vendidos e rentáveis",
                icon: FileText,
                period: "Trimestral"
              },
              {
                title: "Análise de Clientes",
                description: "Comportamento e segmentação de clientes",
                icon: Users,
                period: "Mensal"
              },
              {
                title: "Relatório de Cashback",
                description: "Análise detalhada do programa de cashback",
                icon: CreditCard,
                period: "Mensal"
              },
              {
                title: "Fluxo de Caixa",
                description: "Entradas e saídas financeiras",
                icon: DollarSign,
                period: "Diário"
              },
              {
                title: "Relatório Fiscal",
                description: "Dados para declarações fiscais",
                icon: FileText,
                period: "Anual"
              }
            ].map((report, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <report.icon className="h-8 w-8 text-primary" />
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {report.period}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {report.description}
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="mr-2 h-3 w-3" />
                    Baixar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyReports;
