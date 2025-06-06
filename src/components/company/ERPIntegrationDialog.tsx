
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useCompanyClients } from '@/hooks/useCompanyClients';
import { Database, Download, UserCheck, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ERPIntegrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ERPClient {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone?: string;
  birth_date?: string;
  address?: any;
  total_purchases: number;
  last_purchase: string;
  status: 'new' | 'existing' | 'imported';
}

const ERPIntegrationDialog: React.FC<ERPIntegrationDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { createClientFromIntegration } = useCompanyClients();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [erpClients, setErpClients] = useState<ERPClient[]>([]);
  const [selectedClients, setSelectedClients] = useState<Set<string>>(new Set());

  // Simular dados do ERP/CRM
  const mockERPClients: ERPClient[] = [
    {
      id: '1',
      name: 'Maria Santos',
      cpf: '123.456.789-00',
      email: 'maria@email.com',
      phone: '(11) 99999-8888',
      birth_date: '1985-05-15',
      total_purchases: 12,
      last_purchase: '2025-01-15',
      status: 'new'
    },
    {
      id: '2',
      name: 'Pedro Oliveira',
      cpf: '987.654.321-00',
      email: 'pedro@email.com',
      phone: '(11) 88888-7777',
      birth_date: '1990-03-20',
      total_purchases: 8,
      last_purchase: '2025-01-10',
      status: 'new'
    },
    {
      id: '3',
      name: 'Ana Costa',
      cpf: '456.789.123-00',
      email: 'ana@email.com',
      phone: '(11) 77777-6666',
      birth_date: '1988-12-10',
      total_purchases: 15,
      last_purchase: '2025-01-18',
      status: 'new'
    }
  ];

  const searchERPClients = () => {
    setLoading(true);
    // Simular busca no ERP
    setTimeout(() => {
      const filtered = mockERPClients.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.cpf.includes(searchTerm) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setErpClients(filtered);
      setLoading(false);
    }, 1000);
  };

  const toggleClientSelection = (clientId: string) => {
    const newSelection = new Set(selectedClients);
    if (newSelection.has(clientId)) {
      newSelection.delete(clientId);
    } else {
      newSelection.add(clientId);
    }
    setSelectedClients(newSelection);
  };

  const importSelectedClients = async () => {
    setLoading(true);
    try {
      for (const clientId of selectedClients) {
        const client = erpClients.find(c => c.id === clientId);
        if (client) {
          await createClientFromIntegration({
            cpf: client.cpf,
            full_name: client.name,
            email: client.email,
            phone: client.phone,
            birth_date: client.birth_date,
            address: client.address,
            source: 'ERP'
          });
        }
      }
      setSelectedClients(new Set());
      onOpenChange(false);
    } catch (error) {
      console.error('Erro ao importar clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Integração ERP/CRM
          </DialogTitle>
          <DialogDescription>
            Busque e importe clientes do seu sistema ERP ou CRM
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Buscar por nome, CPF ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button onClick={searchERPClients} disabled={loading}>
              <Download className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          {erpClients.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {erpClients.length} cliente(s) encontrado(s)
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const allIds = new Set(erpClients.map(c => c.id));
                      setSelectedClients(allIds);
                    }}
                  >
                    Selecionar Todos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedClients(new Set())}
                  >
                    Limpar Seleção
                  </Button>
                </div>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {erpClients.map((client) => (
                  <Card 
                    key={client.id}
                    className={`cursor-pointer transition-all ${
                      selectedClients.has(client.id) ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => toggleClientSelection(client.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{client.name}</h4>
                            <Badge variant="outline">{client.status === 'new' ? 'Novo' : 'Existente'}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            CPF: {client.cpf} • Email: {client.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {client.total_purchases} compras • Última: {new Date(client.last_purchase).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        {selectedClients.has(client.id) && (
                          <UserCheck className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedClients.size > 0 && (
                <div className="bg-muted p-3 rounded-md">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>
                      {selectedClients.size} cliente(s) selecionado(s) para importação.
                      Eles receberão emails com credenciais de acesso.
                    </span>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                  Cancelar
                </Button>
                <Button 
                  onClick={importSelectedClients} 
                  disabled={loading || selectedClients.size === 0}
                >
                  {loading ? 'Importando...' : `Importar ${selectedClients.size} Cliente(s)`}
                </Button>
              </div>
            </>
          )}

          {!loading && erpClients.length === 0 && searchTerm && (
            <div className="text-center py-8 text-muted-foreground">
              <Database className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Nenhum cliente encontrado com os critérios de busca.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ERPIntegrationDialog;
