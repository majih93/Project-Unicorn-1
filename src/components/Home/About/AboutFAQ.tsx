import React from "react";
import styled from "styled-components";
import ImgAbout from "./asset/img/About_img.svg";
import AboutLTV from "./AboutComponentsContents/About-LTV-Component";
import AboutUnicorn from "./AboutComponentsContents/About-Unicorn";
import AboutFAQContainer from "./AboutFAQComponents/AboutFAQcontainer";

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
  position: relative;
`;

const Clicked = styled.div`
  /* border: 1px solid black; */
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #0420bf;
`;

const ContentsSpan = styled.div`
  /* border: 1px solid pink; */
  width: 855px;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 329px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const LoadBtn = styled.div`
  border: 1px solid green;
  width: 250px;
  background-color: #4a73f4;
  border-radius: 5px;
  margin-left: 926px;
  margin-bottom: 70px;
  margin-top: -33px;
`;
const BtnText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 10px 84px;
  line-height: 23.68px;
  right: 353px;
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
        <LoadBtn>
          <BtnText>5개 더보기</BtnText>
        </LoadBtn>
      </Container>
    </Base>
  );
};

export default AboutContents;
