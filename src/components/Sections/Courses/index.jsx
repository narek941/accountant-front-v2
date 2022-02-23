import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import { useToggle } from 'hooks/index';
import { I18nContext } from 'context/index';

import styles from './Courses.scss';
import CoursesForm from './CoursesForm';
import CourseContent from './CourseContent';

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
  const handleBack = () => setIsOpen();
  const t = useContext(I18nContext);

  const selectedCourse = isGroup
    ? coursesNavigationList[active].groupCourse
    : coursesNavigationList[active].personalCourse;

  const handleToggle = () => {
    setIsGroup(!isGroup);
  };
  return (
    <div className={`container ${styles.wrapper}`}>
      {isOpen ? (
        <CoursesForm handleBack={handleBack} />
      ) : (
        <>
          <h2 className={styles.wrapper__title}>{t('courses')}</h2>
          <div className={styles.course}>
            <div className={styles.course__types}>
              {coursesNavigationList.map((type, index) => (
                <div
                  className={classNames(styles.course__types_tabs, {
                    [styles.course__types_tabs_active]: active === index,
                  })}
                  key={type.id}
                  role="button"
                  onClick={() => setActive(index)}
                >
                  <span>
                    <type.Icon />
                  </span>
                  <span className={styles.course__types_tabs_title}>
                    {t(type.title)}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.course__info}>
              <div className={styles.course__info_tabs}>
                <div
                  role="button"
                  onClick={handleToggle}
                  className={classNames(styles.course__info_tabs_btn, {
                    [styles.course__info_tabs_btn_active]: isGroup,
                  })}
                >
                  <span>
                    <GroupIcon />
                  </span>
                  <p>{t('grouped')}</p>
                </div>
                <div
                  className={classNames(styles.course__info_tabs_btn, {
                    [styles.course__info_tabs_btn_active]: !isGroup,
                  })}
                  role="button"
                  onClick={handleToggle}
                >
                  <span>
                    <PersonalIcon />
                  </span>

                  <p>{t('individual')}</p>
                </div>
              </div>
              <CourseContent
                infoSteps={coursesNavigationList[active].infoSteps}
                course={selectedCourse}
              />
            </div>

            <div className={styles.course__priceList}>
              <div className={styles.course__priceList_item}>
                <span>
                  <TimeIcon />
                </span>
                <span>{t(selectedCourse?.period)}</span>
              </div>
              <div className={styles.course__priceList_item}>
                <LessonsIcon />
                <span>{t(selectedCourse?.lessons)}</span>
              </div>
              <div className={styles.course__priceList_item}>
                <span>
                  <PriceIcon />
                </span>
                <span>{t(selectedCourse?.price)}</span>
              </div>
              <Button
                onClick={setIsOpen}
                className={styles.course__priceList_login}
              >
                {t('register')}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoursesSection;
