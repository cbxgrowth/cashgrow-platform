
import { AUTH_CONSTANTS } from '@/constants/auth.constants';
import { UserType } from '@/types/auth';

export class UserService {
  determineUserType(email: string): UserType {
    const emailLower = email.toLowerCase();
    
    if (AUTH_CONSTANTS.BUSINESS_INDICATORS.some(indicator => emailLower.includes(indicator))) {
      return 'company';
    }
    
    return 'client';
  }

  getRedirectPath(userType: UserType | undefined): string {
    if (userType === 'company') {
      return AUTH_CONSTANTS.ROUTES.COMPANY_DASHBOARD;
    }
    
    return AUTH_CONSTANTS.ROUTES.CLIENT_DASHBOARD;
  }

  validateUserType(userType: string | undefined, requiredType: 'client' | 'company'): boolean {
    return userType === requiredType;
  }
}

export const userService = new UserService();
