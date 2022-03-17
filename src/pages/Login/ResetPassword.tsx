import React, { useState } from "react";
import styled from "styled-components";
import MainButton from "../../components/login/loginCommon/MainButton";
import UnicornIcon from "../../components/login/loginCommon/UnicornIcon";
import UserInputContainer from "../../components/login/loginCommon/UserInputContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import loginPageImage from "../../assets/images/loginImage.svg";

const FindPWContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  @media (max-height: 630px) {
    height: 630px;
  }
`;

// 우측 유저 입력부분
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
// 비밀번호 변경 제목
const FindPWTitle = styled.span`
  display: block;
  margin-top: 137px;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
`;

// 비밀번호 안내문구
const FindPWInfo = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 34px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.6);
  padding-top: 4px;
`;

// 비밀번호 입력하는 form
const ResetPasswordForm = styled.form``;

const ButtonContainer = styled.div`
  margin-top: 28px;
`;
// 우측 이미지 부분
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

// 비밀번호 재설정 페이지 설정할 때 가져와야하는 값에 접근하는 함수?
// hooks 폴더에 넣어서 글로벌하게 사용해도 됨
// query parameter를 받기 위해서 useLocation 훅을 사용
function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

const ResetPassword = () => {
  // navigate
  const navigate = useNavigate();

  const { resetPassword } = useAuth();
  const query = useQuery();
  console.log(query.get("mode"));
  console.log(query.get("oobCode"));
  console.log(query.get("continueUrl"));

  const [newPassword, setNewPassword] = useState("");

  return (
    <FindPWContainer>
      {/* 우측 유저 입력 부분 */}
      <FindPWUserInputPart>
        <UnicornIcon />
        {/* 상단 소개문구 */}
        <FindPWTitle>비밀번호 변경하기</FindPWTitle>
        <FindPWInfo>변경할 비밀번호를 입력하세요.</FindPWInfo>

        {/* 비밀번호 변경 FORM */}
        <ResetPasswordForm
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            resetPassword(query.get("oobCode"), newPassword)
              .then((response: any) => {
                console.log(response);
                navigate("/login");
              })
              .catch((error: any) => console.log(error.message));
          }}
        >
          <UserInputContainer
            inputType={"새로운 비밀번호 입력"}
            type={"password"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewPassword(e.target.value);
            }}
          />
          <ButtonContainer>
            <MainButton buttonType={"변경하기"} />
          </ButtonContainer>
        </ResetPasswordForm>
      </FindPWUserInputPart>
      {/* 우측 이미지 부분 */}
      <RightImagePart>
        <img src={loginPageImage} alt="loginImage" />
      </RightImagePart>
    </FindPWContainer>
  );
};

export default ResetPassword;
