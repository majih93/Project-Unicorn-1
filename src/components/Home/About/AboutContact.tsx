import React, { Component } from "react";
import styled from "styled-components";
import ContactImg from "../../../assets/images/AboutContactImg.svg";
import IconPhone from "../../../assets/icons/Icon-Phone.svg";
import IconMail from "../../../assets/icons/Icon-Mail.svg";
import IconBuilding from "../../../assets/icons/Icon-Building.svg";

interface inputProps {
  inputType: string;
  type: string;
  onChange?: any;
}

const Base = styled.div`
  /* border: 1px solid black; */
  background: #fafafa;
  width: 1440px;
  height: 690px;
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

const Clicked = styled.div`
  color: #0420bf;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
`;

const ContactContainer = styled.div`
  /* border: 1px solid black; */
  top: 90px;
  display: block;
  position: absolute;
  left: 470px;
`;

const ContactTextContainer = styled.div`
  display: flex;
  /* background-color: pink; */
  margin-top: 30px;
`;

const ContactUS = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #0420bf;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  /* border: 1px solid black; */
`;

const ContactText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #07145a;
  margin-left: 20px;
`;

const InputContainer = styled.div`
  /* border: 1px solid black; */
  background-color: #ffffff;
  width: 473px;
  height: 465px;
  right: 129px;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 1;
  margin-top: 50px;
`;

const InputText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000;
  
`;

const InputWrapper = styled.div`
  /* border: 1px solid black; */
  position: relative;
  padding-left: 30px;
  padding-bottom: 20px;
  top: 50px;
`;

const ImgContact = styled.div`
  position: absolute;
  bottom: 0;
`;

const Input = styled.input.attrs({
  type: "input",
})`
  width: 413px;
  height: 46px;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0 12px;
`;

const InputLong = styled.textarea.attrs({
  type: "input",
  placeholder: "문의 사항을 적으세요."
})`
  width: 413px;
  height: 140px;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0 12px;
  padding-top: 5px;
`;

const InputBtn = styled.div`
  width: 233px;
  height: 44px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  right: 150px;
  bottom: 70px;
  z-index: 2;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  color: #4a73f3;
  padding: 10px 87px;
`;

const AboutContents = () => {
  return (
    <Base>
      <Container>
        <Nav>
          <NavContents>유니콘이란?</NavContents>
          <NavContents>고객생애가치(LTV)란?</NavContents>
          <NavContents>FAQ</NavContents>
          <Clicked>Contact</Clicked>
        </Nav>
      </Container>
      <ContactContainer>
        <ContactUS>Contact Us</ContactUS>
        <ContactTextContainer>
          <Icon>
            <img src={IconPhone} alt="" />
          </Icon>
          <ContactText>070-8065-4506</ContactText>
        </ContactTextContainer>
        <ContactTextContainer>
          <Icon>
            <img src={IconMail} alt="" />
          </Icon>
          <ContactText>info@1zlabs.com</ContactText>
        </ContactTextContainer>
        <ContactTextContainer>
          <Icon>
            <img src={IconBuilding} alt="" />
          </Icon>
          <ContactText>
            주소 서울특별시 강남구 영동대로 602,
            <br />
            6층 엔034호 (삼성동, 삼성동 미켈란
            <br />
            107)
          </ContactText>
        </ContactTextContainer>
      </ContactContainer>
      <InputContainer>
        <InputWrapper>
          <InputText>이메일</InputText>
          <Input placeholder="기업 메일 또는 개인 메일을 적으세요." />
        </InputWrapper>
        <InputWrapper>
          <InputText>기업명</InputText>
          <Input placeholder="기업 명 또는 개인 성명을 적으세요."/>
        </InputWrapper>
        <InputWrapper>
          <InputText>내용</InputText>
          <InputLong />
        </InputWrapper>
      </InputContainer>
      <InputBtn>문의하기</InputBtn>
      <ImgContact>
        <img src={ContactImg} alt="About_Contact_Image" />
      </ImgContact>
    </Base>
  );
};

export default AboutContents;
