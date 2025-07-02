
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { clientFormSchema, formatCPF, formatPhone } from '@/utils/validation.utils';
import { useRepository } from '@/hooks/common/useRepository';
import { clientRepository, CreateClientData } from '@/repositories/client.repository';

type ClientFormData = z.infer<typeof clientFormSchema>;

interface ClientFormProps {
  companyId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const ClientForm: React.FC<ClientFormProps> = ({
  companyId,
  onSuccess,
  onCancel
}) => {
  const { execute, isLoading } = useRepository();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      full_name: '',
      email: '',
      cpf: '',
      phone: '',
      birth_date: ''
    }
  });

  const watchCPF = watch('cpf');
  const watchPhone = watch('phone');

  // Format CPF on change
  React.useEffect(() => {
    if (watchCPF) {
      const formatted = formatCPF(watchCPF);
      setValue('cpf', formatted);
    }
  }, [watchCPF, setValue]);

  // Format phone on change
  React.useEffect(() => {
    if (watchPhone) {
      const formatted = formatPhone(watchPhone);
      setValue('phone', formatted);
    }
  }, [watchPhone, setValue]);

  const onSubmit = async (data: ClientFormData) => {
    // Ensure required fields are present
    const clientData: CreateClientData = {
      company_id: companyId,
      full_name: data.full_name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone || undefined,
      birth_date: data.birth_date || undefined
    };

    const result = await execute(
      () => clientRepository.create(clientData),
      {
        successMessage: 'Cliente criado com sucesso',
        onSuccess: () => onSuccess?.()
      }
    );

    if (result) {
      onSuccess?.();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo Cliente</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="full_name">Nome Completo</Label>
            <Input
              id="full_name"
              {...register('full_name')}
              placeholder="Digite o nome completo"
            />
            {errors.full_name && (
              <p className="text-sm text-red-600 mt-1">{errors.full_name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Digite o email"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              {...register('cpf')}
              placeholder="000.000.000-00"
              maxLength={14}
            />
            {errors.cpf && (
              <p className="text-sm text-red-600 mt-1">{errors.cpf.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefone (opcional)</Label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="birth_date">Data de Nascimento (opcional)</Label>
            <Input
              id="birth_date"
              type="date"
              {...register('birth_date')}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? 'Criando...' : 'Criar Cliente'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
