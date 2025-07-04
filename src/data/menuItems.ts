
import { MenuItem } from '@/types/dashboard';
import { UserType } from '@/types/auth';
import {
  LayoutDashboard,
  Package,
  Users,
  CreditCard,
  BarChart3,
  FileText,
  TrendingUp,
  Sparkles,
  Building2,
  Settings,
  User,
  Wallet,
  Target,
  Gift,
  MapPin,
  Bell,
  Heart,
  Zap,
  FileBarChart
} from 'lucide-react';

export const getMenuItems = (userType: UserType): MenuItem[] => {
  if (userType === 'company') {
    return [
      {
        title: 'Dashboard',
        url: '/company/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: 'Produtos',
        url: '/company/products',
        icon: Package,
      },
      {
        title: 'Clientes',
        url: '/company/clients',
        icon: Users,
      },
      {
        title: 'Transações',
        url: '/company/transactions',
        icon: CreditCard,
      },
      {
        title: 'Analytics',
        url: '/company/analytics',
        icon: BarChart3,
      },
      {
        title: 'Relatórios',
        url: '/company/reports',
        icon: FileText,
      },
      {
        title: 'Performance',
        url: '/company/performance',
        icon: TrendingUp,
      },
      {
        title: 'Campanhas IA',
        url: '/company/ai-campaigns',
        icon: Sparkles,
      },
      {
        title: 'Corporativo',
        url: '/company/corporate',
        icon: Building2,
      },
      {
        title: 'Regras Cashback',
        url: '/company/cashback-rules',
        icon: Gift,
      },
      {
        title: 'Proximidade',
        url: '/company/proximity',
        icon: MapPin,
      },
      {
        title: 'API Integration',
        url: '/company/api-integration',
        icon: Zap,
      },
      {
        title: 'Perfil',
        url: '/company/profile',
        icon: User,
      },
      {
        title: 'Configurações',
        url: '/company/settings',
        icon: Settings,
      },
    ];
  }

  // Client menu items
  return [
    {
      title: 'Dashboard',
      url: '/client/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Carteira',
      url: '/client/wallet',
      icon: Wallet,
    },
    {
      title: 'Transações',
      url: '/client/transactions',
      icon: CreditCard,
    },
    {
      title: 'Missões',
      url: '/client/missions',
      icon: Target,
    },
    {
      title: 'Analytics',
      url: '/client/analytics',
      icon: BarChart3,
    },
    {
      title: 'Recomendações',
      url: '/client/recommendations',
      icon: Heart,
    },
    {
      title: 'Planos',
      url: '/client/plans',
      icon: FileBarChart,
    },
    {
      title: 'VIP Club',
      url: '/client/vip-club',
      icon: Gift,
    },
    {
      title: 'Empresas',
      url: '/client/companies',
      icon: Building2,
    },
    {
      title: 'Localização',
      url: '/client/location',
      icon: MapPin,
    },
    {
      title: 'Notificações',
      url: '/client/notifications',
      icon: Bell,
    },
    {
      title: 'Comunidade',
      url: '/client/community',
      icon: Users,
    },
    {
      title: 'Perfil',
      url: '/client/profile',
      icon: User,
    },
  ];
};
