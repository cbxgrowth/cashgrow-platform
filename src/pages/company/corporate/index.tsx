
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  BadgePercent, 
  Handshake, 
  ArrowUpRight, 
  FileText,
  BadgeDollarSign,
  UserPlus,
  CircleDollarSign,
  ShoppingCart,
  Briefcase
} from "lucide-react";
import { toast } from "sonner";

const CompanyCorporate: React.FC = () => {
  const [activeTab, setActiveTab] = useState("programs");

  const corporatePrograms = [
    {
      id: 1,
      name: "Incentivo de Funcionários",
      description: "Cashback para colaboradores em compras corporativas",
      active: true,
      participants: 142,
      cashbackValue: "5%",
      totalSpent: "R$ 43.780,00",
      totalCashback: "R$ 2.189,00"
    },
    {
      id: 2,
      name: "Parceiros B2B",
      description: "Cashback para fornecedores e parceiros de negócios",
      active: true,
      participants: 23,
      cashbackValue: "8%",
      totalSpent: "R$ 126.450,00",
      totalCashback: "R$ 10.116,00"
    }
  ];

  const partnerCompanies = [
    {
      id: 1,
      name: "Tech Solutions Inc.",
      type: "Fornecedor",
      participantsSince: "12/01/2025",
      transactions: 32,
      spent: "R$ 56.780,00",
      cashbackEarned: "R$ 4.542,40"
    },
    {
      id: 2,
      name: "Global Logistics",
      type: "Parceiro",
      participantsSince: "03/02/2025",
      transactions: 18,
      spent: "R$ 32.150,00",
      cashbackEarned: "R$ 2.572,00"
    },
    {
      id: 3,
      name: "Office Supplies Co.",
      type: "Fornecedor",
      participantsSince: "22/03/2025",
      transactions: 7,
      spent: "R$ 12.340,00",
      cashbackEarned: "R$ 986,20"
    }
  ];

  const handleAddProgram = () => {
    toast.success("Novo programa corporativo adicionado!");
  };

  const handleAddCompany = () => {
    toast.success("Nova empresa parceira adicionada!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">B2B & Corporativo</h1>
          <p className="text-muted-foreground mt-1">
            Programas de cashback corporativo e parcerias B2B
          </p>
        </div>
        <Button onClick={handleAddProgram} className="gap-2">
          <ArrowUpRight className="h-4 w-4" />
          Novo Programa
        </Button>
      </div>

      {/* Dashboard de Cashback Corporativo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <CardTitle>Programas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{corporatePrograms.length}</div>
            <p className="text-muted-foreground text-sm">Programas corporativos</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <CardTitle>Empresas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{partnerCompanies.length}</div>
            <p className="text-muted-foreground text-sm">Parceiros B2B</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <CardTitle>Usuários</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">165</div>
            <p className="text-muted-foreground text-sm">Usuários corporativos</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="h-4 w-4 text-primary" />
              <CardTitle>Cashback</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">R$ 12.305,00</div>
            <p className="text-muted-foreground text-sm">Cashback distribuído</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Programas & Parcerias</CardTitle>
          </div>
          <CardDescription>
            Gerencie seus programas corporativos de cashback e parcerias B2B
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="programs" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="programs">Programas</TabsTrigger>
              <TabsTrigger value="companies">Empresas Parceiras</TabsTrigger>
            </TabsList>
            
            <TabsContent value="programs" className="mt-4 space-y-4">
              {corporatePrograms.map((program) => (
                <Card key={program.id} className="shadow-sm overflow-hidden">
                  <div className="bg-primary/10 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{program.name}</h3>
                          {program.active && (
                            <Badge variant="default" className="bg-green-500">Ativo</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Participantes</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="h-4 w-4 text-primary" />
                          <strong>{program.participants}</strong>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Cashback</p>
                        <div className="flex items-center gap-1 mt-1">
                          <BadgePercent className="h-4 w-4 text-primary" />
                          <strong>{program.cashbackValue}</strong>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Valor Gasto</p>
                        <div className="flex items-center gap-1 mt-1">
                          <ShoppingCart className="h-4 w-4 text-primary" />
                          <strong>{program.totalSpent}</strong>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Cashback Total</p>
                        <div className="flex items-center gap-1 mt-1">
                          <CircleDollarSign className="h-4 w-4 text-green-500" />
                          <strong className="text-green-600">{program.totalCashback}</strong>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="px-4 pb-4 flex gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <FileText className="h-4 w-4" />
                      Detalhes
                    </Button>
                    <Button size="sm" className="gap-1">
                      <UserPlus className="h-4 w-4" />
                      Adicionar Participantes
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="companies" className="mt-4 space-y-4">
              <div className="flex justify-end mb-4">
                <Button size="sm" className="gap-1" onClick={handleAddCompany}>
                  <UserPlus className="h-4 w-4" />
                  Adicionar Empresa
                </Button>
              </div>
              
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Empresa</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Tipo</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Desde</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Transações</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Valor Gasto</th>
                        <th className="h-12 px-4 text-right align-middle font-medium">Cashback</th>
                        <th className="h-12 px-4 text-center align-middle font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partnerCompanies.map((company) => (
                        <tr key={company.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4 align-middle"><strong>{company.name}</strong></td>
                          <td className="p-4 align-middle">
                            <Badge variant="outline" className={company.type === 'Fornecedor' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'}>
                              {company.type}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">{company.participantsSince}</td>
                          <td className="p-4 align-middle text-right">{company.transactions}</td>
                          <td className="p-4 align-middle text-right">{company.spent}</td>
                          <td className="p-4 align-middle text-right text-green-600">{company.cashbackEarned}</td>
                          <td className="p-4 align-middle">
                            <div className="flex justify-center gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Detalhes</span>
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Handshake className="h-4 w-4" />
                                <span className="sr-only">Gerenciar Parceria</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-primary" />
            <CardTitle>Modelos de Parcerias B2B</CardTitle>
          </div>
          <CardDescription>
            Escolha o melhor modelo de cashback corporativo para seus parceiros de negócios
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Programa de Funcionários</CardTitle>
                <Badge>Popular</Badge>
              </div>
              <CardDescription>
                Ofereça cashback como benefício para colaboradores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BadgePercent className="h-4 w-4 text-primary mt-1" />
                  <span>Cashback em compras pessoais dos funcionários</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeDollarSign className="h-4 w-4 text-primary mt-1" />
                  <span>Cashback em compras corporativas autorizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-1" />
                  <span>Portal personalizado com a marca da empresa</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contratar Programa</Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-sm border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Cashback para Fornecedores</CardTitle>
                <Badge variant="default">Recomendado</Badge>
              </div>
              <CardDescription>
                Ofereça cashback para seus fornecedores em compras recíprocas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BadgePercent className="h-4 w-4 text-primary mt-1" />
                  <span>Cashback progressivo baseado em volume de compras</span>
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="h-4 w-4 text-primary mt-1" />
                  <span>Sistema de compras recíprocas com duplo cashback</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-primary mt-1" />
                  <span>Dashboard de análise para ambas as empresas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contratar Programa</Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Parceria Estratégica</CardTitle>
                <Badge variant="outline">Enterprise</Badge>
              </div>
              <CardDescription>
                Cashback personalizado para grandes parceiros corporativos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="h-4 w-4 text-primary mt-1" />
                  <span>Cashback totalmente customizável por segmento</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-primary mt-1" />
                  <span>API completa para integração com sistema ERP</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeDollarSign className="h-4 w-4 text-primary mt-1" />
                  <span>Sistema avançado de relatórios e métricas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Solicitar Proposta</Button>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyCorporate;
