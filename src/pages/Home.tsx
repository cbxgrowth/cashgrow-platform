
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, LineChart, Wallet, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  // Adicionando efeitos de entrada animada aos elementos
  useEffect(() => {
    const animateTiming = (selector: string, delay: number) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        setTimeout(() => {
          element.classList.add('animate-slide-up', 'opacity-100');
          element.classList.remove('opacity-0', 'translate-y-4');
        }, delay);
      });
    };
    
    animateTiming('.hero-element', 100);
    animateTiming('.feature-card', 300);
    animateTiming('.pricing-card', 500);
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section - com gradiente melhorado e visual */}
      <section className="py-16 md:py-28 bg-gradient-surface">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-6 hero-element opacity-0 translate-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Plataforma de Cashback <span className="text-gradient">Multissetorial</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                  Aumente a fidelidade dos seus clientes e impulsione as vendas com nossa solução completa de cashback personalizável.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-scale">
                    Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="hover-scale">
                    Fale com Especialista
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0 hero-element opacity-0 translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl overflow-hidden p-6 card-shadow">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total acumulado</p>
                    <h3 className="text-2xl font-bold">R$ 423,58</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center bg-muted/30 hover:bg-muted/40 transition-colors p-3 rounded-xl">
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
                  
                  <div className="flex justify-between items-center bg-muted/30 hover:bg-muted/40 transition-colors p-3 rounded-xl">
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
                  
                  <div className="flex justify-between items-center bg-muted/30 hover:bg-muted/40 transition-colors p-3 rounded-xl">
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
                    <Button variant="outline" className="w-full hover-scale">
                      Ver todos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - com cards melhorados */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 hero-element opacity-0 translate-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tudo o que você precisa para <span className="text-gradient">fidelizar seus clientes</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl mt-4">
              Uma plataforma completa de cashback que se adapta ao seu negócio, independentemente do setor
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cashback Personalizado</h3>
                <p className="text-muted-foreground">
                  Configure regras de cashback por valor, categoria ou dia da semana para aumentar as vendas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multitenancy</h3>
                <p className="text-muted-foreground">
                  Solução white-label adaptável à identidade visual e necessidades de cada empresa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Relatórios Avançados</h3>
                <p className="text-muted-foreground">
                  Análises detalhadas sobre desempenho, cashback emitido e comportamento dos clientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integração Rápida</h3>
                <p className="text-muted-foreground">
                  API completa para integração com seu sistema atual em poucos dias, sem interrupções.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Segurança Total</h3>
                <p className="text-muted-foreground">
                  Proteção de dados e transações com criptografia de ponta a ponta e autenticação segura.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg feature-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Suporte Especializado</h3>
                <p className="text-muted-foreground">
                  Equipe dedicada para implementação e suporte contínuo para a sua empresa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Pricing Section - com cards melhorados e efeitos */}
      <section className="py-16 md:py-24 bg-gradient-surface">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 hero-element opacity-0 translate-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Planos <span className="text-gradient">Flexíveis</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl mt-4">
              Escolha o plano ideal para o tamanho do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg pricing-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Startup</h3>
                  <p className="text-4xl font-bold mt-2">R$ 299<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Ideal para pequenos negócios</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Até 500 clientes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Regras de cashback básicas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Relatórios mensais</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Suporte por e-mail</span>
                  </li>
                </ul>
                
                <Button className="w-full mt-6 hover-scale">Começar</Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 shadow-xl relative pricing-card opacity-0 translate-y-4 hover-scale glass-card">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-primary" />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs px-3 py-1 rounded-full animate-bounce-subtle">
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
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Até 2.000 clientes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Regras de cashback avançadas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Relatórios semanais</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">API para integração</span>
                  </li>
                </ul>
                
                <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 hover-scale">Começar</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg pricing-card opacity-0 translate-y-4 hover-scale">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-medium">Enterprise</h3>
                  <p className="text-4xl font-bold mt-2">R$ 1.999<span className="text-lg font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-muted-foreground text-sm mt-1">Para grandes organizações</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Clientes ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Regras de cashback personalizáveis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Relatórios em tempo real</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">API completa e webhooks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">Gerente de conta dedicado</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full mt-6 hover-scale">Contato</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 hero-element opacity-0 translate-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Pronto para aumentar a <span className="text-gradient">fidelidade dos seus clientes</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Junte-se a centenas de empresas que já aumentaram suas vendas e fidelizaram seus clientes com nossa plataforma de cashback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-scale">
                Agendar Demonstração
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
