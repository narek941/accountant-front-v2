import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { SchemaLike } from 'yup/lib/types';

import { FormFieldNames } from '@ch/components/forms/types';

/**
 * One single source of truth to create a forms schema
 * This ensures we don't create the same 'email' or 'password' schema in a ton of
 * different spots - and ensure we don't have conflicting validation rules
 */
export const useComposeFormSchema = <K extends FormFieldNames>(fields: K[]) => {
    const { t } = useTranslation();

    const schemaMap: Record<FormFieldNames, SchemaLike> = {
        firstName: Yup.string().required('forms:required_field'),
        lastName: Yup.string().required('forms:required_field'),
        username: Yup.string().required('forms:required_field'),
        dob: Yup.string().required('forms:error_valid_dob'),
        email: Yup.string().required('forms:required_field').email('forms:invalid_email'),
        password: Yup.string().required('forms:required_field'),
        newPassword: Yup.string()
            .required('forms:required_field')
            .matches(/(?=.*\d)/, 'forms:error_numeric')
            .matches(/(?=.*[a-z])/, 'forms:error_lowercase')
            .matches(/(?=.*[A-Z])/, 'forms:error_uppercase')
            .min(8, t('forms:error_min_characters', { min: 8 })),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'forms:unmatched_passwords'),
        agreedTnC: Yup.bool().oneOf([true], 'forms:required_field'),
        phoneNumber: Yup.object({
            countryCode: Yup.string(),
            number: Yup.string(),
        })
            .test({
                message: 'forms:error_phone_number',
                test: (values) => (values.number && values.number.length >= 4 ? true : false),
            })
            .test({
                message: 'forms:required_field',
                test: (values) => (values.countryCode && values.number ? true : false),
            }),
        address: Yup.string().required('forms:required_field'),
        townOrCity: Yup.string().required('forms:required_field'),
        postCode: Yup.string().required('forms:required_field'),
        country: Yup.string().required('forms:required_field'),
        promoCode: Yup.string().notRequired(),
    };

    const schema = fields.reduce(
        (acc, field) => ({
            ...acc,
            [field]: schemaMap[field as FormFieldNames],
        }),
        {},
    );

    return Yup.object(schema);
};
