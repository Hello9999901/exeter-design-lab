import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open to Create',
    Svg: require('@site/static/img/undraw_deconstructed_alud.svg').default,
    description: (
      <>
        The Exeter Design Lab is a space for anybody to create and make with creativity and freedom.
      </>
    ),
  },
  {
    title: 'Expansive Capabilities',
    Svg: require('@site/static/img/undraw_making_art_re_ee8w.svg').default,
    description: (
      <>
        Equipped with a variety of CNC tools - a CNC Mill, FDM Printers, a Cricut Cutter and a laser cutter, the "lab" is equipped with tools to make projects of your imagination.
      </>
    ),
  },
  {
    title: 'Team Based Efforts',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        Whether you are an seasoned robotics team or hopeful maker, the Exeter Design Lab focuses on team oriented efforts to create.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
