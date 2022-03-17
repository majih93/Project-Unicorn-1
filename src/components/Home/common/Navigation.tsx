import React, { Component } from "react";
import styled from "styled-components";
import LogoImg from "../../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/loginAuthentication/AuthContext";

const Navigation = (props: any) => {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");
  const { logout } = useAuth();
  console.log(authToken);

  return (
    <Base>
      <Container>
        <Menu>WHY</Menu>
        <Menu>WHO</Menu>
        <Menu>HOW</Menu>
        {!authToken && (
          <JoinBtn onClick={() => navigate("/join")}>회원가입</JoinBtn>
        )}
      </Container>
    </Base>
  );
};

const Base = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 72px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 700;
`;

const JoinBtn = styled.div`
  border-radius: 1px solid black;
  color: #0420bf;
  border: 3px solid #0420bf;
  border-radius: 6px;
  padding: 6px 9px;
  &:hover {
    cursor: pointer;
  }
`;

export default Navigation;
