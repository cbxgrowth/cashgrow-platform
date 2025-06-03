
import { ShoppingBag, Database, CreditCard, Users, MessageSquare, Monitor, Settings, Globe, Smartphone, Mail, Phone, Zap, Building, Package, BarChart3 } from "lucide-react";

export interface Integration {
  id: string;
  name: string;
  description: string;
  platform: string;
  category: 'ecommerce' | 'pdv' | 'comunicacao' | 'gestao';
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: string;
  enabled: boolean;
  syncFrequency: string;
  recordsSynced: number;
  icon: React.ReactNode;
  setupInstructions: string;
  apiEndpoint?: string;
  webhookSupport: boolean;
}

export const defaultIntegrations: Integration[] = [
  // E-commerce
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description: 'Plugin nativo WordPress para e-commerce',
    platform: 'WordPress',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <ShoppingBag className="h-5 w-5 text-purple-600" />,
    setupInstructions: 'Configure as credenciais da API REST do WooCommerce',
    webhookSupport: true
  },
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Plataforma completa de e-commerce',
    platform: 'Shopify',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <ShoppingBag className="h-5 w-5 text-green-600" />,
    setupInstructions: 'Instale o app do Bloom na Shopify Store',
    webhookSupport: true
  },
  {
    id: 'magento',
    name: 'Magento',
    description: 'Plataforma robusta para e-commerce empresarial',
    platform: 'Adobe Commerce',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <ShoppingBag className="h-5 w-5 text-orange-600" />,
    setupInstructions: 'Configure a extensão Bloom para Magento',
    webhookSupport: true
  },
  {
    id: 'vtex',
    name: 'VTEX',
    description: 'Plataforma brasileira de e-commerce',
    platform: 'VTEX',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <ShoppingBag className="h-5 w-5 text-blue-600" />,
    setupInstructions: 'Instale o app na VTEX App Store',
    webhookSupport: true
  },
  {
    id: 'nuvemshop',
    name: 'Nuvemshop',
    description: 'Solução completa para lojas online',
    platform: 'Nuvemshop',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Globe className="h-5 w-5 text-indigo-600" />,
    setupInstructions: 'Configure a API da Nuvemshop',
    webhookSupport: true
  },
  {
    id: 'tray',
    name: 'Tray',
    description: 'Plataforma de e-commerce brasileira',
    platform: 'Tray Corp',
    category: 'ecommerce',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Package className="h-5 w-5 text-cyan-600" />,
    setupInstructions: 'Integre via API REST do Tray',
    webhookSupport: false
  },

  // PDV (Pontos de Venda)
  {
    id: 'stone',
    name: 'Stone',
    description: 'Maquininhas e soluções de pagamento',
    platform: 'Stone Pagamentos',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <CreditCard className="h-5 w-5 text-green-700" />,
    setupInstructions: 'Configure as credenciais da API Stone',
    webhookSupport: true
  },
  {
    id: 'pagseguro',
    name: 'PagSeguro',
    description: 'Soluções completas de pagamento PagBank',
    platform: 'PagBank',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <CreditCard className="h-5 w-5 text-blue-700" />,
    setupInstructions: 'Integre com a API do PagSeguro',
    webhookSupport: true
  },
  {
    id: 'cielo',
    name: 'Cielo',
    description: 'Terminais LIO e soluções de pagamento',
    platform: 'Cielo',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Monitor className="h-5 w-5 text-blue-800" />,
    setupInstructions: 'Configure a integração Cielo LIO',
    webhookSupport: true
  },
  {
    id: 'rede',
    name: 'Rede',
    description: 'Rede Pay e soluções de adquirência',
    platform: 'Rede',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <CreditCard className="h-5 w-5 text-red-600" />,
    setupInstructions: 'Integre com a API da Rede',
    webhookSupport: true
  },
  {
    id: 'getnet',
    name: 'GetNet',
    description: 'Terminais e soluções de pagamento',
    platform: 'GetNet',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Monitor className="h-5 w-5 text-orange-700" />,
    setupInstructions: 'Configure o terminal GetNet',
    webhookSupport: true
  },
  {
    id: 'mercadopago',
    name: 'Mercado Pago',
    description: 'Point e soluções completas de pagamento',
    platform: 'Mercado Pago',
    category: 'pdv',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Smartphone className="h-5 w-5 text-blue-500" />,
    setupInstructions: 'Integre com a API do Mercado Pago',
    webhookSupport: true
  },

  // Comunicação
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'API oficial do WhatsApp para empresas',
    platform: 'Meta',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <MessageSquare className="h-5 w-5 text-green-600" />,
    setupInstructions: 'Configure a API oficial do WhatsApp',
    webhookSupport: true
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Bot integrado para notificações',
    platform: 'Telegram',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    setupInstructions: 'Crie um bot no Telegram e configure',
    webhookSupport: true
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Plataforma de email marketing',
    platform: 'Mailchimp',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Diário',
    recordsSynced: 0,
    icon: <Mail className="h-5 w-5 text-yellow-600" />,
    setupInstructions: 'Conecte sua conta Mailchimp',
    webhookSupport: true
  },
  {
    id: 'rdstation',
    name: 'RD Station',
    description: 'Automação de marketing brasileiro',
    platform: 'RD Station',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
    setupInstructions: 'Configure a integração RD Station',
    webhookSupport: true
  },
  {
    id: 'twilio',
    name: 'Twilio SMS',
    description: 'Envio de SMS e notificações',
    platform: 'Twilio',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Phone className="h-5 w-5 text-red-500" />,
    setupInstructions: 'Configure as credenciais do Twilio',
    webhookSupport: true
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    description: 'Sistema de atendimento ao cliente',
    platform: 'Zendesk',
    category: 'comunicacao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Users className="h-5 w-5 text-green-700" />,
    setupInstructions: 'Integre com a API do Zendesk',
    webhookSupport: true
  },

  // Sistemas de Gestão
  {
    id: 'sap',
    name: 'SAP ERP',
    description: 'Integração completa com SAP',
    platform: 'SAP',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Building className="h-5 w-5 text-blue-800" />,
    setupInstructions: 'Configure a conexão SAP RFC/API',
    webhookSupport: false
  },
  {
    id: 'oracle',
    name: 'Oracle Database',
    description: 'Conectividade com Oracle DB',
    platform: 'Oracle',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Database className="h-5 w-5 text-red-700" />,
    setupInstructions: 'Configure a conexão Oracle',
    webhookSupport: false
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics',
    description: 'Sincronização com Dynamics 365',
    platform: 'Microsoft',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'Tempo real',
    recordsSynced: 0,
    icon: <Settings className="h-5 w-5 text-blue-600" />,
    setupInstructions: 'Integre com Microsoft Graph API',
    webhookSupport: true
  },
  {
    id: 'totvs',
    name: 'TOTVS Protheus',
    description: 'Integração nativa com Protheus',
    platform: 'TOTVS',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Building className="h-5 w-5 text-green-700" />,
    setupInstructions: 'Configure o webservice TOTVS',
    webhookSupport: false
  },
  {
    id: 'senior',
    name: 'Senior X',
    description: 'Conectividade com Senior X',
    platform: 'Senior',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Database className="h-5 w-5 text-purple-700" />,
    setupInstructions: 'Configure a API Senior X',
    webhookSupport: false
  },
  {
    id: 'sankhya',
    name: 'Sankhya ERP',
    description: 'Integração com Sankhya',
    platform: 'Sankhya',
    category: 'gestao',
    status: 'disconnected',
    lastSync: 'Nunca',
    enabled: false,
    syncFrequency: 'A cada hora',
    recordsSynced: 0,
    icon: <Settings className="h-5 w-5 text-orange-600" />,
    setupInstructions: 'Configure os webservices Sankhya',
    webhookSupport: false
  }
];

export const integrationCategories = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Plataformas de loja virtual',
    icon: ShoppingBag,
    color: 'blue'
  },
  {
    id: 'pdv',
    name: 'Pontos de Venda (PDV)',
    description: 'Sistemas de frente de loja',
    icon: Monitor,
    color: 'green'
  },
  {
    id: 'comunicacao',
    name: 'Comunicação',
    description: 'Canais de atendimento e marketing',
    icon: MessageSquare,
    color: 'orange'
  },
  {
    id: 'gestao',
    name: 'Sistemas de Gestão',
    description: 'ERPs, CRMs e sistemas administrativos',
    icon: Settings,
    color: 'purple'
  }
];
