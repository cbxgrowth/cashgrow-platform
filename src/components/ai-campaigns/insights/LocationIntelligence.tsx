
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Target } from "lucide-react";

interface LocationInsights {
  peakHours: string;
  bestPerformingRadius: string;
  conversionByDistance: Array<{
    radius: string;
    conversion: number;
  }>;
}

interface LocationIntelligenceProps {
  locationInsights: LocationInsights;
}

export const LocationIntelligence: React.FC<LocationIntelligenceProps> = ({ locationInsights }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Inteligência de Localização
        </CardTitle>
        <CardDescription>
          Análise comportamental baseada em proximidade geográfica
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-medium mb-3">Conversão por Distância</h4>
            <div className="space-y-3">
              {locationInsights.conversionByDistance.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.radius}</span>
                  <div className="flex items-center gap-2 flex-1 ml-4">
                    <Progress value={item.conversion * 10} className="h-2" />
                    <span className="text-sm font-medium">{item.conversion}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Insights Temporais</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Horário de pico: {locationInsights.peakHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Melhor raio: {locationInsights.bestPerformingRadius}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
