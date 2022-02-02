import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import { noop } from 'utils/index';
import { I18nContext } from 'context/index';

import styles from './Input.scss';

import DropDown from '../DropDown';

const Input = ({
  name,
  type,
  value,
  label,
  options,
  required,
  placeholder,
}) => {
  const t = useContext(I18nContext);

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

  const handleDropDownChange = (e) => {
    setSelectedOption(e);
  };

  const errorText = errors[name]?.message;

  // const onBlur = () => {};
  // const onFocus = () => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__label}>
        {label && (
          <p className={styles.wrapper__label_text}>
            {t(label)}
            {required && <span>*</span>}
          </p>
        )}
      </div>
      {!options.length ? (
        <input
          type={type}
          value={value}
          name={field.name}
          autoComplete="off"
          className={styles.wrapper__field}
          onChange={field.onChange}
          placeholder={t(placeholder)}
          pattern={type === 'number' ? '[0-9]*' : null}
          inputMode={type === 'number' ? 'numeric' : null}
        />
      ) : (
        <DropDown data={options} onChane={handleDropDownChange} />
      )}
      {errorText && <p className={styles.wrapper__error}>{errorText}</p>}
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
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: null,
  options: [],
  type: 'text',
  label: '',
  onChange: noop,
  required: false,
  value: undefined,
  placeholder: null,
};
