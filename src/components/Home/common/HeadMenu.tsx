import React, { Component } from "react";
import { ReactDOM } from "react";
import LogoImg from "../../../assets/img/Logo.svg";
import styled from "styled-components";

const HeadMenu = (props:any) => {
  return (
    <Container>
      <HeaderImg></HeaderImg>
      <Menu>
        <AboutBtn>About us</AboutBtn>
        <LoginBtn>로그인</LoginBtn>
        <JoinBtn>회원가입</JoinBtn>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 56px;
  margin: 0 auto;
  position: relative;
`;

const HeaderImg = styled.img.attrs({
  src: `${LogoImg}`,
})`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  margin: auto 0;
  padding: 130px;
  /* height: 18.23px; */
`;

const Menu = styled.div`
  display: flex;
  font-weight: 700;
  list-style: none;
  position: absolute;
  right: 130;
  padding: 10px 0px;
  align-items: center;
  right: 130px;
  width: 245px;
  justify-content: space-between;
`;

const AboutBtn = styled.div`
  color: #999;
  font-size: 14px;
`;

const LoginBtn = styled.div`
  border-radius: 1px solid black;
  color: #0420bf;
  border: 3px solid #0420bf;
  border-radius: 6px;
  padding: 6px 9px;
`;

const JoinBtn = styled.div`
  border-radius: 1px solid black;
  color: #0420bf;
  border: 3px solid #0420bf;
  border-radius: 6px;
  padding: 6px 9px;
`;

export default HeadMenu;
