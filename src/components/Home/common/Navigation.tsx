import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props: any) => {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");
  console.log(authToken);

  return (
    <Base>
      <Container>
        <Menu>WHY</Menu>
        <Menu>WHO</Menu>
        <Menu>HOW</Menu>
        {!authToken && (
          <JoinBtn onClick={() => navigate("/join")}>회원가입</JoinBtn>
        )}
      </Container>
    </Base>
  );
};

export default Navigation;

const Base = styled.div`
  width: 1440px;
  height: 72px;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 700;
`;

const JoinBtn = styled.div`
  width: 74px;
  height: 36px;
  border: 2.5px solid #0420bf;
  border-radius: 6px;
  color: #0420bf;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Spoqa Han Sans", sans-serif;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;
