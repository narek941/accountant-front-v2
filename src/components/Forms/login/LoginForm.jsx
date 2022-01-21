import React from 'react';

import Input from 'components/Input';
import {
  logInFormFields,
  loginSchemaKeys,
  // eslint-disable-next-line import/no-unresolved,import/extensions
} from 'components/Forms/login/fields';
import { useForm, FormWrapper } from 'components/Forms/use-form';

export const LoginForm = () => {
  const { formMethods, isSubmitting, handleSubmit } = useForm({
    schemaKeys: loginSchemaKeys,
  });

  const handleLogin = (e) => {
    console.log(e);
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <Input {...logInFormFields.email} />
      <Input {...logInFormFields.password} />
      <button onClick={handleSubmit(handleLogin)}>Click me nigga</button>
    </FormWrapper>
  );
};
