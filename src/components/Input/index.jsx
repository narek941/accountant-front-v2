import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import { noop } from 'utils/index';

const Input = ({
  name,
  type,
  value,
  label,
  options,
  required,
  className,
  placeholder,
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({ name, control });

  const [selectedOption, setSelectedOption] = useState(
    options.length && options[0],
  );
  useEffect(() => {
    setValue(name, selectedOption);
  }, [name, selectedOption, setValue]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const errorText = errors[name]?.message;

  // const onBlur = () => {};
  // const onFocus = () => {};

  return (
    <div style={{ marginTop: '10px' }}>
      <span
        style={{
          width: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {label && <p>{label}</p>}
        {required && <p>*</p>}
      </span>

      {!options.length ? (
        <input
          type={type}
          value={value}
          name={field.name}
          autoComplete="off"
          className={className}
          onChange={field.onChange}
          placeholder={placeholder}
          pattern={type === 'number' ? '[0-9]*' : null}
          inputMode={type === 'number' ? 'numeric' : null}
        />
      ) : (
        <div>
          <select
            name={field.name}
            onChange={handleSelectChange}
            value={selectedOption}
          >
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      {errorText && <p>{errorText}</p>}
    </div>
  );
};
export default Input;

Input.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: null,
  options: [],
  type: 'text',
  label: '',
  onChange: noop,
  className: null,
  required: false,
  value: undefined,
  placeholder: null,
};
