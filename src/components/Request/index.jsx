import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import usePortal from 'react-useportal';

import { useLockBodyScroll, useOutsideClick } from 'hooks/index';
import { I18nContext } from 'context/index';
import noop from 'utils/noop';

import styles from './Request.scss';

import { Button } from '../index';
import { LogoIcon } from '../../icons';

const Request = ({ handleBack, isSent }) => {
  const t = useContext(I18nContext);
  const { Portal } = usePortal();
  const ref = useRef(null);

  useLockBodyScroll();

  useOutsideClick(ref, () => {
    handleBack();
  });

  return (
    <Portal>
      <div className={styles.wrapper}>
        <div ref={ref}>
          <LogoIcon className={styles.wrapper__logo} />
          {isSent ? (
            <p className={styles.wrapper__title}>{t('request_sent')}</p>
          ) : (
            <p
              className={classNames(
                styles.wrapper__title,
                styles.wrapper__alert,
              )}
            >
              {t('request_not_sent')}
            </p>
          )}

          <Button className={styles.wrapper__btn} onClick={handleBack}>
            {t('close')}
          </Button>
        </div>
      </div>
    </Portal>
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
