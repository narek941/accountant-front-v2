import React, { useState } from 'react';
import classNames from 'classnames';

import { useWindowSize } from 'hooks/index';
import {
  LOCATION_LINK,
  PHONE_NUMBER_LINK,
  MAIL_LINK,
  FACEBOOK_LINK,
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
} from 'constants/index';

import styles from './Footer.scss';

import {
  FbIcon,
  MailIcon,
  ArrowIcon,
  PhoneIcon,
  LocationIcon,
  LinkedinIcon,
  InstagramIcon,
} from '../../icons';
import { NextLink } from '../../components';

const FooterContainer = () => {
  const { isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => setIsOpen(!isOpen);
  const targetBlank = '_blank';

  return (
    <footer className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        {!isOpen && (
          <div className={styles.routes}>
            <div className={styles.routes__item}>
              <span>03</span>
            </div>
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
                <NextLink href={LOCATION_LINK} target={targetBlank}>
                  <LocationIcon />
                </NextLink>
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <NextLink href={`tel:${PHONE_NUMBER_LINK}`}>
                  <PhoneIcon />
                </NextLink>
              </div>
              <div
                className={classNames(
                  styles.routes__item,
                  styles.routes__item_link,
                )}
              >
                <NextLink href={`mailto:${MAIL_LINK}`}>
                  <MailIcon />
                </NextLink>
              </div>
            </div>
            <div className={styles.routes}>
              <div className={styles.routes__item}>
                <NextLink href={FACEBOOK_LINK} target={targetBlank}>
                  <FbIcon />
                </NextLink>
              </div>
              <div className={styles.routes__item}>
                <NextLink href={INSTAGRAM_LINK} target={targetBlank}>
                  <InstagramIcon className={styles.insta} />
                </NextLink>
              </div>
              <div className={styles.routes__item}>
                <NextLink href={LINKEDIN_LINK} target={targetBlank}>
                  <LinkedinIcon />
                </NextLink>
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
                <InstagramIcon className={styles.insta} />
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
