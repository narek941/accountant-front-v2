import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/useForm';

import { becomePartnerFields, becomePartnerScheme } from './fields';

const Form = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerScheme,
  });

  const handlePartnerForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handlePartnerForm');
  };

  return (
    <div>
      <FormWrapper {...{ formMethods }}>
        <h2>Դիմել աշխատանքի համար</h2>
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
        <Button disabled={!isValid} onClick={handleSubmit(handlePartnerForm)}>
          Դարձիր գործընկեր
        </Button>
      </FormWrapper>
    </div>
  );
};
export default Form;
