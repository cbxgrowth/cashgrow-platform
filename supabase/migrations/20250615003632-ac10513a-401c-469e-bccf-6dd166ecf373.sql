
-- Criar tabela para gerenciar créditos IA das empresas
CREATE TABLE public.company_ai_credits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  total_credits INTEGER NOT NULL DEFAULT 0,
  used_credits INTEGER NOT NULL DEFAULT 0,
  remaining_credits INTEGER GENERATED ALWAYS AS (total_credits - used_credits) STORED,
  last_refill_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT unique_company_credits UNIQUE(company_id)
);

-- Criar tabela para histórico de uso de créditos IA
CREATE TABLE public.ai_credit_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL, -- 'suggestion_generated', 'suggestion_applied', 'insight_generated', etc.
  credits_consumed INTEGER NOT NULL DEFAULT 1,
  description TEXT,
  suggestion_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar RLS para company_ai_credits
ALTER TABLE public.company_ai_credits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Companies can view their own AI credits" 
  ON public.company_ai_credits 
  FOR SELECT 
  USING (company_id IN (
    SELECT c.id FROM companies c 
    WHERE c.owner_id = auth.uid()
  ));

CREATE POLICY "Companies can update their own AI credits" 
  ON public.company_ai_credits 
  FOR UPDATE 
  USING (company_id IN (
    SELECT c.id FROM companies c 
    WHERE c.owner_id = auth.uid()
  ));

-- Adicionar RLS para ai_credit_transactions
ALTER TABLE public.ai_credit_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Companies can view their own AI credit transactions" 
  ON public.ai_credit_transactions 
  FOR SELECT 
  USING (company_id IN (
    SELECT c.id FROM companies c 
    WHERE c.owner_id = auth.uid()
  ));

CREATE POLICY "Companies can insert their own AI credit transactions" 
  ON public.ai_credit_transactions 
  FOR INSERT 
  WITH CHECK (company_id IN (
    SELECT c.id FROM companies c 
    WHERE c.owner_id = auth.uid()
  ));

-- Função para consumir créditos IA
CREATE OR REPLACE FUNCTION public.consume_ai_credits(
  p_company_id UUID,
  p_action_type TEXT,
  p_credits_amount INTEGER DEFAULT 1,
  p_description TEXT DEFAULT NULL,
  p_suggestion_id TEXT DEFAULT NULL
) 
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_remaining INTEGER;
BEGIN
  -- Verificar créditos disponíveis
  SELECT remaining_credits INTO current_remaining
  FROM public.company_ai_credits
  WHERE company_id = p_company_id;
  
  -- Se não existe registro, criar um com 0 créditos
  IF current_remaining IS NULL THEN
    INSERT INTO public.company_ai_credits (company_id, total_credits, used_credits)
    VALUES (p_company_id, 0, 0);
    current_remaining := 0;
  END IF;
  
  -- Verificar se há créditos suficientes
  IF current_remaining < p_credits_amount THEN
    RETURN FALSE;
  END IF;
  
  -- Consumir créditos
  UPDATE public.company_ai_credits
  SET used_credits = used_credits + p_credits_amount,
      updated_at = now()
  WHERE company_id = p_company_id;
  
  -- Registrar transação
  INSERT INTO public.ai_credit_transactions (
    company_id,
    action_type,
    credits_consumed,
    description,
    suggestion_id
  ) VALUES (
    p_company_id,
    p_action_type,
    p_credits_amount,
    p_description,
    p_suggestion_id
  );
  
  RETURN TRUE;
END;
$$;

-- Função para adicionar créditos IA (para recargas)
CREATE OR REPLACE FUNCTION public.add_ai_credits(
  p_company_id UUID,
  p_credits_amount INTEGER,
  p_description TEXT DEFAULT 'Recarga de créditos'
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Inserir ou atualizar créditos
  INSERT INTO public.company_ai_credits (company_id, total_credits, used_credits)
  VALUES (p_company_id, p_credits_amount, 0)
  ON CONFLICT (company_id)
  DO UPDATE SET 
    total_credits = company_ai_credits.total_credits + p_credits_amount,
    last_refill_date = now(),
    updated_at = now();
    
  -- Registrar transação de recarga
  INSERT INTO public.ai_credit_transactions (
    company_id,
    action_type,
    credits_consumed,
    description
  ) VALUES (
    p_company_id,
    'credits_added',
    -p_credits_amount, -- Negativo para indicar adição
    p_description
  );
END;
$$;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_company_ai_credits_updated_at
    BEFORE UPDATE ON public.company_ai_credits
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
