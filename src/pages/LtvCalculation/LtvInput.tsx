import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/Logo.svg";
import LeftSection from "../../components/LtvCalculation/stepCommon/LeftSection";
import LtvStep2 from "../../components/LtvCalculation/step2/LtvStep2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/loginAuthentication/AuthContext";

const Base = styled.div`
  width: 1440px;
  height: 803px;
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
  width: 78px;
  height: 36px;
  border-radius: 6px;
  border: 2px solid #0420bf;
  margin-top: 9px;
  margin-bottom: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
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

const Main = styled.div`
  display: flex;
`;

const LtvInput = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);

    if (authToken) {
      navigate("/ltvCal/input");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Base>
      <Header>
        <LogoContianer>
          <img src={Logo} alt="logo" />
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
      <Main>
        <LeftSection />
        <LtvStep2 />
      </Main>
    </Base>
  );
};

export default LtvInput;
