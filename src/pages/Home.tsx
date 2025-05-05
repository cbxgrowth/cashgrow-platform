
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
  User
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
                <div className="relative bg-background/80 backdrop-blur-sm border rounded-lg p-8 shadow-lg">
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

      {/* Features Section */}
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

      {/* Benefits Section */}
      <section className="py-16">
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
