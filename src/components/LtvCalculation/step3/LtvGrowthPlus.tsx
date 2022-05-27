import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import GrowthBarChart from "./chart/GrowthBarChart";
import { userInputState } from "../../../store/inputAtom";

import ContactUs from "../stepCommon/modal/ContactUs";

const LtvChart: React.FC = () => {
  const inputData = useRecoilState(userInputState);

  return (
    <Container>
      <ChartTitle>Product Growth Result</ChartTitle>
      <GrowthContainer>
        <DescriptionContianer>
          <GrowthTitle>
            {`현재 ${inputData[0].service_name}의 성장 모델은 CAC < LTV * ARPU 입니다.`}
          </GrowthTitle>
          <div style={{ marginTop: "31px" }} />
          <GrowthTitle>사용자를 1000명 늘렸을 경우, 매출은</GrowthTitle>
          <GrowthDescription>{`1,000,000,000￦`}</GrowthDescription>
          <GrowthTitle>증가합니다.</GrowthTitle>
        </DescriptionContianer>
        <ChartContiner>
          <GrowthBarChart />
        </ChartContiner>
        <Line />
      </GrowthContainer>
      <ContactUs />
    </Container>
  );
};

export default LtvChart;

const Container = styled.div`
  position: relative;
  width: 982px;
  height: 502px;
  background: #f5f5f5;
  border-radius: 0px 0px 8px 8px;
`;

const ChartTitle = styled.span`
  display: block;
  width: 250px;
  height: 27px;
  padding-top: 35px;
  padding-left: 24px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #424242;
  box-sizing: border-box;
`;

const GrowthContainer = styled.div`
  position: relative;
  display: flex;
  margin: 35px auto;
  width: 940px;
  height: 291px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
`;

const GrowthTitle = styled.span`
  display: block;
  width: 400px;
  padding-left: 20px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  box-sizing: border-box;
`;

const GrowthDescription = styled.span`
  display: block;
  width: 400px;
  padding-left: 20px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #0420bf;
  box-sizing: border-box;
`;

const DescriptionContianer = styled.div`
  width: 410px;
  height: 291px;
  padding-top: 27px;
  color: #f3694c;
  box-sizing: border-box;
  box-sizing: border-box;
`;

const ChartContiner = styled.div`
  width: 530px;
  height: 291px;
  padding-left: 20px;
`;
const Line = styled.div`
  position: absolute;
  height: 251px;
  width: 1px;
  left: 410px;
  top: 20px;
  border-left: 2px solid #f5f5f5;
`;
