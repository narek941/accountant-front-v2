import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash';

import { Button } from 'components/index';
import { useWindowSize } from 'hooks/index';
import { I18nContext } from 'context/index';

import styles from './Courses.scss';

const CourseContent = ({ course }) => {
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

  const renderInfoSteps = (data) =>
    data.map((item, index) => (
      <div key={item}>
        <p>
          <span className={styles.slider__item_text_order}>{index + 1}.</span>
          {t(item)}
        </p>
      </div>
    ));

  const renderCourse = course?.content?.map((item) => {
    if (!isArray(item)) {
      return <p key={item}>{t(item)}</p>;
    }
    return isLoad && renderInfoSteps(item);
  });

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
