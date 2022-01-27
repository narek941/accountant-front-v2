import React from 'react';

import { Button } from 'components/index';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../Input';
import { useForm, FormWrapper } from '../use-form';

const CoursesForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleCoursesForm');
  };

  return (
    <FormWrapper {...{ formMethods }}>
      <Input {...coursesFields.name} />
      <Input {...coursesFields.phoneNumber} />
      <Input {...coursesFields.email} />
      <Button disabled={!isValid} onClick={handleSubmit(handleCoursesForm)}>
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};
export default CoursesForm;
