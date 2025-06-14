
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ArrowUp, Award } from "lucide-react";
import { supportCategories } from '../data/supportCategories';
import { quickActions } from '../data/quickActions';

interface CompanySupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CompanySupportModal: React.FC<CompanySupportModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange
}) => {
  if (!isOpen) return null;

  const currentCategory = supportCategories[selectedCategory as keyof typeof supportCategories];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <Card className="w-full max-w-6xl bg-background/98 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <currentCategory.icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {currentCategory.title}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-4">
                Suporte especializado para empresas com <span className="font-bold text-blue-600">resposta prioritária</span>
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-950/20 px-3 py-1 rounded-full w-fit">
                <ArrowUp className="w-4 h-4" />
                Disponível 24/7
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            {Object.entries(supportCategories).map(([key, category]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => onCategoryChange(key)}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((action, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform">
                <action.icon className={`w-4 h-4 ${action.color}`} />
                <span className="text-xs">{action.text}</span>
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentCategory.options.map((option, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative">
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-950/20">
                    {option.responseTime}
                  </Badge>
                </div>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <Button size="lg" className="w-full group-hover:bg-primary/90 transition-all duration-300">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl p-8 text-center border-2 border-dashed border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              <Award className="w-6 h-6 inline mr-2" />
              Suporte Premium Empresarial
            </h3>
            <p className="text-muted-foreground mb-6">
              Acesso completo a todos os canais de suporte, consultoria especializada e implementação dedicada para sua empresa.
            </p>
            <Button size="xl" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Ativar Suporte Premium
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySupportModal;
