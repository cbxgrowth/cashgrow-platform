
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { completedMissionsData } from '../data/missionsData';
import { toast } from "sonner";

const CompletedMissions: React.FC = () => {
  const handleClaim = () => {
    toast.success("Recompensa resgatada! O cashback foi adicionado à sua conta.");
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <CardTitle>Missões Concluídas</CardTitle>
          </div>
          <Badge variant="outline" className="gap-1">
            {completedMissionsData.length} missões
          </Badge>
        </div>
        <CardDescription>
          Missões que você já completou e suas recompensas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {completedMissionsData.map((mission) => (
          <div key={mission.id} className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <mission.icon className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">{mission.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {mission.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Concluída em {mission.completedDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                {mission.reward}
              </Badge>
              <Button size="sm" variant="outline" onClick={handleClaim}>
                Resgatar
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <Button variant="outline">Ver Todas as Missões Concluídas</Button>
      </CardFooter>
    </Card>
  );
};

export default CompletedMissions;
