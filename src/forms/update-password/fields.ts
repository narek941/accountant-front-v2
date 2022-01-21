import { FormField } from '@ch/components/forms/types';
import { UpdatePasswordShape } from '@ch/components/forms/update-password/types';

export const updatePasswordFields: FormField<keyof UpdatePasswordShape> = {
    newPassword: {
        name: 'newPassword',
        label: 'forms:new_password',
        secureTextEntry: true,
        strengthMeter: true,
        returnKeyType: 'next',
        blurOnSubmit: false,
    },
    confirmPassword: {
        name: 'confirmPassword',
        placeholder: 'forms:confirm_password',
        label: 'forms:password_helper_text',
        secureTextEntry: true,
    },
};

export const updatePasswordSchemaKeys = Object.keys(updatePasswordFields) as (keyof UpdatePasswordShape)[];
