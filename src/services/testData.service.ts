
// Serviço para limpar dados de teste e resetar sistema
export class TestDataService {
  private static readonly TEST_EMAIL = 'teste@teste.com';
  private static readonly TEST_PASSWORD = '123456';

  static clearAllTestData() {
    // Limpar localStorage
    const keysToPreserve = [
      'auth-session', // Manter sessão se existir
      'supabase.auth.token' // Manter tokens de auth
    ];

    // Obter todas as chaves do localStorage
    const allKeys = Object.keys(localStorage);
    
    // Remover todas exceto as preservadas
    allKeys.forEach(key => {
      if (!keysToPreserve.some(preserveKey => key.includes(preserveKey))) {
        localStorage.removeItem(key);
      }
    });

    // Limpar sessionStorage
    sessionStorage.clear();

    console.log('✅ Dados de teste limpos');
  }

  static resetOnboarding() {
    // Resetar onboarding
    localStorage.removeItem('onboarding-client-complete');
    localStorage.removeItem('onboarding-company-complete');
    
    console.log('✅ Onboarding resetado');
  }

  static resetNotifications() {
    // Limpar notificações
    localStorage.removeItem('notifications');
    localStorage.removeItem('notification-settings');
    
    console.log('✅ Notificações resetadas');
  }

  static resetDashboardData() {
    // Resetar dados do dashboard
    localStorage.removeItem('dashboard-preferences');
    localStorage.removeItem('dashboard-widgets');
    localStorage.removeItem('client-analytics-data');
    localStorage.removeItem('company-analytics-data');
    
    console.log('✅ Dados do dashboard resetados');
  }

  static resetUserPreferences() {
    // Resetar preferências do usuário
    localStorage.removeItem('user-preferences');
    localStorage.removeItem('theme-preferences');
    localStorage.removeItem('sidebar-collapsed');
    
    console.log('✅ Preferências do usuário resetadas');
  }

  static resetImportData() {
    // Limpar dados de importação
    localStorage.removeItem('import-history');
    localStorage.removeItem('import-templates');
    
    console.log('✅ Dados de importação resetados');
  }

  static getTestCredentials() {
    return {
      email: this.TEST_EMAIL,
      password: this.TEST_PASSWORD
    };
  }

  static initializeCleanSystem() {
    console.log('🔄 Iniciando limpeza completa do sistema...');
    
    this.clearAllTestData();
    this.resetOnboarding();
    this.resetNotifications();
    this.resetDashboardData();
    this.resetUserPreferences();
    this.resetImportData();
    
    console.log('✅ Sistema limpo e pronto para testes');
    console.log(`📧 Login de teste: ${this.TEST_EMAIL}`);
    console.log(`🔑 Senha de teste: ${this.TEST_PASSWORD}`);
    
    // Mostrar alerta para o usuário
    if (typeof window !== 'undefined') {
      alert(`Sistema resetado para testes!\n\nLogin: ${this.TEST_EMAIL}\nSenha: ${this.TEST_PASSWORD}`);
    }
  }
}

// Auto-executar limpeza se chamado diretamente
if (typeof window !== 'undefined' && window.location.search.includes('reset=true')) {
  TestDataService.initializeCleanSystem();
}
