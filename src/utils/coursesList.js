import shortid from 'shortid';

import { SearchIcon, ExcelIcon, ChartIcon } from '../icons';

export const cursesNavigationList = [
  {
    id: shortid.generate(),
    Icon: ChartIcon,
    text: 'Հաշվապահական հաշվառում 0-ից',
  },
  {
    id: shortid.generate(),
    Icon: SearchIcon,
    text: 'Հաշվապահական հաշվառում խորացված',
  },
  {
    id: shortid.generate(),
    Icon: ExcelIcon,
    text: 'Microsoft Excel',
  },
];
