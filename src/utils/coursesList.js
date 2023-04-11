import shortid from 'shortid';

import { SearchIcon, ExcelIcon, ChartIcon } from '../icons';

export const coursesNavigationList = [
  {
    id: shortid.generate(),
    Icon: ChartIcon,
    title: 'introduction_to_accounting',
    groupCourse: {
      content: [
        'introduction_to_accounting_1',
        'introduction_to_accounting_2',
        [
          'introduction_to_accounting_3',
          'introduction_to_accounting_4',
          'introduction_to_accounting_5',
        ],
        'introduction_to_accounting_6',
        'introduction_to_accounting_7',
        [
          'introduction_to_accounting_8',
          'introduction_to_accounting_9',
          'introduction_to_accounting_10',
          'introduction_to_accounting_11',
          'introduction_to_accounting_12',
        ],
        'introduction_to_accounting_13',
        'introduction_to_accounting_14',
        'introduction_to_accounting_15',
        ['introduction_to_accounting_16', 'introduction_to_accounting_17'],
        'introduction_to_accounting_18',
        'introduction_to_accounting_19',
      ],
      period: 'course_introduction_to_accounting_group_period',
      lessons: 'course_introduction_to_accounting_group_lessons',
      price: 'course_introduction_to_accounting_group_price',
    },
    personalCourse: {
      content: [
        'introduction_to_accounting_1',
        'introduction_to_accounting_2',
        [
          'introduction_to_accounting_3',
          'introduction_to_accounting_4',
          'introduction_to_accounting_5',
        ],
        'introduction_to_accounting_6',
        'introduction_to_accounting_7',
        [
          'introduction_to_accounting_8',
          'introduction_to_accounting_9',
          'introduction_to_accounting_10',
          'introduction_to_accounting_11',
          'introduction_to_accounting_12',
        ],
        'introduction_to_accounting_13',
        'introduction_to_accounting_14',
        'introduction_to_accounting_15',
        ['introduction_to_accounting_16', 'introduction_to_accounting_17'],
        'introduction_to_accounting_18',
        'introduction_to_accounting_19',
      ],
      period: 'course_introduction_to_accounting_individual_period',
      lessons: 'course_introduction_to_accounting_individual_lessons',
      price: 'course_introduction_to_accounting_individual_price',
    },
  },

  {
    id: shortid.generate(),
    Icon: SearchIcon,
    title: 'advanced_accounting',
    groupCourse: {
      content: ['', '', ['', '']],
      period: '',
      lessons: '',
      price: '',
    },
    personalCourse: {
      content: ['', '', ['', '']],
      period: '',
      lessons: '',
      price: '',
    },
  },
  {
    id: shortid.generate(),
    Icon: ExcelIcon,
    title: 'Microsoft Excel',
    groupCourse: {
      content: ['', '', ['', '']],
      period: '',
      lessons: '',
      price: '',
    },
    personalCourse: {
      content: ['', '', ['', '']],
      period: '',
      lessons: '',
      price: '',
    },
  },
];
