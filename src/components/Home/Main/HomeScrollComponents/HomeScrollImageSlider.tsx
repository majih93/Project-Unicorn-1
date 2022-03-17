
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import HomeScrollImage1 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider1"
import HomeScrollImage2 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider2"
import HomeScrollImage3 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider3"

// Import Swiper styles
import 'swiper/swiper.scss';

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      style={{height:'376px'}}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;