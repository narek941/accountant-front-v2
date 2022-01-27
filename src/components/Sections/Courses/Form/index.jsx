import React from 'react';

import { useForm, FormWrapper } from 'hooks/useForm';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../../Input';
import Button from '../../../Button';
import styles from '../Courses.scss';

const Form = () => {
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = (e) => {
    // eslint-disable-next-line no-console
    console.log(e, 'handleCoursesForm');
  };

  return (
    <FormWrapper className="sdsd" {...{ formMethods }}>
      <form className={styles.wrapper__main_block__form}>
        <Input {...coursesFields.name} />
        <Input {...coursesFields.phoneNumber} />
        <Input {...coursesFields.email} />
        <Button disabled={!isValid} onClick={handleSubmit(handleCoursesForm)}>
          Գրանցվել
        </Button>
      </form>
    </FormWrapper>
  );
};

export default Form;
