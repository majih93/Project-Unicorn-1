import { useState } from "react";
import styled from "styled-components";

import checkCircle from "../../assets/icons/check_빈동그라미.svg";
import checked from "../../assets/icons/check_항목.svg";
import showArrow from "../../assets/icons/showArrow.svg";

const Term = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const agreedClickHandler = () => {
    isAgreed ? setIsAgreed(false) : setIsAgreed(true);
  };

  const clickShowDetail = () => {
    showDetail ? setShowDetail(false) : setShowDetail(true);
  };

  return (
    <TermContainer>
      <TitlePart>
        <CheckTerm>
          <img
            src={isAgreed ? checked : checkCircle}
            alt="check"
            onClick={agreedClickHandler}
          />
        </CheckTerm>
        <ShowMust isAgreed={isAgreed}>(필수)</ShowMust>
        <TermTitle>개인정보 수집, 이용, 제공 동의서</TermTitle>
        <ShowArrow showDetail={showDetail}>
          <img src={showArrow} alt="showArrow" onClick={clickShowDetail} />
        </ShowArrow>
      </TitlePart>
      <TermDetailContainer showDetail={showDetail}>
        본인은 귀사에 이력서를 제출함에 따라 [개인정보 보호법] 제 15조 및 제
        17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데
        동의합니다.
      </TermDetailContainer>
    </TermContainer>
  );
};

export default Term;

const TermContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c0c0c0;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const TitlePart = styled.div`
  width: 100%;
  display: flex;
`;

const CheckTerm = styled.div`
  img {
    margin-left: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ShowMust = styled.span<{ isAgreed: boolean }>`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 400;

  ${({ isAgreed }) => {
    if (isAgreed) {
      return "color:#f3694c";
    }
    return "color: #999999";
  }}
`;

const TermTitle = styled.span`
  margin-left: 9px;
  font-size: 18px;
  font-weight: 400;
  color: #07145a;
`;

const TermDetailContainer = styled.div<{ showDetail: boolean }>`
  width: 615px;
  margin-top: 10px;
  margin-left: 120px;
  font-size: 14px;
  font-weight: 400;
  color: #07145a;
  line-height: 20px;
  ${({ showDetail }) => {
    if (!showDetail) {
      return "display: none";
    }
  }}
`;

const ShowArrow = styled.div<{ showDetail: boolean }>`
  width: 14px;
  margin-left: auto;
  padding-right: 29px;
  img {
    transition: all ease 1s;
  }

  ${({ showDetail }) => {
    if (showDetail) {
      return "img {transform: rotateX(180deg);}";
    }
  }}
`;
