// Import Swiper React components
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import styled from "styled-components";

import HomeScrollImage1 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider1";
import HomeScrollImage2 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider2";
import HomeScrollImage3 from "./Swiper/ImageSliderComponents/HomeScrollImageSlider3";
import Who1 from "../../../../assets/images/Who1.svg"
import Who2 from "../../../../assets/images/Who2.svg"
import Who3 from "../../../../assets/images/Who3.svg"

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

const Image1 = styled.div`
  background-image: url(${Who1});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`
const Image2 = styled.div`
  background-image: url(${Who2});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`
const Image3 = styled.div`
  background-image: url(${Who3});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* <SwiperSlide><HomeScrollImage1 /></SwiperSlide>
      <SwiperSlide><HomeScrollImage2 /></SwiperSlide>
      <SwiperSlide><HomeScrollImage3 /></SwiperSlide> */}
      <SwiperSlide><Image1/></SwiperSlide>
      <SwiperSlide><Image2/></SwiperSlide>
      <SwiperSlide><Image3/></SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
