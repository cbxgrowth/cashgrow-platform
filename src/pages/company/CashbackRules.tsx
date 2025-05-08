
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardCTA, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, Plus, Calendar, Edit, Tag, ShoppingBag, Clock, Store, Zap, BadgePercent } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const CashbackRules: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rules');

  const handleSave = () => {
    toast.success('Regra de cashback salva com sucesso!');
  };
  
  const handleDelete = () => {
    toast.success('Regra de cashback removida com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Regras de Cashback</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nova Regra
        </Button>
      </div>
      
      <Tabs defaultValue="rules" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rules">
            <BadgePercent className="h-4 w-4 mr-2" /> Regras
          </TabsTrigger>
          <TabsTrigger value="products">
            <ShoppingBag className="h-4 w-4 mr-2" /> Produtos
          </TabsTrigger>
          <TabsTrigger value="promotions">
            <Zap className="h-4 w-4 mr-2" /> Promoções
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="rules" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurar Regras de Cashback</CardTitle>
              <CardDescription>
                Defina diferentes regras de cashback com base em diversos critérios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Default Rule */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg flex items-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs mr-2">1</span>
                      Regra Padrão
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Porcentagem de Cashback</Label>
                        <div className="flex items-center">
                          <Input type="number" placeholder="5" defaultValue="5" className="mr-2" />
                          <span className="text-muted-foreground">%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Valor mínimo da compra</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-muted-foreground">R$</span>
                          <Input type="number" placeholder="0" defaultValue="0" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Status</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="active">Ativo</option>
                          <option value="inactive">Inativo</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-end">
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Edit className="h-4 w-4 mr-2" /> Salvar
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Value Rule */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg flex items-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs mr-2">2</span>
                      Regra por Valor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="space-y-2">
                        <Label>Valor mínimo (R$)</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-muted-foreground">R$</span>
                          <Input type="number" placeholder="100" defaultValue="100" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Valor máximo (R$)</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-muted-foreground">R$</span>
                          <Input type="number" placeholder="500" defaultValue="500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Porcentagem de Cashback</Label>
                        <div className="flex items-center">
                          <Input type="number" placeholder="7" defaultValue="7" className="mr-2" />
                          <span className="text-muted-foreground">%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Status</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="active">Ativo</option>
                          <option value="inactive">Inativo</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10" onClick={handleDelete}>
                      <Trash className="h-4 w-4 mr-2" /> Excluir
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Edit className="h-4 w-4 mr-2" /> Salvar
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Day of Week Rule */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg flex items-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs mr-2">3</span>
                      Regra por Dia da Semana
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="space-y-2">
                        <Label>Dias da Semana</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="monday">Segunda-feira</option>
                          <option value="tuesday">Terça-feira</option>
                          <option value="wednesday" selected>Quarta-feira</option>
                          <option value="thursday">Quinta-feira</option>
                          <option value="friday">Sexta-feira</option>
                          <option value="saturday">Sábado</option>
                          <option value="sunday">Domingo</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Porcentagem de Cashback</Label>
                        <div className="flex items-center">
                          <Input type="number" placeholder="10" defaultValue="10" className="mr-2" />
                          <span className="text-muted-foreground">%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Valor mínimo da compra</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-muted-foreground">R$</span>
                          <Input type="number" placeholder="50" defaultValue="50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Status</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="active">Ativo</option>
                          <option value="inactive">Inativo</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10" onClick={handleDelete}>
                      <Trash className="h-4 w-4 mr-2" /> Excluir
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Edit className="h-4 w-4 mr-2" /> Salvar
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Special Campaign Rule */}
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg flex items-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs mr-2">4</span>
                      Campanha Especial
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-2">
                        <Label>Nome da Campanha</Label>
                        <Input type="text" placeholder="Black Friday" defaultValue="Black Friday" />
                      </div>
                      <div className="space-y-2">
                        <Label>Porcentagem de Cashback</Label>
                        <div className="flex items-center">
                          <Input type="number" placeholder="15" defaultValue="15" className="mr-2" />
                          <span className="text-muted-foreground">%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Data Inicial</Label>
                        <div className="relative">
                          <Input type="date" />
                          <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Data Final</Label>
                        <div className="relative">
                          <Input type="date" />
                          <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10" onClick={handleDelete}>
                      <Trash className="h-4 w-4 mr-2" /> Excluir
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Edit className="h-4 w-4 mr-2" /> Salvar
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos com Cashback Especial</CardTitle>
              <CardDescription>
                Defina produtos específicos com porcentagens de cashback diferenciadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Produto
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-3 font-medium">Produto</th>
                        <th className="text-left p-3 font-medium">Categoria</th>
                        <th className="text-left p-3 font-medium">Preço</th>
                        <th className="text-left p-3 font-medium">Cashback %</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-center p-3 font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 1, name: "Smartphone Galaxy S30", category: "Eletrônicos", price: "R$ 3.499,00", cashback: "10%", status: "Ativo" },
                        { id: 2, name: "Tênis Running Profissional", category: "Esportes", price: "R$ 599,00", cashback: "8%", status: "Ativo" },
                        { id: 3, name: "Kit Maquiagem Premium", category: "Beleza", price: "R$ 499,00", cashback: "12%", status: "Ativo" },
                        { id: 4, name: "Console de Videogame Pro", category: "Eletrônicos", price: "R$ 4.299,00", cashback: "7%", status: "Inativo" },
                      ].map(product => (
                        <tr key={product.id} className="border-b">
                          <td className="p-3">{product.name}</td>
                          <td className="p-3">{product.category}</td>
                          <td className="p-3">{product.price}</td>
                          <td className="p-3 text-green-600 font-medium">{product.cashback}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${product.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex justify-center gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="promotions" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Promoções e Ofertas Especiais</CardTitle>
              <CardDescription>
                Configure promoções temporárias com cashback ampliado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Active Promotions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3">
                    <h3 className="font-bold flex items-center">
                      <Zap className="h-4 w-4 mr-2" /> 
                      Semana do Cliente
                    </h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs text-muted-foreground">Período</Label>
                          <p className="font-medium">10/05/2025 - 17/05/2025</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Cashback</Label>
                          <p className="font-medium text-green-600">15% em todas as compras</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Descrição</Label>
                        <p className="text-sm">Promoção especial para a semana do cliente com cashback ampliado em todas as categorias de produtos.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardCTA className="bg-muted/30">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                        <Trash className="h-4 w-4 mr-2" /> Excluir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" /> Editar
                      </Button>
                    </div>
                  </CardCTA>
                </Card>
                
                <Card>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3">
                    <h3 className="font-bold flex items-center">
                      <Zap className="h-4 w-4 mr-2" /> 
                      Aniversário da Loja
                    </h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs text-muted-foreground">Período</Label>
                          <p className="font-medium">20/06/2025 - 30/06/2025</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Cashback</Label>
                          <p className="font-medium text-green-600">20% em eletrônicos</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Descrição</Label>
                        <p className="text-sm">Comemore o aniversário da loja com cashback extra em toda a linha de eletrônicos.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardCTA className="bg-muted/30">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                        <Trash className="h-4 w-4 mr-2" /> Excluir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" /> Editar
                      </Button>
                    </div>
                  </CardCTA>
                </Card>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Nova Promoção
                </Button>
              </div>
              
              {/* Promotion Templates */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Modelos de Promoção</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-orange-500" /> 
                        Dia Especial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Aumente o cashback em um dia específico da semana para atrair mais clientes.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Usar Modelo
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Store className="h-4 w-4 mr-2 text-blue-500" /> 
                        Categoria Destaque
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Destaque uma categoria específica com cashback ampliado por tempo limitado.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Usar Modelo
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <ShoppingBag className="h-4 w-4 mr-2 text-green-500" /> 
                        Compre Mais, Ganhe Mais
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Aumente o percentual de cashback conforme o valor da compra do cliente.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Usar Modelo
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CashbackRules;
