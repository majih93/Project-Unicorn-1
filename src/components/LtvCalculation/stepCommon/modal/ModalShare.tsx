import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Button = styled.button`
  border: none;
  &:active {
    opacity: 0.8;
  }
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
  margin-top: 15px;
  margin-left: 15px;
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
  margin-top: 15px;
  margin-left: 40px;
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

  return (
    <>
      <Button onClick={handleOpen}>
        <img
          src={require("../../../../assets/icons/shareBtn.svg")}
          alt="Share"
        />
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose} selector="1266px">
        <ModalBody>
          <ShareTitle>이 결과를 공유합니다</ShareTitle>
          <FlexContainer>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Google.svg")}
                  alt="Google"
                />
              </div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Google_text.svg")}
                  alt="Google"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Kakao.svg")}
                  alt="Kakao"
                />
              </div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Kakao_text.svg")}
                  alt="Kakao"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Line.svg")}
                  alt="Line"
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img
                  src={require("../../../../assets/icons/Share_Line_text.svg")}
                  alt="Line"
                />
              </div>
            </div>
          </FlexContainer>
          <FlexContainer>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Facebook.svg")}
                  alt="Facebook"
                />
              </div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Facebook_text.svg")}
                  alt="Facebook"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Twitter.svg")}
                  alt="Twitter"
                />
              </div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_Twitter_text.svg")}
                  alt="Twitter"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={require("../../../../assets/icons/Share_URL.svg")}
                  alt="URL"
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <img
                  src={require("../../../../assets/icons/Share_URL_text.svg")}
                  alt="URL"
                />
              </div>
            </div>
          </FlexContainer>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalShare;
