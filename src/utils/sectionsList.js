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
} from 'containers/index';
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
    component: <MainSection />,
  },
  {
    id: SERVICES_SECTION_ID,
    component: <ServicesSection />,
  },
  {
    id: COURSES_SECTION_ID,
    component: <CoursesSection />,
  },
  {
    id: BECOME_ACCOUNTANT_SECTION_ID,
    component: <BecomeAccountantSection />,
  },
  {
    id: PARTNERS_SECTION_ID,
    component: <PartnersSection />,
  },
  {
    id: BECOME_PARTNER_SECTION_ID,
    component: <BecomePartnerSection />,
  },
  {
    id: NEWS_SECTION_ID,
    component: <NewsSection />,
  },
  {
    id: VACANCIES_SECTION_ID,
    component: <VacanciesSection />,
  },
  {
    id: ABOUT_US_SECTION_ID,
    component: <AboutUsSection />,
  },
];

export default sectionsList;
