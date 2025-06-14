
export const AUTH_CONSTANTS = {
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 6,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  DEFAULTS: {
    LEVEL_POINTS_THRESHOLD: 200,
    REDIRECT_DELAY: 1000,
    AUTH_CALLBACK_DELAY: 1000,
  },
  ROUTES: {
    CLIENT_DASHBOARD: '/client/dashboard',
    COMPANY_DASHBOARD: '/company/dashboard',
    AUTH_LOGIN: '/auth/login',
    AUTH_CALLBACK: '/auth/callback',
    RESET_PASSWORD: '/auth/reset-password',
  },
  BUSINESS_INDICATORS: [
    '.com.br', '.co', '.org', '.gov', '.edu',
    'empresa', 'business', 'corp', 'admin', 'comercial',
    'vendas', 'contato', 'info'
  ],
  ERROR_MESSAGES: {
    INVALID_CREDENTIALS: 'Credenciais inválidas',
    USER_ALREADY_REGISTERED: 'Usuário já cadastrado',
    EMAIL_NOT_CONFIRMED: 'Email não confirmado',
    INVALID_EMAIL: 'Email inválido',
    PASSWORD_TOO_SHORT: 'A senha deve ter pelo menos 6 caracteres',
    TOO_MANY_REQUESTS: 'Muitas tentativas. Tente novamente mais tarde',
    EMAIL_RATE_LIMIT: 'Limite de emails excedido. Tente novamente mais tarde',
    SIGNUP_DISABLED: 'Cadastro desabilitado temporariamente',
    DEFAULT_ERROR: 'Erro desconhecido. Tente novamente.',
  }
} as const;
