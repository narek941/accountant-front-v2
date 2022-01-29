import React from 'react';

import { Button } from 'components/index';
import { useToggle } from 'hooks/index';

import styles from './BecomeAccountant.scss';
import AccountantForm from './AccountantForm';

const BecomeAccountantSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.title}>Դարձիր հաշվապահ</h2>
      {isOpen ? (
        <AccountantForm />
      ) : (
        <>
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

export default BecomeAccountantSection;
