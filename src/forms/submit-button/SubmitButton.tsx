import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Keyboard } from 'react-native';

import { Typography } from '@ch/components';

import { SubmitButtonProps } from './types';
import { StyledSubmitButton } from './styles';

export const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, loading, onPress, text = 'submit' }) => {
    const { t } = useTranslation('forms');
    const handlePress = () => {
        Keyboard.dismiss();
        onPress();
    };

    return (
        <StyledSubmitButton background="secondary" {...{ disabled }} onPress={handlePress}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Typography type="h3" fontFamily="bold">
                    {t(text)}
                </Typography>
            )}
        </StyledSubmitButton>
    );
};
