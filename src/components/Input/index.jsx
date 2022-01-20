import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

const Input = ({ name, type, value, onChange, className, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    pattern={type === 'number' ? '[0-9]*' : null}
    inputMode={type === 'number' ? 'numeric' : null}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
    autoComplete="off"
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: null,
  value: undefined,
  onChange: noop,
  className: null,
  placeholder: null,
};

export default Input;
