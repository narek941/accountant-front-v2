import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
import { SubmitHandler } from 'react-hook-form';

import { ScreenRoutes } from '@ch/navigation/routes';
import { FormWrapper, useForm } from '@ch/components/forms/use-form';
import { SubmitButton } from '@ch/components/forms/submit-button/SubmitButton';
import { sleep } from '@ch/utils/sleep';
import { Flex, Input } from '@ch/components';

import { ForgotPasswordFormProps, ForgotPasswordStack, ForgotPasswordFormShape } from './types';
import { forgotPasswordFields, forgotPasswordSchemaKeys } from './fields';

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ submitHandler }) => {
    const { t } = useTranslation('auth');
    const navigation = useNavigation<ForgotPasswordStack>();
    const { formMethods, isSubmitting, handleSubmit } = useForm<keyof ForgotPasswordFormShape, ForgotPasswordFormShape>(
        {
            schemaKeys: forgotPasswordSchemaKeys,
        },
    );

    const handleForgotPasswordSubmit: SubmitHandler<ForgotPasswordFormShape> = async ({ email }) => {
        await sleep(2000);
        submitHandler();
        navigation.navigate(ScreenRoutes.UPDATE_PASSWORD, { email });
    };

    return (
        <FormWrapper {...{ formMethods }}>
            <Input {...forgotPasswordFields.email} />
            <Flex marginString="80px 0 40px">
                <SubmitButton
                    text={t('send_email')}
                    loading={isSubmitting}
                    onPress={handleSubmit(handleForgotPasswordSubmit)}
                />
            </Flex>
        </FormWrapper>
    );
};
