
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, TrendingUp } from "lucide-react";

export const AchievementsCard: React.FC = () => {
  return (
    <Card className="dashboard-card opacity-0 translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 w-full max-w-full overflow-hidden">
      <CardHeader className="p-2 sm:p-3">
        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
          🏆 Conquistas Recentes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3 p-2 sm:p-3 pt-0 w-full min-w-0">
        <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg w-full min-w-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-xs sm:text-sm truncate">Nível Gold</p>
            <p className="text-xs text-muted-foreground">Desbloqueado hoje!</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg w-full min-w-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-xs sm:text-sm truncate">Primeira Compra</p>
            <p className="text-xs text-muted-foreground">R$ 10 de bônus!</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
