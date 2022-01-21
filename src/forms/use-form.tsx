import React, { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm as useReactHookForm, UseFormProps as UseReactHookFormProps } from 'react-hook-form';

import { useComposeFormSchema } from '@ch/components/forms/utils';

import { UseFormProps, FormWrapperProps, FieldShapeLookup, FormFieldNames } from './types';
import { FormContainer } from './styles';

/**
 * Wraps the useForm hook from react-hook-form
 * Creates the schema automatically from the field names, that are strongly typed to the
 * instance using the form, plus exposes methods from the form for ease of use
 */
export function useForm<K extends FormFieldNames, T extends FieldShapeLookup<K>>({
    schemaKeys,
    defaultValues,
    options,
}: UseFormProps<K, T>) {
    const schema = useComposeFormSchema<K>(schemaKeys);
    const formOptions: UseReactHookFormProps<T> = {
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
}

/**
 * Convenience wrapper
 * Wraps the form in the provider as well as a container set to the maximum width of forms
 */
export function FormWrapper<T extends Record<string, unknown>>({ formMethods, children }: FormWrapperProps<T>) {
    return (
        <FormProvider {...formMethods}>
            <FormContainer>{children}</FormContainer>
        </FormProvider>
    );
}
