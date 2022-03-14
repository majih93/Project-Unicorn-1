import React, { useState } from "react";
import styled from "styled-components";
import MainButton from "../../components/login/loginCommon/MainButton";
import UnicornIcon from "../../components/login/loginCommon/UnicornIcon";
import UserInputContainer from "../../components/login/loginCommon/UserInputContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useAuth } from "../../context/loginAuthentication/AuthContext";

const FindPWContainer = styled.div`
  width: 1440px;
  height: 820px;
  display: flex;
  background-color: slateblue;
`;

const ResetPasswordForm = styled.form``;

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
      <FindPWUserInputPart>
        <UnicornIcon />
        <FindPWTitle>비밀번호 변경하기</FindPWTitle>
        <FindPWInfo>변경할 비밀번호를 입력하세요.</FindPWInfo>
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
    </FindPWContainer>
  );
};

export default ResetPassword;
