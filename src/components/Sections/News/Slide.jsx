import React from 'react';
import PropTypes from 'prop-types';

import styles from './News.scss';

const Slide = ({ id, img, title, text }) => (
  <div key={id} className={styles.slider__item}>
    <div className={styles.slider__item_wrapper}>
      <img className={styles.slider__item_img} src={img} alt="img" />
      <p className={styles.slider__item_title}>{title}</p>
    </div>
    <p className={styles.slider__item_text}>{text}</p>
  </div>
);

Slide.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

Slide.defaultProps = {
  id: null,
  img: null,
  title: null,
  text: null,
};

export default Slide;
