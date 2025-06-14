
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutionsForConsumers, solutionsForBusiness, mainNavigationLinks } from '../data/navigationData';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-border/40">
      <div className="px-4 pt-4 pb-6 space-y-6 bg-background/95 backdrop-blur-sm max-h-96 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-primary border-b border-border/30 mb-3">Menu Principal</h3>
            <div className="space-y-1">
              {mainNavigationLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-primary border-b border-border/30 mb-3">Soluções</h3>
            <div className="space-y-2">
              <div className="space-y-1">
                <p className="px-3 text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <User className="h-3 w-3" />
                  Para Consumidores
                </p>
                {solutionsForConsumers.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-3 w-3 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">{item.title}</span>
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1 pt-2">
                <p className="px-3 text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <Building2 className="h-3 w-3" />
                  Para Empresas
                </p>
                {solutionsForBusiness.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-3 w-3 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-primary border-b border-border/30 mb-3">Planos</h3>
            <div className="space-y-1">
              <Link
                to="/pricing/personal"
                className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg group"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <User className="h-3 w-3 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">Planos Pessoais</span>
              </Link>
              <Link
                to="/pricing/business"
                className="flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg group"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-3 w-3 text-primary" />
                </div>
                <span className="group-hover:text-primary transition-colors">Planos Empresariais</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-primary border-b border-border/30 mb-3">Mais</h3>
            <div className="space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm transition-all duration-200 hover:bg-accent/20 rounded-lg hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
          <Link to="/auth/login" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full hover:bg-accent/20 transition-all duration-200">
              Entrar
            </Button>
          </Link>
          <Link to="/auth/register" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200">
              Começar Grátis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
