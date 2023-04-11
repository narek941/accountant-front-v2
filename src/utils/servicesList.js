import shortid from 'shortid';

import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from '../icons';

const servicesList = [
  {
    id: shortid.generate(),
    Icon: Icon1,
    text: 'accounting_services',
    hoverText: 'accounting_services__hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon2,
    text: 'reporting',
    hoverText: 'reporting__hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon3,
    text: 'tax_planning',
    hoverText: 'tax_planning__hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon4,
    text: 'restoration_database',
    hoverText: 'restoration_database__hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon5,
    text: 'business_automation',
    hoverText: 'business_automation_hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon6,
    text: 'human_resources',
    hoverText: 'human_resources__hover',
  },
  {
    id: shortid.generate(),
    Icon: Icon7,
    text: 'business_advice',
    hoverText: 'business_advice__hover',
  },
];

export default servicesList;
