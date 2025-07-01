
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Lightbulb,
  ArrowRight,
  Eye,
  Heart,
  Share2
} from "lucide-react";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Como Maximizar seu Cashback em 2024',
      excerpt: 'Descubra estratégias avançadas para ganhar até 3x mais cashback nas suas compras online e físicas.',
      image: '/api/placeholder/600/300',
      category: 'Dicas',
      author: 'Maria Silva',
      date: '15 Jan 2024',
      readTime: '5 min',
      views: 2847,
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: 'Black Friday 2024: Guia Completo de Ofertas',
      excerpt: 'Prepare-se para a Black Friday com nossa lista exclusiva de lojas parceiras e ofertas especiais.',
      image: '/api/placeholder/600/300',
      category: 'Eventos',
      author: 'João Santos',
      date: '12 Jan 2024',
      readTime: '8 min',
      views: 4521,
      likes: 289,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: 'Clube VIP: Vale a Pena o Upgrade?',
      excerpt: 'Análise completa dos benefícios do Clube VIP e quando fazer o upgrade faz sentido.',
      image: '/api/placeholder/400/200',
      category: 'Análise',
      author: 'Ana Costa',
      date: '10 Jan 2024',
      readTime: '6 min',
      views: 1923,
      likes: 87
    },
    {
      id: 4,
      title: 'Missões Secretas: Como Encontrar',
      excerpt: 'Dicas exclusivas para descobrir missões ocultas e ganhar recompensas extras.',
      image: '/api/placeholder/400/200',
      category: 'Segredos',
      author: 'Pedro Lima',
      date: '8 Jan 2024',
      readTime: '4 min',
      views: 3156,
      likes: 198
    },
    {
      id: 5,
      title: 'Integração com ERP: Guia Técnico',
      excerpt: 'Tutorial completo para empresas integrarem nosso sistema com ERPs populares.',
      image: '/api/placeholder/400/200',
      category: 'Técnico',
      author: 'Carlos Tech',
      date: '5 Jan 2024',
      readTime: '12 min',
      views: 856,
      likes: 43
    },
    {
      id: 6,
      title: 'Tendências de Cashback 2024',
      excerpt: 'O que esperar do mercado de cashback nos próximos meses.',
      image: '/api/placeholder/400/200',
      category: 'Mercado',
      author: 'Lucia Mendes',
      date: '3 Jan 2024',
      readTime: '7 min',
      views: 2034,
      likes: 124
    }
  ];

  const categories = [
    { name: 'Dicas', count: 24, color: 'bg-blue-100 text-blue-700' },
    { name: 'Eventos', count: 12, color: 'bg-green-100 text-green-700' },
    { name: 'Análise', count: 18, color: 'bg-purple-100 text-purple-700' },
    { name: 'Técnico', count: 8, color: 'bg-orange-100 text-orange-700' },
    { name: 'Mercado', count: 15, color: 'bg-red-100 text-red-700' },
    { name: 'Segredos', count: 6, color: 'bg-yellow-100 text-yellow-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Blog Cashback Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dicas, análises e novidades do mundo do cashback para você maximizar seus ganhos
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar artigos..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Artigos em Destaque</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <Badge className="absolute top-3 left-3 bg-primary text-white">
                        Destaque
                      </Badge>
                      <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {post.readTime}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`text-xs ${post.category === 'Dicas' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {post.likes}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {post.readTime}
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`text-xs ${
                          post.category === 'Análise' ? 'bg-purple-100 text-purple-700' :
                          post.category === 'Segredos' ? 'bg-yellow-100 text-yellow-700' :
                          post.category === 'Técnico' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-base hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categorias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <span className="font-medium">{category.name}</span>
                    <Badge className={category.color}>
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Mais Populares
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center font-bold text-primary">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Top 10 Lojas com Maior Cashback</h4>
                      <p className="text-xs text-muted-foreground">8.2K visualizações</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center font-bold text-primary">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Erros Comuns no Cashback</h4>
                      <p className="text-xs text-muted-foreground">6.7K visualizações</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center font-bold text-primary">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Cashback vs Milhas: Qual Escolher?</h4>
                      <p className="text-xs text-muted-foreground">5.9K visualizações</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Newsletter Semanal</h3>
                <p className="text-sm opacity-90 mb-4">
                  Receba as melhores dicas de cashback direto no seu email
                </p>
                <Input 
                  placeholder="Seu email"
                  className="bg-white text-black mb-3"
                />
                <Button variant="secondary" className="w-full">
                  Assinar Grátis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
