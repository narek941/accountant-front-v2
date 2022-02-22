import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/index';
import { useWindowSize } from 'hooks/index';
import { I18nContext } from 'context/index';

import styles from './Courses.scss';

const CourseContent = ({ infoSteps, course }) => {
  const { isMobile } = useWindowSize();
  const [isShow, setIsShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const t = useContext(I18nContext);

  const handleMore = () => {
    setIsShow(!isShow);
    setIsClicked(true);
  };
  const buttonName = !isShow && `${t('more')}`;
  const isLoad = (isShow || !isMobile) && true;

  const renderCourse = course?.info?.map((item) => (
    <p key={item.id}>{item.text}</p>
  ));

  const renderInfoSteps = infoSteps?.map((item, index) => (
    <div key={item.id}>
      <p>
        <span className={styles.slider__item_text_order}>{index + 1}.</span>
        {item.text}
      </p>
    </div>
  ));

  return (
    <div className={styles.course__info_content}>
      {renderCourse}
      {!isClicked && (
        <Button
          className={styles.course__info_content_showBtn}
          onClick={handleMore}
        >
          {buttonName}
        </Button>
      )}
      {isLoad && (
        <>
          <h2>Դասընթացը Ձեզ համար է, եթե՝</h2>
          {renderInfoSteps}
        </>
      )}
    </div>
  );
};
CourseContent.propTypes = {
  infoSteps: PropTypes.array,
  course: PropTypes.object,
};

CourseContent.defaultProps = {
  infoSteps: [],
  course: null,
};
export default CourseContent;
