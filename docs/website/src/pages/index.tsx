import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Biblioteca de componentes UI implementando o Design System Fluid, desenvolvido pela Platform Builders"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div
                className={clsx(
                  'col col--8 col--offset-2',
                  styles.introduction,
                )}
              >
                <h2>O que é o Fluid React Native?</h2>
                <p>
                  O <strong>Fluid React Native</strong> é uma biblioteca de
                  componentes UI para React Native que implementa o Fluid Design
                  System, desenvolvido pela Platform Builders. A biblioteca foi
                  projetada para oferecer componentes reutilizáveis,
                  personalizáveis e consistentes para aplicações React Native.
                </p>
                <p>
                  Com o Fluid React Native, você pode construir interfaces de
                  usuário bonitas e funcionais em uma fração do tempo que
                  levaria para desenvolver componentes do zero, mantendo a
                  consistência visual em toda a sua aplicação.
                </p>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <section className={styles.highlights}>
          <div className="container">
            <div className="row">
              <div
                className={clsx(
                  'col col--10 col--offset-1',
                  styles.highlightsContent,
                )}
              >
                <h2>Por que escolher o Fluid React Native?</h2>
                <div className="row">
                  <div className="col col--6">
                    <h3>Desenvolvimento Rápido</h3>
                    <p>
                      Acelere o desenvolvimento de suas aplicações React Native
                      com componentes prontos para uso, reduzindo
                      significativamente o tempo de desenvolvimento e permitindo
                      que você se concentre na lógica de negócios.
                    </p>
                  </div>
                  <div className="col col--6">
                    <h3>Design System Completo</h3>
                    <p>
                      Beneficie-se de um sistema de design completo com tokens
                      para cores, tipografia, espaçamento e muito mais,
                      garantindo consistência visual em toda a sua aplicação.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col--6">
                    <h3>Altamente Personalizável</h3>
                    <p>
                      Adapte facilmente os componentes às necessidades
                      específicas do seu projeto através do poderoso sistema de
                      temas, mantendo a consistência enquanto atende aos
                      requisitos de sua marca.
                    </p>
                  </div>
                  <div className="col col--6">
                    <h3>Foco em Acessibilidade</h3>
                    <p>
                      Todos os componentes são projetados com acessibilidade em
                      mente, garantindo que suas aplicações sejam utilizáveis
                      por pessoas com diferentes habilidades e necessidades.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col col--6">
                    <h3>Tipagem Forte com TypeScript</h3>
                    <p>
                      Aproveite a tipagem completa com TypeScript para uma
                      melhor experiência de desenvolvimento, com autocompleção
                      de propriedades e detecção de erros em tempo de
                      compilação.
                    </p>
                  </div>
                  <div className="col col--6">
                    <h3>Bem Testado</h3>
                    <p>
                      Confie em componentes bem testados e robustos, reduzindo a
                      necessidade de testes extensivos e garantindo a qualidade
                      do seu produto final.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cta}>
          <div className="container">
            <div className="row">
              <div
                className={clsx('col col--8 col--offset-2', styles.ctaContent)}
              >
                <h2>Comece a usar o Fluid React Native hoje</h2>
                <p>
                  Transforme o desenvolvimento de suas aplicações React Native
                  com o Fluid React Native. Explore a documentação para aprender
                  como integrar o Fluid React Native em seu projeto.
                </p>
                <div className={styles.ctaButtons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/getting-started"
                  >
                    Guia de Início Rápido
                  </Link>
                  <Link
                    className="button button--outline button--lg"
                    to="/docs/components"
                  >
                    Explorar Componentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
