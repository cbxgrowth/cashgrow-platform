
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCompanyClients, CompanyClient } from '@/hooks/useCompanyClients';
import { CreditCard, Calculator } from 'lucide-react';

const transactionSchema = z.object({
  amount: z.number().min(0.01, 'Valor deve ser maior que zero'),
  description: z.string().optional(),
  cashback_percentage: z.number().min(0).max(100).optional()
});

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: CompanyClient | null;
}

const AddTransactionDialog: React.FC<AddTransactionDialogProps> = ({ 
  open, 
  onOpenChange, 
  client 
}) => {
  const { addTransaction } = useCompanyClients();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: 0,
      description: '',
      cashback_percentage: 2
    }
  });

  const amount = form.watch('amount');
  const cashbackPercentage = form.watch('cashback_percentage') || 2;
  const cashbackAmount = (amount * cashbackPercentage) / 100;

  const onSubmit = async (values: z.infer<typeof transactionSchema>) => {
    if (!client) return;

    try {
      setLoading(true);
      await addTransaction(client.id, values);
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Erro ao adicionar transação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Registrar Compra
          </DialogTitle>
          <DialogDescription>
            Registre uma compra para {client?.full_name}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor da Compra (R$) *</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.01"
                      placeholder="0,00"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cashback_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Percentual de Cashback (%)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1"
                      placeholder="2.0"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 2)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-muted p-3 rounded-md">
              <div className="flex items-center gap-2 text-sm font-medium mb-1">
                <Calculator className="h-4 w-4" />
                Cálculo do Cashback
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Valor da compra: R$ {amount.toFixed(2)}</p>
                <p>Cashback ({cashbackPercentage}%): <span className="font-medium text-green-600">R$ {cashbackAmount.toFixed(2)}</span></p>
              </div>
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descrição da compra (opcional)"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrar Compra'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionDialog;
