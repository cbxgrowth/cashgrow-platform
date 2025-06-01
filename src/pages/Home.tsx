
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
      <section className="relative bg-gradient-to-r from-primary/80 to-accent/80 text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sistema de Cashback Inteligente
                </h1>
                <p className="max-w-[600px] text-muted-100 md:text-xl">
                  Transforme suas compras em economia real e ajude empresas a fidelizar seus clientes. 
                  Nossa plataforma conecta empresas e consumidores em uma experiência de cashback inovadora.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-muted">
                  <Link to="/auth/register">Começar agora</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/about">Saiba mais</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Fácil de usar</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Gratuito para clientes</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Resultados comprovados</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border rounded-xl p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="text-sm text-muted-foreground">Seu saldo de cashback</p>
                        <p className="text-3xl font-bold">R$ 125,40</p>
                      </div>
                      <CreditCard className="h-12 w-12 text-primary opacity-80" />
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Cashback mensal</p>
                        <div className="flex items-center">
                          <p className="text-base font-medium">R$ 86,50</p>
                          <span className="flex items-center text-green-600 text-xs ml-2">
                            <TrendingUp className="h-3 w-3 mr-1" /> 12%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Lojas parceiras</p>
                        <p className="text-base font-medium">23</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Simular ganhos</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Nossa plataforma oferece uma experiência simples e eficiente para empresas e clientes
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-all bg-background/60">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Para Empresas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Crie seu perfil empresarial e configure suas regras de cashback para começar a oferecer recompensas aos seus clientes.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="flex gap-1" asChild>
                  <Link to="/auth/register">
                    Cadastre sua empresa <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-all bg-background/60">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Para Clientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Registre-se gratuitamente e comece a acumular cashback em suas compras em diversas empresas parceiras.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="flex gap-1" asChild>
                  <Link to="/auth/register">
                    Crie sua conta <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-all bg-background/60">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ganhe e Resgate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Acumule seu cashback em cada compra e resgate quando quiser, transformando em dinheiro ou descontos.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="flex gap-1" asChild>
                  <Link to="/about">
                    Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Segmentos Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Segmentos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Atendemos diversos segmentos de negócio com soluções personalizadas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Alimentação */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Alimentação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">Restaurantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">Sushi & Temakeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">Sorveteria & Açaí</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">Cafeterias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-sm">Lojas de Suplementos</span>
                </div>
              </CardContent>
            </Card>

            {/* Varejo em Geral */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Varejo em Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Super Mercados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Lojas de Roupas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Farmácias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Perfumaria & Cosméticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Construção & Decoração</span>
                </div>
              </CardContent>
            </Card>

            {/* Serviços */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Serviços</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Clínicas Diversas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Salões de Beleza & Barbearias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Petshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Automotivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">Lojas de Informática</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrações Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Integrações</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conecte-se facilmente com as principais plataformas do mercado
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gestão */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-600">Gestão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Bling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Gestão Click</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Tiny ERP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Vhsys</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Varejonline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Tagplus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm">Sige Cloud</span>
                </div>
              </CardContent>
            </Card>

            {/* Lojas Virtuais */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Lojas Virtuais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Tray</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Nuvemshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Loja Integrada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">VTEX</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Woocommerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Wake</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm">Zapier</span>
                </div>
              </CardContent>
            </Card>

            {/* PDV */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-indigo-600">PDV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">Raffinato</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">iFood</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">TOTVS Chef</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">Delivery Direto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">Omie</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">CPlug</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm">Sischef</span>
                </div>
              </CardContent>
            </Card>

            {/* E mais */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-gray-600">E mais...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">Pipedrive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">SHX</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">Galileu</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">Hubsoft</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">Cloudbeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">Doação Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-sm">E muito mais...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Funcionalidades</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Tudo que você precisa para criar um programa de fidelidade completo e eficaz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Marketing Features */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Marketing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">WhatsApp Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">E-mail & SMS Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Notificações Automáticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Campanhas Agendadas</span>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Features */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-600">Engajamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Pesquisa de Satisfação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Indicação de Amigos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Categorias de Clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Sorteios</span>
                </div>
              </CardContent>
            </Card>

            {/* Incentive Features */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Incentivos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Vale Presente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Pontos Extras</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Vouchers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Aniversário do Cliente</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefícios</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Nossa plataforma traz vantagens para todos os envolvidos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Aumente suas Vendas</h3>
              <p className="text-muted-foreground">Incentive a recorrência e aumente o ticket médio com programas de cashback personalizados.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Fidelize Clientes</h3>
              <p className="text-muted-foreground">Crie relacionamentos duradouros através de recompensas e benefícios exclusivos.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Análise de Dados</h3>
              <p className="text-muted-foreground">Obtenha insights valiosos sobre o comportamento de seus clientes para tomadas de decisão.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">Cashback VIP</h3>
              <p className="text-muted-foreground">Ofereça experiências premium para seus melhores clientes através do clube VIP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preços</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Plano Start */}
            <Card className="hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Plano START</CardTitle>
                <p className="text-muted-foreground text-sm">O jeito mais rápido e econômico de fidelizar seus clientes!</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">R$ 2.557</span>
                    <span className="text-2xl font-bold text-blue-600">R$ 1.999</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Implementação</p>
                  <div className="mt-2">
                    <span className="text-lg font-semibold">R$ 279</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Principais Benefícios:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Até 10.000 clientes cadastrados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Integrações nativas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Campanhas promocionais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Consultor Dedicado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Engenharia de Pontos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Gatilhos Mentais
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Cashback ou Pontos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Estratégia de Prêmios
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Observação:</strong> O Plano START não inclui API. Para integrações personalizadas, opte pelo Plano PRO ou GROWTH.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/auth/register">Escolher Plano</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Pro */}
            <Card className="hover:shadow-lg transition-all border-2 border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">Mais Popular</span>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Plano PRO</CardTitle>
                <p className="text-muted-foreground text-sm">Para empresas em crescimento que buscam a solução completa.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">R$ 3.917</span>
                    <span className="text-2xl font-bold text-primary">R$ 2.890</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Implementação</p>
                  <div className="mt-2">
                    <span className="text-lg font-semibold">R$ 399</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Principais Vantagens:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Processo completo de implementação
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Estratégia única para seu nicho
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Suporte total à API
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Até 50.000 clientes cadastrados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Todas as funcionalidades do START
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Observação:</strong> A implementação já inclui a primeira mensalidade e Mentoria.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="glow" asChild>
                  <Link to="/auth/register">Escolher Plano</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Plano Growth */}
            <Card className="hover:shadow-lg transition-all border-2 border-transparent hover:border-purple-500/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Plano GROWTH</CardTitle>
                <p className="text-muted-foreground text-sm">Solução completa com automação via WhatsApp Oficial e apps personalizados.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">R$ 4.615</span>
                    <span className="text-2xl font-bold text-purple-600">R$ 3.999</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Implementação</p>
                  <div className="mt-2">
                    <span className="text-lg font-semibold">R$ 849</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Recursos Destacados:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Até 350 mil clientes (e mais)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Infraestrutura dedicada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Customização completa
                    </li>
                    <li className="flex items-center gap-2">
                      <Smartphone className="h-3 w-3 text-green-500" />
                      Apps iOS e Android personalizados
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="h-3 w-3 text-green-500" />
                      WhatsApp API Oficial
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-3 w-3 text-green-500" />
                      Mentoria para implementação
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="premium" asChild>
                  <Link to="/auth/register">Escolher Plano</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comece Agora Mesmo</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Junte-se a milhares de empresas e clientes que já estão aproveitando os benefícios do nosso sistema de cashback.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link to="/auth/register">Criar conta</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Falar com um consultor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
