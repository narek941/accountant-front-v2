export const becomeEmployeeFields = {
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
  birthday: {
    name: 'birthday',
    label: 'Ծննդյան ամսաթիվ/ամիս/տարի',
    placeholder: '20/06/1996',
    required: true,
  },
  profession: {
    name: 'profession',
    label: 'Մասնագիտություն',
    required: true,
    options: ['Հաշվետար', 'Հաշվապահ', 'Գլխավոր հաշվապահ', 'Հաշվ․ դասընթացավար'],
  },
  experience: {
    name: 'experience',
    label: 'Աշխատանքային փորձ /տարի',
    placeholder: '3',
    required: true,
  },
};

export const becomeEmployeeScheme = Object.keys(becomeEmployeeFields);
