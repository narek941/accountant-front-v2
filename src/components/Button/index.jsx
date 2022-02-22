import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';
import { I18nContext } from 'context/index';

const Button = ({ onClick, className, disabled, children, ...rest }) => {
  const t = useContext(I18nContext);
  return (
    <button
      type="button"
      {...rest}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{ textTransform: 'capitalize' }}
    >
      {t(children)}
    </button>
  );
};

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
