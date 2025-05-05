
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CustomReportForm: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Gerar Relatórios Personalizados</CardTitle>
        <CardDescription>
          Selecione os parâmetros para criar relatórios sob medida
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="report-type">Tipo de Relatório</Label>
            <select 
              id="report-type" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Selecione um tipo</option>
              <option value="sales">Vendas</option>
              <option value="cashback">Cashback</option>
              <option value="clients">Clientes</option>
              <option value="rules">Regras</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-from">Data Inicial</Label>
            <Input id="date-from" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-to">Data Final</Label>
            <Input id="date-to" type="date" />
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="include-details"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="include-details">Detalhamento completo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="include-graphs"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="include-graphs">Incluir gráficos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="include-comparison"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="include-comparison">Comparar períodos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="include-projections"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="include-projections">Incluir projeções</Label>
          </div>
        </div>
        
        <div className="mt-6 flex gap-3 justify-end">
          <Button variant="outline" className="hover-scale">Visualizar</Button>
          <Button className="hover-scale">Gerar Relatório</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomReportForm;
