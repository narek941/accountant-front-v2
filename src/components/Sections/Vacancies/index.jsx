import React from 'react';
import Slider from 'react-slick';

import { useToggle } from 'hooks/index';
import { vacanciesList } from 'utils/index';

import Form from './Form';
import Slide from './Slide';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import styles from './Vacancies.scss';

import Button from '../../Button';

const VacanciesSection = () => {
  const [value, toggle] = useToggle(false);
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
      {!value ? (
        <>
          <h2 className={styles.title}>Թափուր հաստիքներ</h2>
          <Slider {...settings}>{renderVacanciesList}</Slider>
          <Button onClick={toggle} className={styles.button}>
            Դիմել
          </Button>
        </>
      ) : (
        <>
          <h2 className={styles.title}>Դիմել աշխատանքի համար</h2>

          <Form />
        </>
      )}
    </div>
  );
};

export default VacanciesSection;
