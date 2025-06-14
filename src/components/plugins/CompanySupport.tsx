
import React, { useState } from 'react';
import CompanySupportButton from './company-support/components/CompanySupportButton';
import CompanySupportModal from './company-support/components/CompanySupportModal';

const CompanySupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('tecnico');

  return (
    <>
      <CompanySupportButton onClick={() => setIsOpen(true)} />
      <CompanySupportModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </>
  );
};

export default CompanySupport;
