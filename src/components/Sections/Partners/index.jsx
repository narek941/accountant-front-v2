import React, { useContext, useRef } from 'react';
import Slider from 'react-slick';

import { useOnScreen } from 'hooks/index';
import { partnersList } from 'utils/index';
import { I18nContext } from 'context/index';

import styles from './Partners.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const PartnersSection = () => {
  const t = useContext(I18nContext);
  const ref = useRef();
  useOnScreen(ref);

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
    <div className={`${styles.wrapper} container `} ref={ref}>
      <h2 className={styles.title}>{t('partners')}</h2>
      <Slider {...settings}>{renderPartnersList}</Slider>
    </div>
  );
};

export default PartnersSection;
