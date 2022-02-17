import React from 'react';
import Slider from 'react-slick';

import { useToggle } from 'hooks/index';
import { vacanciesList } from 'utils/index';

import Slide from './Slide';
import styles from './Vacancies.scss';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import VacanciesForm from './VacanciesForm';

import Button from '../../Button';

const VacanciesSection = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  const handleBack = () => setIsOpen();

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
      <h2 className={styles.title}>
        {!isOpen ? 'Թափուր հաստիքներ' : 'Դիմել աշխատանքի համար'}
      </h2>
      {!isOpen ? (
        <>
          <Slider {...settings}>{renderVacanciesList}</Slider>
          <Button onClick={() => setIsOpen()} className={styles.button}>
            Դիմել
          </Button>
        </>
      ) : (
        <VacanciesForm handleBack={handleBack} />
      )}
    </div>
  );
};

export default VacanciesSection;
