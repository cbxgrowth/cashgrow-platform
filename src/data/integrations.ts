
import { ShoppingCart, Database, Globe, Zap, Users, BarChart3, Mail, Code, CreditCard, Cloud } from 'lucide-react';
import { createElement } from 'react';

export interface Integration {
  id: string;
  name: string;
  description: string;
  platform: string;
  category: 'ecommerce' | 'crm' | 'analytics' | 'marketing' | 'payment' | 'api';
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: string;
  enabled: boolean;
  syncFrequency: string;
  recordsSynced: number;
  icon: React.ReactNode;
  setupInstructions: string;
  apiEndpoint?: string;
  webhookSupport: boolean;
  logoUrl?: string;
  brandColor: string;
}

export const integrationCategories = [
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
  { id: 'crm', name: 'CRM', icon: Users },
  { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  { id: 'marketing', name: 'Marketing', icon: Mail },
  { id: 'payment', name: 'Pagamentos', icon: CreditCard },
  { id: 'api', name: 'APIs', icon: Code }
];

export const defaultIntegrations: Integration[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Integração completa com lojas Shopify',
    platform: 'Shopify Plus',
    category: 'ecommerce',
    status: 'connected',
    lastSync: 'Há 5 minutos',
    enabled: true,
    syncFrequency: 'A cada hora',
    recordsSynced: 1247,
    icon: createElement(ShoppingCart, { className: 'h-5 w-5' }),
    setupInstructions: 'Configure sua chave de API do Shopify',
    webhookSupport: true,
    brandColor: '#96BF47'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description: 'Plugin para WordPress/WooCommerce',
    platform: 'WordPress',
    category: 'ecommerce',
    status: 'connected',
    lastSync: 'Há 10 minutos',
    enabled: true,
    syncFrequency: 'A cada 30 minutos',
    recordsSynced: 892,
    icon: createElement(Globe, { className: 'h-5 w-5' }),
    setupInstructions: 'Instale o plugin e configure as credenciais',
    webhookSupport: true,
    brandColor: '#21759B'
  },
  {
    id: 'magento',
    name: 'Magento',
    description: 'Módulo para Magento 2',
    platform: 'Magento 2.x',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Diário',
    recordsSynced: 0,
    icon: createElement(Database, { className: 'h-5 w-5' }),
    setupInstructions: 'Configure o módulo Magento',
    webhookSupport: false,
    brandColor: '#FF6600'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'CRM e automação de vendas',
    platform: 'Salesforce CRM',
    category: 'crm',
    status: 'connected',
    lastSync: 'Há 2 horas',
    enabled: true,
    syncFrequency: 'A cada 2 horas',
    recordsSynced: 543,
    icon: createElement(Cloud, { className: 'h-5 w-5' }),
    setupInstructions: 'Configure OAuth com Salesforce',
    webhookSupport: true,
    brandColor: '#00A1E0'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Marketing automation e CRM',
    platform: 'HubSpot CRM',
    category: 'marketing',
    status: 'syncing',
    lastSync: 'Sincronizando...',
    enabled: true,
    syncFrequency: 'A cada hora',
    recordsSynced: 324,
    icon: createElement(Mail, { className: 'h-5 w-5' }),
    setupInstructions: 'Conecte via API key do HubSpot',
    webhookSupport: true,
    brandColor: '#FF7A59'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Análise de dados e métricas',
    platform: 'Google Analytics 4',
    category: 'analytics',
    status: 'connected',
    lastSync: 'Há 1 hora',
    enabled: true,
    syncFrequency: 'A cada 4 horas',
    recordsSynced: 2156,
    icon: createElement(BarChart3, { className: 'h-5 w-5' }),
    setupInstructions: 'Configure Google Analytics API',
    webhookSupport: false,
    brandColor: '#4285F4'
  }
];
