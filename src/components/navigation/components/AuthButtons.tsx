
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
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
  );
};

export default AuthButtons;
