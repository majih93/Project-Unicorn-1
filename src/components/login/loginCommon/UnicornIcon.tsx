// 유니콘 메인 아이콘 재활용 가능한 컴포넌트

import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/icons/Logo.svg";

const UnicornIconContainer = styled.div`
  width: 100%;
  // height: 18px;
`;

const UnicornIcon = () => {
  return (
    <UnicornIconContainer>
      <img src={Logo} alt="Logo" />
    </UnicornIconContainer>
  );
};

export default UnicornIcon;
