import React from "react";
import styled from "styled-components";

import ContactUs from "../stepCommon/modal/ContactUs";

const LtvInsight: React.FC = () => {
  return (
    <Container>
      <InsightTitle>LTV Insight</InsightTitle>
      <InsightContainer>
        <DescriptionTitle>서비스 지속조건</DescriptionTitle>
        <Description>
          사용자 1명을 500원 미만으로 모집해야 이 프로젝트를 지속할 수 있습니다.
          <br />
          해당 서비스를 지속 운영하여 사용자 10만 명 모집시,
          <span>연 순수익/매출은 150,000,000원</span>입니다.
        </Description>
      </InsightContainer>
      <InsightContainer>
        <DescriptionTitle>회원 수 증가조건</DescriptionTitle>
        <Description>
          계산된 LTV에 따라 회원 수를 늘리려면 10일 동안{" "}
          <span>
            5,000원의 홍보비를 사용하여
            <br />
            100,000,000명
          </span>
          의 사용자를 지속적으로 유입시켜야 합니다.
        </Description>
      </InsightContainer>
      <InsightContainer>
        <DescriptionTitle>회원수 유지조건</DescriptionTitle>
        <Description>
          계산된 LTV에 따라 회원 수를 늘리려면 10일 동안{" "}
          <span>5,000원의 홍보비</span>를 사용하여
          <br />
          <span>100,000,000명의 사용자</span>를 지속적으로 유입시켜야 합니다.
        </Description>
      </InsightContainer>
      <ContactUs />
    </Container>
  );
};

export default LtvInsight;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InsightTitle = styled.span`
  margin-left: 20px;
  width: 107px;
  height: 30px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #424242;
`;

const InsightContainer = styled.div`
  margin: 10px auto;
  width: 940px;
  height: 119px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #424242;
`;

const DescriptionTitle = styled.span`
  display: block;
  margin-top: 17px;
  margin-left: 20px;
  margin-bottom: 25px;
  padding-top: 17px;
  width: 140px;
  height: 27px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #f3694c;
  box-sizing: border-box;
`;

const Description = styled.span`
  display: block;
  margin-top: 6px;
  margin-left: 20px;
  width: 896px;
  height: 43px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  span {
    color: #4a73f3;
  }
`;
