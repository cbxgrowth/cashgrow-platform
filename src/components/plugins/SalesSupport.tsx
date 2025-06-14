
import React, { useState, useEffect } from 'react';
import SalesSupportButton from './sales-support/components/SalesSupportButton';
import SalesSupportModal from './sales-support/components/SalesSupportModal';

const SalesSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-show after 30 seconds if not interacted with
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('sales-plugin-seen')) {
        setIsOpen(true);
        localStorage.setItem('sales-plugin-seen', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SalesSupportButton onClick={() => setIsOpen(true)} />
      <SalesSupportModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default SalesSupport;
