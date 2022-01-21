import React, { useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import NextNprogress from 'nextjs-progressbar';

import 'styles/index.global.scss';

import { I18nContext } from 'context/index';
import { configureStore } from 'libraries/index';

import { appWithTranslation, withTranslation } from '../i18n';

const MyApp = ({ Component, pageProps, t }) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <I18nContext.Provider value={t}>
      <NextNprogress
        height={3}
        color="#BF9425"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </I18nContext.Provider>
  );
};

MyApp.propTypes = {
  t: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default configureStore.withRedux(
  appWithTranslation(withTranslation('common')(MyApp)),
);
