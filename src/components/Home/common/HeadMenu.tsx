import React, { Component } from "react";
import { ReactDOM } from "react";
import LogoImg from "../../../assets/images/Logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/loginAuthentication/AuthContext";

const HeadMenu = (props: any) => {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");
  const { logout } = useAuth();
  console.log(authToken);

  return (
    <Container>
      <HeaderImg onClick={() => navigate("/")}></HeaderImg>
      <Menu>
        {authToken ? (
          <>
            <AboutBtn
              onClick={() => navigate("/about")}
              style={{ paddingLeft: "100px" }}
            >
              About us
            </AboutBtn>
            <LoginBtn
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              로그아웃
            </LoginBtn>
          </>
        ) : (
          <>
            <AboutBtn onClick={() => navigate("/about")}>About us</AboutBtn>
            <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
            <JoinBtn onClick={() => navigate("/join")}>회원가입</JoinBtn>
          </>
        )}
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.div`
  width: 74px;
  height: 36px;
  border: 2.5px solid #0420bf;
  border-radius: 6px;
  color: #0420bf;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`;

const JoinBtn = styled.div`
  width: 74px;
  height: 36px;
  border: 2.5px solid #0420bf;
  border-radius: 6px;
  color: #0420bf;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`;

export default HeadMenu;
