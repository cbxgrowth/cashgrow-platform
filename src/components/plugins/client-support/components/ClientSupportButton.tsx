
import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Heart } from "lucide-react";

interface ClientSupportButtonProps {
  onClick: () => void;
}

const ClientSupportButton: React.FC<ClientSupportButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    console.log('ClientSupportButton clicked'); // Debug log
    onClick();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <Button
          onClick={handleClick}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
        >
          <HelpCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </Button>
        
        {/* Love animation */}
        <div className="absolute -top-2 -right-2 text-red-500 animate-pulse">
          <Heart className="w-4 h-4 fill-current" />
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default ClientSupportButton;
