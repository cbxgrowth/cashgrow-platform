
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Database, CreditCard, Users } from "lucide-react";
import { toast } from "sonner";

interface AddIntegrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (integration: any) => void;
}

const AddIntegrationDialog: React.FC<AddIntegrationDialogProps> = ({
  open,
  onOpenChange,
  onAdd
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    apiUrl: '',
    apiKey: '',
    apiSecret: '',
    syncFrequency: 'hourly'
  });

  const platforms = [
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      description: 'E-commerce WordPress',
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'Plataforma de e-commerce',
      icon: <ShoppingBag className="h-6 w-6 text-green-600" />
    },
    {
      id: 'magento',
      name: 'Magento',
      description: 'Commerce platform',
      icon: <ShoppingBag className="h-6 w-6 text-orange-600" />
    },
    {
      id: 'custom',
      name: 'API Personalizada',
      description: 'Integração customizada',
      icon: <Database className="h-6 w-6 text-blue-600" />
    }
  ];

  const handleSubmit = () => {
    if (!selectedPlatform || !formData.name || !formData.apiUrl) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    const platform = platforms.find(p => p.id === selectedPlatform);
    
    onAdd({
      ...formData,
      platform: platform?.name,
      platformId: selectedPlatform,
      icon: platform?.icon
    });

    // Reset form
    setSelectedPlatform('');
    setFormData({
      name: '',
      description: '',
      apiUrl: '',
      apiKey: '',
      apiSecret: '',
      syncFrequency: 'hourly'
    });

    onOpenChange(false);
    toast.success('Integração adicionada com sucesso!');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Integração</DialogTitle>
          <DialogDescription>
            Configure uma nova integração para sincronizar dados automaticamente
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Selecione a Plataforma</Label>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => (
                <Card 
                  key={platform.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedPlatform === platform.id ? 'ring-2 ring-primary border-primary' : ''
                  }`}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      {platform.icon}
                      <div>
                        <CardTitle className="text-sm">{platform.name}</CardTitle>
                        <CardDescription className="text-xs">{platform.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {selectedPlatform && (
            <div className="space-y-4 border-t pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Integração *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: Loja Principal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="syncFrequency">Frequência de Sincronização</Label>
                  <Select 
                    value={formData.syncFrequency} 
                    onValueChange={(value) => setFormData({...formData, syncFrequency: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-time">Tempo Real</SelectItem>
                      <SelectItem value="hourly">A cada hora</SelectItem>
                      <SelectItem value="daily">Diário</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Descreva esta integração..."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiUrl">URL da API *</Label>
                <Input
                  id="apiUrl"
                  value={formData.apiUrl}
                  onChange={(e) => setFormData({...formData, apiUrl: e.target.value})}
                  placeholder="https://suaapi.com/api/v1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">Chave da API</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={formData.apiKey}
                    onChange={(e) => setFormData({...formData, apiKey: e.target.value})}
                    placeholder="Sua chave da API"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apiSecret">Secret da API</Label>
                  <Input
                    id="apiSecret"
                    type="password"
                    value={formData.apiSecret}
                    onChange={(e) => setFormData({...formData, apiSecret: e.target.value})}
                    placeholder="Seu secret da API"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={!selectedPlatform}>
            Adicionar Integração
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddIntegrationDialog;
