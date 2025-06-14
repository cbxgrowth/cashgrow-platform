
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Download } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';
import PWAInstallPrompt from './PWAInstallPrompt';

const PWAStatus: React.FC = () => {
  const { isInstalled, isStandalone, isInstallable, installApp } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);

  if (isInstalled || isStandalone) {
    return (
      <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
        <Smartphone className="h-3 w-3" />
        App Instalado
      </Badge>
    );
  }

  if (isInstallable) {
    return (
      <>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPrompt(true)}
          className="hidden sm:flex items-center gap-1"
        >
          <Download className="h-3 w-3" />
          Instalar App
        </Button>
        {showPrompt && (
          <PWAInstallPrompt onClose={() => setShowPrompt(false)} />
        )}
      </>
    );
  }

  return null;
};

export default PWAStatus;
