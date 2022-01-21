import React from 'react';

import { sectionsList } from 'utils/index';

import styles from './Home.scss';

const HomeContainer = () => {
  const renderSections = sectionsList.map(({ id, Component }) => (
    <section key={id} id={id} className="section">
      <Component />
    </section>
  ));

  return <main className={styles.wrapper}>{renderSections}</main>;
};

export default HomeContainer;
