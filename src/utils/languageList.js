import shortid from 'shortid';

import { ArmenianFlag, EnglishFlag, RussianFlag } from '../icons';

const languageList = [
  {
    id: shortid.generate(),
    Icon: EnglishFlag,
    code: 'en',
  },
  {
    id: shortid.generate(),
    Icon: RussianFlag,
    code: 'ru',
  },
  {
    id: shortid.generate(),
    Icon: ArmenianFlag,
    code: 'am',
  },
];

export default languageList;
