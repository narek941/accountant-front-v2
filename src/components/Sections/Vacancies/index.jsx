import React from 'react';

import { BecomeEmployeeForm } from 'components/index';
// import Slider from 'react-slick';

// import Slide from './Slide';

// import styles from './Vacancies.scss';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';

const VacanciesSection = () => {
  // const settings = {
  //   dots: false,
  //   speed: 500,
  //   infinite: true,
  //   className: styles.slider,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  // };

  // const renderNewsList = newsList.map(({ id, img, text }) => (
  //   <Slide id={id} img={img} text={text} />
  // ));

  return (
    <div>
      {/* <h2 className={styles.title}>Թափուր հաստիքներ</h2> */}
      {/* <div /> */}
      <BecomeEmployeeForm />
      {/* <Slider {...settings}>{renderNewsList}</Slider>  */}
    </div>
  );
};

export default VacanciesSection;
