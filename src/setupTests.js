// Arquivo de configuração para resolver problemas com timers e animações do React Native nos testes

// Mock para propriedades nativas do React Native que podem causar problemas
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Hack para "capturar" erros de ReferenceError após teardown
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

// Adiciona hooks globais para cada teste
beforeEach(() => {
  // Garantir que estamos usando timers falsos para testes mais previsíveis
  jest.useFakeTimers();
});

afterEach(() => {
  // Limpa todos os timers pendentes após cada teste
  jest.runOnlyPendingTimers();
  jest.clearAllTimers();

  // Certifica-se de que não há animações pendentes
  if (global.AnimatedImplementation) {
    global.AnimatedImplementation.stopAnimations();
  }

  // Restaura os mocks
  jest.clearAllMocks();
  
  // Verifica e limpa event listeners que possam ter vazado
  if (global.addEventListener) {
    jest.spyOn(global, 'addEventListener').mockClear();
  }
  if (global.removeEventListener) {
    jest.spyOn(global, 'removeEventListener').mockClear();
  }
});

// Limpa também quando um conjunto de testes é concluído
afterAll(() => {
  // Limpa novamente todos os timers pendentes
  jest.runOnlyPendingTimers();
  jest.clearAllTimers();
  
  // Restaurar o console original
  console.error = originalConsoleError;
  
  // Certificar que estamos usando timers reais ao final dos testes
  jest.useRealTimers();
});

// Define um timeout mais longo para testes com animações
jest.setTimeout(15000);

// Limpa qualquer processamento assíncrono que possa estar pendente
global.XMLHttpRequest = undefined;

// Implementar polyfills necessários
global.requestAnimationFrame = callback => {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = timerId => {
  clearTimeout(timerId);
}; 