export const contactUsFields = {
  name: {
    name: 'name',
    label: 'Անուն ազգանուն',
    placeholder: 'Անուն ազգանուն',
    required: true,
  },
  phoneNumber: {
    name: 'phoneNumber',
    label: 'Հեռախոսահամար',
    placeholder: '+374',
    required: true,
  },
  email: {
    name: 'email',
    label: 'Էլ. փոստ',
    placeholder: 'Էլ. փոստ',
    required: true,
  },
  interests: {
    name: 'interests',
    label: 'Ի՞նչ է Ձեզ հետաքրքրում',
    placeholder: 'Ի՞նչ է Ձեզ հետաքրքրում',
    required: true,
  },
};

export const contactUsScheme = Object.keys(contactUsFields);
