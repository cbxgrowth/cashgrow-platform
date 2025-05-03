
import { 
  Store,
  ShoppingBag,
  Users,
  ShoppingCart,
  Check
} from "lucide-react";

export const activeMissionsData = [
  {
    id: 1,
    title: 'Explorador de Lojas',
    description: 'Faça compras em 3 lojas diferentes este mês',
    progress: 66,
    current: 2,
    total: 3,
    reward: '+15% cashback',
    icon: Store,
    deadline: '5 dias',
    stores: ['Mercado Verde', 'Tech Store'],
    remaining: ['Qualquer nova loja parceira']
  },
  {
    id: 2,
    title: 'Maratona de Compras',
    description: 'Realize 5 transações em 7 dias',
    progress: 40,
    current: 2,
    total: 5,
    reward: '+10% cashback',
    icon: ShoppingBag,
    deadline: '3 dias',
    tag: 'Em alta'
  },
  {
    id: 3,
    title: 'Indique Amigos',
    description: 'Convide 3 amigos para o sistema de cashback',
    progress: 33,
    current: 1,
    total: 3,
    reward: 'R$ 20,00 em cashback',
    icon: Users,
    deadline: '30 dias',
    permanent: true
  },
];

export const completedMissionsData = [
  {
    id: 4,
    title: 'Primeira Compra',
    description: 'Realize sua primeira compra com cashback',
    reward: 'R$ 10,00 em cashback',
    icon: ShoppingCart,
    completedDate: '20/04/2025'
  },
  {
    id: 5,
    title: 'Cadastro Completo',
    description: 'Complete 100% do seu perfil',
    reward: '+5% cashback na próxima compra',
    icon: Check,
    completedDate: '15/04/2025'
  }
];
