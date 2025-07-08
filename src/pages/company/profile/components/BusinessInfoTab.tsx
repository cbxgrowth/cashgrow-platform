
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, MapPin, Phone, Mail, Globe, Save } from "lucide-react";
import { toast } from "sonner";
import { CompanyLocationSettings } from '@/components/proximity/CompanyLocationSettings';

const BusinessInfoTab: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: 'CBX Growth',
    cnpj: '12.345.678/0001-90',
    email: 'contato@cbxgrowth.com.br',
    phone: '(88) 98843-2310',
    website: 'https://cbxgrowth.com.br',
    address: 'Rua Doutor Possidonio Bem, 371, Sala 05 CXPST 24',
    city: 'Juazeiro do Norte',
    state: 'CE',
    zipCode: '63040-300',
    description: 'Plataforma inteligente de cashback para empresas de todos os setores e consumidores.'
  });

  // Simular company ID para o componente de localização
  const companyId = 'mock-company-id'; // Em produção, isso viria do contexto de autenticação

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    toast.success('Informações do negócio atualizadas com sucesso!');
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-md enhanced-card">
        <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-accent" />
            <span>Informações do Negócio</span>
          </CardTitle>
          <CardDescription>
            Configure as informações básicas da sua empresa
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleInputChange}
                placeholder="00.000.000/0000-00"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="contato@empresa.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              Website
            </Label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://www.empresa.com"
            />
          </div>

          <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Endereço Principal
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Rua, Avenida, número"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Cidade"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="UF"
                  maxLength={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="00000-000"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição da Empresa</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descreva sua empresa, produtos e serviços..."
              rows={4}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
          <Button variant="glow" className="hover-scale" onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" /> Salvar Informações
          </Button>
        </CardFooter>
      </Card>

      {/* Configuração de Localização GPS */}
      <CompanyLocationSettings companyId={companyId} />
    </div>
  );
};

export default BusinessInfoTab;
