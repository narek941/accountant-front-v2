import shortid from 'shortid';

const newsList = [
  {
    id: shortid.generate(),
    img: '/images/newsImg.png',
    title: 'news_introduction_to_accounting_title',
    text: [
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_one',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_introduction_to_accounting_course_subtitle_one_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_introduction_to_accounting_course_subtitle_one_step_two',
          },
          {
            id: shortid.generate(),
            text: 'news_introduction_to_accounting_course_subtitle_one_step_three',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_two',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_three',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_four',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_five',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_introduction_to_accounting_course_subtitle_five_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_introduction_to_accounting_course_subtitle_five_step_two',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_introduction_to_accounting_course_subtitle_six',
      },
    ],
  },
  {
    id: shortid.generate(),
    img: '/images/newsImg.png',
    title: 'news_advanced_accounting_title',
    text: [
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_one',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_advanced_accounting_course_subtitle_one_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_advanced_accounting_course_subtitle_one_step_two',
          },
          {
            id: shortid.generate(),
            text: 'news_advanced_accounting_course_subtitle_one_step_three',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_two',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_three',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_four',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_five',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_advanced_accounting_course_subtitle_five_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_advanced_accounting_course_subtitle_five_step_two',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_advanced_accounting_course_subtitle_six',
      },
    ],
  },
  {
    id: shortid.generate(),
    img: '/images/newsImg.png',
    title: 'news_microsoft_excel_title',
    text: [
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_one',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_microsoft_excel_course_subtitle_one_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_microsoft_excel_course_subtitle_one_step_two',
          },
          {
            id: shortid.generate(),
            text: 'news_microsoft_excel_course_subtitle_one_step_three',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_two',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_three',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_four',
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_five',
        subText: [
          {
            id: shortid.generate(),
            text: 'news_microsoft_excel_course_subtitle_five_step_one',
          },
          {
            id: shortid.generate(),
            text: 'news_microsoft_excel_course_subtitle_five_step_two',
          },
        ],
      },
      {
        subId: shortid.generate(),
        subTitle: 'news_microsoft_excel_course_subtitle_six',
      },
    ],
  },
];

export default newsList;
