import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useAuth } from "../../context/loginAuthentication/AuthContext";

import MainButton from "../../components/login/loginCommon/MainButton";
import UnicornIcon from "../../components/login/loginCommon/UnicornIcon";
import loginNaver from "../../assets/icons/Login_Naver.svg";
import loginKakao from "../../assets/icons/Login_Kakao.svg";
import loginGoogle_logo from "../../assets/icons/loginGoogle_logo.svg";
import loginGoogle_letter from "../../assets/icons/loginGoogle_letter.svg";
import UserInputContainer from "../../components/login/loginCommon/UserInputContainer";
import loginPageImage from "../../assets/images/loginImage.svg";
import useDocumentTitle from "../../utils/useDocumentTitle";

const JoinPage: FC = () => {
  // 타이틀 변경 로직
  useDocumentTitle("유니콘: 회원가입");
  // 회원가입 로직 구현 관련 코드
  // 사용자가 입력하는 이메일, 비밀번호 값 받아오기
  const [joinEmail, setJoinEmail] = useState<string>("");
  const [joinPassword, setJoinPassword] = useState<string>("");

  // useAuth 활용해서 context에 선언된 join 함수 불러오기
  const { join, signInWithGoogle } = useAuth();

  // 회원가입 완료 시 라우팅 위한 navigate
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);

    if (authToken === null) {
      navigate("/join");
    }
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <JoinPageContainer>
      {/* 우측 유저 입력 부분 */}
      <JoinUserInputPart>
        <UnicornIcon />
        {/* 상단 소개 문구 */}
        <GreetingTop>
          데이터를 기반으로 한<br />
          프로젝트 지속 가능성 확인
        </GreetingTop>

        {/* 회원가입 form */}
        <JoinForm
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            //  회원가입 로직 에러처리 추가로 되어야함
            join(joinEmail, joinPassword)
              .then((response: any) => {
                console.log(response);
                navigate("/login");
              })
              .catch((error: any) => console.log(error.message));
          }}
        >
          <UserInputContainer
            inputType={"이메일"}
            type={"email"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setJoinEmail(e.target.value);
            }}
          />
          <UserInputContainer
            inputType={"비밀번호"}
            type={"password"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setJoinPassword(e.target.value)
            }
          />
          {/* <UserInputContainer inputType={"비밀번호확인"} type={"password"} /> */}
          <MainButtonContainer>
            <MainButton buttonType={"생성하기"} />
          </MainButtonContainer>
        </JoinForm>
        {/* SNS 계정 로그인 */}
        {/* 중앙 분리선 */}
        <DividingPart>
          <DividingLine />
          <SnsLogin>SNS 계정으로 로그인</SnsLogin>
          <DividingLine />
        </DividingPart>
        {/* SNS 로그인 버튼  */}
        <SnsContainer>
          <SNSLoginButton>
            <img src={loginNaver} alt="naver" />
          </SNSLoginButton>
          <SNSLoginButton>
            <img src={loginKakao} alt="kakao" />
          </SNSLoginButton>
          <SNSLoginButton
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <img src={loginGoogle_logo} alt="g_logo" />
            <img src={loginGoogle_letter} alt="g_letter" className="g_letter" />
          </SNSLoginButton>
        </SnsContainer>
        {/* 가입했으면 로그인으로 */}
        <AskLogin>
          <span>이미 가입하셨나요?</span>
          <Link to="/login">로그인</Link>
        </AskLogin>
      </JoinUserInputPart>
      {/* 우측 이미지 부분 */}
      <RightImagePart>
        <img src={loginPageImage} alt="loginImage" />
      </RightImagePart>
    </JoinPageContainer>
  );
};

export default JoinPage;

const JoinPageContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  @media (max-height: 630px) {
    height: 630px;
  }
`;

const JoinUserInputPart = styled.div`
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

const GreetingTop = styled.span`
  display: block;
  margin-top: 69px;
  margin-bottom: 32px;
  width: 81%;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
  line-height: 35px;
  white-space: nowrap;
`;

const MainButtonContainer = styled.div`
  margin-top: 22px;
`;

// 회원가입 form
const JoinForm = styled.form``;

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
  margin-left: 6px;
  letter-spacing: -0.7px;
  padding-top: 5px;
`;

// SNS 로그인 부분
const SnsContainer = styled.div`
  width: 100%;
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
