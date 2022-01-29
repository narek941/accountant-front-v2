import React, { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm as useReactHookForm } from 'react-hook-form';

import { composeFormSchema } from 'utils/index';

export const useForm = ({ schemaKeys, defaultValues, options }) => {
  const schema = composeFormSchema(schemaKeys);
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
export const FormWrapper = ({ formMethods, className, onSubmit, children }) => (
  <FormProvider {...formMethods}>
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  </FormProvider>
);
