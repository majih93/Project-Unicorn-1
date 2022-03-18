import React from "react";
import styled from "styled-components";
import LogoFooter from "../../../assets/icons/logo2.svg";

const Container = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 120px;
  margin: 0 auto;
  position: relative;
  background-color: #f5f5f5;
`;

const Logo = styled.div`
  /* border: 1px solid black; */
  top: 40px;
  left: 130px;
  position: absolute;
`;

const MenuContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  position: absolute;
  width: 260px;
  height: 20px;
  justify-content: space-between;
  top: 50px;
  left: 340px;
`;

const Menu = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #999999;
`;

const Info = styled.div`
  /* border: 1px solid black; */
  position: absolute;
  left: 720px;
  top: 30px;
  font-size: 14px;
  color: #999999;
`;

const Bold = styled.div`
  font-weight: 700;
`;

const Blue = styled.div`
  color: #0420bf;
`;

function Footer() {
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoFooter} alt="Logo Footer" />
        </Logo>
        <MenuContainer>
          <Menu>About</Menu>
          <Menu>이용약관</Menu>
          <Menu>개인정보 처리방침</Menu>
        </MenuContainer>
        <Info>
          주식회사 1z Labs | 사업자 등록번호 : 438-88-02481 | 전화번호 :
          070-8065-4506 <br />
          서울 특별시 강남구 영동대로 602, 6층 엔034호(삼성동, 삼성동 미켈란
          107)
          <br />© 2022 1z Labs inc. ALL RIGHTS RESERVED.
        </Info>
      </Container>
    </>
  );
}

export default Footer;
