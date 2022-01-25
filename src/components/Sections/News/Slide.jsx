import React from 'react';
import PropTypes from 'prop-types';

import styles from './News.scss';

const Slide = ({ id, img, text }) => (
  <div key={id} className={styles.slider__item}>
    <img className={styles.slider__item_img} src={img} alt="img" />
    <p className={styles.slider__item_text}>{text}</p>
  </div>
);

Slide.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
};

Slide.defaultProps = {
  id: null,
  img: null,
  text: null,
};

export default Slide;
