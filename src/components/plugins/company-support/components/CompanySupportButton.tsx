
import React from 'react';
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

interface CompanySupportButtonProps {
  onClick: () => void;
}

const CompanySupportButton: React.FC<CompanySupportButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <Button
          onClick={onClick}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 rounded-full w-16 h-16"
        >
          <Headphones className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </Button>
        
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
      </div>
    </div>
  );
};

export default CompanySupportButton;
