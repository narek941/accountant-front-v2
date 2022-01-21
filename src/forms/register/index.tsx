import React, { useState } from 'react';

import { SignupFormProps, SignupStepOneShape } from './types';
import { RegisterFirstStep } from './RegisterFirstStep';
import { RegisterSecondStep } from './RegisterSecondStep';

export const RegisterForm: React.FC<SignupFormProps> = ({ activeStep, setActiveStep }) => {
    const [registerFirstStepValues, setRegisterFirstStepValues] = useState<SignupStepOneShape>({
        email: '',
        promoCode: '',
        agreedTnC: false,
        phoneNumber: {
            countryCode: '',
            number: '',
        },
    });

    return activeStep === 1 ? (
        <RegisterFirstStep
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            setRegisterFirstStepValues={setRegisterFirstStepValues}
        />
    ) : (
        <RegisterSecondStep
            firstStepFormValues={registerFirstStepValues}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
        />
    );
};
