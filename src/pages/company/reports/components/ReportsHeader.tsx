
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Download } from 'lucide-react';

const ReportsHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
      <div className="flex gap-2">
        <div className="relative">
          <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <select 
            className="pl-8 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="6m">Últimos 6 meses</option>
            <option value="1y">Último ano</option>
            <option value="custom">Período personalizado</option>
          </select>
        </div>
        <Button variant="outline" className="hover-scale">
          <Download className="mr-2 h-4 w-4" /> Exportar
        </Button>
      </div>
    </div>
  );
};

export default ReportsHeader;
