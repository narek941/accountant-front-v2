import React, { useRef, useContext } from 'react';

import { I18nContext } from 'context/index';
import {
  BECOME_PARTNER_SECTION_ID,
  BECOME_ACCOUNTANT_SECTION_ID,
} from 'constants/index';
import { useOnScreen } from 'hooks/index';

import styles from './Main.scss';

import { LogoIcon } from '../../../icons';
import ScrollView from '../../ScrollView';

const MainSection = () => {
  const t = useContext(I18nContext);
  const ref = useRef();
  useOnScreen(ref);

  return (
    <div className={`container ${styles.wrapper}`} ref={ref}>
      <div className={styles.wrapper__container}>
        <LogoIcon className={styles.wrapper__logo} />
        <h3 className={styles.wrapper__title}>{t('mainTitle')}</h3>
        <ScrollView
          className={styles.wrapper__link}
          link={BECOME_PARTNER_SECTION_ID}
        >
          {t('becomePartner')}
        </ScrollView>
        <ScrollView
          className={styles.wrapper__link}
          link={BECOME_ACCOUNTANT_SECTION_ID}
        >
          {t('becomeAccountant')}
        </ScrollView>
      </div>
    </div>
  );
};

export default MainSection;
