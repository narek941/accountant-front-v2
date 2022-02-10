import React from 'react';
import Slider from 'react-slick';

import { newsList } from 'utils/index';

import Slide from './Slide';
import styles from './News.scss';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const NewsSection = () => {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    className: styles.slider,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderNewsList = newsList.map(({ id, img, title, text }) => (
    <Slide key={id} img={img} title={title} text={text} />
  ));

  return (
    <div className="container">
      <h2 className={styles.title}>Նորություններ</h2>
      <Slider {...settings}>{renderNewsList}</Slider>
    </div>
  );
};

export default NewsSection;
