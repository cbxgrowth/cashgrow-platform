
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  X,
  Sparkles,
  Zap,
  Clock
} from "lucide-react";
import { supportTabs } from '../data/supportTabs';
import { quickHelp, dailyTips } from '../data/quickHelp';

interface ClientSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const ClientSupportModal: React.FC<ClientSupportModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedTab, 
  onTabChange 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-4xl bg-background/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in rounded-2xl overflow-hidden max-h-[90vh]">
        <CardHeader className="relative bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2">Precisa de Ajuda?</CardTitle>
              <CardDescription className="text-lg mb-2">
                Estamos aqui para ajudar você a aproveitar ao máximo sua experiência de cashback
              </CardDescription>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-600 font-medium">Suporte online • Resposta imediata</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {Object.entries(supportTabs).map(([key, tab]) => (
              <Button
                key={key}
                variant={selectedTab === key ? "default" : "outline"}
                size="sm"
                onClick={() => onTabChange(key)}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <tab.icon className="w-4 h-4" />
                {tab.title}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {quickHelp.map((help, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2 p-3 justify-start hover:scale-105 transition-transform cursor-pointer">
                <help.icon className={`w-4 h-4 ${help.color}`} />
                <span className="text-xs">{help.text}</span>
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8 overflow-y-auto max-h-96">
          <div className="grid md:grid-cols-3 gap-6">
            {supportTabs[selectedTab as keyof typeof supportTabs].options.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
                {option.available && (
                  <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <Button size="sm" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-800/50">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Dicas do Dia!</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {dailyTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-2 text-sm p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Você sabia que pode ganhar <span className="text-primary font-semibold">cashback duplo</span> aos domingos?
              </p>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-90">
                Descobrir Mais Dicas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientSupportModal;
