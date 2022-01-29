import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';

import { becomeAccountantFields, becomeAccountantScheme } from './fields';

import styles from '../BecomeAccountant.scss';

const AccountantForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeAccountantScheme,
  });

  const handleBecomeAccountantForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleBecomeAccountantForm');
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
      <Button type="submit" className={styles.form_submit} disabled={!isValid}>
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};

export default AccountantForm;
