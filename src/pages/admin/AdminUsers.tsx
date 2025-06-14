
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
import { MoreHorizontal, Shield, User, UserCog } from 'lucide-react';
import { toast } from 'sonner';

export const AdminUsers: React.FC = () => {
  const { users, loading, updateUserRole } = useAdminData();

  const handleRoleChange = async (userId: string, newRole: 'super_admin' | 'admin' | 'user') => {
    const { error } = await updateUserRole(userId, newRole);
    if (error) {
      toast.error('Erro ao atualizar papel do usuário');
    } else {
      toast.success('Papel do usuário atualizado com sucesso');
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'admin':
        return <UserCog className="h-4 w-4 text-blue-500" />;
      default:
        return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const variants = {
      super_admin: 'destructive',
      admin: 'default',
      user: 'secondary'
    } as const;

    const labels = {
      super_admin: 'Super Admin',
      admin: 'Admin',
      user: 'Usuário'
    };

    return (
      <Badge variant={variants[role as keyof typeof variants] || 'secondary'}>
        {labels[role as keyof typeof labels] || role}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gerenciamento de Usuários</h2>
        <p className="text-muted-foreground">
          Visualize e gerencie todos os usuários do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usuários do Sistema</CardTitle>
          <CardDescription>
            Lista completa de usuários registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Papel</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Última atualização</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getRoleIcon(user.role)}
                      <span className="font-medium">
                        {user.full_name || 'Sem nome'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getRoleBadge(user.role)}
                  </TableCell>
                  <TableCell>
                    {new Date(user.created_at).toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    {new Date(user.updated_at).toLocaleDateString('pt-BR')}
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
                          onClick={() => handleRoleChange(user.id, 'user')}
                          disabled={user.role === 'user'}
                        >
                          Tornar Usuário
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleRoleChange(user.id, 'admin')}
                          disabled={user.role === 'admin'}
                        >
                          Tornar Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleRoleChange(user.id, 'super_admin')}
                          disabled={user.role === 'super_admin'}
                          className="text-red-600"
                        >
                          Tornar Super Admin
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

export default AdminUsers;
