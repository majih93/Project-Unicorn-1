import React from "react";
import { ReactDOM } from "react";
import styled from "styled-components";

const Bold = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 8px;
`;

const Span = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

const AboutLTV = () => {
  return (
    <>
      <Bold>
        <h3>고객생애가치( life time value,LTV )</h3>
      </Bold>
      <Span>
        고객생애가치란, 사용자당 서비스에 유입 이후 ~ 이탈 전까지 지출하는 평균
        비용을 의미하며 고객과의 관계를 좋게 만들고 이를 기업의 이익으로
        이어가는 것에 대한 중요한 지표입니다. LTV가 높다는 것은 고객이
        장기적으로 기업의 제품을 계속 선택하고 있다는 것이며, 기업이나 상품을
        평가해주는 기존 고객 기반이 탄탄하다는 것을 뜻하기도 합니다.
        <br />
        유니콘 판별기를 통해 기업은 사용자당 광고 단가를 설정할 수 있으며, 이를
        기준으로 해당 제품이 다른 경쟁 서비스에 비해 어느정도 위치에 있는지
        알아보세요!
      </Span>
      <br />
      <br />
      <br />
      <Bold>
        <h3>LTV가 중요한 이유</h3>
      </Bold>
      <Span>
        고객 획득 비용(Customer Acquisition Cost, CAC)은 신규 고객 한 사람을
        획득하는데 소요되는 비용을 의미하지만, 그 비용이 합당한 비용인지에
        대해서는 알 수가 없습니다. CAC가 합당한 비용인지는 고객 한 사람이 회사에
        기여하는 평생 이익인 LTV를 합리적으로 구할 수 있을 때 비로소 판단해 볼
        수 있습니다.
        <br />
        통상적으로 LTV가 CAC보다 높다면 건강한 모델로 해석할 수 있습니다. 반대로
        LTV가 CAC보다 낮다면, LTV를 증가시키거나 CAC를 낮추는 방식으로 사업
        방향을 수정해나가야 한다고 볼 수 있습니다.
      </Span>
    </>
  );
};

export default AboutLTV;
