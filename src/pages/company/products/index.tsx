
import React from 'react';
import ProductCatalog from '@/components/company/ProductCatalog';

const CompanyProducts: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <p className="text-muted-foreground">
          Gerencie seu catálogo de produtos e configure cashback personalizado
        </p>
      </div>
      
      <ProductCatalog />
    </div>
  );
};

export default CompanyProducts;
