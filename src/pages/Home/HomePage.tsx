import React from "react";
import HeadMenu from "../../components/Home/common/HeadMenu";
import HomeContents from "../../components/Home/Main/HomeContents";
import Navigation from "../../components/Home/common/Navigation";
import HomeScrollWhy from "../../components/Home/Main/HomeScroll";
import HomeScrollHow from "../../components/Home/Main/HomeScrollComponents/HomeScrollHow";
import Footer from "../../components/Home/common/Footer";
import useDocumentTitle from "../../utils/useDocumentTitle";
import HomeSwiper from "../../components/Home/Main/HomeScrollComponents/Swiper/HomeSlider";

const HomePage = () => {
  // 타이틀 변경 로직
  useDocumentTitle("유니콘");
  return (
    <>
      <HeadMenu></HeadMenu>
      <HomeContents></HomeContents>
      <Navigation></Navigation>
      <HomeScrollWhy />
      <HomeSwiper />
      <HomeScrollHow />
      <Footer />
    </>
  );
};

export default HomePage;
