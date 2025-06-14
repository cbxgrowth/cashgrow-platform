
import React, { useState } from 'react';
import ClientSupportButton from './client-support/components/ClientSupportButton';
import ClientSupportModal from './client-support/components/ClientSupportModal';

const ClientSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('suporte');

  return (
    <>
      <ClientSupportButton onClick={() => setIsOpen(true)} />
      <ClientSupportModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </>
  );
};

export default ClientSupport;
