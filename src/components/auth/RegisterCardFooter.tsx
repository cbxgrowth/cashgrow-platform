
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterCardFooter: React.FC = () => {
  return (
    <div className="space-y-2 w-full">
      <p className="text-sm text-muted-foreground text-center">
        Já tem uma conta?{" "}
        <Link to="/auth/login" className="text-primary hover:underline">
          Entrar
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

export default RegisterCardFooter;
