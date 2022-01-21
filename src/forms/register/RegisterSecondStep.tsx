import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '@ch/hooks';
import { setUserLoggedIn } from '@ch/redux/slices/auth/slice';
import { useForm } from '@ch/components/forms/use-form';
import { SubmitButton } from '@ch/components/forms/submit-button/SubmitButton';
import { Input } from '@ch/components';

import { signupStepTwoFields, signupStepTwoSchemaKeys } from './fields';
import { authRegisterScreen, SignupStepTwoFormProps, SignupStepTwoShape } from './types';

export const RegisterSecondStep: React.FC<SignupStepTwoFormProps> = ({ firstStepFormValues }) => {
    const navigation = useNavigation<authRegisterScreen>();
    const dispatch = useAppDispatch();
    const { formMethods, handleSubmit, isSubmitting } = useForm<keyof SignupStepTwoShape, SignupStepTwoShape>({
        schemaKeys: signupStepTwoSchemaKeys,
    });

    const handleSignupFormSubmit: SubmitHandler<SignupStepTwoShape> = (values) => {
        console.log('Form values ', { ...firstStepFormValues, ...values });
        dispatch(setUserLoggedIn({ loggedIn: true }));
        navigation.pop();
    };

    return (
        <FormProvider {...formMethods}>
            <Input {...signupStepTwoFields.firstName} />
            <Input {...signupStepTwoFields.lastName} />
            <Input {...signupStepTwoFields.dob} />
            <Input {...signupStepTwoFields.password} />
            <Input {...signupStepTwoFields.confirmPassword} />

            <SubmitButton loading={isSubmitting} onPress={handleSubmit(handleSignupFormSubmit)} />
        </FormProvider>
    );
};
