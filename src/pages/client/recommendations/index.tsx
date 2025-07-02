
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, TrendingUp, MapPin, Star, ExternalLink } from 'lucide-react';

const ClientRecommendationsPage: React.FC = () => {
  const recommendations = [
    {
      id: 1,
      type: 'cashback',
      title: 'Maximize seu Cashback',
      description: 'Compre na TechStore hoje e ganhe 15% de cashback em eletrônicos',
      cashback: 15,
      category: 'Eletrônicos',
      urgent: true,
      location: 'Shopping Center - 2km'
    },
    {
      id: 2,
      type: 'nearby',
      title: 'Loja Próxima',
      description: 'Fashion Plus está oferecendo 20% de desconto + 8% cashback',
      cashback: 8,
      category: 'Moda',
      urgent: false,
      location: 'Centro - 1.5km'
    },
    {
      id: 3,
      type: 'trending',
      title: 'Tendência Popular',
      description: 'SuperMercado XYZ - produtos orgânicos com 12% de cashback',
      cashback: 12,
      category: 'Alimentação',
      urgent: false,
      location: 'Bairro Norte - 3km'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Recomendações</h1>
        <p className="text-muted-foreground mt-2">
          Ofertas personalizadas baseadas no seu perfil
        </p>
      </div>

      <div className="grid gap-6">
        {recommendations.map((rec) => (
          <Card key={rec.id} className={`${rec.urgent ? 'border-orange-200 bg-orange-50' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {rec.type === 'cashback' && <Lightbulb className="h-6 w-6 text-yellow-600" />}
                  {rec.type === 'nearby' && <MapPin className="h-6 w-6 text-blue-600" />}
                  {rec.type === 'trending' && <TrendingUp className="h-6 w-6 text-green-600" />}
                  <div>
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                    <CardDescription className="mt-1">{rec.description}</CardDescription>
                  </div>
                </div>
                {rec.urgent && <Badge variant="destructive">Urgente</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{rec.cashback}%</div>
                    <div className="text-sm text-muted-foreground">Cashback</div>
                  </div>
                  <div>
                    <Badge variant="outline">{rec.category}</Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {rec.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Star className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Oferta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientRecommendationsPage;
