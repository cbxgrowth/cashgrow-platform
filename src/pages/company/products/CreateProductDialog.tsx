
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompanyProducts } from '@/hooks/useCompanyProducts';
import { Loader2 } from 'lucide-react';

interface CreateProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateProductDialog: React.FC<CreateProductDialogProps> = ({ open, onOpenChange }) => {
  const { createProduct } = useCompanyProducts();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    sku: '',
    category: '',
    cashback_percentage: '',
    stock_quantity: ''
  });

  const categories = [
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
    'Instrumentos Musicais',
    'Brinquedos e Jogos',
    'Jardinagem e Plantas',
    'Ferramentas e Construção',
    'Arte e Artesanato',
    'Pets e Animais',
    'Viagens e Turismo',
    'Serviços Profissionais',
    'Consultoria e Assessoria',
    'Manutenção e Reparos',
    'Transporte e Logística',
    'Eventos e Entretenimento',
    'Cursos e Treinamentos',
    'Software e Aplicativos',
    'Marketing e Publicidade',
    'Financeiro e Contábil',
    'Jurídico e Legal',
    'Imobiliário',
    'Seguros',
    'Telecomunicações',
    'Energia e Sustentabilidade',
    'Outros'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createProduct({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        sku: formData.sku,
        category: formData.category,
        cashback_percentage: parseFloat(formData.cashback_percentage),
        stock_quantity: parseInt(formData.stock_quantity)
      });

      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        sku: '',
        category: '',
        cashback_percentage: '',
        stock_quantity: ''
      });

      onOpenChange(false);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Novo Produto</DialogTitle>
          <DialogDescription>
            Adicione um novo produto ao seu catálogo.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Produto *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sku">SKU *</Label>
              <Input
                id="sku"
                value={formData.sku}
                onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoria *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px] overflow-y-auto">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cashback_percentage">Cashback (%)</Label>
              <Input
                id="cashback_percentage"
                type="number"
                step="0.1"
                value={formData.cashback_percentage}
                onChange={(e) => setFormData(prev => ({ ...prev, cashback_percentage: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock_quantity">Estoque</Label>
              <Input
                id="stock_quantity"
                type="number"
                value={formData.stock_quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, stock_quantity: e.target.value }))}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Criar Produto
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductDialog;
