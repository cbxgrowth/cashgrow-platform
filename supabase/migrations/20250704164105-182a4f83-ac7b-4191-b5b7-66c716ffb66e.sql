
-- Create company_products table
CREATE TABLE public.company_products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL DEFAULT 0,
  sku TEXT NOT NULL,
  category TEXT NOT NULL,
  cashback_percentage NUMERIC NOT NULL DEFAULT 0,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by_integration BOOLEAN NOT NULL DEFAULT false,
  integration_source TEXT,
  
  -- Add unique constraint for SKU per company
  UNIQUE(company_id, sku)
);

-- Add Row Level Security (RLS)
ALTER TABLE public.company_products ENABLE ROW LEVEL SECURITY;

-- Create policy for companies to manage their own products
CREATE POLICY "Companies can manage their own products" 
  ON public.company_products 
  FOR ALL 
  USING (company_id = auth.uid());

-- Add trigger to update updated_at column
CREATE TRIGGER update_company_products_updated_at
  BEFORE UPDATE ON public.company_products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add foreign key constraint to companies table
ALTER TABLE public.company_products 
  ADD CONSTRAINT fk_company_products_company_id 
  FOREIGN KEY (company_id) REFERENCES public.companies(id) ON DELETE CASCADE;
