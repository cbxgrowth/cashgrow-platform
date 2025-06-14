
import React from 'react';
import { Link } from 'react-router-dom';

const LoginCardFooter: React.FC = () => {
  return (
    <div className="space-y-2 w-full">
      <p className="text-sm text-muted-foreground text-center">
        Não tem uma conta?{" "}
        <Link to="/auth/register" className="text-primary hover:underline">
          Criar conta
        </Link>
      </p>
      <p className="text-xs text-muted-foreground text-center">
        <Link to="/" className="hover:underline">
          ← Voltar para o início
        </Link>
      </p>
    </div>
  );
};

export default LoginCardFooter;
