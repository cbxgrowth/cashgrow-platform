
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProximityMetricsCard } from '@/components/proximity/ProximityMetricsCard';
import { CompanyLocationSettings } from '@/components/proximity/CompanyLocationSettings';
import { MapPin, Users, TrendingUp, Info, Zap, Target } from 'lucide-react';

const CompanyProximityPage: React.FC = () => {
  // Simulando ID da empresa - em um app real, viria do contexto de autenticação
  const companyId = "company-1"; // Substituir pela lógica real

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usuários Próximos</h1>
        <p className="text-muted-foreground">
          Veja quantos usuários do app estão na sua região e otimize suas estratégias de marketing
        </p>
      </div>

      {/* Cards informativos */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alcance Regional</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100km</div>
            <p className="text-xs text-muted-foreground">
              Raio máximo de análise
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dados Seguros</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">
              Anônimos e agregados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atualização</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Tempo Real</div>
            <p className="text-xs text-muted-foreground">
              Métricas atualizadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marketing</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Otimizado</div>
            <p className="text-xs text-muted-foreground">
              Campanhas direcionadas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Benefícios do sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Benefícios da Análise de Proximidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2 text-green-700">📊 Insights Valiosos</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Entenda a demanda local em tempo real</li>
                <li>• Identifique horários de maior movimento</li>
                <li>• Planeje estoque baseado na proximidade</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2 text-blue-700">🎯 Marketing Direcionado</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Campanhas para usuários próximos</li>
                <li>• Promoções baseadas em localização</li>
                <li>• Notificações push personalizadas</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2 text-purple-700">💰 Aumento de Vendas</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Conversão de usuários próximos</li>
                <li>• Ofertas no momento certo</li>
                <li>• Fidelização através de conveniência</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informações importantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Como Funciona
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Para sua empresa:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Configure a localização da sua empresa</li>
                <li>• Veja quantos usuários estão em diferentes raios (10km, 50km, 100km)</li>
                <li>• Use os dados para estratégias de marketing regional</li>
                <li>• Planeje campanhas e promoções baseadas na demanda local</li>
                <li>• Monitore tendências de movimento ao longo do tempo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Privacidade dos usuários:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Apenas usuários que consentiram são contabilizados</li>
                <li>• Dados são completamente anônimos e agregados</li>
                <li>• Nenhuma informação pessoal é compartilhada</li>
                <li>• Usuários podem revogar consentimento a qualquer momento</li>
                <li>• Conformidade total com LGPD</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid principal */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <CompanyLocationSettings companyId={companyId} />
        </div>
        
        <div className="space-y-6">
          <ProximityMetricsCard companyId={companyId} />
        </div>
      </div>
    </div>
  );
};

export default CompanyProximityPage;
