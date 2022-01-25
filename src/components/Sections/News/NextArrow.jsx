import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

import styles from './News.scss';

import { ArrowIcon } from '../../../icons';

const NextArrow = ({ onClick }) => (
  <div
    role="button"
    onClick={onClick}
    className={`${styles.arrow} ${styles.arrow__next}`}
  >
    <ArrowIcon />
  </div>
);

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  onClick: noop,
};

export default NextArrow;
