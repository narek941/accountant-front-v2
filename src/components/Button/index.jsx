import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

const Button = ({ onClick, className, disabled, children, ...rest }) => (
  <button
    type="button"
    {...rest}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: noop,
  disabled: false,
  className: '',
};

export default Button;
