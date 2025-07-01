
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Search, Plus, Edit, Trash2, Package, DollarSign, TrendingUp, Eye } from 'lucide-react';
import { toast } from 'sonner';

const CompanyProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Smartphone XYZ Pro',
      description: 'Smartphone premium com câmera de 108MP e 256GB de armazenamento',
      price: 2499.90,
      category: 'Eletrônicos',
      stock: 45,
      cashbackPercentage: 8,
      status: 'active',
      sales: 127,
      revenue: 317487.30,
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Fone Bluetooth Premium',
      description: 'Fone de ouvido sem fio com cancelamento de ruído',
      price: 299.90,
      category: 'Áudio',
      stock: 23,
      cashbackPercentage: 10,
      status: 'active',
      sales: 89,
      revenue: 26691.10,
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Notebook Gamer RGB',
      description: 'Notebook para jogos com placa de vídeo dedicada',
      price: 4999.90,
      category: 'Computadores',
      stock: 12,
      cashbackPercentage: 5,
      status: 'active',
      sales: 34,
      revenue: 169996.60,
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Smart TV 55"',
      description: 'Smart TV 4K HDR com sistema Android TV',
      price: 1899.90,
      category: 'TV & Home',
      stock: 0,
      cashbackPercentage: 6,
      status: 'out_of_stock',
      sales: 67,
      revenue: 127293.30,
      imageUrl: 'https://via.placeholder.com/100'
    },
    {
      id: 5,
      name: 'Tablet Pro 256GB',
      description: 'Tablet profissional com caneta stylus incluída',
      price: 1299.90,
      category: 'Tablets',
      stock: 18,
      cashbackPercentage: 7,
      status: 'inactive',
      sales: 23,
      revenue: 29897.70,
      imageUrl: 'https://via.placeholder.com/100'
    }
  ]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      inactive: 'secondary',
      out_of_stock: 'destructive'
    };
    
    const labels = {
      active: 'Ativo',
      inactive: 'Inativo',
      out_of_stock: 'Sem Estoque'
    };

    return (
      <Badge variant={variants[status] as any}>
        {labels[status]}
      </Badge>
    );
  };

  const totalStats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    totalRevenue: products.reduce((sum, p) => sum + p.revenue, 0),
    avgCashback: products.reduce((sum, p) => sum + p.cashbackPercentage, 0) / products.length
  };

  const handleAddProduct = () => {
    toast.success('Produto adicionado com sucesso!');
    setIsAddDialogOpen(false);
  };

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seu catálogo de produtos e configurações de cashback
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Produto</DialogTitle>
              <DialogDescription>
                Preencha as informações do produto para adicionar ao catálogo
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome do Produto</Label>
                  <Input id="name" placeholder="Digite o nome do produto" />
                </div>
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                      <SelectItem value="audio">Áudio</SelectItem>
                      <SelectItem value="computadores">Computadores</SelectItem>
                      <SelectItem value="tv-home">TV & Home</SelectItem>
                      <SelectItem value="tablets">Tablets</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descreva o produto" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input id="price" type="number" step="0.01" placeholder="0,00" />
                </div>
                <div>
                  <Label htmlFor="stock">Estoque</Label>
                  <Input id="stock" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="cashback">Cashback (%)</Label>
                  <Input id="cashback" type="number" step="0.1" placeholder="0" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddProduct}>
                Adicionar Produto
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              {totalStats.activeProducts} ativos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {totalStats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              De todos os produtos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {totalStats.avgCashback.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Em todos os produtos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos em Falta</CardTitle>
            <Package className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {products.filter(p => p.status === 'out_of_stock').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Precisam reposição
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Categorias</SelectItem>
                <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                <SelectItem value="Áudio">Áudio</SelectItem>
                <SelectItem value="Computadores">Computadores</SelectItem>
                <SelectItem value="TV & Home">TV & Home</SelectItem>
                <SelectItem value="Tablets">Tablets</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos Status</SelectItem>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="inactive">Inativo</SelectItem>
                <SelectItem value="out_of_stock">Sem Estoque</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Grid de produtos */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {product.description}
                  </CardDescription>
                </div>
                {getStatusBadge(product.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Preço</p>
                  <p className="font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Estoque</p>
                  <p className="font-medium">{product.stock} un.</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Cashback</p>
                  <p className="font-medium text-green-600">{product.cashbackPercentage}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Vendas</p>
                  <p className="font-medium">{product.sales}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="font-bold text-green-600">
                  R$ {product.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyProductsPage;
