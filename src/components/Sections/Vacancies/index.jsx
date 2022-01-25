import React from 'react';
import Slider from 'react-slick';

import { vacanciesList } from 'utils/index';

import styles from './Vacancies.scss';
import NextArrow from './NextArrow';
import Slide from './Slide';
import PrevArrow from './PrevArrow';

import Button from '../../Button';

const VacanciesSection = () => {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    className: styles.slider,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const renderVacanciesList = vacanciesList.map(
    ({ id, Icon, title, textSteps }) => (
      <Slide key={id} Icon={Icon} title={title} textSteps={textSteps} />
    ),
  );

  return (
    <div className="container">
      <h2 className={styles.title}>Թափուր հաստիքներ</h2>
      <Slider {...settings}>{renderVacanciesList}</Slider>
      <Button className={styles.button}>Դիմել</Button>
    </div>
  );
};

export default VacanciesSection;
