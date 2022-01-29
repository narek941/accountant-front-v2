import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';

import { becomePartnerFields, becomePartnerScheme } from './fields';

import styles from '../BecomePartner.scss';

const PartnerForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerScheme,
  });

  const handlePartnerForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handlePartnerForm');
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(handlePartnerForm)}
      className={styles.form}
      {...{ formMethods }}
    >
      <Input {...becomePartnerFields.name} />
      <Input {...becomePartnerFields.phoneNumber} />
      <Input {...becomePartnerFields.email} />
      <Input {...becomePartnerFields.tin} />
      <Input {...becomePartnerFields.organizationName} />
      <Input {...becomePartnerFields.organizationType} />
      <Input {...becomePartnerFields.taxType} />
      <Input {...becomePartnerFields.address} />
      <Input {...becomePartnerFields.quantityOfEmployees} />
      <Input {...becomePartnerFields.activityDescription} />
      <Button type="submit" className={styles.form_submit} disabled={!isValid}>
        Դարձիր գործընկեր
      </Button>
    </FormWrapper>
  );
};
export default PartnerForm;
