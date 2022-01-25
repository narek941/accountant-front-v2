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
    id: MAIN_SECTION_ID,
    Component: MainSection,
  },
  {
    id: SERVICES_SECTION_ID,
    Component: ServicesSection,
  },
  {
    id: COURSES_SECTION_ID,
    Component: CoursesSection,
  },
  {
    id: BECOME_ACCOUNTANT_SECTION_ID,
    Component: BecomeAccountantSection,
  },
  {
    id: PARTNERS_SECTION_ID,
    Component: PartnersSection,
  },
  {
    id: BECOME_PARTNER_SECTION_ID,
    Component: BecomePartnerSection,
  },
  {
    id: NEWS_SECTION_ID,
    Component: NewsSection,
  },
  {
    id: VACANCIES_SECTION_ID,
    Component: VacanciesSection,
  },
  {
    id: ABOUT_US_SECTION_ID,
    Component: AboutUsSection,
  },
];

export default sectionsList;
