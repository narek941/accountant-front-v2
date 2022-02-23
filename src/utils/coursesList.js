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
        text: 'course_introduction_to_accounting_info_step_one',
      },
      {
        id: shortid.generate(),
        text: 'course_introduction_to_accounting_info_step_two',
      },
      {
        id: shortid.generate(),
        text: 'course_introduction_to_accounting_info_step_three',
      },
      {
        id: shortid.generate(),
        text: 'course_introduction_to_accounting_info_step_four',
      },
      {
        id: shortid.generate(),
        text: 'course_introduction_to_accounting_info_step_five',
      },
    ],
    groupCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_introduction_to_accounting_group_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_introduction_to_accounting_group_step_two',
        },
      ],
      schedule: {
        title: 'course_introduction_to_accounting_group_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_group_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_group_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_group_schedule_step_three',
          },
        ],
      },
      period: 'course_introduction_to_accounting_group_period',
      lessons: 'course_introduction_to_accounting_group_lessons',
      price: 'course_introduction_to_accounting_group_price',
    },
    personalCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_introduction_to_accounting_individual_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_introduction_to_accounting_individual_step_two',
        },
      ],
      schedule: {
        title: 'course_introduction_to_accounting_individual_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_individual_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_individual_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_introduction_to_accounting_individual_schedule_step_three',
          },
        ],
      },
      period: 'course_introduction_to_accounting_individual_period',
      lessons: 'course_introduction_to_accounting_individual_lessons',
      price: 'course_introduction_to_accounting_individual_price',
    },
  },

  {
    id: shortid.generate(),
    Icon: SearchIcon,
    title: 'advanced_accounting',
    infoSteps: [
      {
        id: shortid.generate(),
        text: 'course_advanced_accounting_info_step_one',
      },
      {
        id: shortid.generate(),
        text: 'course_advanced_accounting_info_step_two',
      },
    ],
    groupCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_advanced_accounting_group_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_advanced_accounting_group_step_two',
        },
      ],
      schedule: {
        title: 'course_advanced_accounting_group_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_group_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_group_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_group_schedule_step_three',
          },
        ],
      },
      period: 'course_advanced_accounting_group_period',
      lessons: 'course_advanced_accounting_group_lessons',
      price: 'course_advanced_accounting_group_price',
    },
    personalCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_advanced_accounting_individual_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_advanced_accounting_individual_step_two',
        },
      ],
      schedule: {
        title: 'course_advanced_accounting_individual_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_individual_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_individual_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_advanced_accounting_individual_schedule_step_three',
          },
        ],
      },
      period: 'course_advanced_accounting_individual_period',
      lessons: 'course_advanced_accounting_individual_lessons',
      price: 'course_advanced_accounting_individual_price',
    },
  },
  {
    id: shortid.generate(),
    Icon: ExcelIcon,
    title: 'Microsoft Excel',
    infoSteps: [
      {
        id: shortid.generate(),
        text: 'course_microsoft_excel_info_step_one',
      },
      {
        id: shortid.generate(),
        text: 'course_microsoft_excel_info_step_two',
      },
    ],
    groupCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_microsoft_excel_group_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_microsoft_excel_group_step_two',
        },
      ],
      schedule: {
        title: 'course_microsoft_excel_group_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_group_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_group_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_group_schedule_step_three',
          },
        ],
      },
      period: 'course_microsoft_excel_group_period',
      lessons: 'course_microsoft_excel_group_lessons',
      price: 'course_microsoft_excel_group_price',
    },
    personalCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'course_microsoft_excel_individual_step_one',
        },
        {
          id: shortid.generate(),
          text: 'course_microsoft_excel_individual_step_two',
        },
      ],
      schedule: {
        title: 'course_microsoft_excel_individual_schedule_title',
        text: [
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_individual_schedule_step_one',
          },
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_individual_schedule_step_two',
          },
          {
            id: shortid.generate(),
            text: 'course_microsoft_excel_individual_schedule_step_three',
          },
        ],
      },
      period: 'course_microsoft_excel_individual_period',
      lessons: 'course_microsoft_excel_individual_lessons',
      price: 'course_microsoft_excel_individual_price',
    },
  },
];
