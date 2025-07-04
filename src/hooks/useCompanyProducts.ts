
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/auth/useAuth';

export interface CompanyProduct {
  id: string;
  company_id: string;
  name: string;
  description?: string;
  price: number;
  sku: string;
  category: string;
  cashback_percentage: number;
  stock_quantity: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  created_by_integration: boolean;
  integration_source?: string;
}

export const useCompanyProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<CompanyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('company_products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
      toast.error('Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (productData: {
    name: string;
    description?: string;
    price: number;
    sku: string;
    category: string;
    cashback_percentage: number;
    stock_quantity: number;
    created_by_integration?: boolean;
    integration_source?: string;
  }) => {
    try {
      const newProduct = {
        ...productData,
        company_id: user?.id,
        is_active: true,
        created_by_integration: productData.created_by_integration || false
      };

      const { data, error } = await supabase
        .from('company_products')
        .insert([newProduct])
        .select()
        .single();

      if (error) throw error;

      await fetchProducts();
      toast.success('Produto cadastrado com sucesso!');
      return data;
    } catch (error: any) {
      console.error('Erro ao criar produto:', error);
      toast.error('Erro ao cadastrar produto: ' + error.message);
      throw error;
    }
  };

  const createProductFromIntegration = async (productData: any) => {
    try {
      const processedData = {
        name: productData.name || productData.nome,
        description: productData.description || productData.descricao,
        price: parseFloat(productData.price || productData.preco),
        sku: productData.sku,
        category: productData.category || productData.categoria,
        cashback_percentage: parseFloat(productData.cashback_percentage || productData.cashback_percentual || '2'),
        stock_quantity: parseInt(productData.stock_quantity || productData.estoque || '0'),
        created_by_integration: true,
        integration_source: productData.source || 'CSV Import'
      };

      return await createProduct(processedData);
    } catch (error: any) {
      console.error('Erro ao criar produto da integração:', error);
      toast.error('Erro ao criar produto da integração');
      throw error;
    }
  };

  const updateProduct = async (productId: string, updates: Partial<CompanyProduct>) => {
    try {
      const { error } = await supabase
        .from('company_products')
        .update(updates)
        .eq('id', productId);

      if (error) throw error;

      await fetchProducts();
      toast.success('Produto atualizado com sucesso!');
    } catch (error: any) {
      console.error('Erro ao atualizar produto:', error);
      toast.error('Erro ao atualizar produto');
      throw error;
    }
  };

  return {
    products,
    loading,
    createProduct,
    createProductFromIntegration,
    updateProduct,
    refetch: fetchProducts
  };
};
