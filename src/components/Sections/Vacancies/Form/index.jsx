import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/useForm';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

const Form = () => {
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
export default Form;
