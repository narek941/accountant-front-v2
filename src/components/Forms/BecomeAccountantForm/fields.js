export const becomeAccountantFields = {
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
  lessonType: {
    name: 'lessonType',
    label: 'Դասընթացի տեսակը',
    options: ['0-ից', 'Խորացված'],
  },
  lessonFormation: {
    name: 'lessonFormation',
    label: 'Դասընթացի ձևը',
    options: ['Խմբակային', 'Անհատական'],
  },
};

export const becomeAccountantScheme = Object.keys(becomeAccountantFields);
