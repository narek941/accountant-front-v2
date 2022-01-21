import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
import { SubmitHandler } from 'react-hook-form';
import { TextInput } from 'react-native';

import { useAppDispatch } from '@ch/hooks';
import { ScreenRoutes } from '@ch/navigation/routes';
import { setUserLoggedIn } from '@ch/redux/slices/auth/slice';
import { sleep } from '@ch/utils/sleep';
import { FormWrapper, useForm } from '@ch/components/forms/use-form';
import { SubmitButton } from '@ch/components/forms/submit-button/SubmitButton';
import { Flex, Input } from '@ch/components';

import { updatePasswordFields, updatePasswordSchemaKeys } from './fields';
import { UpdatePasswordShape } from './types';

export const UpdatePasswordForm: React.FC = () => {
    const passwordRef = useRef<TextInput>(null);
    const { t } = useTranslation('forms');
    const navigation = useNavigation<any>();
    const dispatch = useAppDispatch();
    const { formMethods, isSubmitting, handleSubmit } = useForm<keyof UpdatePasswordShape, UpdatePasswordShape>({
        schemaKeys: updatePasswordSchemaKeys,
    });

    const handleUpdatePasswordSubmit: SubmitHandler<UpdatePasswordShape> = async () => {
        await sleep(2000);
        dispatch(setUserLoggedIn({ loggedIn: true }));
        navigation.navigate(ScreenRoutes.SPORTS_HOME);
    };

    const focusPassword = () => passwordRef.current?.focus();

    return (
        <FormWrapper {...{ formMethods }}>
            <Input {...updatePasswordFields.newPassword} onSubmitEditing={focusPassword} />
            <Flex marginString="0 0 5px" />
            <Input {...updatePasswordFields.confirmPassword} ref={passwordRef} />
            <Flex marginString="50px 0">
                <SubmitButton
                    loading={isSubmitting}
                    onPress={handleSubmit(handleUpdatePasswordSubmit)}
                    text={t('update_password')}
                />
            </Flex>
        </FormWrapper>
    );
};
