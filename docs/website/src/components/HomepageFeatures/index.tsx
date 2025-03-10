import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Componentes Reutilizáveis',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O Fluid React Native oferece uma ampla gama de componentes UI prontos
        para uso, desde botões e inputs até componentes mais complexos como
        datepickers e carrosséis.
      </>
    ),
  },
  {
    title: 'Sistema de Temas Poderoso',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Personalize facilmente a aparência de toda a sua aplicação através do
        poderoso sistema de temas baseado em tokens de design, garantindo
        consistência visual.
      </>
    ),
  },
  {
    title: 'Experiência de Desenvolvimento Superior',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Desfrute de uma experiência de desenvolvimento superior com tipagem
        completa, documentação abrangente e componentes bem testados.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
