import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { useForm, FormWrapper } from 'hooks/index';
import { Request } from 'components/index';
import { I18nContext } from 'context/index';
import submitEmail from 'utils/submitEmail';

import { coursesScheme, coursesFields } from './fields';

import Input from '../../../Input';
import Button from '../../../Button';
import styles from '../Courses.scss';

const CoursesForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const t = useContext(I18nContext);
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: coursesScheme,
  });

  const handleCoursesForm = async (data) => {
    try {
      setRequestSent(true);
      await submitEmail('Courses', data);
      setIsSent(true);
      document.getElementById('form').reset();
    } catch (error) {
      setRequestSent(false);
      setIsSent(true);
    }
  };

  return (
    <>
      {isSent ? (
        <Request handleBack={handleBack} isSent={requestSent} />
      ) : (
        <>
          <h2 className={styles.wrapper__title}>{t('courses')}</h2>

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
              register
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
