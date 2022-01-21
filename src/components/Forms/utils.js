import * as Yup from 'yup';

export const useComposeFormSchema = (fields) => {
  const schemaMap = {
    email: Yup.string().required('forms:required_field'),
    password: Yup.string().required('forms:required_field'),
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
