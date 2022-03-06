import React from "react";
import styled from "styled-components";
import MainButton from "../components/login/loginCommon/MainButton";
import UnicornIcon from "../components/login/loginCommon/UnicornIcon";
import UserInputContainer from "../components/login/loginCommon/UserInputContainer";
import loginNaver from "../assets/icons/Login_Naver.svg";
import loginKakao from "../assets/icons/Login_Kakao.svg";
import loginGoogle from "../assets/icons/Login_Google.svg";

// 로그인 페이지 전체 컨테이너
const LoginPageContainer = styled.div`
  width: 1440px;
  height: 820px;
  display: flex;
  background-color: slateblue;
`;

// 로그인 페이지 왼쪽 유저 입력부분 컨테이너
const LoginUserInputPart = styled.div`
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

// // 로그인 페이지 상단 소개문구 담는 컨테이너
// const LoginGreetingCotainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   left: 130px;
//   top: 186px;
//   margin-top: 69px;
// `;

//소개문구 윗부분
const GreetingTop = styled.span`
  display: block;
  margin-top: 69px;
  width: 81%;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
  line-height: 35px;
  // letter-spacing: px;
  // word-spacing: -1px;
  white-space: nowrap;
`;

//소개문구 아랫부분
const GreetingBottom = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 32px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.6);
  // letter-spacing: -1px;
  // word-spacing: -2px;
  padding-top: 4px;
`;

// 로그인 유지 & 회원가입 컨테이너
const KeepLoggedIn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 22px;
  height: 24px;
  padding-top: 3px;

  label {
    font-size: 16px;
    color: #999999;
  }

  span {
    font-size: 16px;
    color: #999999;
  }
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

const SNSLoginButton = styled.img`
  width: 27.5%;
  height: 40px;
`;

// 처음이면 회원가입 안내문구 컨테이너

const AskJoin = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  color: #999999;

  a {
    color: #f3694c;
    margin-left: 10px;
  }
`;

// 로그인 페이지 오른쪽 이미지 부분 컨테이너
const LoginPageImagePart = styled.div`
  width: 810px;
  background: slateblue;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginUserInputPart>
        <UnicornIcon />
        {/* <LoginGreetingCotainer> */}
        <GreetingTop>
          데이터를 기반으로 한<br />
          프로젝트 지속 가능성 확인
        </GreetingTop>
        <GreetingBottom>
          안녕하세요! 로그인을 위해 계정 정보를 입력해주세요.
        </GreetingBottom>
        {/* </LoginGreetingCotainer> */}
        <UserInputContainer inputType="이메일" />
        <UserInputContainer inputType="비밀번호" />
        <KeepLoggedIn>
          <label>
            <input type="checkbox" />
            로그인 유지
          </label>
          <span>비밀번호 찾기</span>
        </KeepLoggedIn>
        <MainButton buttonType="로그인" />
        <DividingPart>
          <DividingLine />
          <SnsLogin>SNS 계정으로 로그인</SnsLogin>
          <DividingLine />
        </DividingPart>
        <SnsContainer>
          <SNSLoginButton src={loginNaver}></SNSLoginButton>
          <SNSLoginButton src={loginKakao}></SNSLoginButton>
          <SNSLoginButton src={loginGoogle}></SNSLoginButton>
        </SnsContainer>
        <AskJoin>
          <span>유니콘이 처음이신가요?</span>
          <a href="*">회원가입</a>
        </AskJoin>
      </LoginUserInputPart>
    </LoginPageContainer>
  );
};

export default LoginPage;
