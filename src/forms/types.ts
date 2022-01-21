import { UseFormProps as UseReactHookFormProps, UseFormReturn } from 'react-hook-form';
import { KeyboardTypeOptions, ReturnKeyType } from 'react-native';
import { ReactNode } from 'react';

/**
 * Shape of any form field used throughout the app.
 */
export type FormField<T extends FormFieldNames> = {
    [FieldName in T]: {
        name: string;
        label?: string;
        placeholder?: string;
        secureTextEntry?: boolean;
        keyboardType?: KeyboardTypeOptions;
        strengthMeter?: boolean;
        returnKeyType?: ReturnKeyType;
        blurOnSubmit?: boolean;
    };
};

/**
 * All the registered field names we use through the app.
 * This is important as every typing through schemas, values and fields are typed via this
 */
export type FormFieldNames =
    | 'firstName'
    | 'lastName'
    | 'username'
    | 'dob'
    | 'email'
    | 'password'
    | 'newPassword'
    | 'confirmPassword'
    | 'phoneNumber'
    | 'agreedTnC'
    | 'address'
    | 'townOrCity'
    | 'postCode'
    | 'country'
    | 'promoCode';

export type FieldShapeLookup<K extends FormFieldNames> = { [P in K]?: Record<FormFieldNames, unknown>[P] };

export type UseFormProps<K extends FormFieldNames, T extends FieldShapeLookup<K>> = {
    schemaKeys: K[];
    defaultValues?: UseReactHookFormProps<T>['defaultValues'];
    options?: Omit<UseReactHookFormProps<T>, 'defaultValues'>;
};

export type FormWrapperProps<T extends Record<string, unknown>> = {
    formMethods: UseFormReturn<T>;
    children: ReactNode;
};
