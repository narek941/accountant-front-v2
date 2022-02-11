import React, { useState } from 'react';

import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../../Input';
import Button from '../../../Button';
import styles from '../Courses.scss';

const CoursesForm = () => {
  const [requestSent, setRequestSent] = useState(false);
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = ({ email, name, phoneNumber }) => {
    axiosInstance
      .post('/mail/excel', {
        email,
        fullName: name,
        phoneNumber,
      })
      .then(() => {
        setRequestSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, 'mail/excel');
        setRequestSent(false);
      });
  };
  return (
    <>
      <p>Excel</p>
      <FormWrapper
        {...{ formMethods }}
        className={styles.wrapper__form}
        onSubmit={handleSubmit(handleCoursesForm)}
      >
        <Input {...coursesFields.name} />
        <Input {...coursesFields.phoneNumber} />
        <Input {...coursesFields.email} />
        <Button
          type="submit"
          className={styles.wrapper__form_submit}
          disabled={!isValid || requestSent}
        >
          Գրանցվել
        </Button>
      </FormWrapper>
    </>
  );
};

export default CoursesForm;
