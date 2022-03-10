import React from "react";
import styled from "styled-components";
import ImgAbout from "./asset/img/About_img.svg";
import AboutLTV from "./AboutComponentsContents/About-LTV-Component";
import AboutUnicorn from "./AboutComponentsContents/About-Unicorn";
import AboutFAQContainer from "./AboutFAQComponents/AboutFAQContainer"


const AboutFAQ = styled.div`
  background-color: #F5F5F5;
`

const Base = styled.div`
  /* border: 1px solid black; */
  background: #F5F5F5;
  width: 1440px;
  height: 1050px;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const Nav = styled.div`
  /* display: none; */
  /* border: 1px solid black; */
  top: 58px;
  width: 200px;
  height: 100px;
  position: absolute;
`;

const NavContents = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #000;
`;

const Contents = styled.div`
  /* border: 1px solid black; */
  width: 840px;
  height: 490px;
  position: absolute;
  right: 0;
  top: 48px;
`;

const ContentsSpan = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

const AboutImg = styled.div`
  position: absolute;
  bottom: 0;
`;

const Clicked = styled.div`
  color: #0420bf;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
`;

const AboutContents = () => {
  return (
    <Base>
      <Container>
        <Nav>
          <NavContents>유니콘이란?</NavContents>
          <NavContents>고객생애가치(LTV)란?</NavContents>
          <Clicked>FAQ</Clicked>
        </Nav>
        <Contents>
          <ContentsSpan>
            <AboutFAQContainer/>
          </ContentsSpan>
        </Contents>
      </Container>
    </Base>
  );
};

export default AboutContents;
