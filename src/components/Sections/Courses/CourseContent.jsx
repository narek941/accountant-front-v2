import React from 'react';
import PropTypes from 'prop-types';

import styles from './Courses.scss';

const CourseContent = ({ infoSteps, course }) => {
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
      <h2>Դասընթացը Ձեզ համար է, եթե՝</h2>
      {renderInfoSteps}
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
