import React, { useContext } from 'react';

import { MAP_KEY, SHELLLOGIX_LINK } from 'constants/index';
import { I18nContext } from 'context/index';

import Map from './Map';
import styles from './AboutUs.scss';
import AboutusForm from './AboutusForm';
import { MailIcon, PhoneIcon, LocationIcon } from '../../../icons';
import { NextLink } from '../../../components/index';

const AboutUsSection = () => {
  const t = useContext(I18nContext);
  const targetBlank = '_blank';

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.title}>{t('contact_us')}</h2>
      <div className={styles.content}>
        <AboutusForm />
        <div className={styles.content__contact}>
          <Map
            mapElement={<div style={{ height: `100%` }} />}
            loadingElement={<div style={{ height: `100%` }} />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`}
            containerElement={<div className={styles.map} />}
          />

          <div className={styles.content__info}>
            <h3 className={styles.content__info__header}>{t('contacts')}</h3>
            <div className={styles.content__info__routes}>
              <MailIcon />
              <span>info@acc-accountant.am</span>
            </div>
            <div className={styles.content__info__routes}>
              <PhoneIcon />
              <span>+374 44 060619, +374 95060619</span>
            </div>
            <div className={styles.content__info__routes}>
              <LocationIcon />
              <span>{t('full_address')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t('copyright')}</p>
        <p>
          Powered by
          <NextLink href={SHELLLOGIX_LINK} target={targetBlank}>
            Shelllogix
          </NextLink>
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
