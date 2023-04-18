import React, { useState, useContext } from 'react';
import axios from 'axios';

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
    const emailData = {
      to: 'recipient@example.com', // Replace with the desired recipient email address
      subject: 'Contact Us Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nInterests: ${interests}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Interests:</strong> ${interests}</p>
      `,
    };

    axios
      .post('/api/sendEmail', emailData)
      .then(() => {
        setRequestSent(true);
        setIsSent(true);
        document.getElementById('form').reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
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
          disabled={!isValid || requestSent || isSent}
        >
          {t('send')}
        </Button>
      </FormWrapper>
    </>
  );
};

export default AboutusForm;
