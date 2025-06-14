
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAdminData } from '@/hooks/useAdminData';
import { toast } from 'sonner';
import { Save } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const { settings, loading, updateSetting } = useAdminData();
  const [saving, setSaving] = useState<string | null>(null);

  const handleSaveSetting = async (settingId: string, newValue: any) => {
    setSaving(settingId);
    const { error } = await updateSetting(settingId, newValue);
    
    if (error) {
      toast.error('Erro ao salvar configuração');
    } else {
      toast.success('Configuração salva com sucesso');
    }
    setSaving(null);
  };

  const renderSettingInput = (setting: any) => {
    const value = typeof setting.value === 'string' 
      ? setting.value.replace(/"/g, '') 
      : setting.value;

    switch (setting.key) {
      case 'maintenance_mode':
        return (
          <div className="flex items-center space-x-2">
            <Switch
              checked={value === 'true' || value === true}
              onCheckedChange={(checked) => 
                handleSaveSetting(setting.id, checked)
              }
            />
            <Label>Modo de manutenção ativo</Label>
          </div>
        );
      
      case 'max_companies_per_user':
      case 'default_trial_days':
        return (
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              defaultValue={value}
              className="w-32"
              onBlur={(e) => 
                handleSaveSetting(setting.id, parseInt(e.target.value))
              }
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const input = document.querySelector(`input[defaultValue="${value}"]`) as HTMLInputElement;
                if (input) {
                  handleSaveSetting(setting.id, parseInt(input.value));
                }
              }}
              disabled={saving === setting.id}
            >
              <Save className="h-4 w-4" />
            </Button>
          </div>
        );

      default:
        return (
          <div className="flex items-center space-x-2">
            <Input
              defaultValue={value}
              className="flex-1"
              onBlur={(e) => 
                handleSaveSetting(setting.id, e.target.value)
              }
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const input = document.querySelector(`input[defaultValue="${value}"]`) as HTMLInputElement;
                if (input) {
                  handleSaveSetting(setting.id, input.value);
                }
              }}
              disabled={saving === setting.id}
            >
              <Save className="h-4 w-4" />
            </Button>
          </div>
        );
    }
  };

  const settingsByCategory = settings.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = [];
    }
    acc[setting.category].push(setting);
    return acc;
  }, {} as Record<string, typeof settings>);

  const categoryTitles = {
    general: 'Configurações Gerais',
    system: 'Sistema',
    limits: 'Limites',
    billing: 'Faturamento'
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configurações do Sistema</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações globais do SaaS
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(settingsByCategory).map(([category, categorySettings]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>
                {categoryTitles[category as keyof typeof categoryTitles] || category}
              </CardTitle>
              <CardDescription>
                Configurações da categoria {category}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {categorySettings.map((setting) => (
                <div key={setting.id} className="space-y-2">
                  <Label className="text-sm font-medium">
                    {setting.key.replace(/_/g, ' ').toUpperCase()}
                  </Label>
                  {setting.description && (
                    <p className="text-sm text-muted-foreground">
                      {setting.description}
                    </p>
                  )}
                  {renderSettingInput(setting)}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings;
