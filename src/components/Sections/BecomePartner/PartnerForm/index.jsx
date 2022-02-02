import React, { useState } from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { becomePartnerFields, becomePartnerScheme } from './fields';

import styles from '../BecomePartner.scss';

const PartnerForm = () => {
  const [requestSent, setRequestSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerScheme,
  });

  const handlePartnerForm = ({
    name,
    phoneNumber,
    email,
    tin,
    organizationName,
    organizationType,
    taxType,
    address,
    quantityOfEmployees,
    activityDescription,
  }) => {
    axiosInstance
      .post('/mail/partnership', {
        email,
        fullName: name,
        phoneNumber,
        tin,
        companyName: organizationName,
        legalForm: organizationType,
        taxType,
        address,
        quantityOfEmployees,
        activityDescription,
      })
      .then(() => {
        setRequestSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, 'handlePartnerForm');
        setRequestSent(false);
      });
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
      <Button
        type="submit"
        className={styles.form_submit}
        disabled={!isValid || requestSent}
      >
        Դարձիր գործընկեր
      </Button>
    </FormWrapper>
  );
};
export default PartnerForm;
