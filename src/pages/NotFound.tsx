
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { user, userType } = useAuth();

  const handleGoHome = () => {
    if (user && userType) {
      navigate(userType === 'company' ? '/company/dashboard' : '/client/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="text-8xl font-bold text-primary mb-2">404</div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Página não encontrada
              </h1>
              <p className="text-muted-foreground mb-6">
                Ops! A página que você está procurando não existe ou foi movida.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleGoHome}
                className="w-full bg-gradient-primary"
              >
                <Home className="mr-2 h-4 w-4" />
                Ir para o início
              </Button>

              <Button 
                variant="outline" 
                onClick={handleGoBack}
                className="w-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="w-full"
              >
                <Search className="mr-2 h-4 w-4" />
                Explorar o site
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                Se você acredita que isso é um erro, entre em contato conosco.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
