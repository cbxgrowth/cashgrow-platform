
import { AUTH_CONSTANTS } from '@/constants/auth.constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class ValidationService {
  validateEmail(email: string): ValidationResult {
    if (!email?.trim()) {
      return { isValid: false, error: 'Email é obrigatório' };
    }

    if (!AUTH_CONSTANTS.VALIDATION.EMAIL_REGEX.test(email)) {
      return { isValid: false, error: AUTH_CONSTANTS.ERROR_MESSAGES.INVALID_EMAIL };
    }

    return { isValid: true };
  }

  validatePassword(password: string): ValidationResult {
    if (!password?.trim()) {
      return { isValid: false, error: 'Senha é obrigatória' };
    }

    if (password.length < AUTH_CONSTANTS.VALIDATION.MIN_PASSWORD_LENGTH) {
      return { isValid: false, error: AUTH_CONSTANTS.ERROR_MESSAGES.PASSWORD_TOO_SHORT };
    }

    return { isValid: true };
  }

  validatePasswordConfirmation(password: string, confirmPassword: string): ValidationResult {
    if (password !== confirmPassword) {
      return { isValid: false, error: 'As senhas não coincidem' };
    }

    return { isValid: true };
  }

  validateLoginCredentials(email: string, password: string): ValidationResult {
    const emailValidation = this.validateEmail(email);
    if (!emailValidation.isValid) {
      return emailValidation;
    }

    const passwordValidation = this.validatePassword(password);
    if (!passwordValidation.isValid) {
      return passwordValidation;
    }

    return { isValid: true };
  }

  validateRegisterData(email: string, password: string, confirmPassword: string): ValidationResult {
    const credentialsValidation = this.validateLoginCredentials(email, password);
    if (!credentialsValidation.isValid) {
      return credentialsValidation;
    }

    const confirmationValidation = this.validatePasswordConfirmation(password, confirmPassword);
    if (!confirmationValidation.isValid) {
      return confirmationValidation;
    }

    return { isValid: true };
  }
}

export const validationService = new ValidationService();
