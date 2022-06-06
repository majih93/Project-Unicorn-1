import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainButton from "../../components/login/loginCommon/MainButton";
import UnicornIcon from "../../components/login/loginCommon/UnicornIcon";
import UserInputContainer from "../../components/login/loginCommon/UserInputContainer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import loginPageImage from "../../assets/images/loginImage.svg";
import useDocumentTitle from "../../utils/useDocumentTitle";
const FindPWContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  @media (max-height: 630px) {
    height: 630px;
  }
`;

const FindPWForm = styled.form``;

const FindPWUserInputPart = styled.div`
  height: 100%;
  background: #ffffff;
  padding-top: 12.19vh;
  padding-left: 130px;
  padding-right: 100px;
  padding-bottom: 11.58vh;
  display: flex;
  flex-direction: column;
  @media (max-height: 820px) {
    padding-top: 50px;
    margin: 0 auto;
    padding-right: 130px;
  }
`;

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

const RightImagePart = styled.div`
  width: 56.25%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1440px) {
    img {
      width: 810px;
      height: 820px;
    }
  }
`;

const FindPW = () => {
  // 타이틀 변경 로직
  useDocumentTitle("유니콘: 비밀번호 찾기");

  const [findEmail, setFindEmail] = useState("");
  const { findPassword } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);

    if (authToken === null) {
      navigate("/findpw");
    }
    if (authToken) {
      navigate("/home");
    }
  }, []);

  return (
    <FindPWContainer>
      {/* 우측 유저 입력 부분 */}
      <FindPWUserInputPart>
        <UnicornIcon />
        <FindPWTitle>비밀번호 찾기</FindPWTitle>
        <FindPWInfo>이메일 입력 시, 비밀번호 변경 URL이 전송됩니다.</FindPWInfo>
        <FindPWForm
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            findPassword(findEmail)
              .then((response: any) => console.log(response))
              .catch((error: any) => console.log(error.message));
          }}
        >
          <UserInputContainer
            inputType={"이메일 주소 입력"}
            type={"email"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFindEmail(e.target.value);
            }}
          />
          <ButtonContainer>
            <MainButton buttonType={"전송하기"} />
          </ButtonContainer>
        </FindPWForm>
        {/* 비밀번호 찾았다면 로그인으로 */}
        <AskLogin>
          <span>비밀번호를 찾으셨나요?</span>
          <Link to="/login">로그인</Link>
        </AskLogin>
      </FindPWUserInputPart>
      {/* 우측 이미지 부분 */}
      <RightImagePart>
        <img src={loginPageImage} alt="loginImage" />
      </RightImagePart>
    </FindPWContainer>
  );
};

export default FindPW;
