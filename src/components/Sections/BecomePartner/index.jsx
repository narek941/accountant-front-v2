import React, { useContext, useRef } from 'react';

import { Button } from 'components/index';
import { useToggle, useOnScreen } from 'hooks/index';
import { I18nContext } from 'context/index';

import styles from './BecomePartner.scss';
import PartnerForm from './PartnerForm';

const BecomePartnerSection = () => {
  const t = useContext(I18nContext);
  const [isOpen, setIsOpen] = useToggle(false);
  const ref = useRef();
  useOnScreen(ref);
  const handleBack = () => {
    setIsOpen();
  };

  return (
    <div className={`container ${styles.wrapper}`} ref={ref}>
      {isOpen ? (
        <PartnerForm handleBack={handleBack} />
      ) : (
        <div className={styles.wrapper__container}>
          <h2 className={styles.title}>{t('becomePartner')}</h2>
          <p className={styles.subtitle}>{t('mainTitle')}</p>
          <Button className={styles.login} onClick={() => setIsOpen()}>
            {t('register')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BecomePartnerSection;
