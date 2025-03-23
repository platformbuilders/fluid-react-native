/**
 * Configurações para resolver problemas com timers e animações em testes React Native
 */

// Ao invés de mockar NativeAnimatedHelper, vamos interceptar possíveis erros
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  
  // Se existir, mockamos o NativeAnimatedHelper
  if (RN.NativeAnimatedHelper) {
    RN.NativeAnimatedHelper.shouldUseNativeDriver = () => false;
  }
  
  return RN;
});

// Configuração de eventos para cada teste
beforeEach(() => {
  // Usar fake timers para testes mais previsíveis
  jest.useFakeTimers();
});

afterEach(() => {
  // Limpar timers pendentes
  jest.clearAllTimers();
  // Restaurar mocks
  jest.clearAllMocks();
  // Limpar event listeners
  jest.restoreAllMocks();
});

afterAll(() => {
  // Garantir que timers reais sejam usados após os testes
  jest.useRealTimers();
});

// Configurar timeout mais longo para testes com animações
jest.setTimeout(10000);

// Limpar qualquer processamento assíncrono pendente
global.XMLHttpRequest = undefined;
