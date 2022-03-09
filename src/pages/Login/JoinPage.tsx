import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainButton from "../../components/Login/loginCommon/MainButton";
import UnicornIcon from "../../components/Login/loginCommon/UnicornIcon";
import loginNaver from "../../assets/icons/Login_Naver.svg";
import loginKakao from "../../assets/icons/Login_Kakao.svg";
import loginGoogle_logo from "../../assets/icons/loginGoogle_logo.svg";
import loginGoogle_letter from "../../assets/icons/loginGoogle_letter.svg";
import UserInputContainer from "../../components/Login/loginCommon/UserInputContainer";

const JoinPageContainer = styled.div`
  width: 1440px;
  height: 820px;
  display: flex;
  background-color: slateblue;
`;

const JoinUserInputPart = styled.div`
  width: 630px;
  background: #ffffff;
  padding-top: 99px;
  padding-left: 130px;
  padding-right: 100px;
  padding-bottom: 97px;
  padding
  display: flex;
  flex-direction: column;
`;

const GreetingTop = styled.span`
  display: block;
  margin-top: 69px;
  margin-bottom: 32px;
  width: 81%;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
  line-height: 35px;
  // letter-spacing: px;
  // word-spacing: -1px;
  white-space: nowrap;
`;

const MainButtonContainer = styled.div`
  margin-top: 22px;
`;

// 로그인 가운데 분리선
const DividingPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

// 분리하는 선
const DividingLine = styled.hr`
  box-sizing: content-box;
  width: 34.5%;
  border: 0.5px solid white;
  height: 1px;
  background: rgba(192, 192, 192, 0.5);
`;

// 분리선 가운데 문구
const SnsLogin = styled.span`
  width: 26.75%;
  height: 14px;
  color: #c0c0c0;
  font-size: 12px;
  letter-spacing: -0.7px;
`;

// SNS 로그인 부분
const SnsContainer = styled.div`
  width: 100%
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 59px;
`;

// SNS 로그인 버튼

const SNSLoginButton = styled.div`
  width: 27.5%;
  height: 40px;
  &:hover {
    cursor: pointer;
  }

  &:nth-of-type(3) {
    background: #ffffff;
    /* googleshadow1 */

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.084),
      0px 1px 1px rgba(0, 0, 0, 0.168);
    border-radius: 2px;
    padding-left: 3px;
    padding-right: 8px;
    display: flex;
    justify-content: space-between;

    .g_letter {
      width: 45px;
      height: 16px;
      margin-top: 12px;
    }
  }
`;

const AskLogin = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  color: #999999;

  a {
    color: #f3694c;
    margin-left: 5px;
  }
`;

const JoinPage = () => {
  return (
    <JoinPageContainer>
      <JoinUserInputPart>
        <UnicornIcon />
        <GreetingTop>
          데이터를 기반으로 한<br />
          프로젝트 지속 가능성 확인
        </GreetingTop>
        <UserInputContainer inputType={"이메일"} />
        <UserInputContainer inputType={"비밀번호"} />
        <UserInputContainer inputType={"비밀번호확인"} />
        <MainButtonContainer>
          <MainButton buttonType={"생성하기"} />
        </MainButtonContainer>
        <DividingPart>
          <DividingLine />
          <SnsLogin>SNS 계정으로 로그인</SnsLogin>
          <DividingLine />
        </DividingPart>
        <SnsContainer>
          <SNSLoginButton>
            <img src={loginNaver} alt="naver" />
          </SNSLoginButton>
          <SNSLoginButton>
            <img src={loginKakao} alt="kakao" />
          </SNSLoginButton>
          <SNSLoginButton>
            <img src={loginGoogle_logo} alt="g_logo" />
            <img src={loginGoogle_letter} alt="g_letter" className="g_letter" />
          </SNSLoginButton>
        </SnsContainer>
        <AskLogin>
          <span>이미 가입하셨나요?</span>
          <a href="*">
            <Link to="/login">로그인</Link>
          </a>
        </AskLogin>
      </JoinUserInputPart>
    </JoinPageContainer>
  );
};

export default JoinPage;
