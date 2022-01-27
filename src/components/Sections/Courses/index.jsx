import React from 'react';

import { CoursesForm } from 'components/index';

import styles from './Courses.scss';

const CoursesSection = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.wrapper__main_block}>
        <h2 className={styles.wrapper__main_block__title}>Դասընթացներ</h2>
        <CoursesForm />
      </div>
    </div>
  );
};

export default CoursesSection;
