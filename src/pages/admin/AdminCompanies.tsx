
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdminData } from '@/hooks/useAdminData';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Building2, Globe, Users } from 'lucide-react';
import { toast } from 'sonner';

export const AdminCompanies: React.FC = () => {
  const { companies, loading, updateCompanyStatus } = useAdminData();

  const handleStatusChange = async (companyId: string, status: 'active' | 'inactive' | 'suspended' | 'cancelled') => {
    const { error } = await updateCompanyStatus(companyId, status);
    if (error) {
      toast.error('Erro ao atualizar status da empresa');
    } else {
      toast.success('Status da empresa atualizado com sucesso');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      inactive: 'secondary',
      suspended: 'destructive',
      cancelled: 'outline'
    } as const;

    const labels = {
      active: 'Ativa',
      inactive: 'Inativa',
      suspended: 'Suspensa',
      cancelled: 'Cancelada'
    };

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {labels[status as keyof typeof labels] || status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Empresas</h2>
        <p className="text-muted-foreground">
          Visualize e gerencie todas as empresas do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Empresas do Sistema</CardTitle>
          <CardDescription>
            Lista completa de empresas registradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Indústria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usuários</TableHead>
                <TableHead>Receita Mensal</TableHead>
                <TableHead>Criada em</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{company.name}</div>
                        {company.website && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Globe className="h-3 w-3" />
                            {company.website}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {company.industry || 'Não informado'}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(company.subscription_status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {company.total_users}
                    </div>
                  </TableCell>
                  <TableCell>
                    R$ {(company.monthly_revenue || 0).toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    {new Date(company.created_at).toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(company.id, 'active')}
                          disabled={company.subscription_status === 'active'}
                        >
                          Ativar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(company.id, 'inactive')}
                          disabled={company.subscription_status === 'inactive'}
                        >
                          Desativar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(company.id, 'suspended')}
                          disabled={company.subscription_status === 'suspended'}
                          className="text-red-600"
                        >
                          Suspender
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(company.id, 'cancelled')}
                          disabled={company.subscription_status === 'cancelled'}
                          className="text-red-600"
                        >
                          Cancelar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCompanies;
