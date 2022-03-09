import React, { useContext, useState, useRef } from 'react';

import { Button } from 'components/index';
import { I18nContext } from 'context/index';
import { useOnScreen } from 'hooks/index';

import styles from './BecomeAccountant.scss';
import AccountantForm from './AccountantForm';

const BecomeAccountantSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBack = () => setIsOpen(false);
  const t = useContext(I18nContext);
  const ref = useRef();
  useOnScreen(ref);
  return (
    <div className={`container ${styles.wrapper}`} ref={ref}>
      {isOpen ? (
        <AccountantForm handleBack={handleBack} isOpen={isOpen} />
      ) : (
        <div className={styles.wrapper__container}>
          <h2 className={styles.title}>{t('becomeAccountant')}</h2>
          <p className={styles.subtitle}>{t('mainTitle')}</p>
          <Button className={styles.login} onClick={() => setIsOpen(true)}>
            {t(`register`)}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BecomeAccountantSection;
