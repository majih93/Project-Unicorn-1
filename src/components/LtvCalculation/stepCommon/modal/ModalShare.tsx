import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Share from "../../../../assets/icons/shareBtn.svg";
import Google from "../../../../assets/icons/Share_Google.svg";
import Google_T from "../../../../assets/icons/Share_Google_text.svg";
import Kakao from "../../../../assets/icons/Share_Kakao.svg";
import Kakao_T from "../../../../assets/icons/Share_Kakao_text.svg";
import Line from "../../../../assets/icons/Share_Line.svg";
import Line_T from "../../../../assets/icons/Share_Line_text.svg";
import Facebook from "../../../../assets/icons/Share_Facebook.svg";
import Facebook_T from "../../../../assets/icons/Share_Facebook_text.svg";
import Twitter from "../../../../assets/icons/Share_Twitter.svg";
import Twitter_T from "../../../../assets/icons/Share_Twitter_text.svg";
import URL from "../../../../assets/icons/Share_URL.svg";
import URL_T from "../../../../assets/icons/Share_URL_text.svg";

const Button = styled.button`
  border: none;
  &:active {
    opacity: 0.8;
  }
  background: #fafafa;
`;

const ShareContainer = styled.div`
  cursor: pointer;
`;

const ModalBody = styled.div`
  position: fixed;
  height: 194px;
  width: 276px;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

const ShareTitle = styled.div`
  width: 236px;
  height: 21px;
  margin: 15px auto;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 200px;
  margin: 15px auto;
  justify-content: space-between;
`;

const ModalShare = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=https://naver.com/"
    );
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={Share} alt="Share" />
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} selector="1266px">
        <ModalBody>
          <ShareTitle>이 결과를 공유합니다</ShareTitle>
          <FlexContainer>
            <div>
              <div>
                <img src={Google} alt="Google" />
              </div>
              <div>
                <img src={Google_T} alt="Google" />
              </div>
            </div>
            <div>
              <div>
                <img src={Kakao} alt="Kakao" />
              </div>
              <div>
                <img src={Kakao_T} alt="Kakao" />
              </div>
            </div>
            <div>
              <div>
                <img src={Line} alt="Line" />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img src={Line_T} alt="Line" />
              </div>
            </div>
          </FlexContainer>
          <FlexContainer>
            <ShareContainer onClick={clickFacebook}>
              <div>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div>
                <img src={Facebook_T} alt="Facebook" />
              </div>
            </ShareContainer>
            <div>
              <div>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div>
                <img src={Twitter_T} alt="Twitter" />
              </div>
            </div>
            <div>
              <div>
                <img src={URL} alt="URL" />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img src={URL_T} alt="URL" />
              </div>
            </div>
          </FlexContainer>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalShare;
