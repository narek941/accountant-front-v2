import shortid from 'shortid';

import {
  EnglishFlagCircle,
  RussianFlagCircle,
  EnglishFlag,
  RussianFlag,
  ArmenianFlag,
  ArmenianFlagCircle,
} from '../icons';

const languageList = [
  {
    id: shortid.generate(),
    index: 0,
    Icon: EnglishFlag,
    IconCircle: EnglishFlagCircle,
    code: 'en',
    nativeCode: 'eng',
  },
  {
    id: shortid.generate(),
    index: 1,
    Icon: RussianFlag,
    IconCircle: RussianFlagCircle,
    code: 'ru',
    nativeCode: 'Ру',
  },
  {
    id: shortid.generate(),
    Icon: ArmenianFlag,
    IconCircle: ArmenianFlagCircle,
    index: 2,
    code: 'am',
    nativeCode: 'Հայ',
  },
];

export default languageList;
