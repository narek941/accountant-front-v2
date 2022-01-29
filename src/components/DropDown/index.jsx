import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from 'utils/index';
import { I18nContext } from 'context/index';
import { useOutsideClick } from 'hooks/index';

import styles from './DropDown.scss';

import { ArrowIcon } from '../../icons';

const DropDown = ({ data, onChane }) => {
  const t = useContext(I18nContext);
  const dropDownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useOutsideClick(dropDownRef, () => {
    setIsOpen(false);
  });

  const isOpenToggler = () => {
    setIsOpen(!isOpen);
  };

  const updateActiveIndexHandler = (index) => {
    onChane(data[index]);
    setActiveIndex(index);
    isOpenToggler();
  };

  const renderoptions = data.map((item, index) => (
    <div
      key={item}
      role="button"
      onClick={() => updateActiveIndexHandler(index)}
      className={classNames(styles.content__item, {
        [styles.content__item_active]: index === activeIndex,
      })}
      disabled={index === activeIndex}
    >
      {t(item)}
    </div>
  ));

  return (
    <div className={styles.wrapper} ref={dropDownRef}>
      <div
        role="button"
        onClick={isOpenToggler}
        className={classNames(styles.header, {
          [styles.header__open]: isOpen,
        })}
      >
        <p className={styles.header__text}>{t(data[activeIndex])}</p>
        <ArrowIcon
          className={styles.header__icon}
          style={{ transform: `rotate(${!isOpen ? 180 : 0}deg)` }}
        />
      </div>
      {isOpen && <div className={styles.content}>{renderoptions}</div>}
    </div>
  );
};

DropDown.propTypes = {
  data: PropTypes.array,
  onChane: PropTypes.func,
};

DropDown.defaultProps = {
  data: [],
  onChane: noop,
};

export default DropDown;
