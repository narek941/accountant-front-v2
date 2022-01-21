import React from 'react';
import PropTypes from 'prop-types';
import ScrollIntoView from 'react-scroll-into-view';

const ScrollView = ({ link, children, className }) => (
  <ScrollIntoView selector={`#${link}`} className={className}>
    <span>{children}</span>
  </ScrollIntoView>
);

ScrollView.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

ScrollView.defaultProps = {
  link: '',
  className: '',
};

export default ScrollView;
