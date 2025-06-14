
import { CashbackData, CategoryData, ChartStats } from './types';

export const cashbackData: CashbackData[] = [
  { name: 'Jan', cashback: 120, gastos: 1200, meta: 150 },
  { name: 'Fev', cashback: 180, gastos: 1800, meta: 200 },
  { name: 'Mar', cashback: 220, gastos: 2200, meta: 250 },
  { name: 'Abr', cashback: 190, gastos: 1900, meta: 220 },
  { name: 'Mai', cashback: 280, gastos: 2800, meta: 300 },
  { name: 'Jun', cashback: 350, gastos: 3500, meta: 320 },
];

export const categoriesData: CategoryData[] = [
  { name: 'Alimentação', value: 45, amount: 1250, color: '#8B5CF6' },
  { name: 'Farmácia', value: 25, amount: 695, color: '#06D6A0' },
  { name: 'Moda', value: 15, amount: 417, color: '#F59E0B' },
  { name: 'Eletrônicos', value: 10, amount: 278, color: '#EF4444' },
  { name: 'Outros', value: 5, amount: 139, color: '#6B7280' },
];

export const chartStats: ChartStats = {
  totalCashback: 'R$ 1.340',
  monthlyAverage: 'R$ 223',
  bestMonth: 'Jun - R$ 350',
  growth: '+192%'
};
