
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingBag, Tag, Database, Code, RefreshCw, Save, CheckCircle2, ArrowRightLeft } from "lucide-react";
import { toast } from "sonner";

const StoreIntegrationTab: React.FC = () => {
  const handleSaveIntegration = () => {
    toast.success('Configurações de integração salvas com sucesso!');
  };

  const handleTestConnection = () => {
    toast.success('Conexão testada com sucesso!');
  };

  const handleSyncNow = () => {
    toast.success('Sincronização iniciada! Você receberá uma notificação quando for concluída.');
  };

  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-accent" />
          <span>Integração da Loja</span>
        </CardTitle>
        <CardDescription>
          Configure a integração com sua loja e sincronize produtos, ofertas e cashback
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* API Connection */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Code className="h-5 w-5 text-accent" />
            Conexão com API da Loja
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform-type">Plataforma da Loja</Label>
                <select 
                  id="platform-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione uma plataforma</option>
                  <option value="woocommerce">WooCommerce</option>
                  <option value="shopify">Shopify</option>
                  <option value="magento">Magento</option>
                  <option value="vtex">VTEX</option>
                  <option value="nuvemshop">Nuvemshop</option>
                  <option value="other">Outra</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-url">URL da Loja</Label>
                <Input 
                  id="store-url" 
                  placeholder="https://minhaloja.com.br" 
                  className="transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">Chave API</Label>
                <Input 
                  id="api-key" 
                  type="password"
                  placeholder="Chave de API da sua plataforma" 
                  className="transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-secret">API Secret</Label>
                <Input 
                  id="api-secret" 
                  type="password"
                  placeholder="Chave secreta de API" 
                  className="transition-all duration-200 border-muted focus:border-primary" 
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleTestConnection}>
                <CheckCircle2 className="h-4 w-4 mr-2" /> Testar Conexão
              </Button>
            </div>
          </div>
        </div>

        {/* Synchronization Settings */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-accent" />
            Configurações de Sincronização
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="text-sm font-medium">Dados a Sincronizar</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="sync-products" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="sync-products" className="flex-1 cursor-pointer">Produtos e Categorias</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="sync-inventory" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="sync-inventory" className="flex-1 cursor-pointer">Estoque e Disponibilidade</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="sync-orders" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="sync-orders" className="flex-1 cursor-pointer">Pedidos e Transações</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="sync-customers" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="sync-customers" className="flex-1 cursor-pointer">Clientes</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-medium">Frequência de Sincronização</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="radio" id="sync-auto" name="sync-frequency" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="sync-auto" className="flex-1 cursor-pointer">Automática (a cada hora)</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="radio" id="sync-daily" name="sync-frequency" className="w-4 h-4 accent-primary" />
                    <Label htmlFor="sync-daily" className="flex-1 cursor-pointer">Diária</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="radio" id="sync-manual" name="sync-frequency" className="w-4 h-4 accent-primary" />
                    <Label htmlFor="sync-manual" className="flex-1 cursor-pointer">Manual</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={handleSyncNow}>
                <RefreshCw className="h-4 w-4 mr-2" /> Sincronizar Agora
              </Button>
            </div>
          </div>
        </div>

        {/* Cashback Rules */}
        <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Tag className="h-5 w-5 text-accent" />
            Regras de Cashback para Categorias
          </h3>
          
          <div className="space-y-4">
            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-3 text-left font-medium">Categoria</th>
                    <th className="p-3 text-center font-medium">Cashback Padrão</th>
                    <th className="p-3 text-center font-medium">Cashback em Promoção</th>
                    <th className="p-3 text-center font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Eletrônicos", default: "5%", promo: "8%", active: true },
                    { name: "Moda", default: "7%", promo: "12%", active: true },
                    { name: "Casa e Decoração", default: "6%", promo: "10%", active: true },
                    { name: "Beleza", default: "8%", promo: "15%", active: true },
                    { name: "Esportes", default: "6%", promo: "10%", active: false }
                  ].map((category, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/30">
                      <td className="p-3">{category.name}</td>
                      <td className="p-3">
                        <div className="flex justify-center">
                          <div className="relative w-20">
                            <Input 
                              type="text" 
                              defaultValue={category.default}
                              className="text-center h-8 py-1" 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex justify-center">
                          <div className="relative w-20">
                            <Input 
                              type="text" 
                              defaultValue={category.promo}
                              className="text-center h-8 py-1" 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex justify-center">
                          <input type="checkbox" defaultChecked={category.active} className="w-4 h-4 accent-primary" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Adicionar Categoria
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale" onClick={handleSaveIntegration}>
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoreIntegrationTab;
