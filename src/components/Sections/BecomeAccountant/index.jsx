import React, { useContext } from 'react';

import { Button } from 'components/index';
import { useToggle } from 'hooks/index';
import { I18nContext } from 'context/index';

import styles from './BecomeAccountant.scss';
import AccountantForm from './AccountantForm';

const BecomeAccountantSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const handleBack = () => setIsOpen();
  const t = useContext(I18nContext);

  return (
    <div className={`container ${styles.wrapper}`}>
      {isOpen ? (
        <AccountantForm handleBack={handleBack} />
      ) : (
        <>
          <h2 className={styles.title}>{t('becomeAccountant')}</h2>
          <p className={styles.subtitle}>{t('mainTitle')}</p>
          <Button className={styles.login} onClick={() => setIsOpen()}>
            register
          </Button>
        </>
      )}
    </div>
  );
};

export default BecomeAccountantSection;
