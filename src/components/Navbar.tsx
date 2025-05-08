
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Loader2, LogIn, UserPlus, Store, UserCircle } from 'lucide-react';

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
        <Logo variant="corporate" className="hover-scale transition-transform" />
        
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
            Home
          </Link>
          <Link to="/about" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
            Sobre
          </Link>
          <Link to="/contact" className="nav-item after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
            Contato
          </Link>
        </div>
        
        <div className="flex gap-3 items-center">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          ) : user ? (
            <>
              <Button 
                variant="glow" 
                size="sm"
                onClick={handleNavigateToDashboard}
                className="shadow-float"
              >
                {user.user_metadata?.user_type === 'company' ? (
                  <>
                    <Store className="h-4 w-4 mr-1.5" /> Painel da Empresa
                  </>
                ) : (
                  <>
                    <UserCircle className="h-4 w-4 mr-1.5" /> Meu Painel
                  </>
                )}
              </Button>
            </>
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
