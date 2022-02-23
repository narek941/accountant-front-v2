import React, { useState, useContext } from 'react';

import { servicesList } from 'utils/index';
import { I18nContext } from 'context/index';
import { BECOME_PARTNER_SECTION_ID } from 'constants/index';
import { Button } from 'components/index';
import { useWindowSize } from 'hooks/index';

import styles from './Services.scss';

import ScrollView from '../../ScrollView';

const ServicesSection = () => {
  const t = useContext(I18nContext);
  const { isMobile } = useWindowSize();
  const [isShow, setIsShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMore = () => {
    setIsShow(!isShow);
    setIsClicked(true);
  };
  const loadCount = isShow || !isMobile ? servicesList.length : 3;
  const buttonName = !isShow && `${t('more')}`;

  const renderServicesList = servicesList
    .slice(0, loadCount)
    .map(({ id, Icon, text, hoverText }) => (
      <div key={id} className={styles.list__item}>
        <div className={styles.list__item_info}>
          <p className={styles.list__item_info_text}>{t(hoverText)}</p>
          <ScrollView link={BECOME_PARTNER_SECTION_ID}>
            <Button>{t('becomePartner')}</Button>
          </ScrollView>
        </div>
        <Icon />
        <p className={styles.list__item_text}>{t(text)}</p>
      </div>
    ));
  return (
    <div className="container">
      <h2 className={styles.title}>{t('services')}</h2>
      <div className={styles.list}>
        {renderServicesList}
        {!isClicked && (
          <Button className={styles.showBtn} onClick={handleMore}>
            {buttonName}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
