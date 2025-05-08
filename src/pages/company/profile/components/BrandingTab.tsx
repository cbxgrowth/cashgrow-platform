
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Upload, Save } from "lucide-react";

const BrandingTab: React.FC = () => {
  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5 text-accent" />
          <span>Personalização da Marca</span>
        </CardTitle>
        <CardDescription>
          Configure a identidade visual da sua marca no programa de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <Label className="text-sm font-medium">Logo da Empresa</Label>
          <div className="flex items-center gap-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <div className="w-24 h-24 rounded-md bg-muted flex items-center justify-center overflow-hidden relative group">
              <Image className="h-10 w-10 text-muted-foreground transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <Button size="sm" variant="glow" className="mb-2">
                <Upload className="h-4 w-4 mr-1" /> Carregar Logo
              </Button>
              <p className="text-xs text-muted-foreground">
                Formatos aceitos: PNG, JPG. Tamanho máximo: 2MB
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label className="text-sm font-medium">Cores da Marca</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 p-4 border rounded-lg transition-colors bg-slate-50 dark:bg-slate-900 hover:border-primary/50">
              <Label htmlFor="primary-color">Cor Principal</Label>
              <div className="flex gap-2">
                <div className="relative">
                  <Input id="primary-color" type="color" defaultValue="#8B5CF6" className="w-12 h-10 p-1 cursor-pointer rounded-lg overflow-hidden" />
                  <div className="absolute inset-0 pointer-events-none rounded-lg border"></div>
                </div>
                <Input id="primary-color-hex" defaultValue="#8B5CF6" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-2 p-4 border rounded-lg transition-colors bg-slate-50 dark:bg-slate-900 hover:border-accent/50">
              <Label htmlFor="secondary-color">Cor Secundária</Label>
              <div className="flex gap-2">
                <div className="relative">
                  <Input id="secondary-color" type="color" defaultValue="#D946EF" className="w-12 h-10 p-1 cursor-pointer rounded-lg overflow-hidden" />
                  <div className="absolute inset-0 pointer-events-none rounded-lg border"></div>
                </div>
                <Input id="secondary-color-hex" defaultValue="#D946EF" className="flex-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label className="text-sm font-medium">Prévia do Cartão de Cashback</Label>
          <div className="cashback-card p-6 shadow-lg animate-float">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold">Tech Store Cashback</h3>
              <div className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">GOLD</div>
            </div>
            <div className="mb-4 relative">
              <div className="text-sm opacity-75">Saldo Disponível</div>
              <div className="text-2xl font-bold">R$ 125,50</div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-0"></div>
            </div>
            <div className="text-xs opacity-75 flex items-center gap-2">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              Cliente desde Jan/2023
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale">
          <Save className="h-4 w-4 mr-1" /> Salvar Personalização
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandingTab;
