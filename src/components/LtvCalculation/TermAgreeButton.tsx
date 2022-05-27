import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TermAgreeButton = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <GoBackButton onClick={() => navigate("/")}>사용 안할래요</GoBackButton>
      <UseCalButton onClick={() => navigate("/ltvCal")}>
        사용 할래요
      </UseCalButton>
    </ButtonContainer>
  );
};

export default TermAgreeButton;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const GoBackButton = styled.button`
  width: 190px;
  height: 44px;
  background: #fafafa;
  border: 1px solid #0420bf;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0420bf;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const UseCalButton = styled.button`
  width: 190px;
  height: 44px;
  background: #0420bf;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
