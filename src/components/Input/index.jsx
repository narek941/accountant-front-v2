import React from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import { noop } from 'utils/index';

const Input = ({
  name,
  type,
  value,
  className,
  placeholder,
  options,
  required,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  const errorText = errors[name]?.message;

  const onBlur = () => {};
  const onFocus = () => {};

  return (
    <>
      {required && <p>*</p>}
      {!options.length ? (
        <input
          type={type}
          name={field.name}
          value={value}
          pattern={type === 'number' ? '[0-9]*' : null}
          inputMode={type === 'number' ? 'numeric' : null}
          onChange={field.onChange}
          className={className}
          placeholder={placeholder}
          autoComplete="off"
        />
      ) : (
        <select name={field.name}>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      {errorText && <p>{errorText}</p>}
    </>
  );
};
export default Input;

Input.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: null,
  options: [],
  type: 'text',
  onChange: noop,
  className: null,
  required: false,
  value: undefined,
  placeholder: null,
};
