
import { AUTH_CONSTANTS } from '@/constants/auth.constants';

export class ErrorService {
  translateAuthError(errorMessage: string): string {
    const errorMap: Record<string, string> = {
      'Invalid login credentials': AUTH_CONSTANTS.ERROR_MESSAGES.INVALID_CREDENTIALS,
      'User already registered': AUTH_CONSTANTS.ERROR_MESSAGES.USER_ALREADY_REGISTERED,
      'Email not confirmed': AUTH_CONSTANTS.ERROR_MESSAGES.EMAIL_NOT_CONFIRMED,
      'Invalid email': AUTH_CONSTANTS.ERROR_MESSAGES.INVALID_EMAIL,
      'Password should be at least 6 characters': AUTH_CONSTANTS.ERROR_MESSAGES.PASSWORD_TOO_SHORT,
      'Too many requests': AUTH_CONSTANTS.ERROR_MESSAGES.TOO_MANY_REQUESTS,
      'Email rate limit exceeded': AUTH_CONSTANTS.ERROR_MESSAGES.EMAIL_RATE_LIMIT,
      'Signup disabled': AUTH_CONSTANTS.ERROR_MESSAGES.SIGNUP_DISABLED,
    };

    return errorMap[errorMessage] || AUTH_CONSTANTS.ERROR_MESSAGES.DEFAULT_ERROR;
  }

  handleAuthError(error: string | undefined): string {
    if (!error) {
      return AUTH_CONSTANTS.ERROR_MESSAGES.DEFAULT_ERROR;
    }

    return this.translateAuthError(error);
  }
}

export const errorService = new ErrorService();
