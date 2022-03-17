import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import React from "react";

import "swiper/swiper.scss";

import HomeScrollSlider1 from "../ImageSliderComponents/HomeScrollImageSlider1";
import HomeScrollSlider2 from "../ImageSliderComponents/HomeScrollImageSlider2";
import HomeScrollSlider3 from "../ImageSliderComponents/HomeScrollImageSlider3";

const SwiperSlide: React.FC = () => {
  return (
    <Swiper
      style={{ height: "376px" }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={true}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide> */}

      <SwiperSlide><HomeScrollSlider1/></SwiperSlide>
      <SwiperSlide><HomeScrollSlider2/></SwiperSlide>
      <SwiperSlide><HomeScrollSlider3/></SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlide;
