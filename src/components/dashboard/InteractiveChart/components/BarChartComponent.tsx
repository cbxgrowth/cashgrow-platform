
import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { CashbackData } from '../types';
import { CustomTooltip } from './CustomTooltip';

interface BarChartComponentProps {
  data: CashbackData[];
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
};
