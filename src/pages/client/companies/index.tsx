
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, MapPin, Star, Search, Filter } from 'lucide-react';

const ClientCompaniesPage: React.FC = () => {
  const companies = [
    {
      id: 1,
      name: 'TechStore Electronics',
      category: 'Eletrônicos',
      cashback: 15,
      rating: 4.8,
      distance: '2.1 km',
      isPartner: true,
      description: 'Eletrônicos e tecnologia com os melhores preços'
    },
    {
      id: 2,
      name: 'Fashion Plus',
      category: 'Moda',
      cashback: 8,
      rating: 4.6,
      distance: '1.5 km',
      isPartner: true,
      description: 'Roupas e acessórios de qualidade'
    },
    {
      id: 3,
      name: 'SuperMercado XYZ',
      category: 'Alimentação',
      cashback: 12,
      rating: 4.9,
      distance: '800 m',
      isPartner: true,
      description: 'Produtos frescos e orgânicos'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Empresas Parceiras</h1>
        <p className="text-muted-foreground mt-2">
          Descubra lojas próximas com cashback
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar empresas..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <Building2 className="h-8 w-8 text-primary" />
                {company.isPartner && <Badge>Parceiro</Badge>}
              </div>
              <CardTitle className="text-lg">{company.name}</CardTitle>
              <CardDescription>{company.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{company.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{company.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="text-2xl font-bold text-green-600">{company.cashback}%</div>
                  <div className="text-sm text-muted-foreground">Cashback</div>
                </div>
                <div className="text-center flex-1">
                  <div className="flex items-center justify-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{company.distance}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Produtos
                </Button>
                <Button size="sm" className="flex-1">
                  Visitar Loja
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientCompaniesPage;
