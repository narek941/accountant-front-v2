import shortid from 'shortid';

import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from '../icons';

const servicesList = [
  {
    id: shortid.generate(),
    Icon: Icon1,
    text: 'accounting_services',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon2,
    text: 'reporting',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon3,
    text: 'tax_planning',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon4,
    text: 'restoration_database',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon5,
    text: 'business_automation',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon6,
    text: 'human_resources',
    hoverText: 'mainTitle',
  },
  {
    id: shortid.generate(),
    Icon: Icon7,
    text: 'business_advice',
    hoverText: 'mainTitle',
  },
];

export default servicesList;
