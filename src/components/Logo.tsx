
import React from 'react';

interface LogoProps {
  companyName?: string;
  customLogo?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'default' | 'minimal' | 'corporate';
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
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  const logoSizes = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-12 w-12',
    xl: 'h-14 w-14'
  };

  const renderLogo = () => {
    if (customLogo) {
      return (
        <img 
          src={customLogo} 
          alt={`${companyName} logo`}
          className={`${logoSizes[size]} rounded-lg object-contain animate-pulse-soft`}
        />
      );
    }

    if (variant === 'corporate') {
      return (
        <div className="relative group">
          <div className={`bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md p-2 text-white overflow-hidden ${logoSizes[size]} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
            <span className="font-bold relative z-10">CB</span>
            <div className="absolute inset-0 bg-white opacity-10 animate-pulse-soft"></div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      );
    }

    return (
      <div className="relative group">
        <div className={`bg-gradient-to-br from-primary to-accent rounded-lg p-2 text-white overflow-hidden ${logoSizes[size]} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <span className="font-bold relative z-10">CB</span>
          <div className="absolute inset-0 bg-white opacity-10 animate-pulse-soft"></div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {renderLogo()}
      {variant !== "minimal" && (
        <span className={`font-bold ${variant === 'corporate' 
          ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700'
          : 'bg-gradient-to-r from-primary via-accent to-secondary'} bg-clip-text text-transparent ${sizeClasses[size]}`}>
          {companyName}
        </span>
      )}
    </div>
  );
};

export default Logo;
