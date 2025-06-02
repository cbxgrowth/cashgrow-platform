
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from './Logo';
import { 
  Loader2, 
  LogIn, 
  UserPlus, 
  Store, 
  UserCircle, 
  LogOut, 
  Menu,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/hooks/auth/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isAuthPage = location.pathname.startsWith('/auth/');
  
  if (isAuthPage) {
    return null;
  }

  const handleNavigateToDashboard = () => {
    if (user) {
      const userType = user.user_metadata?.user_type;
      if (userType === 'company') {
        navigate('/company/dashboard');
      } else {
        navigate('/client/dashboard');
      }
    }
  };

  const navigationItems = [
    { title: 'Home', href: '/' },
    { title: 'Funcionalidades', href: '/funcionalidades' },
    { title: 'Integrações', href: '/integracoes' },
    { title: 'Preços', href: '/precos' },
    { title: 'Sobre', href: '/about' },
    { title: 'Contato', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-backdrop-blur:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Logo variant="corporate" className="transition-transform group-hover:scale-105" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
                    isActiveRoute('/') ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Plataforma</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] lg:grid-cols-2">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md group"
                          to="/funcionalidades"
                        >
                          <Sparkles className="h-6 w-6 text-primary mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Funcionalidades
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubra todos os recursos da nossa plataforma de cashback
                          </p>
                          <ArrowRight className="h-4 w-4 mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                        to="/integracoes"
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          Integrações
                          <Badge variant="secondary" className="text-xs">Popular</Badge>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conecte com ERPs, e-commerce e PDVs facilmente
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/precos"
                      >
                        <div className="text-sm font-medium leading-none">Preços</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Planos flexíveis para todos os tamanhos de negócio
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {navigationItems.slice(4).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link 
                    to={item.href}
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
                      isActiveRoute(item.href) ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActiveRoute(item.href) ? 'bg-accent text-accent-foreground' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                
                {/* Mobile Auth Section */}
                <div className="pt-6 border-t border-border">
                  {loading ? (
                    <div className="flex items-center justify-center py-4">
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                  ) : user ? (
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start gap-2"
                        onClick={() => {
                          handleNavigateToDashboard();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {user.user_metadata?.user_type === 'company' ? (
                          <>
                            <Store className="h-4 w-4" /> 
                            Painel da Empresa
                          </>
                        ) : (
                          <>
                            <UserCircle className="h-4 w-4" /> 
                            Meu Painel
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-2 text-destructive hover:text-destructive"
                        onClick={() => {
                          signOut();
                          setMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4" /> Sair
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <LogIn className="h-4 w-4" /> Entrar
                        </Button>
                      </Link>
                      <Link to="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full justify-start gap-2">
                          <UserPlus className="h-4 w-4" /> Registrar
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-3">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Carregando...</span>
            </div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 hover:shadow-md transition-shadow">
                  {user.user_metadata?.user_type === 'company' ? (
                    <>
                      <Store className="h-4 w-4" /> 
                      <span className="hidden sm:inline">
                        {user.user_metadata?.company_name || user.email?.split('@')[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      <UserCircle className="h-4 w-4" /> 
                      <span className="hidden sm:inline">
                        {user.user_metadata?.full_name || user.email?.split('@')[0]}
                      </span>
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleNavigateToDashboard} className="cursor-pointer">
                  {user.user_metadata?.user_type === 'company' ? (
                    <>
                      <Store className="h-4 w-4 mr-2" /> Painel da Empresa
                    </>
                  ) : (
                    <>
                      <UserCircle className="h-4 w-4 mr-2" /> Meu Painel
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive focus:text-destructive">
                  <LogOut className="h-4 w-4 mr-2" /> Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/auth/login">
                <Button variant="ghost" className="gap-2 hover:bg-accent">
                  <LogIn className="h-4 w-4" /> Entrar
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow">
                  <UserPlus className="h-4 w-4" /> Registrar
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
