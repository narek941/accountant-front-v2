import React from 'react';

import { Button } from 'components/index';
import { useForm, FormWrapper } from 'hooks/useForm';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

import Input from '../../Input';

const BecomeEmployeeForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeEmployeeScheme,
  });

  const handleBecomeEmployeeForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleBecomeEmployeeForm');
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <Input {...becomeEmployeeFields.name} />
      <Input {...becomeEmployeeFields.phoneNumber} />
      <Input {...becomeEmployeeFields.email} />
      <Input {...becomeEmployeeFields.birthday} />
      <Input {...becomeEmployeeFields.profession} />
      <Input {...becomeEmployeeFields.experience} />
      <Button
        disabled={!isValid}
        onClick={handleSubmit(handleBecomeEmployeeForm)}
      >
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};
export default BecomeEmployeeForm;
