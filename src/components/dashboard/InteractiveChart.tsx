
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const cashbackData = [
  { name: 'Jan', cashback: 120, gastos: 1200 },
  { name: 'Fev', cashback: 180, gastos: 1800 },
  { name: 'Mar', cashback: 220, gastos: 2200 },
  { name: 'Abr', cashback: 190, gastos: 1900 },
  { name: 'Mai', cashback: 280, gastos: 2800 },
  { name: 'Jun', cashback: 350, gastos: 3500 },
];

const categoriesData = [
  { name: 'Alimentação', value: 45, color: '#8B5CF6' },
  { name: 'Farmácia', value: 25, color: '#06D6A0' },
  { name: 'Moda', value: 15, color: '#F59E0B' },
  { name: 'Eletrônicos', value: 10, color: '#EF4444' },
  { name: 'Outros', value: 5, color: '#6B7280' },
];

export const InteractiveChart: React.FC = () => {
  const [chartType, setChartType] = useState<'area' | 'bar' | 'categories'>('area');

  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cashbackData}>
              <defs>
                <linearGradient id="colorCashback" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`R$ ${value}`, name === 'cashback' ? 'Cashback' : 'Gastos']}
                labelFormatter={(label) => `Mês: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="cashback" 
                stroke="#8B5CF6" 
                fillOpacity={1} 
                fill="url(#colorCashback)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cashbackData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`R$ ${value}`, name === 'cashback' ? 'Cashback' : 'Gastos']}
              />
              <Bar dataKey="cashback" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="gastos" fill="#06D6A0" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'categories':
        return (
          <div className="flex items-center justify-center h-[300px]">
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
              {categoriesData.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <span className="text-sm font-bold">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Análise de Cashback</CardTitle>
          <div className="flex gap-2">
            <Button
              variant={chartType === 'area' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('area')}
            >
              Evolução
            </Button>
            <Button
              variant={chartType === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('bar')}
            >
              Comparativo
            </Button>
            <Button
              variant={chartType === 'categories' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('categories')}
            >
              Categorias
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};
