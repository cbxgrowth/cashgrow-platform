
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, MapPin, ShoppingBag } from "lucide-react";

const ClientCompanies: React.FC = () => {
  // Dados simulados de empresas
  const companies = [
    {
      id: 1,
      name: 'Mercado Verde',
      logo: 'MV',
      category: 'Varejo',
      cashbackPercentage: 5,
      location: 'São Paulo, SP',
      distance: '1.2 km',
      featured: true,
      description: 'Supermercado com produtos naturais e orgânicos. Oferece cashback em todas as compras.'
    },
    {
      id: 2,
      name: 'Tech Store',
      logo: 'TS',
      category: 'Eletrônicos',
      cashbackPercentage: 3,
      location: 'São Paulo, SP',
      distance: '2.5 km',
      featured: true,
      description: 'Loja de eletrônicos e tecnologia com as últimas novidades do mercado.'
    },
    {
      id: 3,
      name: 'Farmácia Saúde',
      logo: 'FS',
      category: 'Saúde',
      cashbackPercentage: 4,
      location: 'São Paulo, SP',
      distance: '0.8 km',
      featured: false,
      description: 'Medicamentos, cosméticos e produtos para sua saúde com cashback exclusivo.'
    },
    {
      id: 4,
      name: 'Moda Express',
      logo: 'ME',
      category: 'Vestuário',
      cashbackPercentage: 7,
      location: 'São Paulo, SP',
      distance: '3.1 km',
      featured: false,
      description: 'Roupas e acessórios para todos os estilos com cashback diferenciado.'
    },
    {
      id: 5,
      name: 'Padaria Delícia',
      logo: 'PD',
      category: 'Alimentação',
      cashbackPercentage: 6,
      location: 'São Paulo, SP',
      distance: '0.5 km',
      featured: false,
      description: 'Pães, doces e lanches fresquinhos com cashback em todos os produtos.'
    },
    {
      id: 6,
      name: 'Livraria Cultura',
      logo: 'LC',
      category: 'Educação',
      cashbackPercentage: 8,
      location: 'São Paulo, SP',
      distance: '4.2 km',
      featured: true,
      description: 'Livros, materiais escolares e artigos de papelaria com cashback especial.'
    },
    {
      id: 7,
      name: 'Restaurante Bom Sabor',
      logo: 'RB',
      category: 'Alimentação',
      cashbackPercentage: 10,
      location: 'São Paulo, SP',
      distance: '1.8 km',
      featured: false,
      description: 'Comida caseira, pratos executivos e opções vegetarianas com alto cashback.'
    },
    {
      id: 8,
      name: 'Pet Shop Amigo Fiel',
      logo: 'PS',
      category: 'Pet',
      cashbackPercentage: 5,
      location: 'São Paulo, SP',
      distance: '2.3 km',
      featured: false,
      description: 'Produtos e serviços para seu pet com cashback exclusivo para clientes.'
    },
  ];

  // Categorias disponíveis
  const categories = ['Todas', 'Varejo', 'Eletrônicos', 'Saúde', 'Vestuário', 'Alimentação', 'Educação', 'Pet'];

  const [selectedCategory, setSelectedCategory] = React.useState('Todas');

  const filteredCompanies = selectedCategory === 'Todas' 
    ? companies 
    : companies.filter(company => company.category === selectedCategory);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Empresas Parceiras</h1>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Encontre empresas</CardTitle>
          <CardDescription>
            Descubra empresas parceiras e aproveite cashback exclusivo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome, categoria ou localização" className="pl-8" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="shadow-md hover-scale overflow-hidden">
            {company.featured && (
              <div className="bg-gradient-primary text-primary-foreground text-xs px-3 py-1 absolute right-3 top-3 rounded-full flex items-center">
                <Star className="h-3 w-3 mr-1" /> Em destaque
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center font-bold">
                  {company.logo}
                </div>
                <div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <ShoppingBag className="h-3 w-3" /> {company.category}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {company.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{company.distance}</span>
                </div>
                <div className="text-green-600 font-medium">
                  {company.cashbackPercentage}% cashback
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 pt-3">
              <Button className="w-full hover-scale">Ver Detalhes</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg" className="hover-scale">
          Carregar Mais Empresas
        </Button>
      </div>
    </div>
  );
};

export default ClientCompanies;
