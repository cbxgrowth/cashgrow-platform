
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, LineChart, Wallet } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-white to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Plataforma de Cashback <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Multissetorial</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Aumente a fidelidade dos seus clientes e impulsione as vendas com nossa solução completa de cashback personalizável.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    Comece Agora
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Fale com Especialista
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-3xl border shadow-lg overflow-hidden p-6">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total acumulado</p>
                    <h3 className="text-2xl font-bold">R$ 423,58</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <img src="https://via.placeholder.com/40" alt="Loja" className="w-6 h-6 rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Mercado Verde</p>
                        <p className="text-xs text-muted-foreground">20 abr, 15:30</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">+R$ 12,50</p>
                      <p className="text-xs text-muted-foreground">5% cashback</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <img src="https://via.placeholder.com/40" alt="Loja" className="w-6 h-6 rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Moda Express</p>
                        <p className="text-xs text-muted-foreground">18 abr, 11:20</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">+R$ 30,25</p>
                      <p className="text-xs text-muted-foreground">7% cashback</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <img src="https://via.placeholder.com/40" alt="Loja" className="w-6 h-6 rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Tech Store</p>
                        <p className="text-xs text-muted-foreground">15 abr, 09:45</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">+R$ 60,00</p>
                      <p className="text-xs text-muted-foreground">3% cashback</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Ver todos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tudo o que você precisa para <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">fidelizar seus clientes</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Uma plataforma completa de cashback que se adapta ao seu negócio, independentemente do setor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cashback Personalizado</h3>
                <p className="text-muted-foreground">
                  Configure regras de cashback por valor, categoria ou dia da semana para aumentar as vendas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multitenancy</h3>
                <p className="text-muted-foreground">
                  Solução white-label adaptável à identidade visual e necessidades de cada empresa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Relatórios Avançados</h3>
                <p className="text-muted-foreground">
                  Análises detalhadas sobre desempenho, cashback emitido e comportamento dos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Planos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Flexíveis</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Escolha o plano ideal para o tamanho do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Startup</h3>
                  <p className="text-4xl font-bold mt-2">R$ 299<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Ideal para pequenos negócios</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Até 500 clientes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Regras de cashback básicas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Relatórios mensais</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Suporte por e-mail</span>
                  </li>
                </ul>
                
                <Button className="w-full mt-6">Começar</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary/50 shadow-lg relative">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                Mais popular
              </div>
              <CardContent className="p-6 pt-8">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Business</h3>
                  <p className="text-4xl font-bold mt-2">R$ 799<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Para empresas em crescimento</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Até 2.000 clientes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Regras de cashback avançadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Relatórios semanais</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">API para integração</span>
                  </li>
                </ul>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">Começar</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Enterprise</h3>
                  <p className="text-4xl font-bold mt-2">R$ 1.999<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Para grandes organizações</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Clientes ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Regras de cashback personalizáveis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Relatórios em tempo real</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">API completa e webhooks</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Gerente de conta dedicado</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full mt-6">Contato</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
