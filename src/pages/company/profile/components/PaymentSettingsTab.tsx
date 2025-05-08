
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Banknote, Percent, DollarSign, Save, ShoppingBag, Tag, Gift } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentSettingsTab: React.FC = () => {
  return (
    <Card className="shadow-md enhanced-card">
      <CardHeader className="border-b bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-accent" />
          <span>Configurações de Pagamento & Resgate</span>
        </CardTitle>
        <CardDescription>
          Configure os métodos de pagamento, resgate de cashback e integração com loja
        </CardDescription>
      </CardHeader>

      <Tabs defaultValue="payment">
        <div className="px-6 pt-6">
          <TabsList className="w-full">
            <TabsTrigger value="payment">
              <CreditCard className="h-4 w-4 mr-2" /> Pagamentos
            </TabsTrigger>
            <TabsTrigger value="redeem">
              <Gift className="h-4 w-4 mr-2" /> Resgate
            </TabsTrigger>
            <TabsTrigger value="integration">
              <ShoppingBag className="h-4 w-4 mr-2" /> Integração com Loja
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="payment">
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Métodos de Pagamento Aceitos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="checkbox" id="credit-card" className="w-4 h-4 accent-primary" defaultChecked />
                  <Label htmlFor="credit-card" className="flex-1 cursor-pointer">Cartão de Crédito</Label>
                </div>
                
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="checkbox" id="debit-card" className="w-4 h-4 accent-primary" defaultChecked />
                  <Label htmlFor="debit-card" className="flex-1 cursor-pointer">Cartão de Débito</Label>
                </div>
                
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="checkbox" id="pix" className="w-4 h-4 accent-primary" defaultChecked />
                  <Label htmlFor="pix" className="flex-1 cursor-pointer">PIX</Label>
                </div>
                
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                  <input type="checkbox" id="boleto" className="w-4 h-4 accent-primary" />
                  <Label htmlFor="boleto" className="flex-1 cursor-pointer">Boleto Bancário</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Banknote className="h-5 w-5 text-accent" />
                Dados Bancários para Repasses
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bank-name" className="text-sm font-medium">Banco</Label>
                  <Input 
                    id="bank-name" 
                    placeholder="Nome do banco" 
                    defaultValue="Banco Brasil" 
                    className="transition-all duration-200 border-muted focus:border-primary" 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="agency" className="text-sm font-medium">Agência</Label>
                    <Input 
                      id="agency" 
                      placeholder="Número da agência" 
                      defaultValue="1234" 
                      className="transition-all duration-200 border-muted focus:border-primary" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="account" className="text-sm font-medium">Conta</Label>
                    <Input 
                      id="account" 
                      placeholder="Número da conta" 
                      defaultValue="12345-6" 
                      className="transition-all duration-200 border-muted focus:border-primary" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="redeem">
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Percent className="h-5 w-5 text-accent" />
                Configuração de Cashback
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="default-cashback" className="text-sm font-medium">Porcentagem Padrão de Cashback</Label>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="default-cashback" 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="0.5" 
                        defaultValue="5" 
                        className="pr-10 max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Porcentagem padrão aplicada às compras
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="min-amount" className="text-sm font-medium">Valor Mínimo para Resgate</Label>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="min-amount" 
                        type="number" 
                        min="0" 
                        step="5" 
                        defaultValue="20" 
                        className="pl-10 max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Valor mínimo para solicitar resgate
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expiration-days" className="text-sm font-medium">Prazo de Expiração do Cashback (dias)</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="expiration-days" 
                      type="number" 
                      min="0" 
                      step="1" 
                      defaultValue="90" 
                      className="max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                    />
                    <p className="text-sm text-muted-foreground">
                      Dias para expiração (0 = sem expiração)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Gift className="h-5 w-5 text-accent" />
                Opções de Resgate
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="products-redeem" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="products-redeem" className="flex-1 cursor-pointer">Resgate em Produtos da Loja</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="discount-redeem" className="w-4 h-4 accent-primary" defaultChecked />
                    <Label htmlFor="discount-redeem" className="flex-1 cursor-pointer">Desconto em Compras</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="services-redeem" className="w-4 h-4 accent-primary" />
                    <Label htmlFor="services-redeem" className="flex-1 cursor-pointer">Serviços Premium</Label>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id="transfer-redeem" className="w-4 h-4 accent-primary" />
                    <Label htmlFor="transfer-redeem" className="flex-1 cursor-pointer">Transferência Bancária</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="min-product-redeem" className="text-sm font-medium">Valor mínimo para resgate em produtos (R$)</Label>
                  <Input 
                    id="min-product-redeem" 
                    type="number" 
                    min="0" 
                    step="10" 
                    defaultValue="50" 
                    className="max-w-[150px] transition-all duration-200 border-muted focus:border-primary" 
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="integration">
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-accent" />
                Integração com E-commerce
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform" className="text-sm font-medium">Plataforma de E-commerce</Label>
                    <select 
                      id="platform" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione uma plataforma</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="shopify">Shopify</option>
                      <option value="magento">Magento</option>
                      <option value="vtex">VTEX</option>
                      <option value="other">Outra</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="api-key" className="text-sm font-medium">Chave de API</Label>
                    <Input 
                      id="api-key" 
                      placeholder="Chave de API da plataforma" 
                      type="password"
                      className="transition-all duration-200 border-muted focus:border-primary" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="store-url" className="text-sm font-medium">URL da Loja</Label>
                  <Input 
                    id="store-url" 
                    placeholder="https://sualoja.com.br" 
                    className="transition-all duration-200 border-muted focus:border-primary" 
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sincronização de Dados</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                      <input type="checkbox" id="sync-products" className="w-4 h-4 accent-primary" defaultChecked />
                      <Label htmlFor="sync-products" className="flex-1 cursor-pointer">Produtos</Label>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                      <input type="checkbox" id="sync-orders" className="w-4 h-4 accent-primary" defaultChecked />
                      <Label htmlFor="sync-orders" className="flex-1 cursor-pointer">Pedidos</Label>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                      <input type="checkbox" id="sync-customers" className="w-4 h-4 accent-primary" defaultChecked />
                      <Label htmlFor="sync-customers" className="flex-1 cursor-pointer">Clientes</Label>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                      <input type="checkbox" id="sync-inventory" className="w-4 h-4 accent-primary" />
                      <Label htmlFor="sync-inventory" className="flex-1 cursor-pointer">Estoque</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Tag className="h-5 w-5 text-accent" />
                Categorias com Cashback
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Eletrônicos", "Moda", "Casa e Decoração", "Beleza", "Esportes", "Alimentos"].map(category => (
                  <div key={category} className="flex items-center gap-2 p-3 border rounded-lg bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors">
                    <input type="checkbox" id={`category-${category}`} className="w-4 h-4 accent-primary" defaultChecked={["Eletrônicos", "Moda", "Beleza"].includes(category)} />
                    <Label htmlFor={`category-${category}`} className="flex-1 cursor-pointer">{category}</Label>
                    <div className="relative w-16">
                      <Percent className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                      <Input 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="0.5" 
                        defaultValue={["Eletrônicos", "Moda", "Beleza"].includes(category) ? "8" : "5"} 
                        className="pr-6 text-right text-sm h-8 transition-all duration-200 border-muted focus:border-primary" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="flex justify-end border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
        <Button variant="glow" className="hover-scale">
          <Save className="h-4 w-4 mr-1" /> Salvar Configurações
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSettingsTab;
