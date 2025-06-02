
import React from 'react';
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
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Loader2, LogIn, UserPlus, Store, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/auth/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  
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

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <Logo variant="corporate" className="hover-scale transition-transform" />
        
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Plataforma</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/funcionalidades"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Funcionalidades
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubra todos os recursos da nossa plataforma
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/integracoes"
                      >
                        <div className="text-sm font-medium leading-none">Integrações</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conecte com ERPs, e-commerce e PDVs
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
                          Planos flexíveis para todos os tamanhos
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 px-4 py-2">
                  Sobre
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 px-4 py-2">
                  Contato
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex gap-3 items-center">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hover-scale">
                  {user.user_metadata?.user_type === 'company' ? (
                    <>
                      <Store className="h-4 w-4 mr-1.5" /> 
                      {user.user_metadata?.company_name || user.email?.split('@')[0]}
                    </>
                  ) : (
                    <>
                      <UserCircle className="h-4 w-4 mr-1.5" /> 
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleNavigateToDashboard}>
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
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" /> Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/auth/login">
                <Button variant="outline" size="sm" className="hover-scale">
                  <LogIn className="h-4 w-4 mr-1.5" /> Entrar
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button size="sm" variant="glow" className="shadow-float">
                  <UserPlus className="h-4 w-4 mr-1.5" /> Registrar
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
