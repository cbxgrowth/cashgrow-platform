
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Upload, Eye, Save, Image } from "lucide-react";
import { toast } from "sonner";

const BrandingTab: React.FC = () => {
  const [colors, setColors] = useState({
    primary: '#8B5CF6',
    secondary: '#06B6D4',
    accent: '#F59E0B'
  });

  const handleColorChange = (colorType: string, value: string) => {
    setColors(prev => ({ ...prev, [colorType]: value }));
  };

  const handleSave = () => {
    toast.success('Configurações de marca salvas com sucesso!');
  };

  const handleImageUpload = (type: string) => {
    toast.success(`${type} carregada com sucesso!`);
  };

  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-accent" />
          <span>Identidade Visual</span>
        </CardTitle>
        <CardDescription>
          Personalize a aparência da sua loja e programa de cashback
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Logo Upload */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Image className="h-5 w-5 text-accent" />
            Logo da Empresa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Logo Principal</Label>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <Image className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Arraste uma imagem ou clique para selecionar</p>
                <Button variant="outline" size="sm" onClick={() => handleImageUpload('Logo principal')}>
                  <Upload className="h-4 w-4 mr-2" />
                  Carregar Logo
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Favicon</Label>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <Image className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">Ícone do site (32x32px)</p>
                <Button variant="outline" size="sm" onClick={() => handleImageUpload('Favicon')}>
                  <Upload className="h-4 w-4 mr-2" />
                  Carregar Favicon
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Palette className="h-5 w-5 text-accent" />
            Esquema de Cores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Cor Primária</Label>
              <div className="flex gap-2">
                <Input
                  id="primary-color"
                  type="color"
                  value={colors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="w-16 h-10 p-1 border rounded cursor-pointer"
                />
                <Input
                  value={colors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  placeholder="#8B5CF6"
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secondary-color">Cor Secundária</Label>
              <div className="flex gap-2">
                <Input
                  id="secondary-color"
                  type="color"
                  value={colors.secondary}
                  onChange={(e) => handleColorChange('secondary', e.target.value)}
                  className="w-16 h-10 p-1 border rounded cursor-pointer"
                />
                <Input
                  value={colors.secondary}
                  onChange={(e) => handleColorChange('secondary', e.target.value)}
                  placeholder="#06B6D4"
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="accent-color">Cor de Destaque</Label>
              <div className="flex gap-2">
                <Input
                  id="accent-color"
                  type="color"
                  value={colors.accent}
                  onChange={(e) => handleColorChange('accent', e.target.value)}
                  className="w-16 h-10 p-1 border rounded cursor-pointer"
                />
                <Input
                  value={colors.accent}
                  onChange={(e) => handleColorChange('accent', e.target.value)}
                  placeholder="#F59E0B"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 border rounded-lg bg-white dark:bg-slate-800">
            <h4 className="font-medium mb-3">Pré-visualização</h4>
            <div className="flex gap-4 items-center">
              <div 
                className="w-12 h-12 rounded-lg border-2"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div 
                className="w-12 h-12 rounded-lg border-2"
                style={{ backgroundColor: colors.secondary }}
              ></div>
              <div 
                className="w-12 h-12 rounded-lg border-2"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <Button 
                size="sm" 
                style={{ backgroundColor: colors.primary }}
                className="hover:opacity-90"
              >
                Botão Exemplo
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Eye className="h-5 w-5 text-accent" />
            Visualização da Loja
          </h3>
          
          <div className="border rounded-lg p-4 bg-white dark:bg-slate-800">
            <div className="mb-4 pb-4 border-b">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: colors.primary }}
                >
                  TS
                </div>
                <div>
                  <h4 className="font-bold">Tech Store</h4>
                  <p className="text-sm text-muted-foreground">Programa de Cashback</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Cashback Disponível</span>
                <span 
                  className="font-bold px-2 py-1 rounded text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  8%
                </span>
              </div>
              <Button 
                className="w-full text-white"
                style={{ backgroundColor: colors.primary }}
              >
                Resgatar Cashback
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale" onClick={handleSave}>
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandingTab;
