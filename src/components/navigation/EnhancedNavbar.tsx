
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Logo from '../Logo';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import AuthButtons from './components/AuthButtons';

const EnhancedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          <DesktopNavigation />
          <AuthButtons />

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent/20 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default EnhancedNavbar;
