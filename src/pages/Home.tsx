
import React from 'react';
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
  Home as HomeIcon
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIgZD0iTTAgMGgyMHYyMGgtMjB6Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Sistema de Cashback Inteligente
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Fidelidade que <span className="text-yellow-300">Transforma</span>
                </h1>
                <p className="max-w-[600px] text-white/90 text-lg md:text-xl leading-relaxed">
                  A plataforma completa de cashback que conecta empresas e clientes, 
                  criando experiências únicas de fidelização com resultados comprovados.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                  <Link to="/auth/register">
                    <Rocket className="h-5 w-5 mr-2" />
                    Começar Gratuitamente
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link to="/funcionalidades">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Ver Funcionalidades
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Setup em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Suporte dedicado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>ROI garantido</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <Card className="relative bg-background/95 backdrop-blur-sm border-white/20 shadow-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Saldo Total</p>
                        <p className="text-3xl font-bold text-green-600">R$ 2.547,80</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <CreditCard className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Este mês</p>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">R$ 386,50</p>
                          <span className="flex items-center text-green-600 text-xs bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp className="h-3 w-3 mr-1" /> +18%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Parceiros</p>
                        <p className="font-medium">127 lojas</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Status VIP</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
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

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold">250K+</p>
              <p className="text-sm text-muted-foreground">Clientes ativos</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold">1.2K+</p>
              <p className="text-sm text-muted-foreground">Empresas parceiras</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold">R$ 45M</p>
              <p className="text-sm text-muted-foreground">Cashback distribuído</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-3xl font-bold">23%</p>
              <p className="text-sm text-muted-foreground">Aumento médio em vendas</p>
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
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Aplicativo Nativo</CardTitle>
                <p className="text-muted-foreground">Apps iOS e Android personalizados com sua marca</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>IA Avançada</CardTitle>
                <p className="text-muted-foreground">Campanhas inteligentes e recomendações personalizadas</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Integrações</CardTitle>
                <p className="text-muted-foreground">Conecte com ERPs, e-commerce e sistemas de PDV</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Missões Gamificadas</CardTitle>
                <p className="text-muted-foreground">Desafios e recompensas para engajar clientes</p>
              </CardHeader>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Revolucionar sua Fidelização?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a mais de 1.200 empresas que já aumentaram suas vendas com o Bloom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
                <Link to="/auth/register">
                  <Rocket className="h-5 w-5 mr-2" />
                  Começar Gratuitamente
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                <Link to="/precos">
                  <Crown className="h-5 w-5 mr-2" />
                  Ver Planos e Preços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
