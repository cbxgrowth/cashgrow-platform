
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
            <h1 className="text-6xl font-bold text-primary">404</h1>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Página não encontrada</h2>
        <p className="text-muted-foreground">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="default">Voltar para a Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contato</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
