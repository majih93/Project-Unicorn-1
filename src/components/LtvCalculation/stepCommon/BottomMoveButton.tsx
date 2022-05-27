import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { LeftSectionDisplay } from "../../../types";
import {
  isShowError,
  isFileError,
  userInputState,
} from "../../../store/inputAtom";
import { StepBtnState } from "../../../store/StepBtnAtom";
import { useFirestore } from "../../../context/firestore/FirestoreContext";
import { useAuth } from "../../../context/loginAuthentication/AuthContext";

type displayProps = {
  display: LeftSectionDisplay;
};
// props로 display 값을 전달받는다..

function BottomMoveButton({ display }: displayProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // step2 에서 유저가 입력하는 값 저장되는 변수
  const inputData = useRecoilState(userInputState);

  const [stepBtn, setStepBtn] = useRecoilState(StepBtnState);
  const [errorStep1, setErrorStep1] = useRecoilState(isFileError);
  const [errorStep2, setErrorStep2] = useRecoilState(isShowError);

  const { userEmail } = useAuth();

  const { createUserInputData } = useFirestore();
  const { createUserCalculationInfo } = useFirestore();

  const setColor = () => {
    if (display.step === "1" && stepBtn[0].done) {
      return "#0420BF";
    } else if (display.step === "2" && stepBtn[1].done) {
      return "#0420BF";
    } else return "#999999";
  };

  const previous = () => {
    navigate(-1);
    if (location.pathname === "/ltvCal") {
      console.log("협업하는 사람과 연결된 페이지로 가세요");
    }
  };

  const handleClick = () => {
    console.log("clicked");
    if (display.step === "1" && stepBtn[0].done) {
      createUserInputData(userEmail, 2, 2);
      navigate("/ltvCal/input");
    } else if (display.step === "1" && !stepBtn[0].done) {
      setErrorStep1(true);
    } else if (display.step === "2" && stepBtn[1].done) {
      setErrorStep2(false);
      console.log({ ...inputData });
      createUserCalculationInfo();
      navigate("/ltvCal/result");
    } else setErrorStep2(true);
  };

  return (
    <div>
      <ButtonField>
        <PrevButton onClick={previous}>
          <span>이전</span>
        </PrevButton>
        <NextButton onClick={handleClick} color={setColor()}>
          {display.step === "2" ? <span>결과 보기</span> : <span>다음</span>}
        </NextButton>
      </ButtonField>
    </div>
  );
}

export default BottomMoveButton;

const ButtonField = styled.div`
  display: flex;
  width: 400px;
  margin: 40px auto;
  justify-content: space-between;
`;

const PrevButton = styled.button`
  width: 190px;
  height: 44px;
  background: #fafafa;
  border: 1px solid #0420bf;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  > span {
    width: 30px;
    height: 24px;
    font-family: "Spoqa Han Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #0420bf;
  }
`;

const NextButton = styled.button`
  width: 190px;
  height: 44px;
  background: #999999;
  background-color: ${(props) => props.color};
  border: 1px solid #0420bf;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  > span {
    width: 30px;
    height: 24px;
    font-family: "Spoqa Han Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;
