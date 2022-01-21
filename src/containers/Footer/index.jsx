import React from 'react';
import classNames from 'classnames';

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
  return (
    <footer className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.routes}>
          <div className={styles.routes__item}>
            <ArrowIcon />
          </div>
          <div className={styles.routes__item}>
            <ArrowIcon />
          </div>
        </div>
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
      </div>
    </footer>
  );
};

export default FooterContainer;
