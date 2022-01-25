export const becomePartnerFields = {
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
  tin: {
    name: 'tin',
    label: 'ՀՎՀՀ',
    placeholder: 'ՀՎՀՀ',
  },
  organizationName: {
    name: 'organizationName',
    placeholder: 'Անվանում',
    label: 'Կազմակերպության անվանում',
  },
  organizationType: {
    name: 'organizationType',
    label: 'Կազմակերպության ձև',
    options: ['ԱՁ', 'ՍՊԸ', 'ԲԲԸ', 'ՓԲԸ', 'ԱՅԼ'],
  },
  taxType: {
    name: 'taxType',
    label: 'Հարկման տեսակ',
    options: [
      'ԱԱՀ, Շահութահարկ',
      'Շրջանառության հարկ',
      'Միկրոձեռնարկատիրություն',
      'Ակցիզային հարկ',
      'ԱՅԼ',
    ],
  },
  address: {
    name: 'address',
    label: 'Հասցե',
    placeholder: 'Բաղրամյան 75',
  },
  quantityOfEmployees: {
    name: 'quantityOfEmployees',
    placeholder: '0',
    label: 'Աշխատողների քանակ',
    required: true,
  },
  activityDescription: {
    name: 'activityDescription',
    placeholder:
      'Կազմակերպությունը զբաղվում է տնտեսական ապրանքների ներմուծմամբ, մանրածախ վաճառքով, ունի 3 մասնաճյուղ։',
    label: 'Գործունեության նկարագիր',
    required: true,
  },
};

export const becomePartnerScheme = Object.keys(becomePartnerFields);
