import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { LeftSectionDisplay } from "../../../types";

import Step1 from "../../../assets/images/step1.png";
import Step2 from "../../../assets/images/step2.png";
import Step3 from "../../../assets/images/step3.png";
import StepComplete from "../../../assets/icons/stepComplete.png";

type displayProps = {
  display: LeftSectionDisplay;
};

function LeftSectionItem({ display }: displayProps) {
  const location = useLocation();

  const stepImage = [Step1, Step2, Step3];

  const setColor = () => {
    switch (location.pathname) {
      case "/ltvCal/input":
        return display.step === "1" || display.step === "2"
          ? "#0420BF"
          : "#C0C0C0";
      case "/ltvCal/result":
        return "#0420BF";
      default:
        return display.step === "1" ? "#0420BF" : "#C0C0C0";
    }
  };

  return (
    <>
      <Step key={display.step}>
        <StepLogo color={setColor()}>
          {display.done ? (
            <img
              src={StepComplete}
              alt={`step${display.step}`}
              style={{ top: "0", left: "0" }}
            />
          ) : (
            <img
              src={stepImage[parseInt(display.step) - 1]}
              alt={`step${display.step}`}
            />
          )}
        </StepLogo>
        <StepTitle>
          <StepText>STEP{display.step}</StepText>
          <StepDesc>{display.title}</StepDesc>
        </StepTitle>
      </Step>
      {display.step === "3" ? null : <Line />}
    </>
  );
}

export default LeftSectionItem;

const Step = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
`;

const StepLogo = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

const StepTitle = styled.div`
  margin-left: 8px;
  > * {
    display: block;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }
`;

const StepText = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #000000;
`;

const StepDesc = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const Line = styled.div`
  margin: 20px 20px;
  width: 1px;
  height: 85px;
  border-left: 1px solid #c0c0c0;
`;
