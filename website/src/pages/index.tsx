import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const codeExample = `
import React from 'react';
import { ThemeProvider, Button } from '@platformbuilders/fluid-react-native';

const App = () => {
  return (
    <ThemeProvider>
      <Button 
        label="Get Started" 
        onPress={() => console.log('Welcome to Fluid!')} 
      />
    </ThemeProvider>
  );
};

export default App;
`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className="hero__logo animate-fadeIn">
              <img src="/img/logo.svg" alt="Fluid Logo" width={80} height={80} />
            </div>
            <Heading as="h1" className="hero__title animate-fadeIn delay-1">
              Componentes Fluid
            </Heading>
            <p className="hero__subtitle animate-fadeIn delay-2">
              Integre o Fluid em minutos e obtenha uma UI completa
              para criar interfaces elegantes e consistentes.
            </p>
            <div className={clsx(styles.buttons, 'animate-fadeIn delay-3')}>
              <Link
                className="button button--primary button--lg"
                to="/docs/guides/getting-started">
                Começar agora →
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/platformbuilders/fluid-react-native">
                <svg viewBox="0 0 24 24" width="24" height="24" style={{marginRight: '8px'}}>
                  <path fill="currentColor" d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"></path>
                </svg>
                GitHub
              </Link>
            </div>
            <div className="free-text animate-fadeIn delay-3">
              é gratuito
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CodeDemo() {
  return (
    <section className="home-section">
      <div className="container">
        <Heading as="h2" className="home-section__title">
          Integração simples e rápida
        </Heading>
        <p className="home-section__subtitle">
          Comece a desenvolver interfaces consistentes em minutos com apenas algumas linhas de código.
        </p>
        
        <div className="row">
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <Heading as="h3" className="feature-title">
                Com 3 linhas de código...
              </Heading>
              <p className="feature-description">
                A configuração é simples e rápida, permitindo que você comece a desenvolver imediatamente.
              </p>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <Heading as="h3" className="feature-title">
                ...você obtém um UI completo...
              </Heading>
              <p className="feature-description">
                Interface de usuário completa com componentes consistentes e personalizáveis.
              </p>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <Heading as="h3" className="feature-title">
                ...gerenciado por um dashboard
              </Heading>
              <p className="feature-description">
                Monitore e gerencie sua aplicação com ferramentas integradas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="code-demo">
          <div className="code-demo__code">
            <CodeBlock language="tsx">
              {codeExample}
            </CodeBlock>
          </div>
          <div className="code-demo__preview">
            <img 
              src="/img/logo-minimal.png" 
              alt="Preview do código em execução" 
              style={{width: '100%', maxWidth: '300px'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentsShowcase() {
  return (
    <section className="home-section" style={{background: 'var(--ifm-color-emphasis-100)'}}>
      <div className="container">
        <Heading as="h2" className="home-section__title">
          Componentes prontos para uso
        </Heading>
        <p className="home-section__subtitle">
          Uma biblioteca completa de componentes React Native que seguem o Design System Fluid, 
          otimizados para performance e acessibilidade.
        </p>
        
        <div className="row">
          <div className="col col--3">
            <div className="feature-card">
              <div className="feature-icon">🔘</div>
              <Heading as="h3" className="feature-title">
                Botões
              </Heading>
              <p className="feature-description">
                Diversos estilos e variantes para diferentes necessidades.
              </p>
              <Link to="/docs/components/button">
                Ver documentação →
              </Link>
            </div>
          </div>
          
          <div className="col col--3">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <Heading as="h3" className="feature-title">
                Formulários
              </Heading>
              <p className="feature-description">
                Campos de texto, checkboxes, toggles e muito mais.
              </p>
              <Link to="/docs/components/text-input">
                Ver documentação →
              </Link>
            </div>
          </div>
          
          <div className="col col--3">
            <div className="feature-card">
              <div className="feature-icon">🔤</div>
              <Heading as="h3" className="feature-title">
                Tipografia
              </Heading>
              <p className="feature-description">
                Sistema de tipografia consistente e acessível.
              </p>
              <Link to="/docs/components/card">
                Ver documentação →
              </Link>
            </div>
          </div>
          
          <div className="col col--3">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <Heading as="h3" className="feature-title">
                Temas
              </Heading>
              <p className="feature-description">
                Sistema de temas flexível para customização completa.
              </p>
              <Link to="/docs/theming">
                Ver documentação →
              </Link>
            </div>
          </div>
        </div>
        
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <Link
            className="button button--primary button--lg"
            to="/docs/components/button">
            Ver componentes
          </Link>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="home-section">
      <div className="container">
        <Heading as="h2" className="home-section__title">
          Por que usar Fluid?
        </Heading>
        <p className="home-section__subtitle">
          Desenvolvido por e para equipes de desenvolvimento, o Fluid oferece uma solução 
          completa para criação de interfaces consistentes e de alta qualidade.
        </p>
        
        <div className="row">
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <Heading as="h3" className="feature-title">
                Alta Performance
              </Heading>
              <p className="feature-description">
                Componentes otimizados para máxima performance mesmo em dispositivos de baixo desempenho.
              </p>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">♿</div>
              <Heading as="h3" className="feature-title">
                Acessibilidade
              </Heading>
              <p className="feature-description">
                Todos os componentes seguem as melhores práticas de acessibilidade para inclusão total.
              </p>
            </div>
          </div>
          
          <div className="col col--4">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <Heading as="h3" className="feature-title">
                TypeScript
              </Heading>
              <p className="feature-description">
                Tipagem forte para melhor experiência de desenvolvimento e menos erros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Biblioteca de componentes React Native que implementa o Design System Fluid, desenvolvido pela Platform Builders. Projetada para acelerar o desenvolvimento de aplicações React Native, oferecendo componentes reutilizáveis, personalizáveis e consistentes.">
      <HomepageHeader />
      <main>
        <CodeDemo />
        <ComponentsShowcase />
        <HighlightsSection />
      </main>
    </Layout>
  );
}
