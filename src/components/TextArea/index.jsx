import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import { noop } from 'utils/index';
import { I18nContext } from 'context/index';

import styles from './TextArea.scss';

const TextArea = ({ name, value, label, required, placeholder }) => {
  const t = useContext(I18nContext);

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({ name, control });

  useEffect(() => {
    setValue(name);
  }, [name, setValue]);

  const errorText = errors[name]?.message;

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

      <textarea
        value={value}
        name={field.name}
        autoComplete="off"
        rows="5"
        className={styles.wrapper__field}
        onChange={field.onChange}
        placeholder={t(placeholder)}
      />

      {errorText && <p className={styles.wrapper__error}>{errorText}</p>}
    </div>
  );
};
export default TextArea;

TextArea.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  name: null,
  label: '',
  onChange: noop,
  required: false,
  value: undefined,
  placeholder: null,
};
