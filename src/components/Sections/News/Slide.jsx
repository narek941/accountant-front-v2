import React from 'react';
import PropTypes from 'prop-types';

import styles from './News.scss';

const Slide = ({ id, img, title, text }) => {
  const render = text.map(({ subId, subTitle, subText }) => (
    <span key={subId}>
      <p>{subTitle}</p>
      {subText?.map((i) => (
        <p>🔹️{i}</p>
      ))}
    </span>
  ));
  return (
    <div key={id} className={styles.slider__item}>
      <div className={styles.slider__item_wrapper}>
        <p className={styles.slider__item_title}>
          <img className={styles.slider__item_img} src={img} alt="img" />
          {title}
        </p>
        <div className={styles.slider__item_text}>{render}</div>
      </div>
    </div>
  );
};
Slide.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};
Slide.defaultProps = { id: null, img: null, title: null, text: [] };
export default Slide;
