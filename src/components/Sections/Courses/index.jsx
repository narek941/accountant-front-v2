import React from 'react';

import { useToggle } from 'hooks/index';

import Form from './Form';
import styles from './Courses.scss';

import Button from '../../Button';

const CoursesSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.wrapper__main_block}>
        <h2 className={styles.wrapper__main_block__title}>Դասընթացներ</h2>
        {isOpen ? <Form /> : <Button onClick={setIsOpen}>sdhkjsdh</Button>}
      </div>
    </div>
  );
};

export default CoursesSection;
