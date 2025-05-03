
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, Check } from "lucide-react";
import { activeMissionsData } from '../data/missionsData';

const ActiveMissions: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <CardTitle>Missões Ativas</CardTitle>
          </div>
          <Badge variant="outline" className="gap-1">
            <Check className="h-3 w-3" />
            {activeMissionsData.length} ativas
          </Badge>
        </div>
        <CardDescription>
          Complete estas missões para aumentar seus ganhos de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {activeMissionsData.map((mission) => (
          <div key={mission.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <mission.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{mission.title}</h3>
                    {mission.tag && (
                      <Badge variant="secondary" className="text-xs">
                        {mission.tag}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                {mission.reward}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progresso: {mission.current}/{mission.total}</span>
                {!mission.permanent && (
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" /> {mission.deadline}
                  </span>
                )}
              </div>
              <Progress value={mission.progress} className="h-2" />
            </div>

            {mission.stores && (
              <div className="space-y-1">
                <p className="text-xs font-medium">Progresso:</p>
                <div className="space-y-1">
                  {mission.stores.map((store, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <Check className="h-3 w-3 text-green-500" />
                      <span>{store}</span>
                    </div>
                  ))}
                  {mission.remaining.map((store, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-3 w-3 rounded-full border border-muted-foreground/50" />
                      <span>{store}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button size="sm" variant="outline" className="w-full">
                Ver Detalhes
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActiveMissions;
