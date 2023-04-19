import React, { useState } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import submitEmail from 'utils/submitEmail';
import { useForm, FormWrapper } from 'hooks';
import { Button, Input, Request } from 'components';

import { becomeEmployeeFields, becomeEmployeeScheme } from './fields';

import styles from '../Vacancies.scss';

const VacanciesForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeEmployeeScheme,
  });

  const handleBecomeEmployeeForm = async (data) => {
    try {
      setRequestSent(true);
      await submitEmail('Employee', data);
      setIsSent(true);
      document.getElementById('form').reset();
    } catch (error) {
      setRequestSent(false);
      setIsSent(true);
    }
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
              register
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
