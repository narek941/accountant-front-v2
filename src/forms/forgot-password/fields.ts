import { ForgotPasswordFormShape } from '@ch/components/forms/forgot-password/types';
import { FormField } from '@ch/components/forms/types';

export const forgotPasswordFields: FormField<keyof ForgotPasswordFormShape> = {
    email: {
        name: 'email',
        label: 'email',
        keyboardType: 'email-address',
    },
};

export const forgotPasswordSchemaKeys = Object.keys(forgotPasswordFields) as (keyof ForgotPasswordFormShape)[];
