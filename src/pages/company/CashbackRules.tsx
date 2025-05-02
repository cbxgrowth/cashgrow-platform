
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, Plus, Calendar, Edit } from "lucide-react";

const CashbackRules: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Regras de Cashback</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nova Regra
        </Button>
      </div>
      
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
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Editar
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
                <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                  <Trash className="h-4 w-4 mr-2" /> Excluir
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Editar
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
                <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                  <Trash className="h-4 w-4 mr-2" /> Excluir
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Editar
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
                <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                  <Trash className="h-4 w-4 mr-2" /> Excluir
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Editar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashbackRules;
