
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Star, Award } from "lucide-react";

const StatusCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full px-2 sm:px-0">
      <Card className="w-full min-w-0">
        <CardHeader className="pb-3 p-3 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg truncate">Progresso Semanal</CardTitle>
              <CardDescription className="text-xs sm:text-sm">75% concluído</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0">
          <Progress value={75} className="w-full mb-2" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            3 de 4 missões completadas esta semana
          </p>
        </CardContent>
      </Card>

      <Card className="w-full min-w-0">
        <CardHeader className="pb-3 p-3 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg flex-shrink-0">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg truncate">Nível Atual</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Gold Member</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Progress value={60} className="w-full mb-2" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                40% para Platinum
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full min-w-0">
        <CardHeader className="pb-3 p-3 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg truncate">Conquistas</CardTitle>
              <CardDescription className="text-xs sm:text-sm">15 desbloqueadas</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0">
          <div className="flex items-center gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCards;
