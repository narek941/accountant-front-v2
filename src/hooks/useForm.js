import React, { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm as useReactHookForm } from 'react-hook-form';

import { useComposeFormSchema } from 'components/Forms/utils';

export const useForm = ({ schemaKeys, defaultValues, options }) => {
  const schema = useComposeFormSchema(schemaKeys);
  const formOptions = {
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
    ...options,
  };
  const formMethods = useReactHookForm(formOptions);

  return {
    formMethods,
    handleSubmit: formMethods.handleSubmit,
    isValid: formMethods.formState.isValid,
    isSubmitting: formMethods.formState.isSubmitting,
  };
};

// eslint-disable-next-line react/prop-types
export const FormWrapper = ({ formMethods, children }) => (
  <FormProvider {...formMethods}>
    <div>{children}</div>
  </FormProvider>
);
