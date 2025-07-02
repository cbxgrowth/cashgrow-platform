
import { z } from 'zod';

// Common validation schemas
export const emailSchema = z
  .string({ required_error: 'Email é obrigatório' })
  .email('Email inválido')
  .min(1, 'Email é obrigatório');

export const passwordSchema = z
  .string({ required_error: 'Senha é obrigatória' })
  .min(6, 'Senha deve ter pelo menos 6 caracteres');

export const cpfSchema = z
  .string({ required_error: 'CPF é obrigatório' })
  .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, 'CPF inválido');

export const phoneSchema = z
  .string()
  .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/, 'Telefone inválido')
  .optional();

// Form validation schemas
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
});

export const clientFormSchema = z.object({
  full_name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: emailSchema,
  cpf: cpfSchema,
  phone: phoneSchema,
  birth_date: z.string().optional(),
});

// Validation helper functions
export const validateCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/\D/g, '');
  return cpfSchema.safeParse(cleanCPF).success;
};

export const formatCPF = (cpf: string): string => {
  const cleanCPF = cpf.replace(/\D/g, '');
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
};
