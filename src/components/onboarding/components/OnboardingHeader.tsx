
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star } from 'lucide-react';
import { OnboardingStats } from '@/types/onboarding';

interface OnboardingHeaderProps {
  stats: OnboardingStats;
  totalSteps: number;
  getLevelProgress: () => number;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  stats,
  totalSteps,
  getLevelProgress
}) => {
  return (
    <CardHeader className="text-center space-y-4">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Trophy className="h-5 w-5 text-primary" />
          <span className="font-semibold">Nível {stats.level}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full">
          <Star className="h-5 w-5 text-orange-500" />
          <span className="font-semibold">{stats.totalPoints} pontos</span>
        </div>
      </div>
      
      <CardTitle className="text-2xl">
        🎉 Bem-vindo ao CashbackFlow!
      </CardTitle>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Progresso do Onboarding</span>
          <span>{stats.completedSteps}/{totalSteps} concluídos</span>
        </div>
        <Progress value={stats.progress} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Progresso do Nível</span>
          <span>{Math.floor(getLevelProgress())}%</span>
        </div>
        <Progress value={getLevelProgress()} className="h-1" />
      </div>
    </CardHeader>
  );
};
