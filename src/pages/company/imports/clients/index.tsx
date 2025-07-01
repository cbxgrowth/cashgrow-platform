
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Users, 
  FileText, 
  Download, 
  CheckCircle, 
  AlertTriangle,
  Info,
  Play,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClientImport = () => {
  const [step, setStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [importResults, setImportResults] = useState(null);
  const { toast } = useToast();

  const csvTemplate = `nome,email,cpf,telefone,data_nascimento,endereco
João Silva,joao@email.com,12345678901,11999999999,1990-01-15,"Rua A, 123"
Maria Santos,maria@email.com,12345678902,11888888888,1985-03-22,"Av B, 456"`;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simular upload
      setStep(2);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setStep(3);
          setImportResults({
            total: 150,
            success: 142,
            errors: 8,
            duplicates: 5
          });
        }
      }, 200);
    }
  };

  const downloadTemplate = () => {
    const blob = new Blob([csvTemplate], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'template-clientes.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Template Baixado",
      description: "O arquivo template foi baixado com sucesso.",
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
            <Users className="h-8 w-8 text-primary" />
            Importar Clientes
          </h1>
          <p className="text-muted-foreground">Importe sua base de clientes via arquivo CSV</p>
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
                    <li>• Máximo 10.000 registros</li>
                    <li>• Tamanho máximo: 5MB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Campos Obrigatórios</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>nome:</strong> Nome completo</li>
                    <li>• <strong>email:</strong> Email válido</li>
                    <li>• <strong>cpf:</strong> CPF (apenas números)</li>
                    <li>• <strong>telefone:</strong> Telefone com DDD</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Exemplo do Template CSV:</h4>
                <pre className="text-xs font-mono overflow-x-auto">
                  {csvTemplate}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card>
            <CardHeader>
              <CardTitle>Upload do Arquivo</CardTitle>
              <CardDescription>Selecione o arquivo CSV com os dados dos clientes</CardDescription>
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
            <CardDescription>Aguarde enquanto processamos seu arquivo...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary animate-bounce" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Importando Clientes</h3>
              <p className="text-muted-foreground mb-4">
                Validando dados e criando registros...
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
              <CardDescription>Resumo dos resultados da importação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{importResults.total}</div>
                  <div className="text-sm text-blue-600">Total de Registros</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{importResults.success}</div>
                  <div className="text-sm text-green-600">Importados com Sucesso</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{importResults.errors}</div>
                  <div className="text-sm text-red-600">Erros</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{importResults.duplicates}</div>
                  <div className="text-sm text-yellow-600">Duplicados</div>
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
                <CardDescription>Revise os registros que não puderam ser importados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                    <span>Linha 15: Email inválido - "email-invalido"</span>
                    <Badge variant="destructive">Erro</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg text-sm">
                    <span>Linha 23: CPF inválido - "123.456.789-00"</span>
                    <Badge variant="destructive">Erro</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg text-sm">
                    <span>Linha 45: Cliente já existe - "joao@email.com"</span>
                    <Badge variant="secondary">Duplicado</Badge>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Relatório de Erros
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button onClick={resetImport} variant="outline">
              <X className="mr-2 h-4 w-4" />
              Nova Importação
            </Button>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              Ver Clientes Importados
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientImport;
