import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HelmetLayout = ({ children, title, metaDescription, metaImg }) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta property="og:image" content={metaImg} />
    </Head>
    {children}
  </>
);

HelmetLayout.defaultProps = {
  title: '',
  metaImg: '/images/metaImg.png',
  metaDescription: '',
};

HelmetLayout.propTypes = {
  title: PropTypes.string,
  metaImg: PropTypes.string,
  children: PropTypes.node.isRequired,
  metaDescription: PropTypes.string,
};

export default HelmetLayout;
