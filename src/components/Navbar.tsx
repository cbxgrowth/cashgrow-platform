
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Loader2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const isAuthPage = location.pathname.startsWith('/auth/');
  
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    };
    
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    
    return () => subscription.unsubscribe();
  }, []);
  
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
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : user ? (
            <>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleNavigateToDashboard}
              >
                Meu Dashboard
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <Button variant="outline" size="sm">Entrar</Button>
              </Link>
              <Link to="/auth/register">
                <Button size="sm">Registrar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
