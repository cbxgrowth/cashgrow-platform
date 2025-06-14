
import React from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Area, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { CashbackData } from '../types';
import { CustomTooltip } from './CustomTooltip';

interface AreaChartComponentProps {
  data: CashbackData[];
}

export const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
};
