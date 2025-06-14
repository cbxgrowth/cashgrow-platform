
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  X,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { salesOptions, benefits, urgencyFeatures } from '../data/salesData';

interface SalesSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SalesSupportModal: React.FC<SalesSupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <Card className="w-full max-w-4xl bg-background/98 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl overflow-hidden">
        <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Acelere suas Vendas em 2024
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-4">
                Fale com nossos especialistas e descubra como aumentar seu faturamento em até <span className="font-bold text-green-600">300%</span>
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 dark:bg-orange-950/20 px-3 py-1 rounded-full w-fit">
                <Clock className="w-4 h-4" />
                Oferta válida por tempo limitado
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {benefits.map((benefit, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform">
                <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                <span className="text-xs">{benefit.text}</span>
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {salesOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background to-muted/30 overflow-hidden relative">
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-950/20">
                    {option.availability}
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
          
          {/* Urgency section */}
          <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl p-8 text-center border-2 border-dashed border-orange-200 dark:border-orange-800">
            <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
              🔥 Oferta Especial de Lançamento!
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {urgencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Aproveitar Oferta Agora
              </Button>
              <div className="text-sm text-muted-foreground">
                <Clock className="w-4 h-4 inline mr-1" />
                Válido até o final do mês
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesSupportModal;
