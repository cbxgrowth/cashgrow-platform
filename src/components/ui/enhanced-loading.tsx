
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  submessage?: string;
  fullScreen?: boolean;
}

export const EnhancedLoading: React.FC<LoadingProps> = ({
  size = 'md',
  message = 'Carregando...',
  submessage,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const containerClass = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClass}>
      <div className="text-center space-y-4">
        <div className="relative flex justify-center">
          <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
          <div className={`absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse ${sizeClasses[size]}`}></div>
        </div>
        
        <div className="space-y-2">
          <p className={`font-medium text-foreground ${textSizes[size]}`}>
            {message}
          </p>
          {submessage && (
            <p className="text-sm text-muted-foreground">
              {submessage}
            </p>
          )}
          
          {/* Animated dots */}
          <div className="flex justify-center mt-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div 
                className="w-2 h-2 bg-primary rounded-full animate-bounce" 
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div 
                className="w-2 h-2 bg-primary rounded-full animate-bounce" 
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente específico para loading de página
export const PageLoading: React.FC<{ message?: string }> = ({ 
  message = 'Carregando página...' 
}) => (
  <EnhancedLoading 
    size="lg" 
    message={message}
    submessage="Preparando conteúdo"
    fullScreen
  />
);

// Componente específico para loading de seção
export const SectionLoading: React.FC<{ message?: string }> = ({ 
  message = 'Carregando dados...' 
}) => (
  <EnhancedLoading 
    size="md" 
    message={message}
  />
);
