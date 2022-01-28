import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/useForm';

import { becomeAccountantFields, becomeAccountantScheme } from './fields';

const Form = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeAccountantScheme,
  });

  const handleBecomeAccountantForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleBecomeAccountantForm');
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <h2>Դարձիր հաշվապահ</h2>
      <Input {...becomeAccountantFields.name} />
      <Input {...becomeAccountantFields.phoneNumber} />
      <Input {...becomeAccountantFields.email} />
      <Input {...becomeAccountantFields.lessonType} />
      <Input {...becomeAccountantFields.lessonFormation} />
      <Button
        disabled={!isValid}
        onClick={handleSubmit(handleBecomeAccountantForm)}
      >
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};
export default Form;
