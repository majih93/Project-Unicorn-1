import styled from "styled-components";

interface IProps {
  inputType: string;
  type: string;
  onChange?: any;
}

const UserInputContainer = ({ inputType, type, onChange }: IProps) => {
  return (
    <InputContainer
      placeholder={inputType}
      type={type}
      onChange={onChange}
    ></InputContainer>
  );
};

export default UserInputContainer;

const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 65px;
  font-size: 18px;
  border: 2px solid #f5f5f5;
  border-left: 3px solid #4a73f3;
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  color: #4a73f3;
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #999999;
    font-family: "Spoqa Han Sans", sans-serif;
  }
  :-ms-input-placeholder {
    color: #999999;
  }
`;
