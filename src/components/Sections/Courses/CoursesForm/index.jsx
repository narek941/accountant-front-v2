import React, { useState } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';
import { Request } from 'components/index';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../../Input';
import Button from '../../../Button';
import styles from '../Courses.scss';

const CoursesForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = ({
    email,
    name,
    phoneNumber,
    lessonType,
    lessonFormation,
  }) => {
    axiosInstance
      .post('/mail/course', {
        email,
        fullName: name,
        phoneNumber,
        courseType: lessonType,
        courseKind: lessonFormation,
      })
      .then(() => {
        setRequestSent(true);
        setIsSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, 'mail/course');
        setRequestSent(false);
        setIsSent(true);
      });
  };
  return (
    <>
      {isSent ? (
        <Request handleBack={handleBack} isSent={requestSent} />
      ) : (
        <>
          <h2 className={styles.wrapper__title}>Դասընթացներ</h2>

          <FormWrapper
            {...{ formMethods }}
            className={styles.wrapper__form}
            onSubmit={handleSubmit(handleCoursesForm)}
          >
            <Input {...coursesFields.name} />
            <Input {...coursesFields.phoneNumber} />
            <Input {...coursesFields.email} />
            <Input {...coursesFields.lessonType} />
            <Input {...coursesFields.lessonFormation} />

            <Button
              type="submit"
              className={styles.wrapper__form_submit}
              disabled={!isValid || requestSent}
            >
              Գրանցվել
            </Button>
          </FormWrapper>
        </>
      )}
    </>
  );
};

CoursesForm.propTypes = {
  handleBack: PropTypes.func,
};

CoursesForm.defaultProps = {
  handleBack: noop,
};
export default CoursesForm;
