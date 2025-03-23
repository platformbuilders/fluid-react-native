/**
 * Arquivo de configuração para testes Jest
 * Resolvendo problemas de timers e ReferenceError
 */

// Este arquivo é carregado antes de setupTests.js e configura
// aspectos básicos do ambiente de teste

// Hack para prevenir ReferenceError após o término dos testes
const originalConsoleError = console.error;
console.error = function(message) {
  if (message && typeof message === 'string' && 
      (message.includes('You are trying to access a property or method of the Jest environment after it has been torn down') ||
       message.includes('ReferenceError') && message.includes('torn down'))) {
    // Ignorar erros específicos relacionados ao ambiente Jest
    return;
  }
  originalConsoleError.apply(this, arguments);
};

// Configuração de timers para evitar vazamentos
global.beforeEach(() => {
  // Usar timers falsos para maior controle
  jest.useFakeTimers();
});

// Limpar todos os timers pendentes após cada teste
global.afterEach(() => {
  // Executar timers pendentes antes de limpá-los
  jest.runOnlyPendingTimers();
  jest.clearAllTimers();
  
  // Restaurar mocks
  jest.clearAllMocks();
});

// Garantir que os timers sejam limpos após todos os testes
global.afterAll(() => {
  jest.runOnlyPendingTimers();
  jest.clearAllTimers();
  
  // Voltar aos timers reais
  jest.useRealTimers();
  
  // Restaurar console original
  console.error = originalConsoleError;
});

// Override da implementação padrão do requestAnimationFrame para evitar vazamentos
global.requestAnimationFrame = callback => {
  const id = setTimeout(() => callback(), 0);
  return id;
};

// Garantir que cancelAnimationFrame limpe corretamente os timers
global.cancelAnimationFrame = id => {
  clearTimeout(id);
}; 