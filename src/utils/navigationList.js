import shortid from 'shortid';

import {
  ABOUT_US_SECTION_ID,
  BECOME_PARTNER_SECTION_ID,
  BECOME_ACCOUNTANT_SECTION_ID,
} from 'constants/index';

export const navigationList = [
  {
    id: shortid.generate(),
    name: 'becomePartner',
    link: BECOME_PARTNER_SECTION_ID,
  },
  {
    id: shortid.generate(),
    name: 'becomeAccountant',
    link: BECOME_ACCOUNTANT_SECTION_ID,
  },
  {
    id: shortid.generate(),
    name: 'aboutUs',
    link: ABOUT_US_SECTION_ID,
  },
];
