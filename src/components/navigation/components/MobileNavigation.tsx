
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutionsForConsumers, solutionsForBusiness } from '../data/navigationData';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
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
  );
};

export default MobileNavigation;
