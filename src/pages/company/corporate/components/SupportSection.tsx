
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, FileText } from 'lucide-react';

export const SupportSection: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Suporte Enterprise
          </CardTitle>
          <CardDescription>
            Suporte dedicado para clientes corporativos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Tempo de Resposta</span>
              <Badge className="bg-green-100 text-green-800">menos de 2 horas</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">Disponibilidade</span>
              <Badge className="bg-blue-100 text-blue-800">24/7</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-medium">Gerente de Conta</span>
              <Badge className="bg-purple-100 text-purple-800">Dedicado</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="font-medium">Treinamento</span>
              <Badge className="bg-orange-100 text-orange-800">Incluído</Badge>
            </div>
          </div>
          <Button className="w-full mt-4">
            Contatar Suporte
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recursos & Documentação
          </CardTitle>
          <CardDescription>
            Materiais de apoio e documentação técnica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: "Guia de Implementação", type: "PDF", size: "2.5 MB" },
              { title: "Documentação da API", type: "Online", size: "Atualizada" },
              { title: "Casos de Uso", type: "PDF", size: "1.8 MB" },
              { title: "Webinar: Melhores Práticas", type: "Vídeo", size: "45 min" },
              { title: "Templates de Integração", type: "ZIP", size: "12 MB" },
              { title: "Certificação Técnica", type: "Online", size: "2h curso" }
            ].map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-sm">{resource.title}</p>
                  <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                </div>
                <Button size="sm" variant="ghost">
                  Acessar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
