import React from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';

import { SubmitButton } from '@ch/components/forms/submit-button/SubmitButton';
import { useForm } from '@ch/components/forms/use-form';
import { Checkbox, Input, PhoneNumberInput } from '@ch/components';

import { signupStepOneFields, signupStepOneSchemaKeys } from './fields';
import { SignupStepOneFormProps, SignupStepOneShape } from './types';

export const RegisterFirstStep: React.FC<SignupStepOneFormProps> = ({ setActiveStep, setRegisterFirstStepValues }) => {
    const { formMethods, handleSubmit, isSubmitting } = useForm<keyof SignupStepOneShape, SignupStepOneShape>({
        schemaKeys: signupStepOneSchemaKeys,
    });

    const handleRegisterFormSubmit: SubmitHandler<SignupStepOneShape> = (values) => {
        setRegisterFirstStepValues({
            email: values.email,
            promoCode: values.promoCode,
            agreedTnC: values.agreedTnC,
            phoneNumber: {
                countryCode: values.phoneNumber.countryCode,
                number: values.phoneNumber.number,
            },
        });
        setActiveStep(2);
    };

    return (
        <FormProvider {...formMethods}>
            <Input {...signupStepOneFields.email} />
            <PhoneNumberInput {...signupStepOneFields.phoneNumber} />
            <Input {...signupStepOneFields.promoCode} />
            <Checkbox {...signupStepOneFields.agreedTnC} />
            <SubmitButton loading={isSubmitting} onPress={handleSubmit(handleRegisterFormSubmit)} />
        </FormProvider>
    );
};
