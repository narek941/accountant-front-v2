import React from 'react';

import { Button, Input } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';

import { contactUsFields, contactUsScheme } from './fields';

import styles from '../AboutUs.scss';

const AboutusForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: contactUsScheme,
  });

  const handleContactUsForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleContactUsForm');
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
      <Button type="submit" className={styles.form_submit} disabled={!isValid}>
        Ուղարկել
      </Button>
    </FormWrapper>
  );
};
export default AboutusForm;
