import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from 'utils/index';
import { I18nContext } from 'context/index';
import { useOutsideClick } from 'hooks/index';

import styles from './LanguageDrop.scss';

import { ArrowIcon } from '../../icons';

const LanguageDrop = ({ data, handleFlags }) => {
  const t = useContext(I18nContext);
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const isOpenToggler = () => {
    setIsOpen(!isOpen);
  };
  const updateActiveIndexHandler = (index) => {
    handleFlags(data[index].code);
    setActiveIndex(index);
    isOpenToggler();
  };

  const renderOptions = data.map((item, index) => (
    <div
      key={item.id}
      role="button"
      onClick={() => updateActiveIndexHandler(index)}
      className={classNames(styles.content__item, {
        [styles.content__item_active]: index === activeIndex,
      })}
      disabled={index === activeIndex}
    >
      <span>
        <item.Icon />
      </span>
      {t(item.code)}
    </div>
  ));

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        role="button"
        onClick={isOpenToggler}
        className={classNames(styles.header, {
          [styles.header__open]: isOpen,
        })}
      >
        <p className={styles.header__text}>{t(data[activeIndex].code)}</p>
        <ArrowIcon
          className={styles.header__icon}
          style={{ transform: `rotate(${!isOpen ? 180 : 0}deg)` }}
        />
      </div>
      {isOpen && <div className={styles.content}>{renderOptions}</div>}
    </div>
  );
};

LanguageDrop.propTypes = {
  data: PropTypes.array,
  handleFlags: PropTypes.func,
  defaultLang: PropTypes.string,
};

LanguageDrop.defaultProps = {
  data: [],
  handleFlags: noop,
  defaultLang: 'am',
};

export default LanguageDrop;
