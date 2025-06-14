
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  ComposedChart,
  Line,
  LineChart
} from 'recharts';

const cashbackData = [
  { name: 'Jan', cashback: 120, gastos: 1200, meta: 150 },
  { name: 'Fev', cashback: 180, gastos: 1800, meta: 200 },
  { name: 'Mar', cashback: 220, gastos: 2200, meta: 250 },
  { name: 'Abr', cashback: 190, gastos: 1900, meta: 220 },
  { name: 'Mai', cashback: 280, gastos: 2800, meta: 300 },
  { name: 'Jun', cashback: 350, gastos: 3500, meta: 320 },
];

const categoriesData = [
  { name: 'Alimentação', value: 45, amount: 1250, color: '#8B5CF6' },
  { name: 'Farmácia', value: 25, amount: 695, color: '#06D6A0' },
  { name: 'Moda', value: 15, amount: 417, color: '#F59E0B' },
  { name: 'Eletrônicos', value: 10, amount: 278, color: '#EF4444' },
  { name: 'Outros', value: 5, amount: 139, color: '#6B7280' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900 mb-2">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: R$ ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const InteractiveChart: React.FC = () => {
  const [chartType, setChartType] = useState<'area' | 'bar' | 'categories'>('area');

  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={cashbackData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCashback" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-gray-600"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-gray-600"
                tickFormatter={(value) => `R$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="cashback" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCashback)"
                name="Cashback"
              />
              <Line 
                type="monotone" 
                dataKey="meta" 
                stroke="#F59E0B" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                name="Meta"
              />
            </ComposedChart>
          </ResponsiveContainer>
        );
        
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={cashbackData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="barCashback" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0.8}/>
                </linearGradient>
                <linearGradient id="barGastos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06D6A0" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-gray-600"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-gray-600"
                tickFormatter={(value) => value > 1000 ? `${value/1000}k` : `${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="cashback" 
                fill="url(#barCashback)" 
                radius={[4, 4, 0, 0]}
                name="Cashback"
              />
              <Bar 
                dataKey="gastos" 
                fill="url(#barGastos)" 
                radius={[4, 4, 0, 0]}
                name="Gastos"
              />
            </BarChart>
          </ResponsiveContainer>
        );
        
      case 'categories':
        return (
          <div className="flex items-center justify-center h-[280px] p-4">
            <div className="w-full max-w-md space-y-3">
              {categoriesData.map((category, index) => (
                <div 
                  key={index} 
                  className="group hover:bg-muted/50 transition-all duration-200 p-3 rounded-lg border border-transparent hover:border-border/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full shadow-sm" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{category.value}%</span>
                  </div>
                  <div className="ml-7">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>R$ {category.amount}</span>
                      <span>cashback</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${category.value}%`,
                          backgroundColor: category.color,
                          opacity: 0.8
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const getButtonVariant = (type: string) => chartType === type ? 'default' : 'outline';

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-base sm:text-lg">Análise de Cashback</CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {chartType === 'area' && 'Evolução mensal com meta'}
              {chartType === 'bar' && 'Comparativo cashback vs gastos'}
              {chartType === 'categories' && 'Distribuição por categoria'}
            </p>
          </div>
          <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
            <Button
              variant={getButtonVariant('area')}
              size="sm"
              onClick={() => setChartType('area')}
              className="flex-1 sm:flex-none text-xs h-8"
            >
              Evolução
            </Button>
            <Button
              variant={getButtonVariant('bar')}
              size="sm"
              onClick={() => setChartType('bar')}
              className="flex-1 sm:flex-none text-xs h-8"
            >
              Comparativo
            </Button>
            <Button
              variant={getButtonVariant('categories')}
              size="sm"
              onClick={() => setChartType('categories')}
              className="flex-1 sm:flex-none text-xs h-8"
            >
              Categorias
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-2 sm:p-4 pt-0">
        <div className="w-full overflow-hidden">
          {renderChart()}
        </div>
        
        {/* Resumo estatístico */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Cashback</p>
              <p className="text-sm sm:text-base font-bold text-primary">R$ 1.340</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Média Mensal</p>
              <p className="text-sm sm:text-base font-bold text-green-600">R$ 223</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Melhor Mês</p>
              <p className="text-sm sm:text-base font-bold text-purple-600">Jun - R$ 350</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Crescimento</p>
              <p className="text-sm sm:text-base font-bold text-blue-600">+192%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
