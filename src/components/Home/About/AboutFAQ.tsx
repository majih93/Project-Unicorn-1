import React from "react";
import styled from "styled-components";
import ImgAbout from "./asset/img/About_img.svg";
import AboutLTV from "./AboutComponentsContents/About-LTV-Component";
import AboutUnicorn from "./AboutComponentsContents/About-Unicorn";
import AboutFAQContainer from "./AboutFAQComponents/AboutFAQContainer";

const Base = styled.div`
  /* border: 1px solid black; */
  background: #fafafa;
  width: 1440px;
  height: 800px;
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

const LoadBtn = styled.div`
  width: 250px;
  height: 44px;
  background-color: #4a73f4;
  border-radius: 5px;
  position: absolute;
  bottom: 80px;
`;
const BtnText = styled.div`
  /* border: 1px solid black; */
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  justify-content: center;
  position: absolute;
  align-items: center;
  margin: 10px 84px;
  line-height: 23.68px;
`;

const AboutContents = () => {
  return (
    <Base>
      <Container>
        <Nav>
          <NavContents>유니콘이란?</NavContents>
          <NavContents>고객생애가치(LTV)란?</NavContents>
          <Clicked>FAQ</Clicked>
          <NavContents>Contact</NavContents>
        </Nav>
        <Contents>
          <ContentsSpan>
            <AboutFAQContainer />
          </ContentsSpan>
        </Contents>
      </Container>
      <LoadBtn>
        <BtnText>5개 더보기</BtnText>
      </LoadBtn>
    </Base>
  );
};

export default AboutContents;
