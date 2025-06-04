
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Calendar, Zap, Gift } from 'lucide-react';
import { UserPlan, Plan } from '@/types/plans';
import { usePlans } from '@/hooks/usePlans';

interface UserPlanStatusProps {
  userPlan: UserPlan | null;
  onManagePlan?: () => void;
}

const UserPlanStatus: React.FC<UserPlanStatusProps> = ({ userPlan, onManagePlan }) => {
  const { canRescuePix } = usePlans();
  
  if (!userPlan || !userPlan.plan) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Nenhum plano ativo</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Assine um plano para aproveitar benefícios exclusivos
            </p>
            <Button onClick={onManagePlan}>Ver Planos</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const plan = userPlan.plan as Plan;
  const renewalDate = userPlan.renewal_date ? new Date(userPlan.renewal_date).toLocaleDateString('pt-BR') : null;
  const canPixRescue = canRescuePix(userPlan);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Meu Plano
          </div>
          <Badge variant="secondary">{plan.name}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Cashback</span>
            <div className="font-semibold">
              {plan.cashback_multiplier > 1 ? `${Math.round((plan.cashback_multiplier - 1) * 100)}% extra` : 'Padrão'}
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Resgates PIX</span>
            <div className="font-semibold">
              {plan.pix_limit_per_month === 999999 ? 'Ilimitado' : `${userPlan.current_month_pix_count}/${plan.pix_limit_per_month}`}
            </div>
          </div>
        </div>

        {renewalDate && (
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Renovação: {renewalDate}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {plan.has_exclusive_campaigns && (
            <Badge variant="outline" className="text-xs">
              <Gift className="h-3 w-3 mr-1" />
              Campanhas VIP
            </Badge>
          )}
          {plan.priority_support && (
            <Badge variant="outline" className="text-xs">
              Suporte Priority
            </Badge>
          )}
          {plan.has_early_access && (
            <Badge variant="outline" className="text-xs">
              Acesso Antecipado
            </Badge>
          )}
          {plan.has_bonus_dates && (
            <Badge variant="outline" className="text-xs">
              Cashback em Dobro
            </Badge>
          )}
        </div>

        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full" onClick={onManagePlan}>
            Gerenciar Plano
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserPlanStatus;
