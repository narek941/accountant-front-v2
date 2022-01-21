import React, { useMemo } from 'react';

import { sectionsList } from 'utils/index';
import { LoginForm } from 'components/Forms/login/LoginForm';

import styles from './Home.scss';

const HomeContainer = () => {
  const renderSections = useMemo(
    () =>
      sectionsList.map(({ id, component }) => (
        <section key={id} id={id} className="section">
          {component}
        </section>
      )),
    [sectionsList],
  );

  return (
    <main className={styles.wrapper}>
      {/* {renderSections} */}
      <LoginForm />
    </main>
  );
};

export default HomeContainer;
