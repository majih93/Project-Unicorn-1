import React from "react";
import styled from "styled-components";
import UnicornIcon from "../components/common/UnicornIcon";
import UserInputContainer from "../components/common/UserInputContainer";

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
  width: 324px;
  height: 70px;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
  line-height: 35px;
  letter-spacing: -2px;
  word-spacing: -2px;
  white-space: nowrap;
`;

//소개문구 아랫부분
const GreetingBottom = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 32px;
  width: 396px;
  height: 27px;
  font-size: 18px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: -1px;
  word-spacing: -2px;
  padding-top: 4px;
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
        <UserInputContainer />
        <UserInputContainer />
      </LoginUserInputPart>
    </LoginPageContainer>
  );
};

export default LoginPage;
