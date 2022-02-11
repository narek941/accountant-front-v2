import React, { useState } from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

import styles from '../Vacancies.scss';

const VacanciesForm = () => {
  const [requestSent, setRequestSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeEmployeeScheme,
  });

  const handleBecomeEmployeeForm = ({
    name,
    phoneNumber,
    email,
    birthday,
    profession,
    experience,
  }) => {
    axiosInstance
      .post('/mail/job', {
        email,
        fullName: name,
        phoneNumber,
        profession,
        experience: Number(experience),
        dateOfBirth: birthday,
      })
      .then(() => {
        setRequestSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/job');
        setRequestSent(false);
      });
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
export default VacanciesForm;
