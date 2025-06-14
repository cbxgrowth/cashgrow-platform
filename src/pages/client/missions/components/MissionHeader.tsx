
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Trophy, Clock, Gift } from "lucide-react";

const MissionHeader: React.FC = () => {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left px-2 sm:px-0">
          🎯 Suas Missões
        </h1>
        <p className="text-muted-foreground text-center sm:text-left text-sm sm:text-base mt-1 px-2 sm:px-0">
          Complete desafios e ganhe cashback extra
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full px-2 sm:px-0">
        <Card className="text-center hover:shadow-md transition-all duration-200 w-full min-w-0">
          <CardHeader className="pb-2 p-2 sm:p-4">
            <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            </div>
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">3</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Ativas</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-md transition-all duration-200 w-full min-w-0">
          <CardHeader className="pb-2 p-2 sm:p-4">
            <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            </div>
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">12</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Completas</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-md transition-all duration-200 w-full min-w-0">
          <CardHeader className="pb-2 p-2 sm:p-4">
            <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
            </div>
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">2d</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Restantes</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-md transition-all duration-200 w-full min-w-0">
          <CardHeader className="pb-2 p-2 sm:p-4">
            <div className="mx-auto w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
            </div>
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold">R$ 45</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Ganhos</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default MissionHeader;
