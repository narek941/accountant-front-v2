import React, { useContext } from 'react';

import { I18nContext } from 'context/index';
import { NextLink } from 'components/index';

import styles from './Error.scss';

const ErrorContainer = () => {
  const t = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>404</h1>
        <p>{t('oops')}</p>
        <NextLink to="/">{t('goToHomePage')}</NextLink>
      </div>
    </div>
  );
};

export default ErrorContainer;
