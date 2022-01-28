export const contactUsFields = {
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
  interests: {
    name: 'interests',
    label: 'interests',
    placeholder: 'interests',
    required: true,
  },
};

export const contactUsScheme = Object.keys(contactUsFields);
