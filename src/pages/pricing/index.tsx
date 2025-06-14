
import React from 'react';
import { Navigate } from 'react-router-dom';

// Página de redirecionamento para a página principal de preços
const PricingIndex = () => {
  return <Navigate to="/pricing" replace />;
};

export default PricingIndex;
