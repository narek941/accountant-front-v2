import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import noop from 'utils/noop';

import styles from './Request.scss';

import { Button } from '../index';
import { LogoIcon } from '../../icons';

const Request = ({ handleBack, isSent }) => {
  return (
    <>
      <LogoIcon className={styles.logo} />
      {isSent ? (
        <p className={styles.title}>Ձեր հայտը հաստատվել է։</p>
      ) : (
        <p className={classNames(styles.title, styles.alert)}>
          Ձեր հայտը չի հաստատվել,Խնդրում ենք փորձել մի փոքր ուշ:
        </p>
      )}

      <Button className={styles.btn} onClick={handleBack}>
        Գլխավոր էջ
      </Button>
    </>
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
