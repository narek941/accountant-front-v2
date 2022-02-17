import React, { useState } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { Button, Input, Request } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

import styles from '../Vacancies.scss';

const VacanciesForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
        setIsSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/job');
        setRequestSent(false);
        setIsSent(true);
      });
  };

  return (
    <>
      {isSent ? (
        <Request handleBack={handleBack} isSent={requestSent} />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

VacanciesForm.propTypes = {
  handleBack: PropTypes.func,
};

VacanciesForm.defaultProps = {
  handleBack: noop,
};
export default VacanciesForm;
