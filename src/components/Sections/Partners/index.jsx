import React from 'react';
import Slider from 'react-slick';

import { partnersList } from 'utils/index';

import styles from './Partners.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const PartnersSection = () => {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    className: `partners_slider ${styles.slider}`,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderPartnersList = partnersList.map(({ id, img }) => (
    <img className={styles.slider__item} key={id} src={img} alt="img" />
  ));

  return (
    <div className={`container `}>
      <h2 className={styles.title}>Գործընկերներ</h2>
      <Slider {...settings}>{renderPartnersList}</Slider>
    </div>
  );
};

export default PartnersSection;
