import shortid from 'shortid';

import { ArmenianFlag, EnglishFlag, RussianFlag } from '../icons';

const languageList = [
  {
    id: shortid.generate(),
    index: 0,
    Icon: EnglishFlag,
    code: 'en',
  },
  {
    id: shortid.generate(),
    index: 1,
    Icon: RussianFlag,
    code: 'ru',
  },
  {
    id: shortid.generate(),
    Icon: ArmenianFlag,
    index: 2,
    code: 'am',
  },
];

export default languageList;
