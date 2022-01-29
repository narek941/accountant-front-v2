export const becomeEmployeeFields = {
  name: {
    name: 'name',
    label: 'full_name',
    placeholder: 'full_name',
    required: true,
  },
  phoneNumber: {
    name: 'phoneNumber',
    label: 'phone_number',
    placeholder: '+374',
    required: true,
  },
  email: {
    name: 'email',
    label: 'email',
    placeholder: 'email',
    required: true,
  },
  birthday: {
    name: 'birthday',
    label: 'birthday',
    placeholder: '20/06/1996',
    required: true,
  },
  profession: {
    name: 'profession',
    label: 'profession',
    required: true,
    options: [
      'accountant',
      'clerk',
      'general_accountant',
      'accounting_trainer',
    ],
  },
  experience: {
    name: 'experience',
    label: 'experience',
    placeholder: '3',
    required: true,
  },
};

export const becomeEmployeeScheme = Object.keys(becomeEmployeeFields);
