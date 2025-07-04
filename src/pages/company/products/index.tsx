import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Package, DollarSign, Upload, TrendingUp, Edit, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useCompanyProducts, CompanyProduct } from '@/hooks/useCompanyProducts';
import CreateProductDialog from './CreateProductDialog';
import EditProductDialog from './EditProductDialog';
import { toast } from 'sonner';

const CompanyProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CompanyProduct | null>(null);
  const navigate = useNavigate();
  const { products, loading, updateProduct } = useCompanyProducts();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeProducts = products.filter(p => p.is_active);
  const averageCashback = products.length > 0 
    ? (products.reduce((sum, p) => sum + p.cashback_percentage, 0) / products.length).toFixed(1)
    : '0.0';

  const handleEditProduct = (product: CompanyProduct) => {
    setSelectedProduct(product);
    setEditDialogOpen(true);
  };

  const handleToggleStatus = async (product: CompanyProduct) => {
    try {
      await updateProduct(product.id, { is_active: !product.is_active });
      toast.success(`Produto ${product.is_active ? 'desativado' : 'ativado'} com sucesso!`);
    } catch (error) {
      toast.error('Erro ao alterar status do produto');
    }
  };

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
          <Button className="bg-gradient-primary" onClick={() => setCreateDialogOpen(true)}>
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
            <p className="text-xs text-green-600">+{products.filter(p => p.created_by_integration).length} por integração</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProducts.length}</div>
            <p className="text-xs text-green-600">{products.length > 0 ? Math.round((activeProducts.length / products.length) * 100) : 0}% ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cashback Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {averageCashback}%
            </div>
            <p className="text-xs text-green-600">Taxa média</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
            </div>
            <p className="text-xs text-green-600">Valor do catálogo</p>
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
          {loading ? (
            <div className="text-center py-8">Carregando produtos...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {products.length === 0 ? 'Nenhum produto cadastrado' : 'Nenhum produto encontrado'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Produto</th>
                    <th className="text-left p-4">Categoria</th>
                    <th className="text-left p-4">Preço</th>
                    <th className="text-left p-4">Cashback</th>
                    <th className="text-left p-4">Estoque</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Origem</th>
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
                          {product.cashback_percentage.toFixed(1)}%
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={product.stock_quantity < 30 ? 'text-red-600' : 'text-green-600'}>
                          {product.stock_quantity} un.
                        </span>
                      </td>
                      <td className="p-4">
                        <Badge 
                          variant={product.is_active ? 'default' : 'outline'}
                          className="cursor-pointer"
                          onClick={() => handleToggleStatus(product)}
                        >
                          {product.is_active ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline">
                          {product.created_by_integration ? product.integration_source || 'Integração' : 'Manual'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                            <Edit className="h-3 w-3 mr-1" />
                            Editar
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleToggleStatus(product)}
                          >
                            {product.is_active ? 'Desativar' : 'Ativar'}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <CreateProductDialog 
        open={createDialogOpen} 
        onOpenChange={setCreateDialogOpen} 
      />
      
      <EditProductDialog 
        open={editDialogOpen} 
        onOpenChange={setEditDialogOpen}
        product={selectedProduct}
      />
    </div>
  );
};

export default CompanyProducts;
