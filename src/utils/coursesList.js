import shortid from 'shortid';

import { SearchIcon, ExcelIcon, ChartIcon } from '../icons';

export const coursesNavigationList = [
  {
    id: shortid.generate(),
    Icon: ChartIcon,
    title: 'Հաշվապահական հաշվառում 0-ից',

    infoSteps: [
      {
        id: shortid.generate(),
        text: 'չունեք բարձրագույն կրթություն, բայց ցանկանում եք մասնագիտություն սովորել,',
      },
      {
        id: shortid.generate(),
        text: 'ավարտել եք որևէ ԲՈՒՀ, սակայն չեք կարողանում գտնել լավ աշխատանք,',
      },
      {
        id: shortid.generate(),
        text: 'ուզում եք աշխատել ազատ գրաֆիկով և համատեղ մի քանի կազմակերպության հետ (ֆրիլանս),',
      },
      {
        id: shortid.generate(),
        text: 'ժամանակին սովորել եք հաշվապահություն, սակայն հիմա գիտելիքները թարմացնելու կարիք ունեք',
      },
      {
        id: shortid.generate(),
        text: 'սովորում եք որևէ ԲՈՒՀ-ում և ցանկանում եք աշխատել ուսմանը զուգահեռ:',
      },
    ],
    groupCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'Ցանկացած կազմակերպության գործունեության հիմքում ընկած են հաշվարկներ և հաշվետվություններ ֆինանսական վիճակը վերահսկելու և բարելավելու համար: Այս ամենն իրականացնում է կազմակերպության հաշվապահը:',
        },
        {
          id: shortid.generate(),
          text: 'Մենք առաջարկում ենք հեղինակային մեթոդիկայով հաշվապահության դասընթաց, որը Ձեզ հնարավորություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքներ և դասընթացն ավարտելուց հետո աշխատել ոլորտում:',
        },
      ],
      shedule: {
        title: 'Ընդամենը 5 ամիսների ընթացքում կսովորեք․',
        text: [
          {
            id: shortid.generate(),
            text: ' Ֆինանսական հաշվառում (IAS)` 40 ժամ,',
          },
          {
            id: shortid.generate(),
            text: 'Հարկային հաշվառում՝ 40 ժամ',
          },
          {
            id: shortid.generate(),
            text: 'ՀԾ և պրակտիկա՝ 20 ժամ:',
          },
        ],
      },
      period: '5 ամիս',
      lessons: '40 դաս / 2,5 ժամ',
      price: '35 000 դր․ ',
    },
    personalCourse: {
      info: [
        {
          id: shortid.generate(),
          text: 'ետվություններ ֆինանսական վիճակը վերահսկելու և բարելավելու համար: Այս ամենն իրականացնում է կազմակերպության հաշվապահը:',
        },
        {
          id: shortid.generate(),
          text: 'նարավորություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքներ և դասընթացն ավարտելուց հետո աշխատել ոլորտում:',
        },
      ],
      shedule: {
        title: 'Ընդամենը 5 ամիսների ընթացքում կսովորեք․',
        text: [
          {
            id: shortid.generate(),
            text: ' Ֆինանսական հաշվառում (IAS)` 40 ժամ,',
          },
          {
            id: shortid.generate(),
            text: 'Հարկային հաշվառում՝ 40 ժամ',
          },
          {
            id: shortid.generate(),
            text: 'ՀԾ և պրակտիկա՝ 20 ժամ:',
          },
        ],
      },
      period: '2 ամիս      ',
      lessons: '20 դաս / 10 ժամ',
      price: '65 000 դր․',
    },
  },

  {
    id: shortid.generate(),
    Icon: SearchIcon,
    title: 'Հաշվապահական հաշվառում խորացված',
    infoSteps: [
      {
        id: shortid.generate(),
        text: 'չունեք բարձրագույն կրթություն, բայց ցանկանում եք մասնագիտություն սովորել,',
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
        text: 'րություն կտա կարճ ժամանակում ձեռք բերել պրակտիկ գիտելիքներ և դ,',
      },
    ],
  },
];
