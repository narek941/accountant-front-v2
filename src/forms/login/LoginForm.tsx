import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';

import { useAppDispatch } from '@ch/hooks';
import { ScreenRoutes } from '@ch/navigation/routes';
import { setUserLoggedIn } from '@ch/redux/slices/auth/slice';
import { ForgotPasswordButton, SignUpHere } from '@ch/screens/authentication/login/Login';
import { FormWrapper, useForm } from '@ch/components/forms/use-form';
import { SubmitButton } from '@ch/components/forms/submit-button/SubmitButton';
import { Flex, Input } from '@ch/components';

import { logInFormFields, loginSchemaKeys } from './fields';
import { LoginFormShape } from './types';

export const LoginForm = () => {
    const passwordRef = useRef<TextInput>(null);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<any>();
    const { formMethods, isSubmitting, handleSubmit } = useForm<keyof LoginFormShape, LoginFormShape>({
        schemaKeys: loginSchemaKeys,
    });

    const handleLogin: SubmitHandler<LoginFormShape> = () => {
        dispatch(setUserLoggedIn({ loggedIn: true }));
        navigation.navigate(ScreenRoutes.SPORTS_HOME);
    };

    const focusPassword = () => passwordRef.current?.focus();

    return (
        <FormWrapper {...{ formMethods }}>
            <Input {...logInFormFields.email} onSubmitEditing={focusPassword} />
            <Input {...logInFormFields.password} ref={passwordRef} />
            <ForgotPasswordButton />
            <Flex marginString="50px 0">
                <SubmitButton text={t('forms:login')} loading={isSubmitting} onPress={handleSubmit(handleLogin)} />
                <SignUpHere />
            </Flex>
        </FormWrapper>
    );
};
