import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';

import { AuthenticationParamList } from '@ch/navigation/navigators/authentication-navigator/types';
import { ScreenRoutes } from '@ch/navigation/routes';

export type SignupFormValues = {
    email: string;
    promoCode?: string;
    agreedTnC: boolean;
    phoneNumber: {
        countryCode: string;
        number: string;
    };
    password: string;
    confirmPassword: string;
    username: string;
    firstName: string;
    lastName: string;
    dob: string;
};

type ExcludedTypes<T, U> = {
    [K in Exclude<keyof T, keyof U>]: T[K];
};

export type SignupStepOneShape = Pick<SignupFormValues, 'email' | 'phoneNumber' | 'agreedTnC' | 'promoCode'>;
export type SignupStepTwoShape = ExcludedTypes<SignupFormValues, SignupStepOneShape>;

export type SignupFormProps = {
    activeStep: number;
    setActiveStep: Dispatch<SetStateAction<number>>;
};

export type SignupStepOneFormProps = {
    setRegisterFirstStepValues: Dispatch<SetStateAction<SignupStepOneShape>>;
} & SignupFormProps;

export type SignupStepTwoFormProps = {
    firstStepFormValues: SignupStepOneShape;
} & SignupFormProps;

export type authRegisterScreen = StackNavigationProp<AuthenticationParamList, ScreenRoutes.REGISTRATION>;
