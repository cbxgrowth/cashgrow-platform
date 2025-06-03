
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { defaultIntegrations, integrationCategories } from '@/data/integrations';
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
  const [isCustom, setIsCustom] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    apiUrl: '',
    apiKey: '',
    apiSecret: '',
    syncFrequency: 'hourly',
    category: 'ecommerce' as any,
    webhookSupport: false
  });

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    
    if (platformId === 'custom') {
      setIsCustom(true);
      setFormData(prev => ({
        ...prev,
        name: '',
        description: '',
        category: 'ecommerce'
      }));
    } else {
      setIsCustom(false);
      const platform = defaultIntegrations.find(p => p.id === platformId);
      if (platform) {
        setFormData(prev => ({
          ...prev,
          name: platform.name,
          description: platform.description,
          category: platform.category
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (!selectedPlatform || !formData.name || !formData.apiUrl) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    let platform;
    if (isCustom) {
      platform = {
        name: formData.name,
        description: formData.description,
        icon: null
      };
    } else {
      platform = defaultIntegrations.find(p => p.id === selectedPlatform);
    }
    
    onAdd({
      ...formData,
      platform: platform?.name,
      platformId: selectedPlatform,
      icon: platform?.icon,
      setupInstructions: `Configure a integração ${formData.name}`
    });

    // Reset form
    setSelectedPlatform('');
    setIsCustom(false);
    setFormData({
      name: '',
      description: '',
      apiUrl: '',
      apiKey: '',
      apiSecret: '',
      syncFrequency: 'hourly',
      category: 'ecommerce',
      webhookSupport: false
    });

    onOpenChange(false);
    toast.success('Integração adicionada com sucesso!');
  };

  // Group platforms by category
  const platformsByCategory = integrationCategories.map(category => ({
    ...category,
    platforms: defaultIntegrations.filter(p => p.category === category.id)
  }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Integração</DialogTitle>
          <DialogDescription>
            Configure uma nova integração para sincronizar dados automaticamente
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Selecione a Plataforma</Label>
            
            {platformsByCategory.map((category) => (
              <div key={category.id} className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {category.platforms.map((platform) => (
                    <Card 
                      key={platform.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedPlatform === platform.id ? 'ring-2 ring-primary border-primary' : ''
                      }`}
                      onClick={() => handlePlatformSelect(platform.id)}
                    >
                      <CardHeader className="pb-2 px-3 pt-3">
                        <div className="flex items-center gap-2">
                          {platform.icon}
                          <div className="min-w-0">
                            <CardTitle className="text-xs truncate">{platform.name}</CardTitle>
                            <CardDescription className="text-xs truncate">{platform.platform}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Custom Integration Option */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Personalizada</h3>
              <Card 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedPlatform === 'custom' ? 'ring-2 ring-primary border-primary' : ''
                }`}
                onClick={() => handlePlatformSelect('custom')}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">API Personalizada</CardTitle>
                  <CardDescription className="text-xs">Integração customizada</CardDescription>
                </CardHeader>
              </Card>
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
                    disabled={!isCustom}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value: any) => setFormData({...formData, category: value})}
                    disabled={!isCustom}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {integrationCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
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
                  disabled={!isCustom}
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

              <div className="grid grid-cols-2 gap-4">
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
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Suporte a Webhooks</Label>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch
                      checked={formData.webhookSupport}
                      onCheckedChange={(checked) => setFormData({...formData, webhookSupport: checked})}
                    />
                    <Label className="text-sm text-muted-foreground">
                      {formData.webhookSupport ? 'Ativado' : 'Desativado'}
                    </Label>
                  </div>
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
