
-- Criar tabela para armazenar localizações das empresas
CREATE TABLE public.company_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  country TEXT DEFAULT 'Brasil',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id)
);

-- Criar tabela para armazenar dados agregados de proximidade de usuários
CREATE TABLE public.user_proximity_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  city TEXT,
  state TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  privacy_consent BOOLEAN DEFAULT false,
  UNIQUE(user_id)
);

-- Criar tabela para cache de métricas de proximidade
CREATE TABLE public.proximity_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  radius_km INTEGER NOT NULL,
  user_count INTEGER DEFAULT 0,
  calculated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id, radius_km)
);

-- Enable RLS
ALTER TABLE public.company_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_proximity_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.proximity_metrics ENABLE ROW LEVEL SECURITY;

-- RLS Policies para company_locations
CREATE POLICY "Company owners can manage their locations" ON public.company_locations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.companies 
      WHERE id = company_id AND owner_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all locations" ON public.company_locations
  FOR ALL USING (public.is_super_admin(auth.uid()));

-- RLS Policies para user_proximity_data
CREATE POLICY "Users can manage their own proximity data" ON public.user_proximity_data
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Super admins can view proximity data" ON public.user_proximity_data
  FOR SELECT USING (public.is_super_admin(auth.uid()));

-- RLS Policies para proximity_metrics
CREATE POLICY "Company owners can view their metrics" ON public.proximity_metrics
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.companies 
      WHERE id = company_id AND owner_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all metrics" ON public.proximity_metrics
  FOR ALL USING (public.is_super_admin(auth.uid()));

-- Função para calcular distância entre dois pontos
CREATE OR REPLACE FUNCTION public.calculate_distance(
  lat1 DECIMAL, lon1 DECIMAL, lat2 DECIMAL, lon2 DECIMAL
) RETURNS DECIMAL AS $$
BEGIN
  RETURN (
    6371 * acos(
      cos(radians(lat1)) * cos(radians(lat2)) * cos(radians(lon2) - radians(lon1)) +
      sin(radians(lat1)) * sin(radians(lat2))
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Função para atualizar métricas de proximidade (corrigida)
CREATE OR REPLACE FUNCTION public.update_proximity_metrics()
RETURNS void AS $$
DECLARE
  company_record RECORD;
  user_count INTEGER;
  radius_array INTEGER[] := ARRAY[10, 50, 100];
  radius_value INTEGER;
BEGIN
  -- Para cada empresa com localização
  FOR company_record IN 
    SELECT cl.company_id, cl.latitude, cl.longitude
    FROM public.company_locations cl
    INNER JOIN public.companies c ON cl.company_id = c.id
    WHERE c.is_active = true
  LOOP
    -- Calcular usuários em diferentes raios
    FOREACH radius_value IN ARRAY radius_array
    LOOP
      SELECT COUNT(*) INTO user_count
      FROM public.user_proximity_data upd
      WHERE upd.is_active = true 
        AND upd.privacy_consent = true
        AND public.calculate_distance(
          company_record.latitude, 
          company_record.longitude,
          upd.latitude, 
          upd.longitude
        ) <= radius_value;
      
      -- Inserir ou atualizar métricas
      INSERT INTO public.proximity_metrics (company_id, radius_km, user_count, calculated_at)
      VALUES (company_record.company_id, radius_value, user_count, NOW())
      ON CONFLICT (company_id, radius_km) 
      DO UPDATE SET 
        user_count = EXCLUDED.user_count,
        calculated_at = EXCLUDED.calculated_at;
    END LOOP;
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_company_locations_updated_at 
  BEFORE UPDATE ON public.company_locations 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir alguns dados de exemplo para teste
INSERT INTO public.company_locations (company_id, latitude, longitude, address, city, state) 
SELECT 
  id, 
  -23.5505 + (random() - 0.5) * 0.1, -- São Paulo com variação
  -46.6333 + (random() - 0.5) * 0.1,
  'Endereço de exemplo',
  'São Paulo',
  'SP'
FROM public.companies 
WHERE owner_id IS NOT NULL
LIMIT 5;
