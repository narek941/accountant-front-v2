import React, { useState } from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { becomeAccountantFields, becomeAccountantScheme } from './fields';

import styles from '../BecomeAccountant.scss';

const AccountantForm = () => {
  const [requestSent, setRequestSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeAccountantScheme,
  });

  const handleBecomeAccountantForm = ({
    email,
    name,
    phoneNumber,
    lessonType,
    lessonFormation,
  }) => {
    axiosInstance
      .post('/mail/accountant', {
        email,
        fullName: name,
        phoneNumber,
        courseType: lessonType,
        courseKind: lessonFormation,
      })
      .then(() => {
        setRequestSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, 'mail/accountant');
        setRequestSent(false);
      });
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(handleBecomeAccountantForm)}
      className={styles.form}
      {...{ formMethods }}
    >
      <Input {...becomeAccountantFields.name} />
      <Input {...becomeAccountantFields.phoneNumber} />
      <Input {...becomeAccountantFields.email} />
      <Input {...becomeAccountantFields.lessonType} />
      <Input {...becomeAccountantFields.lessonFormation} />
      <Button
        type="submit"
        className={styles.form_submit}
        disabled={!isValid || requestSent}
      >
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};

export default AccountantForm;
