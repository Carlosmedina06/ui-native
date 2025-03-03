import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Beautiful Apps',
    description: (
      <>
        UI Native allows you to create stunning mobile applications with ease using
        React Native and NativeWind.
      </>
    ),
  },
  {
    title: 'Flexible and Customizable',
    description: (
      <>
        Customize your components with Tailwind CSS utilities and adapt them to any
        design without hassle.
      </>
    ),
  },
  {
    title: 'Optimized for Performance',
    description: (
      <>
        UI Native leverages the power of NativeWind to provide highly optimized and
        responsive components for your mobile apps.
      </>
    ),
  },
];

function Feature({title,  description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>

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
