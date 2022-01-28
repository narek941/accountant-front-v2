import * as Yup from 'yup';

export const useComposeFormSchema = (fields) => {
  const schemaMap = {
    name: Yup.string().required('Այս դաշտը պարտադիր է'),
    phoneNumber: Yup.number()
      .typeError('Հեռախոսահամարը պետք է բաղկացած լինի թվերից')
      .required('Այս դաշտը պարտադիր է'),
    email: Yup.string()
      .required('Այս դաշտը պարտադիր է')
      .email('Էլեկտրոնային հասցեն անբավարար է'),
    lessonFormation: Yup.string(),
    lessonType: Yup.string(),
    tin: Yup.number().typeError('ՀՎՀՀ-ն պետք է բաղկացած լինի թվերից'),
    organizationName: Yup.string(),
    organizationType: Yup.string(),
    taxType: Yup.string(),
    address: Yup.string(),
    quantityOfEmployees: Yup.number()
      .typeError('Այս դաշտը պետք է բաղկացած լինի թվերից')
      .required('Այս դաշտը պարտադիր է'),
    activityDescription: Yup.string().required('Այս դաշտը պարտադիր է'),
    birthday: Yup.string().required('Այս դաշտը պարտադիր է'),
    profession: Yup.string().required('Այս դաշտը պարտադիր է'),
    experience: Yup.number()
      .typeError('Այս դաշտը պետք է բաղկացած լինի թվերից')
      .required('Այս դաշտը պարտադիր է'),
    interests: Yup.string().required('Այս դաշտը պարտադիր է'),
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
