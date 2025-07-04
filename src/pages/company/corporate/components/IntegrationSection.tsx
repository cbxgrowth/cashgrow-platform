
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Settings } from 'lucide-react';

export const IntegrationSection: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Integrações Disponíveis
          </CardTitle>
          <CardDescription>
            Conecte-se aos seus sistemas existentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {[
              { name: "SAP", type: "ERP", status: "Ativo" },
              { name: "Salesforce", type: "CRM", status: "Ativo" },
              { name: "Microsoft Dynamics", type: "ERP", status: "Ativo" },
              { name: "HubSpot", type: "Marketing", status: "Ativo" },
              { name: "Slack", type: "Comunicação", status: "Ativo" },
              { name: "Tableau", type: "BI", status: "Beta" }
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{integration.name}</p>
                  <p className="text-sm text-muted-foreground">{integration.type}</p>
                </div>
                <Badge variant={integration.status === 'Ativo' ? 'default' : 'secondary'}>
                  {integration.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            API & Webhooks
          </CardTitle>
          <CardDescription>
            Acesso programático aos dados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">REST API</h4>
              <p className="text-sm text-muted-foreground">
                Acesso completo a todos os dados e funcionalidades
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Ver Documentação
              </Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Webhooks</h4>
              <p className="text-sm text-muted-foreground">
                Notificações em tempo real de eventos
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Configurar
              </Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">SDK</h4>
              <p className="text-sm text-muted-foreground">
                Bibliotecas para diferentes linguagens
              </p>
              <Button size="sm" variant="outline" className="mt-2">
                Baixar SDK
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
