
export type ChartType = 'area' | 'bar' | 'categories';

export interface CashbackData {
  name: string;
  cashback: number;
  gastos: number;
  meta: number;
}

export interface CategoryData {
  name: string;
  value: number;
  amount: number;
  color: string;
}

export interface ChartStats {
  totalCashback: string;
  monthlyAverage: string;
  bestMonth: string;
  growth: string;
}
