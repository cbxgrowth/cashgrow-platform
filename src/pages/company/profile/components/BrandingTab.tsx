
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";

const BrandingTab: React.FC = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Personalização da Marca</CardTitle>
        <CardDescription>
          Configure a identidade visual da sua marca no programa de cashback
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Logo da Empresa</Label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-md bg-muted flex items-center justify-center">
              <Image className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <Button size="sm" className="mb-2">Carregar Logo</Button>
              <p className="text-xs text-muted-foreground">
                Formatos aceitos: PNG, JPG. Tamanho máximo: 2MB
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Cores da Marca</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Cor Principal</Label>
              <div className="flex gap-2">
                <Input id="primary-color" type="color" defaultValue="#8B5CF6" className="w-12 h-10 p-1" />
                <Input id="primary-color-hex" defaultValue="#8B5CF6" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secondary-color">Cor Secundária</Label>
              <div className="flex gap-2">
                <Input id="secondary-color" type="color" defaultValue="#D946EF" className="w-12 h-10 p-1" />
                <Input id="secondary-color-hex" defaultValue="#D946EF" className="flex-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Prévia do Cartão de Cashback</Label>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold">Tech Store Cashback</h3>
              <div className="text-sm font-medium">GOLD</div>
            </div>
            <div className="mb-4">
              <div className="text-sm opacity-75">Saldo Disponível</div>
              <div className="text-2xl font-bold">R$ 125,50</div>
            </div>
            <div className="text-xs opacity-75">Cliente desde Jan/2023</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="hover-scale">Salvar Personalização</Button>
      </CardFooter>
    </Card>
  );
};

export default BrandingTab;
