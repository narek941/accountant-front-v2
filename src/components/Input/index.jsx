import React from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import { noop } from 'utils/index';

const Input = ({ name, type, value, className }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  const errorText = errors[name]?.message;

  const onBlur = () => {
    field.onBlur();
  };
  const onFocus = () => {};

  console.log(errorText, 'errorText');
  return (
    <>
      <input
        type={type}
        name={field.name}
        value={value}
        pattern={type === 'number' ? '[0-9]*' : null}
        inputMode={type === 'number' ? 'numeric' : null}
        onChange={field.onChange}
        className={className}
        placeholder={field.placeholder}
        autoComplete="off"
      />
      {errorText && <p>{errorText}</p>}
    </>
  );
};

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
