import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  FooterContainer,
  CanvasContainer,
} from 'containers/index';

const HelmetLayout = ({
  children,
  title,
  metaDescription,
  metaImg,
  isErorPage,
}) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta property="og:image" content={metaImg} />
    </Head>
    {isErorPage || <HeaderContainer />}
    {children}
    {isErorPage || <FooterContainer />}
    <CanvasContainer />
  </>
);

HelmetLayout.defaultProps = {
  title: '',
  metaImg: '/images/metaImg.png',
  metaDescription: '',
  isErorPage: false,
};

HelmetLayout.propTypes = {
  title: PropTypes.string,
  metaImg: PropTypes.string,
  children: PropTypes.node.isRequired,
  metaDescription: PropTypes.string,
  isErorPage: PropTypes.bool,
};

export default HelmetLayout;
