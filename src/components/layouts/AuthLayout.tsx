
import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../Logo';

const AuthLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary to-secondary items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIgZD0iTTAgMGgyMHYyMGgtMjB6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative z-10 max-w-md text-center text-white p-6">
          <Logo size="lg" className="mx-auto mb-8" />
          <h1 className="text-3xl font-bold mb-4">
            Plataforma de Cashback para Todos os Setores
          </h1>
          <p className="text-white/80">
            Aumente a fidelidade dos clientes com uma solução completa de cashback personalizável.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Logo size="lg" className="mx-auto" />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
