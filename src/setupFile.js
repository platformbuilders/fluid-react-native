/**
 * Arquivo de configuração para testes Jest
 * Resolvendo problemas de timers e ReferenceError
 */

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

// Override da implementação padrão do requestAnimationFrame para evitar vazamentos
global.requestAnimationFrame = callback => {
  const id = setTimeout(() => callback(), 0);
  return id;
};

// Garantir que cancelAnimationFrame limpe corretamente os timers
global.cancelAnimationFrame = id => {
  clearTimeout(id);
};
