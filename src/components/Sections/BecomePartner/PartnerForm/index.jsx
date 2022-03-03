import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import noop from 'utils/noop';
import { Button, Input, Request, TextArea } from 'components/index';
import { useForm, FormWrapper } from 'hooks/index';
import { axiosInstance } from 'libraries/index';
import { I18nContext } from 'context/index';

import { becomePartnerFields, becomePartnerScheme } from './fields';

import styles from '../BecomePartner.scss';

const PartnerForm = ({ handleBack }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const t = useContext(I18nContext);
  const { formMethods, handleSubmit, isValid } = useForm({
    schemaKeys: becomePartnerScheme,
  });

  const handlePartnerForm = ({
    name,
    phoneNumber,
    email,
    tin,
    organizationName,
    organizationType,
    taxType,
    address,
    quantityOfEmployees,
    activityDescription,
  }) => {
    axiosInstance
      .post('/mail/partnership', {
        email,
        fullName: name,
        phoneNumber,
        tin,
        companyName: organizationName,
        legalForm: organizationType,
        taxType,
        address,
        quantityOfEmployees,
        activityDescription,
      })
      .then(() => {
        setRequestSent(true);
        setIsSent(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error, '/mail/partnership');
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
          <h2 className={styles.title}>{t('becomePartner')}</h2>

          <FormWrapper
            onSubmit={handleSubmit(handlePartnerForm)}
            className={styles.form}
            {...{ formMethods }}
          >
            <Input {...becomePartnerFields.name} />
            <Input {...becomePartnerFields.phoneNumber} />
            <Input {...becomePartnerFields.email} />
            <Input {...becomePartnerFields.tin} />
            <Input {...becomePartnerFields.organizationName} />
            <Input {...becomePartnerFields.organizationType} />
            <Input {...becomePartnerFields.taxType} />
            <Input {...becomePartnerFields.address} />
            <Input {...becomePartnerFields.quantityOfEmployees} />
            <TextArea {...becomePartnerFields.activityDescription} />
            <Button
              type="submit"
              className={styles.form_submit}
              disabled={!isValid || requestSent}
            >
              {t('becomePartner')}
            </Button>
          </FormWrapper>
        </>
      )}
    </>
  );
};

PartnerForm.propTypes = {
  handleBack: PropTypes.func,
};

PartnerForm.defaultProps = {
  handleBack: noop,
};
export default PartnerForm;
