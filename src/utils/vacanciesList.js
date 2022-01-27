import shortid from 'shortid';

import {
  Vacancies_icon1,
  Vacancies_icon2,
  Vacancies_icon3,
  Vacancies_icon4,
} from '../icons';

const vacanciesList = [
  {
    id: shortid.generate(),
    Icon: Vacancies_icon1,
    title: 'Հաշվետար',
    textSteps: [
      {
        id: shortid.generate(),
        text: '6-12 ամսվա աշխատանային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ 7 ՝ հաշվապահական և պահեստի բլոկ և E-invoicing ծրագրի գերազանց իմացություն',
      },
      {
        id: shortid.generate(),
        text: 'Microsoft Excel բազային գիտելիքներ',
      },
      {
        id: shortid.generate(),
        text: 'Աշխատակիցների աշխատանքի ընդունում, ազատում, փաստաթղթերի կազմում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմում աշխատելու և սովորելու մեծ ցանկություն',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon2,
    title: 'Հաշվապահ',
    textSteps: [
      {
        id: shortid.generate(),
        text: '1-3 տարվա աշխատանքային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ Հաշվապահ, ՀԾ առևտուր, E-Invoicing ծրագրերի գերազանց իմացություն',
      },
      {
        id: shortid.generate(),
        text: 'Աշխատանքային և հարկային օրենսգրքին տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Ինքնարժեքի հարշվարկ, ԵՏՄ հաշվետվությունների հանձնում',
      },
      {
        id: shortid.generate(),
        text: 'Microsoft Excel-ի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմում աշխատելու և մասնագիտական աճ գրանցելու ձգտում',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon3,
    title: 'Գլխավոր հաշվապահ',
    textSteps: [
      {
        id: shortid.generate(),
        text: '3+ տարվա աշխատանքային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ և առևտուր ծրագրերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Հարկային և աշխատանքային օրենսրքերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմ կառավարելու փորձ',
      },
      {
        id: shortid.generate(),
        text: 'Փորձ հաճախորդների հետ շփման գործում',
      },
      {
        id: shortid.generate(),
        text: 'Անալիտիկ մտածելակերպ',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon4,
    title: 'Հաշվապահության դասընթացավար',
    textSteps: [
      {
        id: shortid.generate(),
        text: 'Դասավանդելու փորձ',
      },
      {
        id: shortid.generate(),
        text: ' Հարկային և աշխատանքային օրենսգրքերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ և առևտուր ծրագրի գերազանց տիրապետում',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'Հաշվետար',
    Icon: Vacancies_icon1,
    textSteps: [
      {
        id: shortid.generate(),
        text: '6-12 ամսվա աշխատանային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ 7 ՝ հաշվապահական և պահեստի բլոկ և E-invoicing ծրագրի գերազանց իմացություն',
      },
      {
        id: shortid.generate(),
        text: 'Microsoft Excel բազային գիտելիքներ',
      },
      {
        id: shortid.generate(),
        text: 'Աշխատակիցների աշխատանքի ընդունում, ազատում, փաստաթղթերի կազմում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմում աշխատելու և սովորելու մեծ ցանկություն',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon2,
    title: 'Հաշվապահ',
    textSteps: [
      {
        id: shortid.generate(),
        text: '1-3 տարվա աշխատանքային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ Հաշվապահ, ՀԾ առևտուր, E-Invoicing ծրագրերի գերազանց իմացություն',
      },
      {
        id: shortid.generate(),
        text: 'Աշխատանքային և հարկային օրենսգրքին տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Ինքնարժեքի հարշվարկ, ԵՏՄ հաշվետվությունների հանձնում',
      },
      {
        id: shortid.generate(),
        text: 'Microsoft Excel-ի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմում աշխատելու և մասնագիտական աճ գրանցելու ձգտում',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon3,
    title: 'Գլխավոր հաշվապահ',
    textSteps: [
      {
        id: shortid.generate(),
        text: '3+ տարվա աշխատանքային փորձ',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ և առևտուր ծրագրերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Հարկային և աշխատանքային օրենսրքերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'Թիմ կառավարելու փորձ',
      },
      {
        id: shortid.generate(),
        text: 'Փորձ հաճախորդների հետ շփման գործում',
      },
      {
        id: shortid.generate(),
        text: 'Անալիտիկ մտածելակերպ',
      },
    ],
  },
  {
    id: shortid.generate(),
    Icon: Vacancies_icon4,
    title: 'Հաշվապահության դասընթացավար',
    textSteps: [
      {
        id: shortid.generate(),
        text: 'Դասավանդելու փորձ',
      },
      {
        id: shortid.generate(),
        text: ' Հարկային և աշխատանքային օրենսգրքերի գերազանց տիրապետում',
      },
      {
        id: shortid.generate(),
        text: 'ՀԾ հաշվապահ և առևտուր ծրագրի գերազանց տիրապետում',
      },
    ],
  },
];

export default vacanciesList;
