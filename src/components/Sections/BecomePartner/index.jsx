import React from 'react';

import { Button } from 'components/index';
import { useToggle } from 'hooks/index';

import styles from './BecomePartner.scss';
import PartnerForm from './PartnerForm';

const BecomePartnerSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const handleBack = () => setIsOpen();

  return (
    <div className={`container ${styles.wrapper}`}>
      {isOpen ? (
        <PartnerForm handleBack={handleBack} />
      ) : (
        <>
          <h2 className={styles.title}>Դարձի՛ր գործընկեր</h2>
          <p className={styles.subtitle}>
            Acc Accountant - ը ստեղծվել է մատուցելու որակյալ ծառայություններ,
            որպեսզի ձեր բիզնեսը կրկնակի խնայի՝ ժամանակ, ֆինանսներ, աշխատուժ,
            տեխնիկական միջոցներ,որոնք կարող են ուղղվել բիզնեսի իրական պոտենցիալ
            զարգացմանը։ Ձեր հուսալի գործընկերը հարկային դաշտում և բիզնեսում։
          </p>
          <Button className={styles.login} onClick={() => setIsOpen()}>
            Գրանցվել
          </Button>
        </>
      )}
    </div>
  );
};

export default BecomePartnerSection;
