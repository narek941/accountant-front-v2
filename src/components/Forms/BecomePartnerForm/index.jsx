import React from 'react';

import { Button } from 'components/index';

import { becomePartnerFields, becomePartnerScheme } from './fields';

import Input from '../../Input';
import { useForm, FormWrapper } from '../use-form';

const BecomePartnerForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerScheme,
  });

  const handleBecomePartnerForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleBecomePartnerForm');
  };

  return (
    <div>
      <FormWrapper {...{ formMethods }}>
        <h2>Դարձիր գործընկեր</h2>
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
          disabled={!isValid}
          onClick={handleSubmit(handleBecomePartnerForm)}
        >
          Դարձիր գործընկեր
        </Button>
      </FormWrapper>
    </div>
  );
};
export default BecomePartnerForm;
