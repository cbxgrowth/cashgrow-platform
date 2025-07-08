
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Package, Tag, Percent } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  cashbackPercentage: number;
  stock: number;
  status: 'active' | 'inactive';
  image: string;
}

const ProductCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Galaxy S24',
      category: 'Eletrônicos e Tecnologia',
      price: 2299.90,
      originalPrice: 2499.90,
      cashbackPercentage: 8,
      stock: 15,
      status: 'active',
      image: '📱'
    },
    {
      id: 2,
      name: 'Notebook Dell Inspiron',
      category: 'Eletrônicos e Tecnologia',
      price: 3299.90,
      cashbackPercentage: 10,
      stock: 8,
      status: 'active',
      image: '💻'
    },
    {
      id: 3,
      name: 'Tênis Nike Air Max',
      category: 'Roupas e Acessórios',
      price: 499.90,
      originalPrice: 599.90,
      cashbackPercentage: 12,
      stock: 25,
      status: 'active',
      image: '👟'
    },
    {
      id: 4,
      name: 'Cafeteira Nespresso',
      category: 'Casa e Decoração',
      price: 789.90,
      cashbackPercentage: 6,
      stock: 0,
      status: 'inactive',
      image: '☕'
    }
  ];

  const categories = [
    'all',
    'Eletrônicos e Tecnologia',
    'Roupas e Acessórios',
    'Casa e Decoração',
    'Esportes e Lazer',
    'Beleza e Cuidados Pessoais',
    'Livros e Educação',
    'Alimentação e Bebidas',
    'Saúde e Bem-estar',
    'Automóveis e Veículos',
    'Móveis e Eletrodomésticos',
    'Serviços Profissionais',
    'Outros'
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    toast.success('Produto adicionado com sucesso!');
  };

  const handleEditProduct = (productId: number) => {
    toast.info(`Editando produto ${productId}`);
  };

  const handleDeleteProduct = (productId: number) => {
    toast.success('Produto removido com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Catálogo de Produtos</h2>
          <p className="text-muted-foreground">
            Gerencie seus produtos e configure o cashback para cada item
          </p>
        </div>
        <Button onClick={handleAddProduct} className="gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Buscar Produtos</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Nome do produto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">Todas as categorias</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover-scale">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {product.category}
                    </CardDescription>
                  </div>
                </div>
                <Badge 
                  className={product.status === 'active' ? 
                    'bg-green-500/20 text-green-600' : 
                    'bg-red-500/20 text-red-600'
                  }
                >
                  {product.status === 'active' ? 'Ativo' : 'Inativo'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">R$ {product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Percent className="h-3 w-3" />
                    <span className="text-sm font-medium">{product.cashbackPercentage}% cashback</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  <span>Estoque: {product.stock}</span>
                </div>
                {product.stock === 0 && (
                  <Badge variant="destructive" className="text-xs">
                    Sem estoque
                  </Badge>
                )}
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleEditProduct(product.id)}
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Editar
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center">
            <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Ajuste os filtros ou adicione novos produtos ao catálogo
            </p>
            <Button onClick={handleAddProduct}>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Primeiro Produto
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductCatalog;
