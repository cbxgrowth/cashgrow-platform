
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Package, 
  Download, 
  CheckCircle, 
  AlertTriangle,
  Info,
  Play,
  X,
  DollarSign
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductImport = () => {
  const [step, setStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [importResults, setImportResults] = useState(null);
  const { toast } = useToast();

  const csvTemplate = `nome,descricao,preco,categoria,sku,cashback_percentual,estoque,ativo
iPhone 15 Pro,Smartphone Apple 128GB,4999.00,Eletrônicos,IPH15PRO128,5.5,50,true
MacBook Air M2,Notebook Apple 13 polegadas,7999.00,Computadores,MBA13M2,3.2,25,true
AirPods Pro,Fones de ouvido sem fio,1299.00,Áudio,AIRPODSPRO,8.0,100,true`;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setStep(2);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 12;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setStep(3);
          setImportResults({
            total: 87,
            success: 82,
            errors: 3,
            updated: 12
          });
        }
      }, 300);
    }
  };

  const downloadTemplate = () => {
    const blob = new Blob([csvTemplate], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'template-produtos.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Template Baixado",
      description: "O arquivo template de produtos foi baixado com sucesso.",
    });
  };

  const resetImport = () => {
    setStep(1);
    setUploadProgress(0);
    setImportResults(null);
  };

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            Importar Produtos
          </h1>
          <p className="text-muted-foreground">Importe seu catálogo de produtos via arquivo CSV</p>
        </div>
        <Button variant="outline" onClick={downloadTemplate}>
          <Download className="mr-2 h-4 w-4" />
          Baixar Template
        </Button>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between max-w-md mx-auto">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${step >= stepNumber ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}
            `}>
              {step > stepNumber ? <CheckCircle className="h-4 w-4" /> : stepNumber}
            </div>
            {stepNumber < 3 && (
              <div className={`
                w-16 h-0.5 mx-2
                ${step > stepNumber ? 'bg-primary' : 'bg-muted'}
              `} />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6">
          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Instruções de Importação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Formato do Arquivo</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Arquivo CSV com separador vírgula</li>
                    <li>• Encoding UTF-8</li>
                    <li>• Máximo 5.000 registros</li>
                    <li>• Tamanho máximo: 10MB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Campos Obrigatórios</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>nome:</strong> Nome do produto</li>
                    <li>• <strong>preco:</strong> Preço (formato: 99.99)</li>
                    <li>• <strong>sku:</strong> Código único do produto</li>
                    <li>• <strong>categoria:</strong> Categoria do produto</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Exemplo do Template CSV:</h4>
                <pre className="text-xs font-mono overflow-x-auto">
                  {csvTemplate}
                </pre>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Configuração de Cashback
                </h4>
                <p className="text-sm text-blue-700">
                  O campo <strong>cashback_percentual</strong> define quanto de cashback cada produto oferece. 
                  Use valores decimais (ex: 5.5 para 5,5%). Se omitido, será usado o padrão da categoria.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card>
            <CardHeader>
              <CardTitle>Upload do Arquivo</CardTitle>
              <CardDescription>Selecione o arquivo CSV com os dados dos produtos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Arraste o arquivo aqui</h3>
                <p className="text-muted-foreground mb-4">ou clique para selecionar</p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload">
                  <Button asChild>
                    <span>Selecionar Arquivo CSV</span>
                  </Button>
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-blue-600" />
              Processando Importação
            </CardTitle>
            <CardDescription>Aguarde enquanto processamos seu catálogo...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Importando Produtos</h3>
              <p className="text-muted-foreground mb-4">
                Validando dados, calculando cashback e criando registros...
              </p>
              <div className="max-w-sm mx-auto">
                <Progress value={uploadProgress} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">
                  {uploadProgress}% concluído
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && importResults && (
        <div className="space-y-6">
          {/* Results Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Importação Concluída
              </CardTitle>
              <CardDescription>Resumo dos resultados da importação de produtos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{importResults.total}</div>
                  <div className="text-sm text-blue-600">Total de Registros</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{importResults.success}</div>
                  <div className="text-sm text-green-600">Produtos Criados</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{importResults.updated}</div>
                  <div className="text-sm text-orange-600">Produtos Atualizados</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{importResults.errors}</div>
                  <div className="text-sm text-red-600">Erros</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Details */}
          {importResults.errors > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Registros com Erro
                </CardTitle>
                <CardDescription>Revise os produtos que não puderam ser importados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                    <span>Linha 12: Preço inválido - "preço-invalido"</span>
                    <Badge variant="destructive">Erro</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                    <span>Linha 28: SKU duplicado - "PROD123"</span>
                    <Badge variant="destructive">Erro</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                    <span>Linha 45: Categoria não existe - "Categoria Inexistente"</span>
                    <Badge variant="destructive">Erro</Badge>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Relatório de Erros
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Success Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-green-600" />
                Produtos Importados com Sucesso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Por Categoria</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Eletrônicos</span>
                      <span className="font-bold">34 produtos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Roupas & Acessórios</span>
                      <span className="font-bold">28 produtos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Casa & Jardim</span>
                      <span className="font-bold">20 produtos</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cashback Configurado</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Taxa Média</span>
                      <span className="font-bold text-green-600">6.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maior Taxa</span>
                      <span className="font-bold text-green-600">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Menor Taxa</span>
                      <span className="font-bold text-green-600">2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button onClick={resetImport} variant="outline">
              <X className="mr-2 h-4 w-4" />
              Nova Importação
            </Button>
            <Button>
              <Package className="mr-2 h-4 w-4" />
              Ver Catálogo de Produtos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImport;
