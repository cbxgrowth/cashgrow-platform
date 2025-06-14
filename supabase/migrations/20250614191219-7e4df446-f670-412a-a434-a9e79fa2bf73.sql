
-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('super_admin', 'admin', 'user');

-- Create enum for subscription status
CREATE TYPE public.subscription_status AS ENUM ('active', 'inactive', 'suspended', 'cancelled');

-- Create profiles table to extend auth.users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create companies table
CREATE TABLE public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  website TEXT,
  industry TEXT,
  size TEXT,
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  subscription_status subscription_status DEFAULT 'inactive',
  subscription_plan_id INTEGER,
  subscription_started_at TIMESTAMP WITH TIME ZONE,
  subscription_ends_at TIMESTAMP WITH TIME ZONE,
  monthly_revenue DECIMAL(10,2) DEFAULT 0,
  total_users INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create system_settings table for super admin configurations
CREATE TABLE public.system_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  description TEXT,
  category TEXT DEFAULT 'general',
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create audit_logs table for tracking admin actions
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id TEXT,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create company_users table for user-company relationships
CREATE TABLE public.company_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'user',
  invited_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id, user_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_users ENABLE ROW LEVEL SECURITY;

-- Create function to check if user is super admin
CREATE OR REPLACE FUNCTION public.is_super_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id AND role = 'super_admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Super admins can view all profiles" ON public.profiles
  FOR ALL USING (public.is_super_admin(auth.uid()));

-- RLS Policies for companies
CREATE POLICY "Company owners can manage their company" ON public.companies
  FOR ALL USING (auth.uid() = owner_id);

CREATE POLICY "Super admins can manage all companies" ON public.companies
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company users can view their company" ON public.companies
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.company_users 
      WHERE company_id = id AND user_id = auth.uid()
    )
  );

-- RLS Policies for system_settings
CREATE POLICY "Super admins can manage system settings" ON public.system_settings
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Public settings viewable by all" ON public.system_settings
  FOR SELECT USING (is_public = true);

-- RLS Policies for audit_logs
CREATE POLICY "Super admins can view all audit logs" ON public.audit_logs
  FOR SELECT USING (public.is_super_admin(auth.uid()));

-- RLS Policies for company_users
CREATE POLICY "Company admins can manage company users" ON public.company_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.companies 
      WHERE id = company_id AND owner_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all company users" ON public.company_users
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Users can view their company memberships" ON public.company_users
  FOR SELECT USING (auth.uid() = user_id);

-- Trigger to update updated_at columns
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at 
  BEFORE UPDATE ON public.profiles 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_companies_updated_at 
  BEFORE UPDATE ON public.companies 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_system_settings_updated_at 
  BEFORE UPDATE ON public.system_settings 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger to create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    CASE 
      WHEN NEW.email = 'admin@cashback.com' THEN 'super_admin'::user_role
      ELSE 'user'::user_role
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some initial system settings
INSERT INTO public.system_settings (key, value, description, category, is_public) VALUES
('app_name', '"CashBack SaaS"', 'Nome da aplicação', 'general', true),
('maintenance_mode', 'false', 'Modo de manutenção', 'system', false),
('max_companies_per_user', '5', 'Máximo de empresas por usuário', 'limits', false),
('default_trial_days', '30', 'Dias de trial padrão', 'billing', false);
