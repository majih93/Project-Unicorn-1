import React from "react";
import { ReactDOM } from "react";
import HeadMenu from "../../components/Home/common/HeadMenu";
import HomeContents from "../../components/Home/Main/HomeContents";
import Navigation from "../../components/Home/common/Navigation";

const HomePage = () => {
  return (
    <>
      <HomeContents></HomeContents>
      <Navigation></Navigation>
    </>
  );
};

export default HomePage;
