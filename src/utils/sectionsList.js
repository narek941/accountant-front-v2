import {
  MainSection,
  NewsSection,
  AboutUsSection,
  CoursesSection,
  PartnersSection,
  ServicesSection,
  VacanciesSection,
  BecomePartnerSection,
  BecomeAccountantSection,
} from 'components/index';
import {
  MAIN_SECTION_ID,
  NEWS_SECTION_ID,
  COURSES_SECTION_ID,
  ABOUT_US_SECTION_ID,
  PARTNERS_SECTION_ID,
  SERVICES_SECTION_ID,
  VACANCIES_SECTION_ID,
  BECOME_PARTNER_SECTION_ID,
  BECOME_ACCOUNTANT_SECTION_ID,
} from 'constants/index';

const sectionsList = [
  {
    index: 1,
    id: MAIN_SECTION_ID,
    Component: MainSection,
  },
  {
    index: 2,
    id: SERVICES_SECTION_ID,
    Component: ServicesSection,
  },
  {
    index: 3,
    id: COURSES_SECTION_ID,
    Component: CoursesSection,
  },
  {
    index: 4,
    id: BECOME_ACCOUNTANT_SECTION_ID,
    Component: BecomeAccountantSection,
  },
  {
    index: 5,
    id: PARTNERS_SECTION_ID,
    Component: PartnersSection,
  },
  {
    index: 6,
    id: BECOME_PARTNER_SECTION_ID,
    Component: BecomePartnerSection,
  },
  {
    index: 7,
    id: NEWS_SECTION_ID,
    Component: NewsSection,
  },
  {
    index: 8,
    id: VACANCIES_SECTION_ID,
    Component: VacanciesSection,
  },
  {
    index: 9,
    id: ABOUT_US_SECTION_ID,
    Component: AboutUsSection,
  },
];

export default sectionsList;
