import shortid from 'shortid';

import { SearchIcon, ExcelIcon, ChartIcon } from '../icons';

export const coursesNavigationList = [
  {
    id: shortid.generate(),
    Icon: ChartIcon,
    title: 'introduction_to_accounting',

    infoSteps: [
      {
        id: shortid.generate(),
        text: 'introduction_to_accounting_info_step_one',
      },
      {
        id: shortid.generate(),
        text: 'introduction_to_accounting_info_step_two',
      },
      {
        id: shortid.generate(),
        text: 'introduction_to_accounting_info_step_three',
      },
      {
        id: shortid.generate(),
        text: 'introduction_to_accounting_info_step_four',
      },
      {
        id: shortid.generate(),
        text: 'introduction_to_accounting_info_step_five',
      },
    ],
    groupCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'introduction_to_accounting_group_step_one',
        },
        {
          id: shortid.generate(),
          text: 'introduction_to_accounting_group_step_two',
        },
      ],
      schedule: {
        title: 'introduction_to_accounting_group_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_group_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_group_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_group_schedule_step_three',
          },
        ],
      },
      period: 'introduction_to_accounting_group_period',
      lessons: 'introduction_to_accounting_group_lessons',
      price: 'introduction_to_accounting_group_price',
    },
    personalCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'introduction_to_accounting_individual_step_one',
        },
        {
          id: shortid.generate(),
          text: 'introduction_to_accounting_individual_step_two',
        },
      ],
      schedule: {
        title: 'introduction_to_accounting_individual_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_individual_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_individual_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'introduction_to_accounting_individual_schedule_step_three',
          },
        ],
      },
      period: 'introduction_to_accounting_individual_period',
      lessons: 'introduction_to_accounting_individual_lessons',
      price: '125 000 др․',
    },
  },

  {
    id: shortid.generate(),
    Icon: SearchIcon,
    title: 'advanced_accounting',
    infoSteps: [
      {
        id: shortid.generate(),
        text: 'չունեք բարձրագույն կրթություն, բայց ցանկանում եք մասնագիտություն սովորել,րություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքնե',
      },
      {
        id: shortid.generate(),
        text: 'ավարտել եք որևէ ԲՈՒՀ, սակայն չեք կարողանում գտնել լավ աշխատանք,',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: ExcelIcon,
    title: 'Microsoft Excel',
    infoSteps: [
      {
        id: shortid.generate(),
        text: 'րություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքներ և դրություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքնե,',
      },
      {
        id: shortid.generate(),
        text: 'ավարտել եք որևէ ԲՈՒՀ, սակայն չեք կարողանում գտնել լավ աշխատանք,',
      },
    ],
  },
];
