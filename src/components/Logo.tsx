
import React from 'react';

interface LogoProps {
  companyName?: string;
  customLogo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ 
  companyName = "CashbackBloom", 
  customLogo, 
  size = "md",
  className,
  variant = "default"
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const logoSizes = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {customLogo ? (
        <img 
          src={customLogo} 
          alt={`${companyName} logo`}
          className={logoSizes[size]}
        />
      ) : (
        <div className="relative">
          <div className={`bg-gradient-to-r from-primary to-accent rounded-lg p-2 text-white overflow-hidden ${logoSizes[size]} flex items-center justify-center shadow-soft`}>
            <span className="font-bold relative z-10">CB</span>
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse-soft"></div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-sm opacity-70"></div>
        </div>
      )}
      {variant !== "minimal" && (
        <span className={`font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${sizeClasses[size]}`}>
          {companyName}
        </span>
      )}
    </div>
  );
};

export default Logo;
