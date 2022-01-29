import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

import styles from '../Vacancies.scss';

const VacanciesForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeEmployeeScheme,
  });

  const handleBecomeEmployeeForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleBecomeEmployeeForm');
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(handleBecomeEmployeeForm)}
      className={styles.form}
      {...{ formMethods }}
    >
      <Input {...becomeEmployeeFields.name} />
      <Input {...becomeEmployeeFields.phoneNumber} />
      <Input {...becomeEmployeeFields.email} />
      <Input {...becomeEmployeeFields.birthday} />
      <Input {...becomeEmployeeFields.profession} />
      <Input {...becomeEmployeeFields.experience} />
      <Button type="submit" className={styles.form_submit} disabled={!isValid}>
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};
export default VacanciesForm;
