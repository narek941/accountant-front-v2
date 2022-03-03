import React, { useContext, useState } from 'react';
import Slider from 'react-slick';

import { vacanciesList } from 'utils/index';
import { I18nContext } from 'context/index';

import Slide from './Slide';
import styles from './Vacancies.scss';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import VacanciesForm from './VacanciesForm';

import Button from '../../Button';

const VacanciesSection = () => {
  const t = useContext(I18nContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleBack = () => setIsOpen(false);
  const headerText = !isOpen ? `${t('vacancies')}` : `${t('apply_for_job')}`;
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    className: styles.slider,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  const renderVacanciesList = vacanciesList.map(
    ({ id, Icon, title, textSteps }) => (
      <Slide key={id} Icon={Icon} title={title} textSteps={textSteps} />
    ),
  );

  return (
    <div className="container">
      <h2 className={styles.title}>{headerText}</h2>
      {!isOpen ? (
        <>
          <Slider {...settings}>{renderVacanciesList}</Slider>
          <Button onClick={() => setIsOpen(true)} className={styles.button}>
            {t('apply')}
          </Button>
        </>
      ) : (
        <VacanciesForm handleBack={handleBack} isOpen={isOpen} />
      )}
    </div>
  );
};

export default VacanciesSection;
