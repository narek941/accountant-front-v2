import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { Button, Input, Request } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { I18nContext } from 'context/index';
import submitEmail from 'utils/submitEmail';

import { becomeAccountantFields, becomeAccountantScheme } from './fields';

import styles from '../BecomeAccountant.scss';

const AccountantForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const t = useContext(I18nContext);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomeAccountantScheme,
  });

  const handleBecomeAccountantForm = async (data) => {
    try {
      await submitEmail('Become accountant', data);
      setRequestSent(true);
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
          <h2 className={styles.title}>{t('becomeAccountant')}</h2>
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
              {t('register')}
            </Button>
          </FormWrapper>
        </>
      )}
    </>
  );
};
AccountantForm.propTypes = {
  handleBack: PropTypes.func,
};

AccountantForm.defaultProps = {
  handleBack: noop,
};
export default AccountantForm;
