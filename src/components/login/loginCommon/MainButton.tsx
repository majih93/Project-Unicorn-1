// 로그인, 회원가입 등 핵심적인 기능 구현하느 버튼

import React from "react";
import styled from "styled-components";

interface buttonType {
  buttonType: string;
}

const Button = styled.button`
  width: 100%;
  height: 44px;
  background: #4a73f3;
  color: white;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const MainButton = ({ buttonType }: buttonType) => {
  return <Button>{buttonType}</Button>;
};

export default MainButton;
