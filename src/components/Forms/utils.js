import * as Yup from 'yup';

export const useComposeFormSchema = (fields) => {
  const schemaMap = {
    name: Yup.string().required('Այս դաշտը պարտադիր է'),
    phoneNumber: Yup.string().required('Այս դաշտը պարտադիր է'),
    email: Yup.string().required('Այս դաշտը պարտադիր է'),
    lessonFormation: Yup.string(),
    lessonType: Yup.string(),
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
