
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, TrendingUp, Lightbulb, DollarSign, Target, Sparkles } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Como Maximizar seu Cashback em 2025: Guia Completo",
    excerpt: "Descubra estratégias avançadas para aumentar suas recompensas e transformar suas compras em economia real.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    author: "Marina Santos",
    date: "15 de Janeiro, 2025",
    readTime: "8 min",
    category: "Dicas",
    slug: "maximizar-cashback-2025"
  };

  const blogPosts = [
    {
      title: "5 Erros Comuns que Diminuem seu Cashback",
      excerpt: "Evite estes erros e maximize suas recompensas em cada compra.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
      author: "Carlos Silva",
      date: "12 de Janeiro, 2025",
      readTime: "5 min",
      category: "Educação",
      slug: "erros-comuns-cashback"
    },
    {
      title: "Inteligência Artificial no Cashback: O Futuro é Agora",
      excerpt: "Como a IA está revolucionando programas de fidelidade e cashback.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      author: "Ana Costa",
      date: "10 de Janeiro, 2025",
      readTime: "7 min",
      category: "Tecnologia",
      slug: "ia-cashback-futuro"
    },
    {
      title: "Case Study: Empresa Aumentou Fidelização em 40%",
      excerpt: "Veja como uma empresa do varejo transformou sua estratégia com cashback inteligente.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      author: "Roberto Lima",
      date: "8 de Janeiro, 2025",
      readTime: "10 min",
      category: "Case Study",
      slug: "empresa-fidelizacao-40"
    },
    {
      title: "Gamificação: Tornando Cashback Mais Divertido",
      excerpt: "Como elementos de jogos podem aumentar o engajamento dos usuários.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=400&q=80",
      author: "Marina Santos",
      date: "5 de Janeiro, 2025",
      readTime: "6 min",
      category: "UX/UI",
      slug: "gamificacao-cashback"
    },
    {
      title: "Tendências do E-commerce e Cashback para 2025",
      excerpt: "O que esperar do mercado de cashback e como se preparar.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80",
      author: "Carlos Silva",
      date: "3 de Janeiro, 2025",
      readTime: "9 min",
      category: "Tendências",
      slug: "tendencias-ecommerce-2025"
    },
    {
      title: "API de Cashback: Guia de Integração Completo",
      excerpt: "Tutorial passo a passo para integrar nossa API em seu sistema.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=400&q=80",
      author: "Ana Costa",
      date: "1 de Janeiro, 2025",
      readTime: "12 min",
      category: "Técnico",
      slug: "api-cashback-integracao"
    }
  ];

  const categories = [
    { name: "Dicas", count: 15, icon: Lightbulb },
    { name: "Tecnologia", count: 8, icon: Target },
    { name: "Case Study", count: 6, icon: TrendingUp },
    { name: "Educação", count: 12, icon: User },
    { name: "Tendências", count: 4, icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in">
              <Sparkles className="h-3 w-3 mr-1" />
              Blog CBX Growth
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Insights e{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Novidades
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Fique por dentro das últimas tendências em cashback, tecnologia e estratégias para maximizar suas recompensas.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto animate-fade-in-up animation-delay-400">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar artigos..." 
                  className="pl-10 bg-background border-2 hover:border-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <Card className="mb-12 overflow-hidden hover-scale">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <Badge className="mb-3">{featuredPost.category}</Badge>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredPost.date}
                        </div>
                        <span>{featuredPost.readTime} de leitura</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-1">
                          Ler Mais
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover-scale">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                      <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Link to={`/blog/${post.slug}`}>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Carregar Mais Artigos
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categorias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4 text-primary" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Posts Populares</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm leading-tight mb-1">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Receba novidades e dicas exclusivas diretamente no seu email.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Seu email" className="bg-background" />
                    <Button className="w-full">Inscrever-se</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
