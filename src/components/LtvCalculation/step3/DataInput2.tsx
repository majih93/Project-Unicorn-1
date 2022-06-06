import { useRecoilState } from "recoil";
import styled from "styled-components";

import { resultInputState } from "../../../store/inputAtom";

const DataInput: React.FC<{ id: string }> = ({ id }) => {
  const [userInput, setUserInput] = useRecoilState(resultInputState);

  let placeholderT = "";

  if (id === "arpu") placeholderT = "0원";
  else if (id === "cac") placeholderT = "0원";
  else placeholderT = "0명";

  const onChange = (e: any) => {
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
  };

  return (
    <form>
      <Input type="text" onChange={onChange} placeholder={placeholderT} />
    </form>
  );
};

export default DataInput;

const Input = styled.input`
  width: 220px;
  height: 44px;
  margin-right: 20px;
  padding-left: 10px;
  font-family: "Spoqa Han Sans", "sans-serif";
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #7e84a8;
  border: none;
  background: #fafafa;
  border-radius: 6px;
  border-bottom: 1px solid #c0c0c0;
  opacity: 1;
  &::placeholder {
    padding-left: 10px;
    font-family: "Spoqa Han Sans", "sans-serif";
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    color: #0420bf;
    opacity: 0.4;
  }
`;
