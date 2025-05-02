
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  if (isAuthPage) {
    return null;
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
        </div>
        
        <div className="flex gap-2 items-center">
          <Link to="/login">
            <Button variant="outline" size="sm">Entrar</Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Registrar</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
