import { LoginFormShape } from '@ch/components/forms/login/types';
import { FormField } from '@ch/components/forms/types';

export const logInFormFields: FormField<keyof LoginFormShape> = {
    email: {
        name: 'email',
        label: 'email',
        keyboardType: 'email-address',
        returnKeyType: 'next',
        blurOnSubmit: false,
    },
    password: {
        name: 'password',
        label: 'password',
        secureTextEntry: true,
    },
};

export const loginSchemaKeys = Object.keys(logInFormFields) as (keyof LoginFormShape)[];
