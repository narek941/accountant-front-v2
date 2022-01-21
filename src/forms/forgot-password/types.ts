import { StackNavigationProp } from '@react-navigation/stack';

import { AuthenticationParamList } from '@ch/navigation/navigators/authentication-navigator/types';
import { ScreenRoutes } from '@ch/navigation/routes';

export type ForgotPasswordFormShape = {
    email: string;
};

export type ForgotPasswordFormProps = {
    submitHandler: () => void;
};
export type ForgotPasswordStack = StackNavigationProp<AuthenticationParamList, ScreenRoutes.FORGOT_PASSWORD>;
