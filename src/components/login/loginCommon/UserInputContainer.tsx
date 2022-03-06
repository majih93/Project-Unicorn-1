// 입력칸 format

import React from "react";
import styled from "styled-components";

interface inputProps {
  inputType: string;
}

// 입력 칸 전체
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 65px;
  border: 2px solid #f5f5f5;
  border-left: 3px solid #4a73f3;
  margin-top: 16px;
`;

// 입력 칸 안내 문구(이메일, 비밀번호)
const InputPlaceholder = styled.span`
  display: block;
  width: 358px;
  height: 18px;
  margin-top: 11px;
  margin-left: 20px;
`;

// 유저가 실제로 입력하는 칸
const UserInput = styled.input`
  border: none;
  margin-top: 5px;
  margin-left: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #4a73f3;
  }
  :-ms-input-placeholder {
    color: #4a73f3;
  }
  &:focus {
    outline: none;
  }
  letter-spacing: 0.5px;
`;

const UserInputContainer = ({ inputType }: inputProps) => {
  return (
    <InputContainer>
      <InputPlaceholder>{inputType}</InputPlaceholder>
      <UserInput placeholder="abcd@abcd.com" />
    </InputContainer>
  );
};

export default UserInputContainer;

// 각 input 별로 약간 다르게 작동해야되는데 이거를 어떻게 관리해야되지
