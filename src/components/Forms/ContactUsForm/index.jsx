import React from 'react';

import { Button } from 'components/index';

import { contactUsFields, contactUsScheme } from './fields';

import Input from '../../Input';
import { useForm, FormWrapper } from '../use-form';

const ContactUsForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: contactUsScheme,
  });

  const handleContactUsForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleContactUsForm');
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <h2>Դիմել աշխատանքի համար</h2>
      <Input {...contactUsFields.name} />
      <Input {...contactUsFields.phoneNumber} />
      <Input {...contactUsFields.email} />
      <Input {...contactUsFields.interests} />
      <Button disabled={!isValid} onClick={handleSubmit(handleContactUsForm)}>
        Ուղարկել
      </Button>
    </FormWrapper>
  );
};
export default ContactUsForm;
