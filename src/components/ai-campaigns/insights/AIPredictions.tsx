
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain } from "lucide-react";

interface Prediction {
  id: number;
  title: string;
  description: string;
  confidence: number;
  type: string;
}

interface AIPredictionsProps {
  predictions: Prediction[];
}

export const AIPredictions: React.FC<AIPredictionsProps> = ({ predictions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          Previsões da IA
        </CardTitle>
        <CardDescription>
          Análises preditivas para otimização de estratégias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {predictions.map((prediction) => (
            <div key={prediction.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium">{prediction.title}</h4>
                <Badge variant={prediction.confidence > 80 ? 'default' : 'secondary'}>
                  {prediction.confidence}% confiança
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">{prediction.description}</p>
              <div className="flex items-center gap-2">
                <Progress value={prediction.confidence} className="h-2 flex-1" />
                <span className="text-xs text-gray-500">Precisão da previsão</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
