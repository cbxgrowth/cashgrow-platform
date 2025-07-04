
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Package, DollarSign, Upload, TrendingUp } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CompanyProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock data - replace with real data
  const products = [
    { 
      id: 1, 
      name: 'iPhone 15 Pro', 
      sku: 'IPH15PRO128',
      category: 'Eletrônicos', 
      price: 4999.00, 
      cashback: 5.5,
      stock: 50, 
      status: 'Ativo',
      sales: 145
    },
    { 
      id: 2, 
      name: 'MacBook Air M2', 
      sku: 'MBA13M2',
      category: 'Computadores', 
      price: 7999.00, 
      cashback: 3.2,
      stock: 25, 
      status: 'Ativo',
      sales: 89
    },
    { 
      id: 3, 
      name: 'AirPods Pro', 
      sku: 'AIRPODSPRO',
      category: 'Áudio', 
      price: 1299.00, 
      cashback: 8.0,
      stock: 100, 
      status: 'Ativo',
      sales: 234
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground">Gerencie seu catálogo de produtos</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => navigate('/company/imports/products')}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Importar CSV
          </Button>
          <Button className="bg-gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
            <p className="text-xs text-green-600">+15 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.filter(p => p.status === 'Ativo').length}</div>
            <p className="text-xs text-green-600">100% ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {(products.reduce((sum, p) => sum + p.cashback, 0) / products.length).toFixed(1)}%
            </div>
            <p className="text-xs text-green-600">Taxa média</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Vendas Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.reduce((sum, p) => sum + p.sales, 0)}</div>
            <p className="text-xs text-green-600">+8% este mês</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Catálogo de Produtos</CardTitle>
              <CardDescription>Todos os seus produtos cadastrados</CardDescription>
            </div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Produto</th>
                  <th className="text-left p-4">Categoria</th>
                  <th className="text-left p-4">Preço</th>
                  <th className="text-left p-4">Cashback</th>
                  <th className="text-left p-4">Estoque</th>
                  <th className="text-left p-4">Vendas</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Package className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="font-medium">{product.name}</span>
                          <div className="text-sm text-muted-foreground">
                            SKU: {product.sku}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{product.category}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        R$ {product.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-green-600 font-medium">
                        {product.cashback.toFixed(1)}%
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={product.stock < 30 ? 'text-red-600' : 'text-green-600'}>
                        {product.stock} un.
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        {product.sales}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={product.status === 'Ativo' ? 'default' : 'outline'}>
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Ver</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProducts;
