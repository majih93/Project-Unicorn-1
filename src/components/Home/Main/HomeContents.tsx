import React from "react";
import { ReactDOM } from "react";
import imgHome from "../../../assets/images/Home_img.svg";
import styled from "styled-components";

const HomeContents = (props: any) => {
  return (
    <Base>
      <Container>
        <SpanA>당신의 유니콘은 어디쯤입니까?</SpanA>
        <SpanB>
          내 사업이 잘 되고 있는지 확인하고 싶다면, 유니콘 판별기를
          사용해보세요.
        </SpanB>
        <Btn>유니콘 판별기 사용하기</Btn>
        <SubInfo>
          <div>
            <SpanC1>53+million</SpanC1>
            <SpanC2>Company</SpanC2>
          </div>
          <div>
            <SpanC1>53+million</SpanC1>
            <SpanC2>Company</SpanC2>
          </div>
          <div>
            <SpanC1>53+million</SpanC1>
            <SpanC2>Company</SpanC2>
          </div>
        </SubInfo>
        <MainImg>
          <img src={imgHome} alt="Main" />
        </MainImg>
      </Container>
    </Base>
  );
};

const Base = styled.div`
  background: #4a73f3;
  width: 1440px;
  height: 670px;
  margin: 0 auto;
  position: relative;
`;

const Container = styled.div`
  /* background: pink; */
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const SpanA = styled.div`
  color: #fff;
  width: 580px;
  line-height: 59.2px;
  font-size: 40px;
  font-weight: 700;
  position: absolute;
  top: 158px;
`;
const SpanB = styled.div`
  color: #fff;
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  line-height: 26.64px;
  top: 217px;
`;

const Btn = styled.div`
  background: #fff;
  color: #4a73f3;
  width: 360px;
  top: 281px;
  display: block;
  position: relative;
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 700;
  position: relative;
`;

const MainImg = styled.div`
  position: absolute;
  left: 51.5%;
  top: 0;
`;

const SubInfo = styled.div`
  /* background: red; */
  top: 533px;
  width: 518px;
  position: absolute;
  justify-content: space-between;
  display: flex;
  /* display: block; */
`;

const SpanC1 = styled.div`
  color: #fff;
  font-weight: 300;
  line-height: 29.6px;
  font-size: 24px;
`;

const SpanC2 = styled.div`
  color: #fff;
  font-weight: 300;
  line-height: 29.6px;
  font-size: 20px;
`;

export default HomeContents;
