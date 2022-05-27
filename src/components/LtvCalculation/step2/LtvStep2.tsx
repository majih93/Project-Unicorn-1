import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  userInputState,
  isShowError,
  inputIsComplete,
  whichIsError,
} from "../../../store/inputAtom";
import { StepBtnState } from "../../../store/StepBtnAtom";
import { useAuth } from "../../../context/loginAuthentication/AuthContext";
import { useFirestore } from "../../../context/firestore/FirestoreContext";

import DataInput from "./forms/DataInput";
import CategorySelect from "./forms/CategorySelect";
import OsEnvButton from "./forms/OsEnvButton";
import ModalShow from "../stepCommon/modal/ModalShow";
import BottomMoveButton from "../stepCommon/BottomMoveButton";
import TopImage from "../../../assets/images/backgroundImg.svg";

const LtvStep2: React.FC = () => {
  const [userInput, setUserInput] = useRecoilState(userInputState);
  const [displayState, setDisplaySatete] = useRecoilState(StepBtnState);
  const errorCheck = useRecoilValue(isShowError);

  const errorList = useRecoilValue(whichIsError);

  const { userEmail } = useAuth();

  let errorCompare;
  errorList.map((error: any) => {
    if (error === "OS") {
      errorCompare = true;
    }
  });

  const inputComplete = useRecoilValue(inputIsComplete);
  // console.log(inputComplete);

  useEffect(() => {
    if (inputComplete) {
      setDisplaySatete(
        displayState?.map((display) => {
          if (display.step === "2") {
            return {
              ...display,
              done: true,
            };
          }
          return display;
        })
      );
    }
  }, [inputComplete, setDisplaySatete]);

  const { fileName } = useFirestore();
  console.log(fileName);

  return (
    <Container>
      <BackgroundImage>
        <img src={TopImage} alt="City landscape" />
      </BackgroundImage>
      <GridBox>
        <GridContainer>
          <Title>
            <span>이메일</span>
          </Title>
          <Title>
            <span>카테고리</span>
          </Title>
          <div>
            <EmailText>{userEmail}</EmailText>
          </div>
          <InputField>
            <CategorySelect />
          </InputField>
        </GridContainer>
        <div style={{ marginTop: "36px" }} />
        <GridContainer>
          <Title>
            <span>서비스명</span>
          </Title>
          <Title>
            <span>구동환경</span>
          </Title>
          <InputField>
            <DataInput id="service_name" />
          </InputField>
          {errorCheck && errorCompare ? (
            <div style={{ width: "272px" }}>
              <OsEnvButton />
              <div style={{ marginTop: "5px" }}>
                <img
                  src={require("../../../assets/images/errorWarning.png")}
                  alt="error warning"
                />
                <ErrorSpan>필수 입력 항목입니다.</ErrorSpan>
              </div>
            </div>
          ) : (
            <OsEnvButton />
          )}
        </GridContainer>
        <div style={{ marginTop: "36px" }} />
        <GridContainer>
          <Title>
            <span>서비스 URL</span>
          </Title>
          <Title>
            <span>
              최장유지일
              <ModalShow
                type="single"
                modalTitle1={"최장유지일(retention days)이란?"}
                descripton1={
                  "한번 유입된 고객이 자사의 고객으로 머무는 시간을 의미한다."
                }
                top={"220px"}
                left={"390px"}
              />
            </span>
          </Title>
          <InputField>
            <DataInput id="service_url" />
          </InputField>
          <InputField>
            <DataInput id="retentionDays" />
          </InputField>
        </GridContainer>
      </GridBox>
      <LocationButton>
        <BottomMoveButton display={displayState[1]} />
      </LocationButton>
    </Container>
  );
};

export default LtvStep2;

const Container = styled.div`
  position: relative;
  width: 880px;
  height: 745px;
`;

const BackgroundImage = styled.div`
  width: 681px;
  height: 185px;
  margin-top: 55px;
  margin-left: 100px;
`;

const GridBox = styled.div`
  width: 670px;
  height: 316px;
  margin-top: 41px;
  margin-left: 110px;
`;

const GridContainer = styled.div`
  display: grid;
  row-gap: 5px;
  column-gap: 100px;
  grid-template-columns: 285px 272px;
  grid-template-rows: 32px 54px;
`;

const Title = styled.div`
  span {
    display: inline;
    font-family: "Spoqa Han Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    vertical-align: sub;
    color: #000000;
  }
`;
const EmailText = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 280px;
  height: 54px;
  margin-bottom: 5px;
  border: none;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const InputField = styled.div`
  width: 272px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const ErrorSpan = styled.span`
  position: relative;
  top: 0px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #f3694c;
  margin-left: 5px;
`;

const LocationButton = styled.div`
  position: absolute;
  top: 615px;
  left: 235px;
`;
