import React from "react";
import styled from "styled-components";
import ImgAbout from "../../../assets/images/About_img.svg";
import AboutUnicorn from "./AboutComponentsContents/About-Unicorn";

const Base = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  margin: 0 auto;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 1180px;
  margin: 0 auto;
  position: relative;
`;

const Nav = styled.div`
  /* border: 1px solid black; */
  display: inline-block;
  position: absolute;
  vertical-align: auto;
`;

const NavContents = styled.div`
  /* border: 1px solid black; */
  font-weight: 250;
  font-size: 20px;
  line-height: 20px;
  margin: 20px auto;
  color: #000000;
`;

const Contents = styled.div`
  /* border: 1px solid black; */
`;

const Clicked = styled.div`
  /* border: 1px solid black; */
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #0420bf;
`;

const ContentsSpan = styled.div`
  width: 840px;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 340px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const AboutImg = styled.div`
  /* border: 1px solid black; */
`;

const AboutContents = () => {
  return (
    <Base>
      <Container>
        <Nav>
          <Clicked>유니콘이란?</Clicked>
          <NavContents>고객생애가치(LTV)란?</NavContents>
          <NavContents>FAQ</NavContents>
          <NavContents>Contact</NavContents>
        </Nav>
        <Contents>
          <ContentsSpan>
            <AboutUnicorn />
          </ContentsSpan>
        </Contents>
      </Container>
      <AboutImg>
        <img src={ImgAbout} alt="About_Image" />
      </AboutImg>
    </Base>
  );
};

export default AboutContents;
