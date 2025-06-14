import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, ShieldCheck, Globe, Award, Settings } from "lucide-react";

const CompanyCorporate: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            Corporativo
          </h1>
          <p className="text-muted-foreground">Soluções empresariais e parcerias estratégicas</p>
        </div>
        <Button className="bg-gradient-primary">
          <Settings className="mr-2 h-4 w-4" />
          Configurações Corporativas
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Parceiros Ativos</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-600">+3 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Volume Corporativo</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.2M</div>
            <p className="text-xs text-green-600">+15% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clientes B2B</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600">+22% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Nível Corporativo</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Premium</div>
            <Badge variant="secondary" className="mt-1">Enterprise</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              Certificações e Compliance
            </CardTitle>
            <CardDescription>Status das certificações corporativas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">ISO 27001</h4>
                <p className="text-sm text-muted-foreground">Segurança da Informação</p>
              </div>
              <Badge variant="default">Certificado</Badge>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">PCI DSS</h4>
                <p className="text-sm text-muted-foreground">Segurança de Pagamentos</p>
              </div>
              <Badge variant="default">Certificado</Badge>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">LGPD</h4>
                <p className="text-sm text-muted-foreground">Proteção de Dados</p>
              </div>
              <Badge variant="default">Conforme</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              Parcerias Estratégicas
            </CardTitle>
            <CardDescription>Rede de parceiros corporativos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Banco Central</h4>
                <p className="text-sm text-muted-foreground">Parceiro Financeiro</p>
              </div>
              <Badge variant="outline">Ativo</Badge>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Microsoft Azure</h4>
                <p className="text-sm text-muted-foreground">Cloud Partner</p>
              </div>
              <Badge variant="outline">Ativo</Badge>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">AWS</h4>
                <p className="text-sm text-muted-foreground">Infrastructure</p>
              </div>
              <Badge variant="outline">Ativo</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Soluções Corporativas Disponíveis</CardTitle>
          <CardDescription>Explore nossas soluções para grandes empresas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Enterprise API</h3>
                <p className="text-sm text-muted-foreground">
                  API completa para integração com sistemas corporativos
                </p>
              </div>
              <Button variant="outline" className="w-full">Saiba Mais</Button>
            </div>

            <div className="border rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">White Label</h3>
                <p className="text-sm text-muted-foreground">
                  Solução personalizada com sua marca
                </p>
              </div>
              <Button variant="outline" className="w-full">Saiba Mais</Button>
            </div>

            <div className="border rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Compliance Plus</h3>
                <p className="text-sm text-muted-foreground">
                  Recursos avançados de compliance e auditoria
                </p>
              </div>
              <Button variant="outline" className="w-full">Saiba Mais</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCorporate;
