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
    title: 'Design System Consistente',
    Svg: require('@site/static/img/undraw_design_system.svg').default,
    description: (
      <>
        Construído sobre o Fluid Design System, oferecendo uma experiência visual
        consistente e moderna para suas aplicações React Native, com componentes
        que seguem as melhores práticas de UI/UX.
      </>
    ),
  },
  {
    title: 'Desenvolvimento Ágil',
    Svg: require('@site/static/img/undraw_development.svg').default,
    description: (
      <>
        Acelere o desenvolvimento com componentes prontos para uso, tipagem
        TypeScript completa e documentação abrangente. Foque no que importa:
        criar experiências incríveis para seus usuários.
      </>
    ),
  },
  {
    title: 'Flexibilidade Total',
    Svg: require('@site/static/img/undraw_customization.svg').default,
    description: (
      <>
        Personalize facilmente os componentes através do sistema de temas,
        adaptando-os à identidade visual do seu produto enquanto mantém a
        consistência e acessibilidade.
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
