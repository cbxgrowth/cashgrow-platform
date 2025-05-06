
import React from 'react';
import { Link } from 'react-router-dom';

const LoginCardFooter: React.FC = () => {
  return (
    <p className="text-sm text-muted-foreground text-center w-full">
      Não tem uma conta?{" "}
      <Link to="/auth/register" className="text-primary hover:underline">
        Criar conta
      </Link>
    </p>
  );
};

export default LoginCardFooter;
