import React, { useState, useContext } from 'react';

import { Button, Input, TextArea, Request } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';
import { I18nContext } from 'context/index';

import { contactUsFields, contactUsScheme } from './fields';

import styles from '../AboutUs.scss';

const AboutusForm = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const t = useContext(I18nContext);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: contactUsScheme,
  });
  const handleBack = () => {
    setIsSent(false);
  };

  const handleContactUsForm = ({ email, name, phoneNumber, interests }) => {
    axiosInstance
      .post('/mail/message', {
        email,
        fullName: name,
        phoneNumber,
        message: interests,
      })
      .then(() => {
        setRequestSent(true);
        setIsSent(true);
        document.getElementById('form').reset();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/partnership');
        setRequestSent(false);
        setIsSent(true);
      });
  };
  return (
    <>
      {isSent && <Request handleBack={handleBack} isSent={requestSent} />}

      <FormWrapper
        onSubmit={handleSubmit(handleContactUsForm)}
        className={styles.form}
        {...{ formMethods }}
      >
        <Input {...contactUsFields.name} />
        <Input {...contactUsFields.phoneNumber} />
        <Input {...contactUsFields.email} />
        <TextArea {...contactUsFields.interests} />
        <Button
          type="submit"
          className={styles.form_submit}
          disabled={!isValid || requestSent}
        >
          {t('send')}
        </Button>
      </FormWrapper>
    </>
  );
};

export default AboutusForm;
