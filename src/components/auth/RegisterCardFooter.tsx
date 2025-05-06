
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterCardFooter: React.FC = () => {
  return (
    <p className="text-sm text-muted-foreground text-center w-full">
      Já tem uma conta?{" "}
      <Link to="/auth/login" className="text-primary hover:underline">
        Entrar
      </Link>
    </p>
  );
};

export default RegisterCardFooter;
