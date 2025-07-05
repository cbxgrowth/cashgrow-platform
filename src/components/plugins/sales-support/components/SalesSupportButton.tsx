import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
interface SalesSupportButtonProps {
  onClick: () => void;
}
const SalesSupportButton: React.FC<SalesSupportButtonProps> = ({
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} size="lg" className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 rounded-full w-16 h-16">
          <DollarSign className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </Button>
        
        {/* Enhanced pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        
        
        {/* Tooltip on hover */}
        {isHovered && <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
            Fale com Vendas 💬
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
          </div>}

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
          !
        </div>
      </div>
    </div>;
};
export default SalesSupportButton;