// 이용약관 페이지

import { useEffect } from "react";
import styled from "styled-components";
import Logo2 from "../../assets/icons/logo2.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import checkCircle from "../../assets/icons/check_빈동그라미.svg";
import Term from "../../components/LtvCalculation/Term";
import TermAgreeButton from "../../components/LtvCalculation/TermAgreeButton";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Base = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background: #fafafa;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 130px;
  display: flex;
  box-sizing: border-box;
`;

const LogoContianer = styled.div`
  padding-top: 16px;
  padding-bottom: 21px;
  padding-right: 948px;
  box-sizing: border-box;
`;

const LogoutBtn = styled.button`
  width: 90px;
  height: 36px;
  border-radius: 6px;
  border: 2px solid #0420bf;
  margin-top: 9px;
  margin-bottom: 10px;
  font-family: "Spoqa Han Sans", "sans-serif";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #0420bf;
  background-color: #fafafa;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

const TermsContainer = styled.div`
  width: 1020px;
  height: 540px;
  // background: #ffffff;
  // background: slateblue;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-left: 210px;
  margin-top: 59px;
  display: flex;
  flex-direction: column;
`;

const TermTitle = styled.div`
  width: 575px;
  height: 20px;
  font-size: 24px;
  font-weight: 700;
  margin-left: 223px;
  margin-top: 60px;
  color: #07145a;
`;

const Terms = styled.div`
  width: 779px;
  margin-top: 15px;
  margin-left: 120px;
`;

const AllTerms = styled.div`
  width: 100%;
  height: 48px;
  background: #4b74f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  // justify-content: center;
  img {
    margin-left: 24px;
    // margin-top: 15px;
    &:hover {
      cursor: pointer;
    }
  }

  span {
    color: #ffffff;
    margin-left: 20px;
    font-size: 18px;
  }
`;

const CheckTermAgreement = () => {
  // 타이틀 변경 로직
  useDocumentTitle("이용약관 동의");

  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/term-agree");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Base>
      {/* 상단 헤더부분 */}
      <Header>
        <LogoContianer>
          <img src={Logo2} alt="logo" />
        </LogoContianer>
        <LogoutBtn
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          로그아웃
        </LogoutBtn>
      </Header>

      {/* 이용약관 내용 담는 컨테이너 */}
      <TermsContainer>
        <TermTitle>
          유니콘 판별기 이용을 위해 아래 약관에 동의하시겠습니까?
        </TermTitle>
        <Terms>
          <AllTerms>
            <img src={checkCircle} alt="check" />
            <span>전체 약관에 동의합니다.</span>
          </AllTerms>
          <Term />
        </Terms>
      </TermsContainer>
      <TermAgreeButton />
    </Base>
  );
};

export default CheckTermAgreement;
