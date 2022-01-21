import { SignupStepOneShape, SignupStepTwoShape } from '@ch/components/forms/Register/types';
import { FormField } from '@ch/components/forms/types';

export const signupStepOneFields: FormField<keyof SignupStepOneShape> = {
    email: {
        name: 'email',
        label: 'email',
        keyboardType: 'email-address',
    },
    phoneNumber: {
        name: 'phoneNumber',
        label: 'phone_number',
    },
    promoCode: {
        name: 'promoCode',
        label: 'promo_code',
    },
    agreedTnC: {
        name: 'agreedTnC',
        placeholder: 'agreed_tnc',
    },
};

export const signupStepTwoFields: FormField<keyof SignupStepTwoShape> = {
    firstName: {
        name: 'firstName',
        label: 'first_name',
    },
    lastName: {
        name: 'lastName',
        label: 'last_name',
    },
    dob: {
        name: 'dob',
        label: 'date_of_birth',
    },
    username: {
        name: 'username',
        label: 'username',
    },
    password: {
        name: 'password',
        label: 'password',
        strengthMeter: true,
        secureTextEntry: true,
    },
    confirmPassword: {
        name: 'confirmPassword',
        label: 'confirm_password',
        secureTextEntry: true,
    },
};

export const signupStepOneSchemaKeys = Object.keys(signupStepOneFields) as (keyof SignupStepOneShape)[];
export const signupStepTwoSchemaKeys = Object.keys(signupStepTwoFields) as (keyof SignupStepTwoShape)[];
