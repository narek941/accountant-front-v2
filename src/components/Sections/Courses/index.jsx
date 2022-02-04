import React, { useState } from 'react';
import classNames from 'classnames';

import { useToggle } from 'hooks/index';

import styles from './Courses.scss';
import CoursesForm from './CoursesForm';
import TabContent from './TabContent';

import Button from '../../Button';
import { coursesNavigationList } from '../../../utils/index';
import {
  GroupIcon,
  PersonalIcon,
  PriceIcon,
  TimeIcon,
  LessonsIcon,
} from '../../../icons';

const CoursesSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const [active, setActive] = useState(0);
  const [isGroup, setIsGroup] = useState(false);

  const sellectedCourse = isGroup
    ? coursesNavigationList[active].groupCourse
    : coursesNavigationList[active].personalCourse;

  const handleToggle = () => {
    setIsGroup(!isGroup);
  };
  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.wrapper__title}>Դասընթացներ</h2>
      {isOpen ? (
        <CoursesForm />
      ) : (
        <div className={styles.tabContainer}>
          <div className={styles.tabContainer__types}>
            {coursesNavigationList.map((type, index) => (
              <div
                className={classNames(styles.tabContainer__types_tabs, {
                  [styles.tabContainer__types_tabs_active]: active === index,
                })}
                key={type.id}
                role="button"
                onClick={() => setActive(index)}
              >
                <type.Icon />
                <span>{type.title}</span>
              </div>
            ))}
          </div>

          <div className={styles.tabContainer__content}>
            <div className={styles.content__tabs}>
              <div
                role="button"
                onClick={handleToggle}
                className={classNames(styles.content__tabs_btn, {
                  [styles.content__tabs_btn_active]: isGroup,
                })}
              >
                <GroupIcon />
                <p>Խմբակային</p>
              </div>
              <div
                className={classNames(styles.content__tabs_btn, {
                  [styles.content__tabs_btn_active]: !isGroup,
                })}
                role="button"
                onClick={handleToggle}
              >
                <PersonalIcon />
                <p>Անհատական</p>
              </div>
            </div>
            <TabContent
              infoSteps={coursesNavigationList[active].infoSteps}
              course={sellectedCourse}
            />
          </div>

          <div className={styles.tabContainer__priceList}>
            <div className={styles.tabContainer__priceList_item}>
              <TimeIcon />
              <span>{sellectedCourse?.period}</span>
            </div>
            <div className={styles.tabContainer__priceList_item}>
              <LessonsIcon />
              <span>{sellectedCourse?.lessons}</span>
            </div>
            <div className={styles.tabContainer__priceList_item}>
              <PriceIcon />
              <span>{sellectedCourse?.price}</span>
            </div>
            <Button
              onClick={setIsOpen}
              className={styles.tabContainer__priceList_login}
            >
              Գրանցվել
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
