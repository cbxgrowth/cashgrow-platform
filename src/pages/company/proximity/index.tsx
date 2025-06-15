
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProximityMetricsCard } from '@/components/proximity/ProximityMetricsCard';
import { CompanyLocationSettings } from '@/components/proximity/CompanyLocationSettings';
import { MapPin, Users, TrendingUp, Info } from 'lucide-react';

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
      <div className="grid gap-4 md:grid-cols-3">
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
      </div>

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
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Privacidade dos usuários:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Apenas usuários que consentiram são contabilizados</li>
                <li>• Dados são completamente anônimos e agregados</li>
                <li>• Nenhuma informação pessoal é compartilhada</li>
                <li>• Usuários podem revogar consentimento a qualquer momento</li>
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
