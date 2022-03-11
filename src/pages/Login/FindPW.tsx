import React from "react";
import styled from "styled-components";
import MainButton from "../../components/Login/loginCommon/MainButton";
import UnicornIcon from "../../components/Login/loginCommon/UnicornIcon";
import UserInputContainer from "../../components/Login/loginCommon/UserInputContainer";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const FindPWContainer = styled.div`
  width: 1440px;
  height: 820px;
  display: flex;
  background-color: slateblue;
`;

const FindPWUserInputPart = styled.div`
width: 630px;
  background: #ffffff;
  padding-top: 99px;
  padding-left: 130px;
  padding-right: 100px;
  padding-bottom: 97px;
  padding
  display: flex;
  flex-direction: column;`;

const FindPWTitle = styled.span`
  display: block;
  margin-top: 137px;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
`;

const FindPWInfo = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.6);
  // letter-spacing: -1px;
  // word-spacing: -2px;
  padding-top: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 28px;
`;

const AskLogin = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  margin-top: 110px;
  color: #999999;

  a {
    color: #f3694c;
    margin-left: 5px;
  }
`;

const FindPW = () => {
  return (
    <FindPWContainer>
      <FindPWUserInputPart>
        <UnicornIcon />
        <FindPWTitle>비밀번호 찾기</FindPWTitle>
        <FindPWInfo>이메일 입력 시, 비밀번호 변경 URL이 전송됩니다.</FindPWInfo>
        <UserInputContainer inputType={"이메일 주소 입력"} type={"email"} />
        <ButtonContainer>
          <MainButton buttonType={"전송하기"} />
        </ButtonContainer>
        <AskLogin>
          <span>비밀번호를 찾으셨나요?</span>
          <Link to="/login">로그인</Link>
        </AskLogin>
      </FindPWUserInputPart>
    </FindPWContainer>
  );
};

export default FindPW;
