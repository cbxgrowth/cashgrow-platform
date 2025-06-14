
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/472ef516-6a92-40ab-aaf9-fc167373e92c.png" 
        alt="CashGrow Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </Link>
  );
};

export default Logo;
