import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

import styles from './Vacancies.scss';

import { ArrowIcon } from '../../../icons';

const PrevArrow = ({ onClick }) => (
  <div role="button" onClick={onClick} className={styles.arrow}>
    <ArrowIcon />
  </div>
);

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  onClick: noop,
};

export default PrevArrow;
