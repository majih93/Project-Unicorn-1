import { Link } from "react-router-dom";
import styled from "styled-components";
import HeadMenu from "../../components/Home/common/HeadMenu";
import AboutLTV from "../../components/Home/About/AboutComponentsContents/About-LTV-Component";
import AboutContentsUnicorn from "../../components/Home/About/AboutUnicorn";
import AboutContentsLTV from "../../components/Home/About/AboutLTV";
import AboutContentsFAQ from "../../components/Home/About/AboutFAQ";
import AboutContact from "../../components/Home/About/AboutContact"
import Footer from "../../components/Home/common/Footer"

const AboutPage = () => {
  return (
    <>
      <HeadMenu/>
      <AboutContentsUnicorn />
      <AboutContentsLTV />
      <AboutContentsFAQ />
      <AboutContact/>
      <Footer/>
    </>
  );
};

export default AboutPage;
