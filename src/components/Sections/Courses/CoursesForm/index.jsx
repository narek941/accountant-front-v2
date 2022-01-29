import React from 'react';

import { useForm, FormWrapper } from 'hooks/index';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../../Input';
import Button from '../../../Button';
import styles from '../Courses.scss';

const CoursesForm = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleCoursesForm');
  };

  return (
    <FormWrapper
      className={styles.wrapper__form}
      onSubmit={handleSubmit(handleCoursesForm)}
      {...{ formMethods }}
    >
      <Input {...coursesFields.name} />
      <Input {...coursesFields.phoneNumber} />
      <Input {...coursesFields.email} />
      <Button
        type="submit"
        className={styles.wrapper__form_submit}
        disabled={!isValid}
      >
        Գրանցվել
      </Button>
    </FormWrapper>
  );
};

export default CoursesForm;
