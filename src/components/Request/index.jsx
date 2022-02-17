import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import noop from 'utils/noop';

import styles from './Request.scss';

import { Button } from '../index';
import { LogoIcon } from '../../icons';

const Request = ({ handleBack, isSent }) => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <LogoIcon className={styles.wrapper__logo} />
      {isSent ? (
        <p className={styles.wrapper__title}>Ձեր հայտը հաստատվել է։</p>
      ) : (
        <p className={classNames(styles.wrapper__title, styles.wrapper__alert)}>
          Ձեր հայտը չի հաստատվել,Խնդրում ենք փորձել մի փոքր ուշ:
        </p>
      )}

      <Button className={styles.wrapper__btn} onClick={handleBack}>
        Գլխավոր էջ
      </Button>
    </div>
  );
};

Request.propTypes = {
  handleBack: PropTypes.func,
  isSent: PropTypes.bool,
};

Request.defaultProps = {
  handleBack: noop,
  isSent: false,
};
export default Request;
