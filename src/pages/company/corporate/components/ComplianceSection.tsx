
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, Lock, Eye, CheckCircle, AlertTriangle } from 'lucide-react';

const complianceFeatures = [
  {
    icon: Shield,
    title: "LGPD Compliance",
    description: "Conformidade total com a Lei Geral de Proteção de Dados",
    status: "Certificado",
    level: "gold"
  },
  {
    icon: Lock,
    title: "ISO 27001",
    description: "Certificação em gestão de segurança da informação",
    status: "Certificado",
    level: "gold"
  },
  {
    icon: FileCheck,
    title: "SOX Compliance",
    description: "Conformidade com Sarbanes-Oxley Act",
    status: "Certificado",
    level: "gold"
  },
  {
    icon: Eye,
    title: "Auditoria Contínua",
    description: "Monitoramento e logs de todas as atividades",
    status: "Ativo",
    level: "green"
  },
  {
    icon: CheckCircle,
    title: "PCI DSS",
    description: "Padrão de segurança para dados de cartão",
    status: "Em Processo",
    level: "yellow"
  },
  {
    icon: AlertTriangle,
    title: "GDPR Ready",
    description: "Preparado para regulamentação europeia",
    status: "Planejado",
    level: "blue"
  }
];

export const ComplianceSection: React.FC = () => {
  const getBadgeVariant = (level: string) => {
    switch (level) {
      case 'gold': return 'default';
      case 'green': return 'default';
      case 'yellow': return 'secondary';
      case 'blue': return 'outline';
      default: return 'secondary';
    }
  };

  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'gold': return 'bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30';
      case 'green': return 'bg-green-500/20 text-green-600 hover:bg-green-500/30';
      case 'yellow': return 'bg-orange-500/20 text-orange-600 hover:bg-orange-500/30';
      case 'blue': return 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Compliance & Segurança</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Atendemos aos mais rigorosos padrões de segurança e conformidade regulatória
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {complianceFeatures.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <Badge 
                  variant={getBadgeVariant(feature.level)}
                  className={getBadgeColor(feature.level)}
                >
                  {feature.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Ver Certificado
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Segurança de Dados
            </CardTitle>
            <CardDescription>
              Proteção robusta para seus dados corporativos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Criptografia AES-256</span>
                <Badge className="bg-green-500/20 text-green-600">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Backup Automático</span>
                <Badge className="bg-green-500/20 text-green-600">Diário</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Autenticação 2FA</span>
                <Badge className="bg-green-500/20 text-green-600">Obrigatório</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Logs de Auditoria</span>
                <Badge className="bg-green-500/20 text-green-600">Tempo Real</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Documentação Legal
            </CardTitle>
            <CardDescription>
              Documentos e políticas de compliance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileCheck className="h-4 w-4 mr-2" />
                Política de Privacidade
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileCheck className="h-4 w-4 mr-2" />
                Termos de Uso Corporativo
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileCheck className="h-4 w-4 mr-2" />
                DPO e Relatório LGPD
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileCheck className="h-4 w-4 mr-2" />
                Certificados ISO
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
