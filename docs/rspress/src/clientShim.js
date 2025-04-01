// Polyfill para ReactDOM.render no React 18+
import * as ReactDOM from 'react-dom';

// Se ReactDOM.render não existir (React 18+), criar um polyfill
if (!ReactDOM.render) {
  ReactDOM.render = (element, container, callback) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
    if (callback) {
      callback();
    }
    return null;
  };
}

export default ReactDOM; 