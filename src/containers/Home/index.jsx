import { sectionsList } from 'utils/index';

import styles from './Home.scss';

const HomeContainer = () => {
  const renderSections = sectionsList.map(({ id, Component, index }) => (
    <section key={id} id={id} data-index={index} className="section">
      <Component />
    </section>
  ));

  return <main className={styles.wrapper}>{renderSections}</main>;
};

export default HomeContainer;
