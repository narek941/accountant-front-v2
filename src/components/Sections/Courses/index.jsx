import React from 'react';

import { useToggle } from 'hooks/index';

import styles from './Courses.scss';
import CoursesForm from './CoursesForm';

import Button from '../../Button';

const CoursesSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.wrapper__title}>Դասընթացներ</h2>
      {isOpen ? <CoursesForm /> : <Button onClick={setIsOpen}>Գրանցվել</Button>}
    </div>
  );
};

export default CoursesSection;
