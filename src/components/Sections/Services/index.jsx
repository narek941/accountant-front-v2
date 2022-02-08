import React from 'react';

import { servicesList } from 'utils/index';
import { BECOME_PARTNER_SECTION_ID } from 'constants/index';

import styles from './Services.scss';

import Button from '../../Button';
import ScrollView from '../../ScrollView';

const ServicesSection = () => {
  const renderServicesList = servicesList.map(
    ({ id, Icon, text, hoverText }) => (
      <div key={id} className={styles.list__item}>
        <div className={styles.list__item_info}>
          <p className={styles.list__item_info_text}>{hoverText}</p>
          <ScrollView link={BECOME_PARTNER_SECTION_ID}>
            <Button>Դառնալ գործընկեր</Button>
          </ScrollView>
        </div>
        <Icon />
        <p className={styles.list__item_text}>{text}</p>
      </div>
    ),
  );
  return (
    <div className="container">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.list}>{renderServicesList}</div>
      <Button className={styles.btn}>More</Button>
    </div>
  );
};

export default ServicesSection;
