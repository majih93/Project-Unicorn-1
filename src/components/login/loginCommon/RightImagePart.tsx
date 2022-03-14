import React from "react";
import styled from "styled-components";
import loginPageImage from "../assets/images/loginImage.svg";

interface imageSrc {
  imageSrc: string;
}

const RightImageContainer = styled.div`
  width: 810px;
  height: 820px;
`;

const RightImagePart = ({ imageSrc }: imageSrc) => {
  return (
    <RightImageContainer>
      <img src={imageSrc} alt="Image1" />
    </RightImageContainer>
  );
};

export default RightImagePart;
