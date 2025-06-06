
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Crown, 
  ChevronDown, 
  Building2, 
  User, 
  Zap, 
  Shield, 
  Target,
  Rocket,
  Gift,
  Star,
  Users,
  TrendingUp,
  Puzzle
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from '../Logo';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const solutionsForConsumers = [
    {
      title: "Cashback Inteligente",
      description: "Ganhe dinheiro de volta em suas compras favoritas",
      href: "/solutions/consumer#cashback",
      icon: Gift
    },
    {
      title: "Missões Gamificadas",
      description: "Complete desafios e ganhe recompensas extras",
      href: "/solutions/consumer#missions",
      icon: Target
    },
    {
      title: "Clube VIP",
      description: "Benefícios exclusivos para membros premium",
      href: "/solutions/consumer#vip",
      icon: Crown
    },
    {
      title: "Recomendações IA",
      description: "Sugestões personalizadas baseadas em IA",
      href: "/solutions/consumer#ai",
      icon: Zap
    }
  ];

  const solutionsForBusiness = [
    {
      title: "Dashboard Empresarial",
      description: "Gerencie campanhas e analise performance",
      href: "/solutions/business#dashboard",
      icon: TrendingUp
    },
    {
      title: "Campanhas IA",
      description: "Crie campanhas inteligentes automatizadas",
      href: "/solutions/business#ai-campaigns",
      icon: Rocket
    },
    {
      title: "Integrações API",
      description: "Conecte com seus sistemas existentes",
      href: "/solutions/business#integrations",
      icon: Puzzle
    },
    {
      title: "Análises Avançadas",
      description: "Relatórios detalhados e insights em tempo real",
      href: "/solutions/business#analytics",
      icon: Star
    }
  ];

  const resources = [
    {
      title: "Central de Ajuda",
      description: "Documentação e tutoriais completos",
      href: "/help",
      icon: Shield
    },
    {
      title: "API Docs",
      description: "Documentação técnica para desenvolvedores",
      href: "/docs/api",
      icon: Puzzle
    },
    {
      title: "Comunidade",
      description: "Conecte-se com outros usuários",
      href: "/community",
      icon: Users
    }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Soluções */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">Soluções</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[800px] grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Para Consumidores
                        </h4>
                        {solutionsForConsumers.map((item) => (
                          <NavigationMenuLink key={item.title} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                <item.icon className="h-4 w-4" />
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          Para Empresas
                        </h4>
                        {solutionsForBusiness.map((item) => (
                          <NavigationMenuLink key={item.title} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                <item.icon className="h-4 w-4" />
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Planos */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">Planos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Planos Pessoais
                        </h4>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/pricing/personal"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Consumidor</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Planos flexíveis para uso pessoal
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          Planos Empresariais
                        </h4>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/pricing/business"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Empresas</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Soluções escaláveis para negócios
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Recursos */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">Recursos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {resources.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                              <item.icon className="h-4 w-4" />
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/about"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Sobre
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/contact"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Contato
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="outline" className="hover-scale">
                Entrar
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button className="hover-scale bg-gradient-to-r from-primary to-primary/80">
                Começar Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground">Soluções</h3>
                <div className="space-y-1">
                  {[...solutionsForConsumers, ...solutionsForBusiness].map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-muted rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground">Planos</h3>
                <div className="space-y-1">
                  <Link
                    to="/pricing/personal"
                    className="flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Planos Pessoais
                  </Link>
                  <Link
                    to="/pricing/business"
                    className="flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="h-4 w-4" />
                    Planos Empresariais
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground">Mais</h3>
                <div className="space-y-1">
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-sm transition-colors hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 text-sm transition-colors hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/auth/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Entrar
                </Button>
              </Link>
              <Link to="/auth/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default EnhancedNavbar;
