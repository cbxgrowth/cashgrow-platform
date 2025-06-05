import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  Award, 
  ArrowRight,
  Building,
  User,
  Megaphone,
  MessageSquare,
  Bell,
  Calendar,
  Gift,
  Star,
  Smile,
  Target,
  Heart,
  Zap,
  Crown,
  Rocket,
  Shield,
  Settings,
  Smartphone,
  Globe,
  Utensils,
  ShoppingCart,
  Scissors,
  Package,
  Monitor,
  Search,
  Play,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, Padaria Doce Vida",
      content: "Aumentamos 45% nas vendas em 3 meses. O Bloom revolucionou nossa fidelização!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Cliente Premium",
      content: "Já resgatei mais de R$ 2.000 em cashback. É incrível como funciona bem!",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Gerente, Fashion Store",
      content: "A IA do Bloom me ajuda a criar campanhas que realmente convertem. Fantástico!",
      avatar: "AC"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90 text-white py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className={`flex flex-col justify-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-6">
                <Badge className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Zap className="h-4 w-4 mr-2" />
                  Sistema de Cashback Inteligente
                </Badge>
                
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
                  Fidelidade que 
                  <span className="block text-yellow-300 animate-pulse">Transforma</span>
                </h1>
                
                <p className="max-w-[700px] text-white/90 text-xl md:text-2xl leading-relaxed">
                  A plataforma completa de cashback que conecta empresas e clientes, 
                  criando experiências únicas de fidelização com resultados comprovados.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300 group">
                  <Link to="/auth/register">
                    <Rocket className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Começar Gratuitamente
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link to="/funcionalidades">
                    <Play className="h-5 w-5 mr-2" />
                    Ver Demo
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-white/80">
                {[
                  "Setup em 24h",
                  "Suporte dedicado", 
                  "ROI garantido"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Dashboard Preview */}
            <div className={`flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
                <Card className="relative bg-background/95 backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Saldo Total</p>
                        <p className="text-4xl font-bold text-green-600 animate-pulse">R$ 2.547,80</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-2xl">
                        <CreditCard className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Este mês</p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-lg">R$ 386,50</p>
                          <Badge className="flex items-center text-green-600 bg-green-50 hover:bg-green-100">
                            <TrendingUp className="h-3 w-3 mr-1" /> +18%
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Parceiros</p>
                        <p className="font-bold text-lg">127 lojas</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl border border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Crown className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Status VIP Gold</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Cashback médio: 8.5%</span>
                        <span>Próximo nível: 250 pts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-muted/30 to-muted/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "250K+", label: "Clientes ativos", color: "text-primary" },
              { icon: Building, number: "1.2K+", label: "Empresas parceiras", color: "text-green-600" },
              { icon: CreditCard, number: "R$ 45M", label: "Cashback distribuído", color: "text-blue-600" },
              { icon: TrendingUp, number: "23%", label: "Aumento médio em vendas", color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-background w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground">Histórias reais de sucesso</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Principais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para criar um programa de fidelidade de sucesso
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Aplicativo Nativo</CardTitle>
                <p className="text-muted-foreground">Apps iOS e Android personalizados com sua marca</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>IA Avançada</CardTitle>
                <p className="text-muted-foreground">Campanhas inteligentes e recomendações personalizadas</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Integrações</CardTitle>
                <p className="text-muted-foreground">Conecte com ERPs, e-commerce e sistemas de PDV</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Missões Gamificadas</CardTitle>
                <p className="text-muted-foreground">Desafios e recompensas para engajar clientes</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Segurança Total</CardTitle>
                <p className="text-muted-foreground">Proteção de dados e transações criptografadas</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Customização Total</CardTitle>
                <p className="text-muted-foreground">Personalize regras, design e fluxos do programa</p>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/funcionalidades">
                Ver Todas as Funcionalidades
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Segmentos Atendidos</h2>
            <p className="text-xl text-muted-foreground">Soluções personalizadas para cada setor</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Alimentação</CardTitle>
                <p className="text-muted-foreground">Restaurantes, lanchonetes, delivery e food trucks</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Fidelização de clientes frequentes</li>
                  <li>• Promoções por horário</li>
                  <li>• Integração com delivery</li>
                  <li>• Cashback por categoria</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Varejo</CardTitle>
                <p className="text-muted-foreground">Lojas físicas, e-commerce e marketplaces</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Programa de pontos híbrido</li>
                  <li>• Cashback por volume</li>
                  <li>• Integrações com PDV</li>
                  <li>• Analytics avançados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Serviços</CardTitle>
                <p className="text-muted-foreground">Salões, clínicas, academias e consultórios</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Agendamentos inteligentes</li>
                  <li>• Fidelização por frequência</li>
                  <li>• Indicações premiadas</li>
                  <li>• Campanhas sazonais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrações Poderosas</h2>
            <p className="text-xl text-muted-foreground">Conecte-se com as ferramentas que você já usa</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Gestão</CardTitle>
                <p className="text-sm text-muted-foreground">ERPs, CRMs e sistemas administrativos</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Lojas Virtuais</CardTitle>
                <p className="text-sm text-muted-foreground">Shopify, WooCommerce, Magento</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>PDV</CardTitle>
                <p className="text-sm text-muted-foreground">Sistemas de ponto de venda</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>E mais...</CardTitle>
                <p className="text-sm text-muted-foreground">APIs personalizadas e webhooks</p>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/integracoes">
                Ver Todas as Integrações
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para Revolucionar sua Fidelização?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Junte-se a mais de 1.200 empresas que já aumentaram suas vendas com o Bloom
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300">
                <Link to="/auth/register">
                  <Rocket className="h-6 w-6 mr-2" />
                  Começar Gratuitamente
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/precos">
                  <Crown className="h-6 w-6 mr-2" />
                  Ver Planos e Preços
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-12 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Setup Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
