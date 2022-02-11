import React from 'react';

import { MAP_KEY } from 'constants/index';

import Map from './Map';
import styles from './AboutUs.scss';
import AboutusForm from './AboutusForm';

import { MailIcon, PhoneIcon, LocationIcon } from '../../../icons';

const AboutUsSection = () => (
  <div className={`container ${styles.wrapper}`}>
    <h2 className={styles.title}>Կապ Մեզ հետ</h2>
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
          <h3 className={styles.content__info__header}>Կոնտակտներ</h3>
          <div className={styles.content__info__routes}>
            <MailIcon />
            <span>info@acc-accountant.am</span>
          </div>
          <div className={styles.content__info__routes}>
            <PhoneIcon />
            <span>+374 98 88 29 44, +374 44 06 06 19</span>
          </div>
          <div className={styles.content__info__routes}>
            <LocationIcon />
            <span>ք․ Երևան, Բաղրամյան 75&#92;17</span>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <p>©2022 ACC ACCOUNTANT. All rights reserved.</p>
      <p>Powered by ShellLogix</p>
    </div>
  </div>
);

export default AboutUsSection;
