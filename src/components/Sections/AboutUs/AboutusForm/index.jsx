import React, { useState } from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { contactUsFields, contactUsScheme } from './fields';

import styles from '../AboutUs.scss';

const AboutusForm = () => {
  const [requestSent, setRequestSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: contactUsScheme,
  });

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
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/job');
        setRequestSent(false);
      });
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(handleContactUsForm)}
      className={styles.form}
      {...{ formMethods }}
    >
      <Input {...contactUsFields.name} />
      <Input {...contactUsFields.phoneNumber} />
      <Input {...contactUsFields.email} />
      <Input {...contactUsFields.interests} />
      <Button
        type="submit"
        className={styles.form_submit}
        disabled={!isValid || requestSent}
      >
        Ուղարկել
      </Button>
    </FormWrapper>
  );
};
export default AboutusForm;
