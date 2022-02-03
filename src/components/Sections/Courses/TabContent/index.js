import React from 'react';
import PropTypes from 'prop-types';

import styles from './TabContent.scss';

const TabContent = ({ infoSteps, course }) => {
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
    <div className={styles.content}>
      {renderCourse}
      <h2>Դասընթացը Ձեզ համար է, եթե՝</h2>
      {renderInfoSteps}
    </div>
  );
};
TabContent.propTypes = {
  infoSteps: PropTypes.array,
  course: PropTypes.object,
};

TabContent.defaultProps = {
  infoSteps: [],
  course: [],
};
export default TabContent;
