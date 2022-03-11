import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import {
  LOCATION_LINK,
  PHONE_NUMBER_LINK,
  MAIL_LINK,
  FACEBOOK_LINK,
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
} from 'constants/index';
import { ScrollView, NextLink } from 'components/index';

import styles from './Footer.scss';

import { selectIndex } from '../../store/selectors/mainSelectors';
import {
  FbIcon,
  MailIcon,
  ArrowIcon,
  PhoneIcon,
  LocationIcon,
  LinkedinIcon,
  InstagramIcon,
} from '../../icons';

const FooterContainer = () => {
  const activeIndexObj = useSelector(selectIndex);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => setIsOpen(!isOpen);
  const targetBlank = '_blank';
  const isNextNull =
    activeIndexObj.next === null || typeof activeIndexObj.next === 'undefined';

  const checkNextLink = isNextNull
    ? activeIndexObj.current
    : activeIndexObj.next;

  const isPrevNull =
    activeIndexObj.prev === null || typeof activeIndexObj.prev === 'undefined';
  const checkPrevLink = isPrevNull
    ? activeIndexObj.current
    : activeIndexObj.prev;
  const checkedIndex =
    activeIndexObj?.index < 10
      ? `0${activeIndexObj?.index}`
      : activeIndexObj?.index;

  return (
    <footer className={styles.container}>
      <div
        className={classNames(`container ${styles.wrapper}`, {
          [styles.wrapper_reverse]: isOpen,
        })}
      >
        {!isOpen && (
          <div className={styles.routes}>
            <div className={styles.routes__item}>
              <span>{checkedIndex}</span>
            </div>
            <div
              className={classNames(styles.routes__item, {
                [styles.routes__item_disable]: isNextNull,
              })}
            >
              <ScrollView link={checkNextLink}>
                <ArrowIcon className={styles.routes__rotate} />
              </ScrollView>
            </div>
            <div
              className={classNames(styles.routes__item, {
                [styles.routes__item_disable]: isPrevNull,
              })}
            >
              <ScrollView link={checkPrevLink}>
                <ArrowIcon />
              </ScrollView>
            </div>
          </div>
        )}
        <div
          className={classNames(styles.routes, {
            [styles.wrapper__animation]: isOpen,
          })}
        >
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
        <div
          className={classNames(styles.routes, {
            [styles.wrapper__animation]: isOpen,
          })}
        >
          <div className={styles.routes__item}>
            <NextLink href={FACEBOOK_LINK} target={targetBlank}>
              <FbIcon />
            </NextLink>
          </div>
          <div className={styles.routes__item}>
            <NextLink href={INSTAGRAM_LINK} target={targetBlank}>
              <InstagramIcon />
            </NextLink>
          </div>
          <div className={styles.routes__item}>
            <NextLink href={LINKEDIN_LINK} target={targetBlank}>
              <LinkedinIcon />
            </NextLink>
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
      </div>
    </footer>
  );
};
export default FooterContainer;
