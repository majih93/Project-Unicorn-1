import React from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/Logo.svg";

const UnicornIconContainer = styled.div`
  width: 160px;
  height: 18px;
`;

const UnicornIcon = () => {
  return (
    <UnicornIconContainer>
      <img src={Logo} alt="Logo" />
    </UnicornIconContainer>
  );
};

export default UnicornIcon;
