import React, { useState } from "react";
import styled from "styled-components";
import GraphGaugeChart from "./chart/GraphGaugeChart";
import PointStyleChart from "./chart/PointStyleChart";
import LtvInsight from "./LtvInsight";
import ModalShow from "../stepCommon/modal/ModalShow";

const FlexContiner = styled.div`
  display: flex;
  padding: 35px 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const ChartTitle = styled.span`
  display: block;
  width: 124px;
  height: 27px;
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #424242;
`;
const GraphContainer = styled.div``;

const Graph = styled.div`
  width: 280px;
  height: 212px;
  padding-top: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
`;

const ChartContiner = styled.div``;

const LtvChart: React.FC = () => {
  return (
    <>
      <FlexContiner>
        <GraphContainer>
          <div style={{ display: "flex" }}>
            <ChartTitle>Unicorn Index</ChartTitle>
            <ModalShow
              type="double"
              modalTitle1={"Unicorn Index란?"}
              descripton1={
                "LTV (Lifetime value of ustomer):CAC(Customer acquisition cost)."
              }
              descripton2={
                "대부분의 VC에 따르면, 이 값은 4-5배입니다. 3배 정도는 괜찮지만 대부분의 기업은 고정 비용을 부담하고 있으며, 이 3배는 수 억 개의 수익을 창출할 때 1.5-2로 빠르게 압축됩니다. 이는 꽤 경험적인 규칙이기에 벤치마크로 사용 해주세요."
              }
              top={"-150px"}
              left={"-50px"}
            />
          </div>
          <Graph>
            <GraphGaugeChart />
          </Graph>
        </GraphContainer>
        <ChartContiner>
          <ChartTitle>LTV Result</ChartTitle>
          <PointStyleChart />
        </ChartContiner>
      </FlexContiner>
      <LtvInsight />
    </>
  );
};

export default LtvChart;
