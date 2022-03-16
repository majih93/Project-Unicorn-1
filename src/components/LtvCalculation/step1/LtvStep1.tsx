import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import FileDescription from "./FileDescription";
import FileUpload from "./FileUpload";
import BottomMoveButton from "../stepCommon/BottomMoveButton";
import { StepBtnState } from "../../../store/StepBtnAtom";
import { useFirestore } from "../../../context/firestore/FirestoreContext";

const Container = styled.div`
  position: relative;
  width: 880px;
  height: 745px;
`;

const LocationButton = styled.div`
  position: absolute;
  top: 615px;
  left: 235px;
`;

const FileUploadContainer = styled.div`
  width: calc(880px-230px);
  height: 247px;
  margin-top: 55px;
  margin-left: 115px;
  margin-right: 115px;
`;

const LtvStep1: React.FC = () => {
  const displayState = useRecoilValue(StepBtnState);
  const display = displayState[0];
  const { setFileName } = useFirestore();

  // 이전에 세팅된 파일 이름이 있으면, 파일 이름 reset
  useEffect(() => {
    setFileName("");
  }, []);
  return (
    <Container>
      <FileUploadContainer>
        <FileUpload />
      </FileUploadContainer>
      <FileDescription />
      <LocationButton>
        <BottomMoveButton display={display} />
      </LocationButton>
    </Container>
  );
};

export default LtvStep1;
