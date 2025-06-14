
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Download, Smartphone, Share, Plus } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';

interface PWAInstallPromptProps {
  onClose?: () => void;
}

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onClose }) => {
  const { isInstallable, installApp, isIOS, isSafari, canInstall } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  const handleInstall = async () => {
    await installApp();
    onClose?.();
  };

  const handleDismiss = () => {
    setDismissed(true);
    onClose?.();
  };

  if (dismissed || (!isInstallable && !isIOS)) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/472ef516-6a92-40ab-aaf9-fc167373e92c.png" 
              alt="CashGrow" 
              className="h-8 w-auto object-contain"
            />
            <Badge variant="secondary" className="text-xs">PWA</Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-xs mb-3">
          Instale nosso app para uma experiência mais rápida e acesso offline
        </CardDescription>
        
        {isIOS && isSafari ? (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-2">Para instalar no iOS:</p>
            <div className="flex items-center gap-2 text-xs">
              <Share className="h-3 w-3" />
              <span>1. Toque no ícone de compartilhamento</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Plus className="h-3 w-3" />
              <span>2. Selecione "Adicionar à Tela Início"</span>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button 
              onClick={handleInstall} 
              disabled={!canInstall}
              className="flex-1 h-8 text-xs bg-gradient-to-r from-primary to-primary/80"
            >
              <Download className="h-3 w-3 mr-1" />
              Instalar App
            </Button>
            <Button variant="outline" onClick={handleDismiss} className="h-8 text-xs">
              Agora não
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PWAInstallPrompt;
