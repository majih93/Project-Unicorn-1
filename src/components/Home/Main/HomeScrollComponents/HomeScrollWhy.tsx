import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ImgHome_1 from "../../../../assets/images/Home-Img-1.svg";
import ImgHome_2 from "../../../../assets/images/Home-Img-2.svg";
import ImgHome_3 from "../../../../assets/images/Home-Img-3.svg";
import ImgHome_4 from "../../../../assets/images/Home-Img-4.svg";
import IconHome_1 from "../../../../assets/icons/Icon-Home-1.svg";
import IconHome_2 from "../../../../assets/icons/Icon-Home-2.svg";
import IconHome_3 from "../../../../assets/icons/Icon-Home-3.svg";
import IconHome_4 from "../../../../assets/icons/Icon-Home-4.svg";
import IconBoxCheck from "../../../../assets/icons/Icon-BoxCheck.svg";

const Base = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 916px;
  margin: 0 auto;
  position: relative;
`;

const TextWrap = styled.div`
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  /* border: 1px solid black; */
`;

const SpanTitle = styled.span`
  top: 50px;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
  position: absolute;
`;

const SpanContent = styled.span`
  top: 83px;
  font-weight: 700;
  font-size: 25px;
  line-height: 55px;
  color: #4a73f3;
  position: absolute;
`;

const UnicornBtn = styled.div`
  position: absolute;
  left: 140px;
  background: #4a73f3;
  color: #fff;
  width: 360px;
  top: 281px;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 700;
  top: 152px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  top: 286px;
  left: 130px;
  width: 1180px;
  /* border: 1px solid black; */
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const ContentWrap = styled.div`
  /* border: 1px solid black; */
  display: inline-block;
  width: 270px;
  height: 440px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:nth-child(2n) {
    margin-top: 70px;
  }
`;

const Top = styled.div`
  border-radius: 10px;
  width: 270px;
  height: 280px;
  position: absolute;
  position: relative;
`;

const ImgTop = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

const ContentTitle = styled.span`
  position: absolute;
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  display: flex;
  align-items: center;
  color: #ffffff;
  top: 211px;
  left: 20px;
`;

const Bottom = styled.div`
  /* border: 1px solid black; */
  display: inline;
  /* margin-left: 44px; */
`;

const BottomContentContainer = styled.div`
  /* display: inline; */
  /* border: 1px solid black; */
  padding-top: 18px;
  padding-left: 20px;
`;

const ContentInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  /* float: initial; */
  left: 44px;
`;

function HomeScrollWhy() {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");

  return (
    <>
      <Base>
        <TextWrap>
          <SpanTitle>왜 유니콘 판별기를 사용해야 할까요?</SpanTitle>
          <SpanContent>
            내가 이들 중 한 명이라면! 누구나 사용할 수 있습니다!!
          </SpanContent>
        </TextWrap>
        <UnicornBtn
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              authToken ? navigate("/term-agree") : navigate("/login");
            }
          }}
        >
          유니콘 판별기 사용하기
        </UnicornBtn>
        <ContentContainer>
          <ContentWrap>
            <Top>
              <ContentTitle>명확한 설명</ContentTitle>
              <img
                src={IconHome_1}
                alt=""
                style={{ top: "149px", left: "20px", position: "absolute" }}
              />
              <img src={ImgHome_1} alt="" style={ImgTop} />
            </Top>
            <Bottom>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
            </Bottom>
          </ContentWrap>
          <ContentWrap>
            <Top>
              <ContentTitle>정확한 계산</ContentTitle>
              <img
                src={IconHome_2}
                alt=""
                style={{ top: "149px", left: "20px", position: "absolute" }}
              />
              <img src={ImgHome_2} alt="" style={ImgTop} />
            </Top>
            <Bottom>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
            </Bottom>
          </ContentWrap>
          <ContentWrap>
            <Top>
              <ContentTitle>인사이트 제공</ContentTitle>
              <img
                src={IconHome_3}
                alt=""
                style={{ top: "149px", left: "20px", position: "absolute" }}
              />
              <img src={ImgHome_3} alt="" style={ImgTop} />
            </Top>
            <Bottom>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
            </Bottom>
          </ContentWrap>
          <ContentWrap>
            <Top>
              <ContentTitle>편안한 디자인</ContentTitle>
              <img
                src={IconHome_4}
                alt=""
                style={{ top: "149px", left: "20px", position: "absolute" }}
              />
              <img src={ImgHome_4} alt="" style={ImgTop} />
            </Top>
            <Bottom>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
              <BottomContentContainer>
                <img src={IconBoxCheck} alt="" style={{ float: "left" }} />
                <ContentInfo>명확한 설명</ContentInfo>
              </BottomContentContainer>
            </Bottom>
          </ContentWrap>
        </ContentContainer>
      </Base>
    </>
  );
}

export default HomeScrollWhy;
