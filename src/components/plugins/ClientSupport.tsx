
import React, { useState } from 'react';
import ClientSupportButton from './client-support/components/ClientSupportButton';
import ClientSupportModal from './client-support/components/ClientSupportModal';

const ClientSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('suporte');

  const handleOpen = () => {
    console.log('Opening ClientSupport modal'); // Debug log
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Closing ClientSupport modal'); // Debug log
    setIsOpen(false);
  };

  return (
    <>
      <ClientSupportButton onClick={handleOpen} />
      <ClientSupportModal
        isOpen={isOpen}
        onClose={handleClose}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </>
  );
};

export default ClientSupport;
