import React, { useState } from 'react';
import classNames from 'classnames';

import { useWindowSize } from 'hooks/index';

import styles from './Footer.scss';

import {
  FbIcon,
  MailIcon,
  ArrowIcon,
  PhoneIcon,
  LocationIcon,
  LinkedinIcon,
} from '../../icons';

const FooterContainer = () => {
  const { isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => setIsOpen(!isOpen);

  return (
    <footer className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        {!isOpen && (
          <div className={styles.routes}>
            <div className={styles.routes__item}>
              <ArrowIcon />
            </div>
            <div className={styles.routes__item}>
              <ArrowIcon />
            </div>
          </div>
        )}

        {!isMobile ? (
          <>
            <div className={styles.routes}>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <LocationIcon />
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <PhoneIcon />
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <MailIcon />
              </div>
            </div>
            <div className={styles.routes}>
              <div className={styles.routes__item}>
                <FbIcon />
              </div>
              <div className={styles.routes__item}>
                <LinkedinIcon />
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={classNames(styles.wrapper__animation, {
                [styles.wrapper__animation_active]: isOpen,
              })}
            >
              <div className={styles.routes__item}>
                <FbIcon />
              </div>
              <div className={styles.routes__item}>
                <LinkedinIcon />
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <LocationIcon />
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <PhoneIcon />
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <MailIcon />
              </div>
            </div>
            <div
              className={classNames(styles.wrapper__switcher, {
                [styles.wrapper__switcher_active]: isOpen,
              })}
            >
              <ArrowIcon
                onClick={isOpenHandler}
                className={styles.wrapper__switcher_close}
              />
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default FooterContainer;
