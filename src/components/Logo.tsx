
import React from 'react';

interface LogoProps {
  companyName?: string;
  customLogo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  companyName = "CashbackBloom", 
  customLogo, 
  size = "md",
  className 
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {customLogo ? (
        <img 
          src={customLogo} 
          alt={`${companyName} logo`}
          className={`h-${size === 'sm' ? '6' : size === 'md' ? '8' : '12'}`}
        />
      ) : (
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-2 text-white">
          <span className="font-bold">CB</span>
        </div>
      )}
      <span className={`font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${sizeClasses[size]}`}>
        {companyName}
      </span>
    </div>
  );
};

export default Logo;
