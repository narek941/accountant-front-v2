import React from 'react';

import { becomeAccountantFields, becomeAccountantScheme } from './fields';

import Input from '../../Input';
import { useForm, FormWrapper } from '../use-form';

const BecomeAccountantForm = () => {
  const { formMethods, isSubmitting, handleSubmit } = useForm({
    schemaKeys: becomeAccountantScheme,
  });

  const handleLogin = (e) => {
    console.log(e);
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <Input {...becomeAccountantFields.name} />
      <Input {...becomeAccountantFields.phoneNumber} />
      <Input {...becomeAccountantFields.email} />
      <Input {...becomeAccountantFields.lessonType} />
      <Input {...becomeAccountantFields.lessonFormation} />
      <button type="button" onClick={handleSubmit(handleLogin)}>
        Գրանցվել
      </button>
    </FormWrapper>
  );
};
export default BecomeAccountantForm;
