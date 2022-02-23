import * as Yup from 'yup';

const composeFormSchema = (fields) => {
  const schemaMap = {
    name: Yup.string().required('this_field_required'),
    phoneNumber: Yup.number()
      .typeError('phone_consist_numbers')
      .required('this_field_required'),
    email: Yup.string().required('this_field_required').email('invalid_email'),
    lessonFormation: Yup.string(),
    lessonType: Yup.string(),
    tin: Yup.number().typeError('vat_consist_numbers'),
    organizationName: Yup.string(),
    organizationType: Yup.string(),
    taxType: Yup.string(),
    address: Yup.string(),
    quantityOfEmployees: Yup.number()
      .typeError('field_consist_numbers')
      .required('this_field_required'),
    activityDescription: Yup.string().required('this_field_required'),
    birthday: Yup.string().required('this_field_required'),
    profession: Yup.string().required('this_field_required'),
    experience: Yup.number()
      .typeError('field_consist_numbers')
      .required('this_field_required'),
    interests: Yup.string().required('this_field_required'),
  };

  const schema = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: schemaMap[field],
    }),
    {},
  );

  return Yup.object(schema);
};

export default composeFormSchema;
